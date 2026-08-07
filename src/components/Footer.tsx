"use client";

import React from "react";
import { Brain, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stone-200/80 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-stone-500">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-stone-950 text-white">
            <Brain className="w-4 h-4" />
          </div>
          <span className="text-stone-900 font-bold">NEXUS TECH AGENCY</span>
          <span>© 2026 AI • ML • Web • App • Cloud</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-emerald-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            ALL_SERVICES_ONLINE
          </span>
          <a
            href="https://github.com/vardhanthadala/Tech_Website_US.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 flex items-center gap-1 transition-colors"
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
