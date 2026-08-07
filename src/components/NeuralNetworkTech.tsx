"use client";

import React, { useEffect, useRef, useState } from "react";
import { Brain, Cpu, Globe, Smartphone, Cloud, Sparkles, ArrowRight, Zap } from "lucide-react";

interface Node {
  id: string;
  label: string;
  category: "AI" | "ML" | "Web" | "App" | "Cloud";
  layer: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

interface Connection {
  from: number;
  to: number;
  weight: number;
}

interface SignalPulse {
  connectionIdx: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralNetworkTech: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeService, setActiveService] = useState<string>("AI");
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  const services = [
    {
      id: "AI",
      title: "Artificial Intelligence",
      icon: Brain,
      desc: "Generative AI, Large Language Models (LLMs), Autonomous Agents, and Conversational Systems.",
    },
    {
      id: "ML",
      title: "Machine Learning",
      icon: Cpu,
      desc: "Predictive Analytics, Computer Vision, MLOps, Data Pipelines & Neural Networks.",
    },
    {
      id: "Web",
      title: "Web Development",
      icon: Globe,
      desc: "High-performance Next.js Web Applications, Progressive Web Apps (PWA), & Modern UX/UI.",
    },
    {
      id: "App",
      title: "App Development",
      icon: Smartphone,
      desc: "Native & Cross-Platform iOS and Android Applications engineered for scale.",
    },
    {
      id: "Cloud",
      title: "Cloud Services",
      icon: Cloud,
      desc: "AWS / Azure Infrastructure, Serverless Microservices, DevOps, & Kubernetes.",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth * dpr : window.innerWidth * dpr;
      canvas.height = 540 * dpr;
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
      setHoveredNode(null);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Create Neural Network Topology (Input Layer -> Hidden Layers -> Output Layer)
    const layersConfig = [3, 5, 5, 5, 3];
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    const categories: ("AI" | "ML" | "Web" | "App" | "Cloud")[] = ["AI", "ML", "Web", "App", "Cloud"];
    const categoryColors = {
      AI: "#111111",
      ML: "#252525",
      Web: "#3a3a3a",
      App: "#4a4a4a",
      Cloud: "#1a1a1a",
    };

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    const layerSpacing = width / (layersConfig.length + 1);

    let nodeIndex = 0;
    layersConfig.forEach((count, lIdx) => {
      const x = layerSpacing * (lIdx + 1);
      const verticalSpacing = height / (count + 1);

      for (let i = 0; i < count; i++) {
        const y = verticalSpacing * (i + 1);
        const cat = categories[(nodeIndex + i) % categories.length];

        nodes.push({
          id: `node-${nodeIndex}`,
          label: `${cat}_Node_${i + 1}`,
          category: cat,
          layer: lIdx,
          x,
          y,
          baseX: x,
          baseY: y,
          radius: Math.random() * 3 + 6,
          color: categoryColors[cat],
          vx: 0,
          vy: 0,
        });

        nodeIndex++;
      }
    });

    // Create Synaptic Connections between adjacent layers
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].layer === nodes[i].layer + 1) {
          // Connect nodes in adjacent layers
          if (Math.random() < 0.75) {
            connections.push({
              from: i,
              to: j,
              weight: Math.random() * 0.8 + 0.2,
            });
          }
        }
      }
    }

    // Active Pulses along Synapses
    const pulses: SignalPulse[] = [];
    for (let p = 0; p < 18; p++) {
      pulses.push({
        connectionIdx: Math.floor(Math.random() * connections.length),
        progress: Math.random(),
        speed: Math.random() * 0.015 + 0.008,
        color: "#111111",
      });
    }

    // Main Render Loop
    const render = () => {
      ctx.save();
      ctx.scale(dpr, dpr);

      // Clear Canvas with Warm Off-White Background (#e6e6e1)
      ctx.fillStyle = "#e6e6e1";
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Update Node positions with subtle organic floating & Mouse interactivity
      nodes.forEach((node) => {
        // Floating movement
        const floatX = Math.sin(Date.now() * 0.0015 + node.baseY) * 6;
        const floatY = Math.cos(Date.now() * 0.0015 + node.baseX) * 6;

        node.baseX += (node.x - node.baseX) * 0.02;
        node.baseY += (node.y - node.baseY) * 0.02;

        node.x = node.baseX + floatX + node.vx;
        node.y = node.baseY + floatY + node.vy;

        // Mouse hover interaction physics
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100 && dist > 0) {
            const force = (1 - dist / 100) * 12;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
            setHoveredNode(node);
          }
        }

        node.vx *= 0.9;
        node.vy *= 0.9;
      });

      // Draw Synaptic Connection Lines
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        const isHighlighted =
          hoveredNode && (conn.from === nodes.indexOf(hoveredNode) || conn.to === nodes.indexOf(hoveredNode));

        ctx.strokeStyle = isHighlighted ? "rgba(17, 17, 17, 0.75)" : "rgba(80, 80, 75, 0.22)";
        ctx.lineWidth = isHighlighted ? 2.5 : conn.weight * 1.5;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // Draw Signal Pulses (Data Transmission)
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.connectionIdx = Math.floor(Math.random() * connections.length);
        }

        const conn = connections[pulse.connectionIdx];
        if (!conn) return;

        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        const px = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        ctx.fillStyle = "#111111";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Draw Nodes (Neurons)
      nodes.forEach((node) => {
        const isHovered = hoveredNode === node;

        ctx.fillStyle = isHovered ? "#000000" : node.color;
        ctx.globalAlpha = isHovered ? 1.0 : 0.85;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? node.radius + 3 : node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node halo ring
        ctx.strokeStyle = "rgba(17, 17, 17, 0.4)";
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, (isHovered ? node.radius + 7 : node.radius + 4), 0, Math.PI * 2);
        ctx.stroke();
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
  }, [hoveredNode]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Canvas Viewport Container */}
      <div className="relative w-full h-[540px] rounded-3xl bg-[#e6e6e1] border border-stone-300 shadow-xl overflow-hidden cursor-crosshair">
        <canvas ref={canvasRef} className="block w-full h-full" />

        {/* Floating Top Banner Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-stone-300/80 backdrop-blur-md text-xs font-mono text-stone-800 shadow-sm pointer-events-none">
          <Zap className="w-4 h-4 text-stone-900 animate-pulse" />
          <span className="font-semibold">NEURAL NETWORK RUNTIME</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1" />
        </div>

        {/* Hovered Node Info Popup Overlay */}
        {hoveredNode && (
          <div
            style={{
              left: `${Math.min(hoveredNode.x + 15, window.innerWidth > 768 ? 600 : 200)}px`,
              top: `${Math.max(hoveredNode.y - 40, 20)}px`,
            }}
            className="absolute z-20 px-3.5 py-2 rounded-xl bg-stone-900 text-white font-mono text-xs shadow-xl pointer-events-none transition-all duration-150 animate-fadeIn"
          >
            <div className="font-bold text-stone-100">{hoveredNode.label}</div>
            <div className="text-[10px] text-stone-400">Layer {hoveredNode.layer + 1} • {hoveredNode.category} Engine</div>
          </div>
        )}

        {/* Bottom Interactive Service Selector Pills */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 p-2 rounded-full bg-white/90 border border-stone-300 backdrop-blur-md shadow-lg">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isActive = activeService === svc.id;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveService(svc.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-stone-950 text-white shadow-md"
                    : "bg-transparent text-stone-600 hover:text-stone-950 hover:bg-stone-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Service Detail Display Card */}
      <div className="w-full max-w-4xl mt-8 p-8 rounded-3xl bg-white border border-stone-200 shadow-md">
        {services
          .filter((s) => s.id === activeService)
          .map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-stone-950 text-white shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-stone-900">{svc.title}</h3>
                    <p className="text-stone-600 font-sans text-sm mt-1">{svc.desc}</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-2xl bg-stone-950 hover:bg-stone-800 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-md shrink-0"
                >
                  <span>Build with {svc.id}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NeuralNetworkTech;
