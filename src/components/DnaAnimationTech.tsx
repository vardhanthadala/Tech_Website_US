"use client";

import React, { useEffect, useRef } from "react";

interface DnaAnimationTechProps {
  className?: string;
}

interface Particle {
  t: number;
  type: 0 | 1 | 2;
  rungIndex?: number;
  rungProgress?: number;
  
  offsetR: number;
  offsetAngle: number;
  offsetAxis: number;

  size: number;
  alpha: number;
  darkness: number;

  // Position offsets for mouse interaction displacement
  dispX: number;
  dispY: number;
  dispZ: number;
  vx: number;
  vy: number;
  vz: number;
}

export const DnaAnimationTech: React.FC<DnaAnimationTechProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    active: boolean;
  }>({
    x: -1000,
    y: -1000,
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      const m = mouseRef.current;
      if (m.active) {
        m.vx = newX - m.x;
        m.vy = newY - m.y;
      }
      m.x = newX;
      m.y = newY;
      m.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Build 38,000 Volumetric DNA Helix Particles
    const TOTAL_PARTICLES = 38000;
    const HELIX_LENGTH = 1650;
    const HELIX_RADIUS = 135;
    const NUM_TURNS = 5.2;
    const TOTAL_RUNGS = 28;

    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    const particles: Particle[] = [];

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const randType = Math.random();
      let type: 0 | 1 | 2 = 0;
      let rungIndex = 0;
      let rungProgress = 0;

      if (randType < 0.42) {
        type = 0;
      } else if (randType < 0.84) {
        type = 1;
      } else {
        type = 2;
        rungIndex = Math.floor(Math.random() * TOTAL_RUNGS);
        rungProgress = Math.random();
      }

      const t = Math.random() - 0.5;

      const offsetR = gaussianRandom() * 16;
      const offsetAngle = Math.random() * Math.PI * 2;
      const offsetAxis = gaussianRandom() * 10;

      const size = Math.random() < 0.85 ? Math.random() * 1.3 + 0.5 : Math.random() * 2.3 + 1.2;
      const alpha = Math.random() * 0.55 + 0.35;
      const darkness = Math.random();

      particles.push({
        t,
        type,
        rungIndex,
        rungProgress,
        offsetR,
        offsetAngle,
        offsetAxis,
        size,
        alpha,
        darkness,
        dispX: 0,
        dispY: 0,
        dispZ: 0,
        vx: 0,
        vy: 0,
        vz: 0,
      });
    }

    // Ambient floating dust particles
    const AMBIENT_COUNT = 1200;
    const ambientParticles = Array.from({ length: AMBIENT_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    // Mouse tilt tracking variables
    let currentTiltX = 0;
    let currentTiltY = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Clean warm off-white canvas background (#e4e4df)
      ctx.fillStyle = "#e4e4df";
      ctx.fillRect(0, 0, width, height);

      const m = mouseRef.current;
      
      // Decay mouse velocity gradually
      m.vx *= 0.85;
      m.vy *= 0.85;

      const centerX = width / 2;
      const centerY = height / 2;

      // Calculate mouse displacement relative to center
      const targetTiltX = m.active ? ((m.x - centerX) / width) * 0.6 : 0;
      const targetTiltY = m.active ? ((m.y - centerY) / height) * 0.6 : 0;

      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;

      const diagAngle = -0.46 + currentTiltY * 0.3;
      const cosDiag = Math.cos(diagAngle);
      const sinDiag = Math.sin(diagAngle);

      // FAST ROTATION: 0.024 radians per frame (~3.5x faster)
      rotationAngle += 0.024;

      // Draw ambient particles
      ctx.fillStyle = "#555550";
      ambientParticles.forEach((ap) => {
        ap.x += ap.speedX;
        ap.y += ap.speedY;

        if (ap.x < 0) ap.x = width;
        if (ap.x > width) ap.x = 0;
        if (ap.y < 0) ap.y = height;
        if (ap.y > height) ap.y = 0;

        ctx.globalAlpha = ap.alpha;
        ctx.beginPath();
        ctx.arc(ap.x, ap.y, ap.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const renderQueue: {
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        darkness: number;
      }[] = [];

      const fov = 900;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const axisPos = p.t * HELIX_LENGTH + p.offsetAxis;
        const currentHelixAngle = p.t * NUM_TURNS * Math.PI * 2 + rotationAngle;

        let localY = 0;
        let localZ = 0;

        if (p.type === 0) {
          const angle = currentHelixAngle;
          const r = HELIX_RADIUS + p.offsetR;
          localY = Math.cos(angle) * r;
          localZ = Math.sin(angle) * r;
        } else if (p.type === 1) {
          const angle = currentHelixAngle + Math.PI;
          const r = HELIX_RADIUS + p.offsetR;
          localY = Math.cos(angle) * r;
          localZ = Math.sin(angle) * r;
        } else {
          const rungFraction = (p.rungIndex! + 0.5) / TOTAL_RUNGS - 0.5;
          const rungAngle = rungFraction * NUM_TURNS * Math.PI * 2 + rotationAngle;

          const y1 = Math.cos(rungAngle) * HELIX_RADIUS;
          const z1 = Math.sin(rungAngle) * HELIX_RADIUS;
          const y2 = Math.cos(rungAngle + Math.PI) * HELIX_RADIUS;
          const z2 = Math.sin(rungAngle + Math.PI) * HELIX_RADIUS;

          const s = p.rungProgress!;
          localY = y1 + (y2 - y1) * s + Math.cos(p.offsetAngle) * (p.offsetR * 0.4);
          localZ = z1 + (z2 - z1) * s + Math.sin(p.offsetAngle) * (p.offsetR * 0.4);
        }

        // Apply mouse tilt transformation to helix local 3D points
        const rotY = localY * Math.cos(currentTiltX) - localZ * Math.sin(currentTiltX);
        const rotZ = localY * Math.sin(currentTiltX) + localZ * Math.cos(currentTiltX);

        // Project base 3D coordinates
        const baseX = centerX + axisPos * cosDiag - rotY * sinDiag;
        const baseY = centerY + axisPos * sinDiag + rotY * cosDiag;
        const baseZ = rotZ;

        // Current world position with particle displacement offset
        const curX = baseX + p.dispX;
        const curY = baseY + p.dispY;

        // Dynamic Interactive Mouse Repulsion & Movement Tracking Physics
        if (m.active) {
          const dx = curX - m.x;
          const dy = curY - m.y;
          const distSq = dx * dx + dy * dy;
          const hoverRadius = 180;

          if (distSq < hoverRadius * hoverRadius && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const factor = (1 - dist / hoverRadius);
            
            // Push force + mouse drag velocity transfer
            const pushForce = factor * 4.5;
            const mouseDragX = m.vx * factor * 0.4;
            const mouseDragY = m.vy * factor * 0.4;

            p.vx += (dx / dist) * pushForce + mouseDragX;
            p.vy += (dy / dist) * pushForce + mouseDragY;
            p.vz += (Math.random() - 0.5) * pushForce;
          }
        }

        // Apply velocities and spring-back recovery force toward base location
        p.dispX += p.vx;
        p.dispY += p.vy;
        p.dispZ += p.vz;

        // Spring stiffness and damping
        p.vx = p.vx * 0.88 - p.dispX * 0.08;
        p.vy = p.vy * 0.88 - p.dispY * 0.08;
        p.vz = p.vz * 0.88 - p.dispZ * 0.08;

        const finalScreenX = curX;
        const finalScreenY = curY;
        const finalScreenZ = baseZ + p.dispZ;

        // Perspective scale & depth attenuation
        const scale = fov / (fov + finalScreenZ);
        const depthRange = HELIX_RADIUS * 1.8;
        const normalizedZ = (finalScreenZ + depthRange) / (depthRange * 2);
        
        const depthAlpha = Math.max(0.12, Math.min(1.0, Math.pow(normalizedZ, 1.4)));
        const renderSize = p.size * scale;

        renderQueue.push({
          x: finalScreenX,
          y: finalScreenY,
          z: finalScreenZ,
          size: renderSize,
          alpha: p.alpha * depthAlpha,
          darkness: p.darkness * (0.4 + 0.6 * normalizedZ),
        });
      }

      // Depth sorting
      renderQueue.sort((a, b) => a.z - b.z);

      // Render micro-particles
      renderQueue.forEach((pt) => {
        const gray = Math.floor(12 + (1 - pt.darkness) * 75);
        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
        ctx.globalAlpha = pt.alpha;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#e4e4df] cursor-pointer ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DnaAnimationTech;
