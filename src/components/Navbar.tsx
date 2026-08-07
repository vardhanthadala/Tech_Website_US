"use client";

import React from "react";
import { Brain, Cpu, Globe, Smartphone, Cloud, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-stone-950 text-white shadow-md">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <span className="font-sans text-lg font-extrabold tracking-tight text-stone-950">
              NEXUS TECH
            </span>
            <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-300">
              SERVICES
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono font-medium text-stone-600">
          <a href="#neural-network" className="hover:text-stone-950 transition-colors">
            NEURAL_NETWORK
          </a>
          <a href="#services" className="hover:text-stone-950 transition-colors">
            OUR_SERVICES
          </a>
          <a href="#tech-stack" className="hover:text-stone-950 transition-colors">
            TECH_STACK
          </a>
          <a href="#contact" className="hover:text-stone-950 transition-colors">
            CONTACT
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-stone-950 hover:bg-stone-800 text-white font-mono font-semibold text-xs transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
