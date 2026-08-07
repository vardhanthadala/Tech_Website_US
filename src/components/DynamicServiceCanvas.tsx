"use client";

import React, { useEffect, useRef } from "react";
import { Brain, Globe, Smartphone, Palette, Cloud, Sparkles } from "lucide-react";

export type ServiceMode = "AI" | "Web" | "App" | "UiUx" | "Cloud";

interface DynamicServiceCanvasProps {
  currentMode: ServiceMode;
  onSelectMode: (mode: ServiceMode) => void;
}

interface Particle {
  // Target 3D coordinates for each of the 5 services
  xAI: number; yAI: number; zAI: number;
  xWeb: number; yWeb: number; zWeb: number;
  xApp: number; yApp: number; zApp: number;
  xUiUx: number; yUiUx: number; zUiUx: number;
  xCloud: number; yCloud: number; zCloud: number;

  // Current interpolated coordinates
  x: number;
  y: number;
  z: number;

  // Mouse interaction physics
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
    { id: "AI" as ServiceMode, label: "AI Automation", icon: Brain },
    { id: "Web" as ServiceMode, label: "Web Development", icon: Globe },
    { id: "App" as ServiceMode, label: "App Development", icon: Smartphone },
    { id: "UiUx" as ServiceMode, label: "UI / UX Design", icon: Palette },
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

    // Build 32,000 Volumetric Morphing Particles with High-Contrast 3D Models
    const TOTAL_PARTICLES = 32000;
    const particles: Particle[] = [];

    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      // 1. AI AUTOMATION GEOMETRY: 3D Neural Brain + Left/Right Server Rack Towers
      const isServerRack = Math.random() < 0.28;
      let xAI = 0, yAI = 0, zAI = 0;
      if (isServerRack) {
        // Vertical Server Rack Pillars (Left at x = -210, Right at x = +210)
        const isRight = Math.random() < 0.5;
        xAI = (isRight ? 210 : -210) + gaussianRandom() * 6;
        yAI = (Math.random() - 0.5) * 320;
        zAI = (Math.random() - 0.5) * 60;
      } else {
        // Central Volumetric Neural Brain Lobe
        const isLeftLobe = Math.random() < 0.5 ? -1 : 1;
        const u = Math.random();
        const v = Math.random();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2 * v - 1);
        const r = 135 + gaussianRandom() * 12;
        xAI = r * Math.sin(phi) * Math.cos(theta) * 0.9 + isLeftLobe * 45;
        yAI = r * Math.sin(phi) * Math.sin(theta) * 0.75;
        zAI = r * Math.cos(phi) * 0.85;
      }

      // 2. WEB DEVELOPMENT GEOMETRY: 3D Developer Workstation & Monitor Screen + Code Stream
      const isMonitor = Math.random() < 0.45;
      let xWeb = 0, yWeb = 0, zWeb = 0;
      if (isMonitor) {
        // Curved Desktop Monitor Screen (Width: 380, Height: 240)
        xWeb = (Math.random() - 0.5) * 380;
        yWeb = -40 + (Math.random() - 0.5) * 240;
        // Curve depth along Z axis
        zWeb = -Math.pow(xWeb / 190, 2) * 40 + gaussianRandom() * 6;
      } else {
        // Keyboard Desk Base & Code Stream Particles
        const isDesk = Math.random() < 0.6;
        if (isDesk) {
          xWeb = (Math.random() - 0.5) * 420;
          yWeb = 110 + gaussianRandom() * 8;
          zWeb = (Math.random() - 0.5) * 120 + 40;
        } else {
          // Floating Code Particles (<dev>, {code})
          xWeb = (Math.random() - 0.5) * 320;
          yWeb = -160 + gaussianRandom() * 20;
          zWeb = (Math.random() - 0.5) * 80;
        }
      }

      // 3. APP DEVELOPMENT GEOMETRY: Smartphone with Orbiting App Icon Cards & Wireframe Threads
      const isPhoneOutline = Math.random() < 0.4;
      let xApp = 0, yApp = 0, zApp = 0;
      if (isPhoneOutline) {
        // Central Smartphone Body (Width: 190, Height: 360)
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { // Top
          xApp = (Math.random() - 0.5) * 190;
          yApp = -180 + gaussianRandom() * 4;
        } else if (side === 1) { // Bottom
          xApp = (Math.random() - 0.5) * 190;
          yApp = 180 + gaussianRandom() * 4;
        } else if (side === 2) { // Left
          xApp = -95 + gaussianRandom() * 4;
          yApp = (Math.random() - 0.5) * 360;
        } else { // Right
          xApp = 95 + gaussianRandom() * 4;
          yApp = (Math.random() - 0.5) * 360;
        }
        zApp = gaussianRandom() * 6;
      } else {
        // Orbiting App Nodes & Connecting Threads
        const nodeIdx = Math.floor(Math.random() * 6);
        const nodeAngles = [0, 1.05, 2.1, 3.14, 4.18, 5.23];
        const angle = nodeAngles[nodeIdx] + gaussianRandom() * 0.1;
        const radius = 175 + gaussianRandom() * 10;
        xApp = Math.cos(angle) * radius;
        yApp = Math.sin(angle) * radius * 0.8;
        zApp = (Math.random() - 0.5) * 60;
      }

      // 4. UI / UX DESIGN GEOMETRY: 3D Stacked Wireframe UI Layout & Component Layer Panels
      const layerIdx = Math.floor(Math.random() * 3); // 3 Stacked Panels
      const zOffsetUI = (layerIdx - 1) * 70;
      const isCardBorder = Math.random() < 0.45;
      let xUiUx = 0, yUiUx = 0, zUiUx = zOffsetUI;
      if (isCardBorder) {
        // Rectangular UI Card Borders (Width: 260, Height: 340)
        const side = Math.floor(Math.random() * 4);
        if (side === 0) {
          xUiUx = (Math.random() - 0.5) * 260;
          yUiUx = -170 + gaussianRandom() * 4;
        } else if (side === 1) {
          xUiUx = (Math.random() - 0.5) * 260;
          yUiUx = 170 + gaussianRandom() * 4;
        } else if (side === 2) {
          xUiUx = -130 + gaussianRandom() * 4;
          yUiUx = (Math.random() - 0.5) * 340;
        } else {
          xUiUx = 130 + gaussianRandom() * 4;
          yUiUx = (Math.random() - 0.5) * 340;
        }
        zUiUx += gaussianRandom() * 4;
      } else {
        // Floating UI Buttons, Icons, and Text Skeleton Blocks
        const blockRow = Math.floor(Math.random() * 5);
        xUiUx = (Math.random() - 0.5) * 210;
        yUiUx = -120 + blockRow * 50 + gaussianRandom() * 6;
        zUiUx += (Math.random() - 0.5) * 25;
      }

      // 5. CLOUD SERVICES GEOMETRY: 3D Volumetric Cloud & Ascending Data Server Beams
      const isAscendingBeam = Math.random() < 0.3;
      let xCloud = 0, yCloud = 0, zCloud = 0;
      if (isAscendingBeam) {
        // Data Stream Columns Ascending from Server Workstations up into Cloud
        const beamIdx = Math.floor(Math.random() * 4) - 1.5;
        xCloud = beamIdx * 90 + gaussianRandom() * 12;
        yCloud = 60 + Math.random() * 140; // 60 to 200 (bottom)
        zCloud = (Math.random() - 0.5) * 60;
      } else {
        // 3 Large Volumetric Cloud Puff Clusters at top
        const cloudCluster = Math.floor(Math.random() * 3);
        const centers = [
          { cx: -110, cy: -60, cz: 0, r: 120 },
          { cx: 20, cy: -80, cz: 30, r: 145 },
          { cx: 110, cy: -40, cz: -20, r: 115 },
        ];
        const c = centers[cloudCluster];
        const u = Math.random();
        const v = Math.random();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2 * v - 1);
        const r = (Math.random() * 0.85 + 0.15) * c.r;
        xCloud = c.cx + r * Math.sin(phi) * Math.cos(theta) + gaussianRandom() * 8;
        yCloud = c.cy + r * Math.sin(phi) * Math.sin(theta) + gaussianRandom() * 8;
        zCloud = c.cz + r * Math.cos(phi) + gaussianRandom() * 8;
      }

      const size = Math.random() < 0.85 ? Math.random() * 1.3 + 0.6 : Math.random() * 2.4 + 1.2;
      const alpha = Math.random() * 0.55 + 0.38;
      const darkness = Math.random();

      particles.push({
        xAI, yAI, zAI,
        xWeb, yWeb, zWeb,
        xApp, yApp, zApp,
        xUiUx, yUiUx, zUiUx,
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

      // Clean warm off-white canvas background (#e4e4df)
      ctx.fillStyle = "#e4e4df";
      ctx.fillRect(0, 0, width, height);

      const m = mouseRef.current;
      m.vx *= 0.88;
      m.vy *= 0.88;

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tilt calculation
      const targetTiltX = m.active ? ((m.x - centerX) / width) * 0.55 : 0;
      const targetTiltY = m.active ? ((m.y - centerY) / height) * 0.55 : 0;
      tiltX += (targetTiltX - tiltX) * 0.06;
      tiltY += (targetTiltY - tiltY) * 0.06;

      rotationAngle += 0.016; // Smooth continuous rotation speed

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

        // Determine target coordinates based on activeMode
        let tx = p.xAI, ty = p.yAI, tz = p.zAI;
        if (activeMode === "Web") {
          tx = p.xWeb; ty = p.yWeb; tz = p.zWeb;
        } else if (activeMode === "App") {
          tx = p.xApp; ty = p.yApp; tz = p.zApp;
        } else if (activeMode === "UiUx") {
          tx = p.xUiUx; ty = p.yUiUx; tz = p.zUiUx;
        } else if (activeMode === "Cloud") {
          tx = p.xCloud; ty = p.yCloud; tz = p.zCloud;
        }

        // Morph interpolation toward active service shape (ease factor 0.09)
        p.x += (tx - p.x) * 0.09;
        p.y += (ty - p.y) * 0.09;
        p.z += (tz - p.z) * 0.09;

        // Apply 3D rotation
        const cosR = Math.cos(rotationAngle);
        const sinR = Math.sin(rotationAngle);

        const rotX = p.x * cosR - p.z * sinR;
        const rotZ = p.x * sinR + p.z * cosR;
        const rotY = p.y * Math.cos(tiltY) - rotZ * Math.sin(tiltY);

        const baseX = centerX + rotX;
        const baseY = centerY + rotY;
        const baseZ = rotZ;

        const curX = baseX + p.dispX;
        const curY = baseY + p.dispY;

        // Mouse Hover Physics Repulsion & Drag
        if (m.active) {
          const dx = curX - m.x;
          const dy = curY - m.y;
          const distSq = dx * dx + dy * dy;
          const hoverRadius = 170;

          if (distSq < hoverRadius * hoverRadius && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const factor = (1 - dist / hoverRadius);
            const push = factor * 4.5;
            p.vx += (dx / dist) * push + m.vx * factor * 0.35;
            p.vy += (dy / dist) * push + m.vy * factor * 0.35;
          }
        }

        p.dispX += p.vx;
        p.dispY += p.vy;
        p.dispZ += p.vz;

        p.vx = p.vx * 0.88 - p.dispX * 0.08;
        p.vy = p.vy * 0.88 - p.dispY * 0.08;
        p.vz = p.vz * 0.88 - p.dispZ * 0.08;

        const scale = fov / (fov + baseZ);
        const depthRange = 240;
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

      renderQueue.sort((a, b) => a.z - b.z);

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

      {/* Top Left Indicator Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/85 border border-stone-300 backdrop-blur-md text-xs font-mono text-stone-900 shadow-sm pointer-events-none">
        <Sparkles className="w-4 h-4 text-stone-900 animate-spin" />
        <span className="font-semibold">{currentMode} 3D PARTICLE MODEL</span>
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
