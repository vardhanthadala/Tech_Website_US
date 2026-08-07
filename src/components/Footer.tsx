"use client";

import React from "react";
import { Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white py-10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-orange-500 text-white flex items-center justify-center font-bold text-sm">
            D
          </div>
          <span className="text-slate-900 font-bold text-sm">DianApps</span>
          <span>© 2026 AI-First Digital Partner</span>
        </div>

        <div className="flex items-center gap-6 font-mono">
          <span className="text-emerald-600 flex items-center gap-1.5 font-sans font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            SYSTEM_ONLINE
          </span>
          <a
            href="https://github.com/vardhanthadala/Tech_Website_US.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 flex items-center gap-1 transition-colors"
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
