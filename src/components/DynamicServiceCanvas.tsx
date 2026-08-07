"use client";

import React, { useEffect, useRef } from "react";
import { Brain, Cpu, Globe, Smartphone, Cloud, Sparkles } from "lucide-react";

export type ServiceMode = "AI" | "ML" | "Web" | "App" | "Cloud";

interface DynamicServiceCanvasProps {
  currentMode: ServiceMode;
  onSelectMode: (mode: ServiceMode) => void;
}

interface Particle {
  // Target 3D coordinates for each service mode
  xAI: number; yAI: number; zAI: number;
  xML: number; yML: number; zML: number;
  xWeb: number; yWeb: number; zWeb: number;
  xApp: number; yApp: number; zApp: number;
  xCloud: number; yCloud: number; zCloud: number;

  // Current interpolated coordinates
  x: number;
  y: number;
  z: number;

  // Interactive mouse displacement
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

    // Build 30,000 Volumetric Morphing Particles with High-Contrast Distinct Geometries
    const TOTAL_PARTICLES = 30000;
    const particles: Particle[] = [];

    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      // 1. AI GEOMETRY: 3D Synaptic Brain Model (Two Lobe Ellipsoids + Firing Cortex Rings)
      const isCortexRing = Math.random() < 0.25;
      let xAI = 0, yAI = 0, zAI = 0;
      if (isCortexRing) {
        const ringA = Math.random() * Math.PI * 2;
        const ringR = 210 + gaussianRandom() * 8;
        xAI = Math.cos(ringA) * ringR;
        yAI = Math.sin(ringA) * ringR * 0.4;
        zAI = gaussianRandom() * 20;
      } else {
        const isLeft = Math.random() < 0.5 ? -1 : 1;
        const u = Math.random();
        const v = Math.random();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2 * v - 1);
        const r = 140 + gaussianRandom() * 14;
        xAI = r * Math.sin(phi) * Math.cos(theta) * 0.9 + isLeft * 55;
        yAI = r * Math.sin(phi) * Math.sin(theta) * 0.75;
        zAI = r * Math.cos(phi) * 0.85;
      }

      // 2. ML GEOMETRY: Multi-Layer Neural Network Matrix (Input -> Hidden -> Output Nodes)
      const layer = Math.floor(Math.random() * 5); // 0, 1, 2, 3, 4
      const xML = (layer - 2) * 110 + gaussianRandom() * 12;
      const countInLayer = layer === 0 || layer === 4 ? 4 : 7;
      const nodeInLayer = Math.floor(Math.random() * countInLayer);
      const yML = (nodeInLayer - (countInLayer - 1) / 2) * 65 + gaussianRandom() * 12;
      const zML = (Math.random() - 0.5) * 160 + gaussianRandom() * 12;

      // 3. WEB GEOMETRY: 3D Wireframe Browser Window + Floating Code Lines
      const isWindowBorder = Math.random() < 0.45;
      let xWeb = 0, yWeb = 0, zWeb = 0;
      if (isWindowBorder) {
        // Outer Rectangular Browser Window Frame (Width: 440, Height: 280)
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { // Top bar
          xWeb = (Math.random() - 0.5) * 440;
          yWeb = -140 + gaussianRandom() * 5;
        } else if (side === 1) { // Bottom bar
          xWeb = (Math.random() - 0.5) * 440;
          yWeb = 140 + gaussianRandom() * 5;
        } else if (side === 2) { // Left bar
          xWeb = -220 + gaussianRandom() * 5;
          yWeb = (Math.random() - 0.5) * 280;
        } else { // Right bar
          xWeb = 220 + gaussianRandom() * 5;
          yWeb = (Math.random() - 0.5) * 280;
        }
        zWeb = gaussianRandom() * 8;
      } else {
        // Horizontal Code Lines Inside Browser
        const lineIdx = Math.floor(Math.random() * 6);
        yWeb = -90 + lineIdx * 35 + gaussianRandom() * 4;
        const lineLength = 120 + Math.random() * 200;
        xWeb = -180 + Math.random() * lineLength;
        zWeb = (Math.random() - 0.5) * 40;
      }

      // 4. APP GEOMETRY: 3D Smartphone Frame + Grid of App Cards
      const isAppPhoneBorder = Math.random() < 0.4;
      let xApp = 0, yApp = 0, zApp = 0;
      if (isAppPhoneBorder) {
        // Vertical Smartphone Outline (Width: 220, Height: 400)
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { // Top
          xApp = (Math.random() - 0.5) * 220;
          yApp = -200 + gaussianRandom() * 5;
        } else if (side === 1) { // Bottom
          xApp = (Math.random() - 0.5) * 220;
          yApp = 200 + gaussianRandom() * 5;
        } else if (side === 2) { // Left
          xApp = -110 + gaussianRandom() * 5;
          yApp = (Math.random() - 0.5) * 400;
        } else { // Right
          xApp = 110 + gaussianRandom() * 5;
          yApp = (Math.random() - 0.5) * 400;
        }
        zApp = gaussianRandom() * 8;
      } else {
        // 3D App Icon Grid Floating in 3D Stack
        const col = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        const row = Math.floor(Math.random() * 4) - 1.5;
        xApp = col * 60 + gaussianRandom() * 10;
        yApp = row * 70 + gaussianRandom() * 10;
        zApp = (Math.random() - 0.5) * 60;
      }

      // 5. CLOUD GEOMETRY: Volumetric Cloud Puffs + Orbiting Server Discs
      const isServerDisc = Math.random() < 0.25;
      let xCloud = 0, yCloud = 0, zCloud = 0;
      if (isServerDisc) {
        const discAngle = Math.random() * Math.PI * 2;
        const discR = 240 + gaussianRandom() * 10;
        xCloud = Math.cos(discAngle) * discR;
        yCloud = Math.sin(discAngle) * discR * 0.35 + gaussianRandom() * 15;
        zCloud = Math.sin(discAngle) * discR;
      } else {
        // 3 Overlapping Volumetric Cloud Clusters
        const cloudGroup = Math.floor(Math.random() * 3);
        const centers = [
          { cx: -110, cy: -20, cz: 0, r: 120 },
          { cx: 20, cy: -40, cz: 30, r: 140 },
          { cx: 110, cy: 20, cz: -20, r: 110 },
        ];
        const c = centers[cloudGroup];
        const u = Math.random();
        const v = Math.random();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2 * v - 1);
        const r = (Math.random() * 0.85 + 0.15) * c.r;
        xCloud = c.cx + r * Math.sin(phi) * Math.cos(theta) + gaussianRandom() * 10;
        yCloud = c.cy + r * Math.sin(phi) * Math.sin(theta) + gaussianRandom() * 10;
        zCloud = c.cz + r * Math.cos(phi) + gaussianRandom() * 10;
      }

      const size = Math.random() < 0.85 ? Math.random() * 1.3 + 0.6 : Math.random() * 2.4 + 1.2;
      const alpha = Math.random() * 0.55 + 0.38;
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
        if (activeMode === "ML") {
          tx = p.xML; ty = p.yML; tz = p.zML;
        } else if (activeMode === "Web") {
          tx = p.xWeb; ty = p.yWeb; tz = p.zWeb;
        } else if (activeMode === "App") {
          tx = p.xApp; ty = p.yApp; tz = p.zApp;
        } else if (activeMode === "Cloud") {
          tx = p.xCloud; ty = p.yCloud; tz = p.zCloud;
        }

        // Fast responsive particle morph interpolation (ease factor 0.09)
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
