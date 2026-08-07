"use client";

import React, { useEffect, useRef } from "react";

interface DnaAnimationTechProps {
  className?: string;
}

interface Particle {
  // Parametric coordinates
  t: number;             // Longitudinal position along helix (-0.5 to 0.5)
  type: 0 | 1 | 2;       // 0: Strand 1, 1: Strand 2, 2: Rung connection
  rungIndex?: number;    // Index of the rung bar
  rungProgress?: number; // 0 (strand1) to 1 (strand2)
  
  // Volumetric noise offsets (local to point)
  offsetR: number;       // Radial noise
  offsetAngle: number;   // Angular noise
  offsetAxis: number;    // Axial noise

  // Particle properties
  size: number;
  alpha: number;
  darkness: number;      // 0 = dark charcoal/black, 1 = mid gray

  // Interaction physics velocity
  vx: number;
  vy: number;
}

export const DnaAnimationTech: React.FC<DnaAnimationTechProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number; active: boolean }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;

    // Handle high DPI display
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      mouseRef.current.targetX = mouseX;
      mouseRef.current.targetY = mouseY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Build 40,000 Volumetric DNA Helix Particles
    const TOTAL_PARTICLES = 42000;
    const HELIX_LENGTH = 1600; // Longitudinal length along axis
    const HELIX_RADIUS = 135;  // Radius of the double helix
    const NUM_TURNS = 5.0;     // Number of turns
    const TOTAL_RUNGS = 26;    // Number of base pair rungs

    const particles: Particle[] = [];

    // Helper for Gaussian normal distribution noise
    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const randType = Math.random();
      let type: 0 | 1 | 2 = 0;
      let rungIndex = 0;
      let rungProgress = 0;

      if (randType < 0.42) {
        type = 0; // Strand 1 backbone cluster
      } else if (randType < 0.84) {
        type = 1; // Strand 2 backbone cluster
      } else {
        type = 2; // Rung bar connecting strand 1 & 2
        rungIndex = Math.floor(Math.random() * TOTAL_RUNGS);
        rungProgress = Math.random();
      }

      // Longitudinal position t along length (-0.5 to 0.5)
      const t = (Math.random() - 0.5);

      // Volumetric cloud noise
      const offsetR = gaussianRandom() * 18;       // Thick tube radius noise
      const offsetAngle = Math.random() * Math.PI * 2;
      const offsetAxis = gaussianRandom() * 12;     // Axial jitter

      // Particle visual attributes
      const size = Math.random() < 0.85 ? Math.random() * 1.2 + 0.5 : Math.random() * 2.2 + 1.2;
      const alpha = Math.random() * 0.55 + 0.35;
      const darkness = Math.random(); // 0 to 1

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
        vx: 0,
        vy: 0,
      });
    }

    // Ambient floating dust particles
    const AMBIENT_COUNT = 1500;
    const ambientParticles = Array.from({ length: AMBIENT_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
    }));

    // Main render loop
    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Warm off-white paper canvas background (#e4e4df)
      ctx.fillStyle = "#e4e4df";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse spring interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Diagonal alignment across viewport (-28 degrees)
      const centerX = width / 2;
      const centerY = height / 2;
      const diagAngle = -0.46; // ~ -26.3 degrees
      const cosDiag = Math.cos(diagAngle);
      const sinDiag = Math.sin(diagAngle);

      // Interactive mouse tilt offset
      const mouseTiltX = mouse.active ? ((mouse.x - centerX) / width) * 0.15 : 0;
      const mouseTiltY = mouse.active ? ((mouse.y - centerY) / height) * 0.15 : 0;

      rotationAngle += 0.007;

      // Draw ambient dust particles
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

      // Storage for depth sorting
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

        // 3D coordinates along helix longitudinal axis (X axis)
        const axisPos = p.t * HELIX_LENGTH + p.offsetAxis;
        const currentHelixAngle = p.t * NUM_TURNS * Math.PI * 2 + rotationAngle;

        let localY = 0;
        let localZ = 0;

        if (p.type === 0) {
          // Strand 1 Backbone Tube
          const angle = currentHelixAngle;
          const r = HELIX_RADIUS + p.offsetR;
          localY = Math.cos(angle) * r;
          localZ = Math.sin(angle) * r;
        } else if (p.type === 1) {
          // Strand 2 Backbone Tube (180 deg offset)
          const angle = currentHelixAngle + Math.PI;
          const r = HELIX_RADIUS + p.offsetR;
          localY = Math.cos(angle) * r;
          localZ = Math.sin(angle) * r;
        } else {
          // Rung Ladder Bar connecting Strand 1 & 2
          const rungFraction = (p.rungIndex! + 0.5) / TOTAL_RUNGS - 0.5;
          const rungAngle = rungFraction * NUM_TURNS * Math.PI * 2 + rotationAngle;
          const rungAxisPos = rungFraction * HELIX_LENGTH;

          const y1 = Math.cos(rungAngle) * HELIX_RADIUS;
          const z1 = Math.sin(rungAngle) * HELIX_RADIUS;
          const y2 = Math.cos(rungAngle + Math.PI) * HELIX_RADIUS;
          const z2 = Math.sin(rungAngle + Math.PI) * HELIX_RADIUS;

          // Interpolate position along rung bar
          const s = p.rungProgress!;
          localY = y1 + (y2 - y1) * s + Math.cos(p.offsetAngle) * (p.offsetR * 0.4);
          localZ = z1 + (z2 - z1) * s + Math.sin(p.offsetAngle) * (p.offsetR * 0.4);
        }

        // Apply mouse tilt 3D rotation
        const rotY = localY * Math.cos(mouseTiltY) - localZ * Math.sin(mouseTiltY);
        const rotZ = localY * Math.sin(mouseTiltY) + localZ * Math.cos(mouseTiltY);

        // Project onto 2D screen coordinates with diagonal orientation
        const projectedX = centerX + axisPos * cosDiag - rotY * sinDiag;
        const projectedY = centerY + axisPos * sinDiag + rotY * cosDiag;
        const projectedZ = rotZ + mouseTiltX * axisPos;

        // Apply interactive mouse force field
        let screenX = projectedX + p.vx;
        let screenY = projectedY + p.vy;

        if (mouse.active) {
          const dx = screenX - mouse.x;
          const dy = screenY - mouse.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 140;

          if (distSq < maxDist * maxDist && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist) * 3.8;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Damping velocity recovery
        p.vx *= 0.91;
        p.vy *= 0.91;

        // Depth perspective scale & depth of field opacity
        const scale = fov / (fov + projectedZ);
        const depthRange = HELIX_RADIUS * 1.8;
        const normalizedZ = (projectedZ + depthRange) / (depthRange * 2); // 0 (back) to 1 (front)
        
        // Depth-based visual attenuation
        const depthAlpha = Math.max(0.12, Math.min(1.0, Math.pow(normalizedZ, 1.4)));
        const renderSize = p.size * scale;

        renderQueue.push({
          x: screenX,
          y: screenY,
          z: projectedZ,
          size: renderSize,
          alpha: p.alpha * depthAlpha,
          darkness: p.darkness * (0.4 + 0.6 * normalizedZ),
        });
      }

      // Sort by Z index ascending (render furthest particles first)
      renderQueue.sort((a, b) => a.z - b.z);

      // Render dense micro-dust swarm
      renderQueue.forEach((pt) => {
        // Shading: front particles are rich charcoal black (#0c0c0c), back particles are lighter gray (#666660)
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
    <div className={`relative w-full h-screen overflow-hidden bg-[#e4e4df] cursor-crosshair ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DnaAnimationTech;
