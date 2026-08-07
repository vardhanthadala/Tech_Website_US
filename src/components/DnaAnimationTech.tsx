"use client";

import React, { useEffect, useRef } from "react";

interface DnaAnimationTechProps {
  className?: string;
}

interface Particle {
  t: number;
  strand: number;
  rungIdx?: number;
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseSize: number;
  baseAlpha: number;
  colorShade: number;
}

export const DnaAnimationTech: React.FC<DnaAnimationTechProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const particles: Particle[] = [];
    const TOTAL_PARTICLES = 14000;
    const NUM_TURNS = 4.5;
    const HELIX_LENGTH = 1400;
    const HELIX_RADIUS = 110;
    const NUM_RUNGS = 22;

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const randType = Math.random();
      let strand = 0;
      let rungIdx = 0;

      if (randType < 0.38) {
        strand = 0;
      } else if (randType < 0.76) {
        strand = 1;
      } else {
        strand = 2;
        rungIdx = Math.floor(Math.random() * NUM_RUNGS);
      }

      const t = (Math.random() - 0.5) * HELIX_LENGTH;

      const u1 = Math.random();
      const u2 = Math.random();
      const radiusOffset = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2) * 14;

      const offsetX = (Math.random() - 0.5) * 16 + radiusOffset;
      const offsetY = (Math.random() - 0.5) * 16;
      const offsetZ = (Math.random() - 0.5) * 16 + radiusOffset;

      const baseSize = Math.random() * 1.5 + 0.6;
      const baseAlpha = Math.random() * 0.6 + 0.35;
      const colorShade = Math.random();

      particles.push({
        t,
        strand,
        rungIdx,
        offsetX,
        offsetY,
        offsetZ,
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        baseSize,
        baseAlpha,
        colorShade,
      });
    }

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      ctx.fillStyle = "#e6e6e1";
      ctx.fillRect(0, 0, width, height);

      const centerScreenX = width / 2;
      const centerScreenY = height / 2;
      const diagonalAngle = -0.48;
      const cosDiag = Math.cos(diagonalAngle);
      const sinDiag = Math.sin(diagonalAngle);

      rotationAngle += 0.008;

      const mouse = mouseRef.current;

      const projectedParticles: {
        px: number;
        py: number;
        pz: number;
        size: number;
        alpha: number;
        shade: number;
      }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let rawX = 0;
        let rawY = 0;
        let rawZ = 0;

        const helixAngle = (p.t / HELIX_LENGTH) * (NUM_TURNS * Math.PI * 2) + rotationAngle;

        if (p.strand === 0) {
          rawX = p.t;
          rawY = Math.cos(helixAngle) * HELIX_RADIUS + p.offsetY;
          rawZ = Math.sin(helixAngle) * HELIX_RADIUS + p.offsetZ;
        } else if (p.strand === 1) {
          rawX = p.t;
          rawY = Math.cos(helixAngle + Math.PI) * HELIX_RADIUS + p.offsetY;
          rawZ = Math.sin(helixAngle + Math.PI) * HELIX_RADIUS + p.offsetZ;
        } else {
          const rungT = ((p.rungIdx! + 0.5) / NUM_RUNGS - 0.5) * HELIX_LENGTH;
          const rungAngle = (rungT / HELIX_LENGTH) * (NUM_TURNS * Math.PI * 2) + rotationAngle;
          const lerpPos = (Math.random() - 0.5) * 1.8;

          const y1 = Math.cos(rungAngle) * HELIX_RADIUS;
          const z1 = Math.sin(rungAngle) * HELIX_RADIUS;
          const y2 = Math.cos(rungAngle + Math.PI) * HELIX_RADIUS;
          const z2 = Math.sin(rungAngle + Math.PI) * HELIX_RADIUS;

          rawX = rungT + p.offsetX * 0.5;
          rawY = y1 + (y2 - y1) * (lerpPos * 0.5 + 0.5) + p.offsetY;
          rawZ = z1 + (z2 - z1) * (lerpPos * 0.5 + 0.5) + p.offsetZ;
        }

        const rotY = rawY * Math.cos(rotationAngle * 0.2) - rawZ * Math.sin(rotationAngle * 0.2);
        const rotZ = rawY * Math.sin(rotationAngle * 0.2) + rawZ * Math.cos(rotationAngle * 0.2);

        const screenX = centerScreenX + rawX * cosDiag - rotY * sinDiag;
        const screenY = centerScreenY + rawX * sinDiag + rotY * cosDiag;
        const screenZ = rotZ;

        let finalX = screenX + p.vx;
        let finalY = screenY + p.vy;

        if (mouse.active) {
          const dx = finalX - mouse.x;
          const dy = finalY - mouse.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 120;
          if (distSq < maxDist * maxDist && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist) * 3.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;

        const perspective = 800;
        const scale = perspective / (perspective + screenZ);
        const depthAlpha = Math.max(0.1, Math.min(1.0, (screenZ + HELIX_RADIUS * 1.8) / (HELIX_RADIUS * 3.6)));

        projectedParticles.push({
          px: finalX,
          py: finalY,
          pz: screenZ,
          size: p.baseSize * scale,
          alpha: p.baseAlpha * depthAlpha,
          shade: p.colorShade,
        });
      }

      projectedParticles.sort((a, b) => a.pz - b.pz);

      projectedParticles.forEach((pt) => {
        const grayValue = Math.floor(10 + pt.shade * 45);
        ctx.fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${pt.alpha})`;

        ctx.beginPath();
        ctx.arc(pt.px, pt.py, pt.size, 0, Math.PI * 2);
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
    <div className={`relative w-full h-screen overflow-hidden bg-[#e6e6e1] cursor-pointer ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DnaAnimationTech;
