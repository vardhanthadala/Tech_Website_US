"use client";

import React, { useEffect, useRef } from "react";

export const LiquidSphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // High-resolution Smooth 3D Sphere Grid Vertices (LATITUDE x LONGITUDE)
    const LATS = 85;
    const LONGS = 170;
    const RADIUS = 165;

    // Continuous 3D Fluid Harmonic Distortion Generator
    const getRadiusDisplacement = (
      theta: number,
      phi: number,
      t: number,
      mFactor: number
    ) => {
      const wave1 = Math.sin(theta * 3 + t * 1.4 + phi * 2) * 16;
      const wave2 = Math.cos(phi * 4 - t * 1.1 + theta * 3) * 14;
      const wave3 = Math.sin(theta * 5 + phi * 6 + t * 2.2) * 8;
      const wave4 = Math.cos(theta * 2 - phi * 3 + t * 0.9) * 10;
      
      const mouseRipple = mFactor * Math.sin(t * 3 + phi * 4 + theta * 2) * 15;

      return RADIUS + wave1 + wave2 + wave3 + wave4 + mouseRipple;
    };

    let tiltX = 0;
    let tiltY = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      time += 0.015;

      const mouse = mouseRef.current;
      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth mouse spring tilt
      const targetTiltX = mouse.active ? ((mouse.x - centerX) / width) * 0.35 : 0;
      const targetTiltY = mouse.active ? ((mouse.y - centerY) / height) * 0.35 : 0;
      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      const rotY = time * 0.35 + tiltX;
      const rotX = Math.sin(time * 0.25) * 0.15 + tiltY;

      // Storage for smooth 3D projected surface quads
      const quads: {
        pts: [
          { x: number; y: number },
          { x: number; y: number },
          { x: number; y: number },
          { x: number; y: number }
        ];
        avgZ: number;
        nx: number;
        ny: number;
        nz: number;
        u: number;
        v: number;
      }[] = [];

      const fov = 850;

      // Calculate grid point coordinates
      const get3DPoint = (i: number, j: number) => {
        const phi = (i / LATS) * Math.PI;
        const theta = (j / LONGS) * 2 * Math.PI;

        const mFactor = mouse.active ? 1 : 0;
        const r = getRadiusDisplacement(theta, phi, time, mFactor);

        // Spherical coordinates
        const x0 = r * Math.sin(phi) * Math.cos(theta);
        const y0 = r * Math.cos(phi);
        const z0 = r * Math.sin(phi) * Math.sin(theta);

        // Rotate Y
        const x1 = x0 * Math.cos(rotY) - z0 * Math.sin(rotY);
        const z1 = x0 * Math.sin(rotY) + z0 * Math.cos(rotY);

        // Rotate X
        const y2 = y0 * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = y0 * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Perspective projection
        const scale = fov / (fov + z2);

        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          pz: z2,
          rawX: x1,
          rawY: y2,
          rawZ: z2,
          r,
        };
      };

      for (let i = 0; i < LATS; i++) {
        for (let j = 0; j < LONGS; j++) {
          const p1 = get3DPoint(i, j);
          const p2 = get3DPoint(i, j + 1);
          const p3 = get3DPoint(i + 1, j + 1);
          const p4 = get3DPoint(i + 1, j);

          const avgZ = (p1.pz + p2.pz + p3.pz + p4.pz) / 4;

          // Back-face culling for smooth performance
          if (avgZ < RADIUS * 0.85) {
            // Calculate smooth normal vector using quad cross product
            const v1x = p2.rawX - p1.rawX;
            const v1y = p2.rawY - p1.rawY;
            const v1z = p2.rawZ - p1.rawZ;

            const v2x = p4.rawX - p1.rawX;
            const v2y = p4.rawY - p1.rawY;
            const v2z = p4.rawZ - p1.rawZ;

            // Cross product
            let nx = v1y * v2z - v1z * v2y;
            let ny = v1z * v2x - v1x * v2z;
            let nz = v1x * v2y - v1y * v2x;

            const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
            nx /= len;
            ny /= len;
            nz /= len;

            quads.push({
              pts: [
                { x: p1.px, y: p1.py },
                { x: p2.px, y: p2.py },
                { x: p3.px, y: p3.py },
                { x: p4.px, y: p4.py },
              ],
              avgZ,
              nx,
              ny,
              nz,
              u: j / LONGS,
              v: i / LATS,
            });
          }
        }
      }

      // Sort quads back to front
      quads.sort((a, b) => a.avgZ - b.avgZ);

      // Light directional vectors (Copper key light on left, Indigo fill light on right)
      const lightKey = { x: -0.6, y: -0.5, z: 0.6 };
      const lightFill = { x: 0.7, y: -0.3, z: 0.6 };

      // Render smooth glossy liquid metallic quads
      quads.forEach((q) => {
        // Dot products for diffuse lighting
        const dotKey = Math.max(0, q.nx * lightKey.x + q.ny * lightKey.y + q.nz * lightKey.z);
        const dotFill = Math.max(0, q.nx * lightFill.x + q.ny * lightFill.y + q.nz * lightFill.z);

        // Specular highlight calculation (glossy shininess)
        const spec = Math.pow(Math.max(0, q.nz), 18);

        // Color blending: Copper Orange (#f97316) + Deep Indigo Blue (#4f46e5) + Soft Specular
        const r = Math.min(255, Math.floor(40 + dotKey * 215 + spec * 220));
        const g = Math.min(255, Math.floor(35 + dotKey * 90 + dotFill * 80 + spec * 220));
        const b = Math.min(255, Math.floor(70 + dotFill * 180 + spec * 240));

        const alpha = Math.max(0.7, Math.min(1.0, (q.avgZ + RADIUS * 1.5) / (RADIUS * 3)));

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        ctx.beginPath();
        ctx.moveTo(q.pts[0].x, q.pts[0].y);
        ctx.lineTo(q.pts[1].x, q.pts[1].y);
        ctx.lineTo(q.pts[2].x, q.pts[2].y);
        ctx.lineTo(q.pts[3].x, q.pts[3].y);
        ctx.closePath();
        ctx.fill();
      });

      // Draw soft ambient aura glow under the liquid sphere
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        RADIUS * 1.6
      );
      ambientGlow.addColorStop(0, "rgba(99, 102, 241, 0.25)");
      ambientGlow.addColorStop(0.5, "rgba(249, 115, 22, 0.15)");
      ambientGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, RADIUS * 1.6, 0, Math.PI * 2);
      ctx.fill();

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
    <div className="relative w-full h-[520px] flex items-center justify-center">
      <canvas ref={canvasRef} className="block w-full h-full cursor-pointer" />
    </div>
  );
};

export default LiquidSphereCanvas;
