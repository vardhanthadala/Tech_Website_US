"use client";

import React, { useEffect, useRef, useState } from "react";
import { Brain, Cpu, Globe, Smartphone, Cloud, Zap, Sparkles } from "lucide-react";

export type ServiceMode = "AI" | "ML" | "Web" | "App" | "Cloud";

interface DynamicServiceCanvasProps {
  currentMode: ServiceMode;
  onSelectMode: (mode: ServiceMode) => void;
}

interface Particle {
  // Target shape positions for morphing
  xAI: number; yAI: number; zAI: number;
  xML: number; yML: number; zML: number;
  xWeb: number; yWeb: number; zWeb: number;
  xApp: number; yApp: number; zApp: number;
  xCloud: number; yCloud: number; zCloud: number;

  // Current interpolated 3D position
  x: number;
  y: number;
  z: number;

  // Physics displacement offsets
  dispX: number;
  dispY: number;
  dispZ: number;
  vx: number;
  vy: number;
  vz: number;

  size: number;
  alpha: number;
  darkness: number;
}

export const DynamicServiceCanvas: React.FC<DynamicServiceCanvasProps> = ({
  currentMode,
  onSelectMode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const modeRef = useRef<ServiceMode>(currentMode);

  // Keep modeRef in sync for animation loop
  useEffect(() => {
    modeRef.current = currentMode;
  }, [currentMode]);

  const mouseRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    active: boolean;
  }>({
    x: -1000,
    y: -1000,
    vx: 0,
    vy: 0,
    active: false,
  });

  const services = [
    { id: "AI" as ServiceMode, label: "Artificial Intelligence", icon: Brain },
    { id: "ML" as ServiceMode, label: "Machine Learning", icon: Cpu },
    { id: "Web" as ServiceMode, label: "Web Development", icon: Globe },
    { id: "App" as ServiceMode, label: "App Development", icon: Smartphone },
    { id: "Cloud" as ServiceMode, label: "Cloud Services", icon: Cloud },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth * dpr : window.innerWidth * dpr;
      canvas.height = parent ? parent.clientHeight * dpr : 560 * dpr;
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

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Build 25,000 Volumetric Morphing Particles
    const TOTAL_PARTICLES = 25000;
    const particles: Particle[] = [];

    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      // 1. AI Geometry: 3D Dual-Hemisphere Brain / Neural Core
      const uAI = Math.random();
      const vAI = Math.random();
      const thetaAI = uAI * 2.0 * Math.PI;
      const phiAI = Math.acos(2.0 * vAI - 1.0);
      const brainR = 150 + gaussianRandom() * 12;
      const isLeftLobe = Math.random() < 0.5 ? -1 : 1;
      const xAI = (brainR * Math.sin(phiAI) * Math.cos(thetaAI)) + isLeftLobe * 35;
      const yAI = brainR * Math.sin(phiAI) * Math.sin(thetaAI) * 0.85;
      const zAI = brainR * Math.cos(phiAI) * 0.9;

      // 2. ML Geometry: 3D Hypercube Lattice
      const layerML = Math.floor(Math.random() * 5) - 2; // -2 to 2
      const rowML = Math.floor(Math.random() * 5) - 2;
      const colML = Math.floor(Math.random() * 5) - 2;
      const spacingML = 65;
      const xML = colML * spacingML + gaussianRandom() * 8;
      const yML = rowML * spacingML + gaussianRandom() * 8;
      const zML = layerML * spacingML + gaussianRandom() * 8;

      // 3. Web Geometry: 3D Interactive Tech Globe with Orbiting Rings
      const isRing = Math.random() < 0.35;
      let xWeb = 0, yWeb = 0, zWeb = 0;
      if (isRing) {
        const ringAngle = Math.random() * Math.PI * 2;
        const ringR = 210 + gaussianRandom() * 6;
        xWeb = Math.cos(ringAngle) * ringR;
        yWeb = gaussianRandom() * 10;
        zWeb = Math.sin(ringAngle) * ringR;
      } else {
        const uW = Math.random();
        const vW = Math.random();
        const tW = uW * 2.0 * Math.PI;
        const pW = Math.acos(2.0 * vW - 1.0);
        const rW = 145 + gaussianRandom() * 8;
        xWeb = rW * Math.sin(pW) * Math.cos(tW);
        yWeb = rW * Math.sin(pW) * Math.sin(tW);
        zWeb = rW * Math.cos(pW);
      }

      // 4. App Geometry: 3D Smartphone Interface Grid
      const isFrame = Math.random() < 0.4;
      let xApp = 0, yApp = 0, zApp = 0;
      if (isFrame) {
        // Outer Smartphone Rounded Rect Frame
        const borderSide = Math.floor(Math.random() * 4);
        if (borderSide === 0) { // Top
          xApp = (Math.random() - 0.5) * 180;
          yApp = -180 + gaussianRandom() * 4;
        } else if (borderSide === 1) { // Bottom
          xApp = (Math.random() - 0.5) * 180;
          yApp = 180 + gaussianRandom() * 4;
        } else if (borderSide === 2) { // Left
          xApp = -90 + gaussianRandom() * 4;
          yApp = (Math.random() - 0.5) * 360;
        } else { // Right
          xApp = 90 + gaussianRandom() * 4;
          yApp = (Math.random() - 0.5) * 360;
        }
        zApp = gaussianRandom() * 6;
      } else {
        // App Grid UI Cards Inside
        xApp = (Math.random() - 0.5) * 160;
        yApp = (Math.random() - 0.5) * 320;
        zApp = (Math.random() - 0.5) * 40;
      }

      // 5. Cloud Geometry: 3D Dense Cloud Volumetric Swarm
      const cloudCenterIdx = Math.floor(Math.random() * 3);
      const cloudCenters = [
        { cx: -80, cy: -20, cz: 0, r: 100 },
        { cx: 40, cy: -40, cz: 20, r: 120 },
        { cx: 80, cy: 30, cz: -10, r: 90 },
      ];
      const cc = cloudCenters[cloudCenterIdx];
      const uC = Math.random();
      const vC = Math.random();
      const tC = uC * 2.0 * Math.PI;
      const pC = Math.acos(2.0 * vC - 1.0);
      const rC = (Math.random() * 0.8 + 0.2) * cc.r;
      const xCloud = cc.cx + rC * Math.sin(pC) * Math.cos(tC) + gaussianRandom() * 10;
      const yCloud = cc.cy + rC * Math.sin(pC) * Math.sin(tC) + gaussianRandom() * 10;
      const zCloud = cc.cz + rC * Math.cos(pC) + gaussianRandom() * 10;

      const size = Math.random() < 0.85 ? Math.random() * 1.3 + 0.5 : Math.random() * 2.3 + 1.1;
      const alpha = Math.random() * 0.55 + 0.35;
      const darkness = Math.random();

      particles.push({
        xAI, yAI, zAI,
        xML, yML, zML,
        xWeb, yWeb, zWeb,
        xApp, yApp, zApp,
        xCloud, yCloud, zCloud,
        x: xAI,
        y: yAI,
        z: zAI,
        dispX: 0,
        dispY: 0,
        dispZ: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        size,
        alpha,
        darkness,
      });
    }

    let tiltX = 0;
    let tiltY = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Warm off-white canvas background (#e4e4df)
      ctx.fillStyle = "#e4e4df";
      ctx.fillRect(0, 0, width, height);

      const m = mouseRef.current;
      m.vx *= 0.88;
      m.vy *= 0.88;

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tilt calculation
      const targetTiltX = m.active ? ((m.x - centerX) / width) * 0.5 : 0;
      const targetTiltY = m.active ? ((m.y - centerY) / height) * 0.5 : 0;
      tiltX += (targetTiltX - tiltX) * 0.06;
      tiltY += (targetTiltY - tiltY) * 0.06;

      rotationAngle += 0.015; // Smooth rotation speed

      const activeMode = modeRef.current;
      const fov = 850;

      const renderQueue: {
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        darkness: number;
      }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Determine target destination based on activeMode
        let tx = p.xAI, ty = p.yAI, tz = p.zAI;
        if (activeMode === "ML") {
          tx = p.xML; ty = p.yML; tz = p.zML;
        } else if (activeMode === "Web") {
          tx = p.xWeb; ty = p.yWeb; tz = p.zWeb;
        } else if (activeMode === "App") {
          tx = p.xApp; ty = p.yApp; tz = p.zApp;
        } else if (activeMode === "Cloud") {
          tx = p.xCloud; ty = p.yCloud; tz = p.zCloud;
        }

        // Smooth particle morph interpolation toward target shape (ease factor 0.06)
        p.x += (tx - p.x) * 0.06;
        p.y += (ty - p.y) * 0.06;
        p.z += (tz - p.z) * 0.06;

        // Apply 3D rotation around Y & X axes
        const cosR = Math.cos(rotationAngle);
        const sinR = Math.sin(rotationAngle);

        const rotX = p.x * cosR - p.z * sinR;
        const rotZ = p.x * sinR + p.z * cosR;
        const rotY = p.y * Math.cos(tiltY) - rotZ * Math.sin(tiltY);

        // Project base screen positions
        const baseX = centerX + rotX;
        const baseY = centerY + rotY;
        const baseZ = rotZ;

        const curX = baseX + p.dispX;
        const curY = baseY + p.dispY;

        // Mouse Hover Dynamic Physics Repulsion & Velocity Drag
        if (m.active) {
          const dx = curX - m.x;
          const dy = curY - m.y;
          const distSq = dx * dx + dy * dy;
          const hoverRadius = 160;

          if (distSq < hoverRadius * hoverRadius && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const factor = (1 - dist / hoverRadius);
            const push = factor * 4.2;
            p.vx += (dx / dist) * push + m.vx * factor * 0.35;
            p.vy += (dy / dist) * push + m.vy * factor * 0.35;
          }
        }

        // Apply velocities and spring-back recovery force toward base location
        p.dispX += p.vx;
        p.dispY += p.vy;
        p.dispZ += p.vz;

        p.vx = p.vx * 0.88 - p.dispX * 0.08;
        p.vy = p.vy * 0.88 - p.dispY * 0.08;
        p.vz = p.vz * 0.88 - p.dispZ * 0.08;

        // Perspective scale & depth of field attenuation
        const scale = fov / (fov + baseZ);
        const depthRange = 220;
        const normalizedZ = (baseZ + depthRange) / (depthRange * 2);
        const depthAlpha = Math.max(0.12, Math.min(1.0, Math.pow(normalizedZ, 1.4)));

        renderQueue.push({
          x: curX,
          y: curY,
          z: baseZ + p.dispZ,
          size: p.size * scale,
          alpha: p.alpha * depthAlpha,
          darkness: p.darkness * (0.4 + 0.6 * normalizedZ),
        });
      }

      // Sort by Z index (render furthest first)
      renderQueue.sort((a, b) => a.z - b.z);

      // Draw charcoal micro-dust particles
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
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-[560px] rounded-3xl bg-[#e4e4df] border border-stone-300 shadow-xl overflow-hidden cursor-crosshair">
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Top Left Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/85 border border-stone-300 backdrop-blur-md text-xs font-mono text-stone-900 shadow-sm pointer-events-none">
        <Sparkles className="w-4 h-4 text-stone-900 animate-spin" />
        <span className="font-semibold">3D PARTICLE RENDER ENGINE</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1 animate-pulse" />
      </div>

      {/* Bottom Floating Interactive Service Dock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2.5 p-2.5 rounded-full bg-white/90 border border-stone-300 backdrop-blur-md shadow-2xl z-20">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isActive = currentMode === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => onSelectMode(svc.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-semibold transition-all ${
                isActive
                  ? "bg-stone-950 text-white shadow-lg scale-105"
                  : "bg-transparent text-stone-600 hover:text-stone-950 hover:bg-stone-100"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{svc.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicServiceCanvas;
