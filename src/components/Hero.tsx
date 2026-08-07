"use client";

import React from "react";
import DnaAnimationTech from "./DnaAnimationTech";
import { Sparkles, Terminal, ArrowRight, ShieldCheck, Database, Cpu } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>GENOMIC COMPUTING FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-100 font-sans leading-tight">
            Next-Gen{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DNA Tech
            </span>{" "}
            & Interactive Helix Visualization.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            Real-time 3D bio-genomic rendering engine powered by web acceleration. Analyze, manipulate, and visualize double-helix sequence strands with quantum precision.
          </p>

          {/* Quick Stat Badges */}
          <div className="grid grid-cols-3 gap-4 pt-2 font-mono">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xl font-bold text-cyan-400">99.9%</div>
              <div className="text-[11px] text-slate-400">Sequence Accuracy</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xl font-bold text-purple-400">&lt;2ms</div>
              <div className="text-[11px] text-slate-400">Turbopack Render</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xl font-bold text-emerald-400">100%</div>
              <div className="text-[11px] text-slate-400">Client-Side Canvas</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono">
            <a
              href="#dna-viewer"
              className="px-6 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>Explore DNA Visualizer</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#features"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>View Specs</span>
            </a>
          </div>
        </div>

        {/* Right DNA Animation Component Container */}
        <div id="dna-viewer" className="lg:col-span-6 w-full">
          <DnaAnimationTech className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
