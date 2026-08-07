"use client";

import React, { useEffect, useRef } from "react";

export const LiquidSphereCanvas: React.FC = () => {
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

    const ctx = canvas.getContext("2d");
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
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Build 3D Deformable Organic Sphere Grid Vertices
    const ROWS = 60;
    const COLS = 120;
    const BASE_RADIUS = 165;

    // Render loop
    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      time += 0.018;

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tilt calculation
      const tiltX = mouse.active ? ((mouse.x - centerX) / width) * 0.4 : 0;
      const tiltY = mouse.active ? ((mouse.y - centerY) / height) * 0.4 : 0;

      // Render 3D Liquid Organic Morphing Orb Vertices
      const polygons: {
        pts: [ { x: number; y: number }, { x: number; y: number }, { x: number; y: number }, { x: number; y: number } ];
        avgZ: number;
        normZ: number;
        u: number;
      }[] = [];

      const rotAngleY = time * 0.4 + tiltX;
      const rotAngleX = Math.sin(time * 0.3) * 0.2 + tiltY;

      for (let r = 0; r < ROWS; r++) {
        const phi1 = (r / ROWS) * Math.PI;
        const phi2 = ((r + 1) / ROWS) * Math.PI;

        for (let c = 0; c < COLS; c++) {
          const theta1 = (c / COLS) * 2 * Math.PI;
          const theta2 = ((c + 1) / COLS) * 2 * Math.PI;

          // Helper to calculate 3D position with organic noise waves
          const getPoint = (phi: number, theta: number) => {
            // Complex organic wave displacement
            const wave1 = Math.sin(theta * 3 + time * 1.5 + phi * 2) * 18;
            const wave2 = Math.cos(phi * 4 - time * 1.2 + theta * 2) * 14;
            const wave3 = Math.sin(theta * 5 + phi * 5 + time * 2) * 8;
            
            // Mouse interaction wave ripple
            let mouseDistFactor = 0;
            if (mouse.active) {
              mouseDistFactor = Math.sin(time * 3 + phi * 3) * 12;
            }

            const radius = BASE_RADIUS + wave1 + wave2 + wave3 + mouseDistFactor;

            let x = radius * Math.sin(phi) * Math.cos(theta);
            let y = radius * Math.cos(phi);
            let z = radius * Math.sin(phi) * Math.sin(theta);

            // Rotate Y
            const x1 = x * Math.cos(rotAngleY) - z * Math.sin(rotAngleY);
            const z1 = x * Math.sin(rotAngleY) + z * Math.cos(rotAngleY);

            // Rotate X
            const y2 = y * Math.cos(rotAngleX) - z1 * Math.sin(rotAngleX);
            const z2 = y * Math.sin(rotAngleX) + z1 * Math.cos(rotAngleX);

            // Perspective projection
            const fov = 800;
            const scale = fov / (fov + z2);

            return {
              px: centerX + x1 * scale,
              py: centerY + y2 * scale,
              pz: z2,
              u: c / COLS,
            };
          };

          const p1 = getPoint(phi1, theta1);
          const p2 = getPoint(phi1, theta2);
          const p3 = getPoint(phi2, theta2);
          const p4 = getPoint(phi2, theta1);

          const avgZ = (p1.pz + p2.pz + p3.pz + p4.pz) / 4;

          // Filter out back-facing polygons
          if (avgZ < BASE_RADIUS * 0.8) {
            const normZ = (avgZ + BASE_RADIUS * 1.5) / (BASE_RADIUS * 3);
            polygons.push({
              pts: [
                { x: p1.px, y: p1.py },
                { x: p2.px, y: p2.py },
                { x: p3.px, y: p3.py },
                { x: p4.px, y: p4.py },
              ],
              avgZ,
              normZ,
              u: (p1.u + p3.u) / 2,
            });
          }
        }
      }

      // Sort polygons by Z index (render back to front)
      polygons.sort((a, b) => a.avgZ - b.avgZ);

      // Draw metallic liquid morphing gradient polygons
      polygons.forEach((poly) => {
        const nZ = Math.max(0, Math.min(1, poly.normZ));
        
        // Dynamic iridescent metallic palette (Orange copper -> Deep Royal Blue -> Soft Lilac)
        const rVal = Math.floor(245 - poly.u * 120 + nZ * 30);
        const gVal = Math.floor(115 + Math.sin(poly.u * Math.PI * 2) * 60);
        const bVal = Math.floor(35 + (1 - poly.u) * 200 + nZ * 40);
        const alpha = Math.max(0.4, Math.min(0.95, nZ * 0.95));

        ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${alpha})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * nZ})`;
        ctx.lineWidth = 0.5;

        ctx.beginPath();
        ctx.moveTo(poly.pts[0].x, poly.pts[0].y);
        ctx.lineTo(poly.pts[1].x, poly.pts[1].y);
        ctx.lineTo(poly.pts[2].x, poly.pts[2].y);
        ctx.lineTo(poly.pts[3].x, poly.pts[3].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // Draw ambient floating glow orb in center
      const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, BASE_RADIUS * 1.4);
      grad.addColorStop(0, "rgba(99, 102, 241, 0.25)");
      grad.addColorStop(0.5, "rgba(249, 115, 22, 0.15)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, BASE_RADIUS * 1.4, 0, Math.PI * 2);
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
