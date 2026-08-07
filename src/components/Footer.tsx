"use client";

import React from "react";
import { Dna, Code2, Terminal, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            <Dna className="w-4 h-4" />
          </div>
          <span className="text-slate-200 font-bold">NEXUS_BIO TECH</span>
          <span>© 2026 Tech Page US</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            SYSTEM_OPERATIONAL
          </span>
          <a
            href="https://github.com/vardhanthadala/Tech_Website_US.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
