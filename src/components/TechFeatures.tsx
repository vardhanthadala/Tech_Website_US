"use client";

import React from "react";
import { Dna, Cpu, Shield, Zap, Layers, Activity, Database, Sparkles } from "lucide-react";

export const TechFeatures: React.FC = () => {
  const features = [
    {
      icon: Dna,
      title: "Double-Helix 3D Rendering",
      description:
        "High-performance Canvas Z-sorted node rendering with customizable base pair bonds and real-time rotation vectors.",
      color: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      icon: Cpu,
      title: "Quantum Sequence Pipeline",
      description:
        "Instant analysis of Adenine, Thymine, Guanine, and Cytosine pairings with dynamic color matrix themes.",
      color: "text-purple-400",
      border: "border-purple-500/20",
    },
    {
      icon: Activity,
      title: "Real-time Diagnostics",
      description:
        "Monitor FPS rendering speed, strand depth, ambient particle fields, and sequence integrity in real-time.",
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      icon: Database,
      title: "Synthetic Genomics Engine",
      description:
        "Integrates seamlessly with bio-computation tools and next-generation sequencing data feeds.",
      color: "text-amber-400",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-100">
          Engineered for Next-Gen BioTech
        </h2>
        <p className="text-slate-400 font-sans text-base sm:text-lg">
          State-of-the-art DNA tech animation suite built with Next.js, TypeScript, and modern styling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-slate-950/80 border ${f.border} hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg group`}
            >
              <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 w-fit mb-5 ${f.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-slate-100 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">{f.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechFeatures;
