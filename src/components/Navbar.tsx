"use client";

import React from "react";
import { Dna, Terminal, ShieldCheck, Cpu } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/20">
            <Dna className="w-5 h-5 font-bold" />
          </div>
          <div>
            <span className="font-mono text-lg font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              NEXUS_BIO
            </span>
            <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              TECH
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-300">
          <a href="#dna-viewer" className="hover:text-cyan-400 transition-colors">
            [01] DNA_SYNTH
          </a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            [02] FEATURES
          </a>
          <a href="#sequencer" className="hover:text-cyan-400 transition-colors">
            [03] SEQUENCER
          </a>
          <a href="#docs" className="hover:text-cyan-400 transition-colors">
            [04] API_DOCS
          </a>
        </div>

        {/* Status Indicator & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>NODE_ONLINE</span>
          </div>
          <a
            href="#dna-viewer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>LAUNCH RUNTIME</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
