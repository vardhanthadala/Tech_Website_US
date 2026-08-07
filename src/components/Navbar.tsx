"use client";

import React from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-orange-500 flex items-center justify-center text-white shadow-md font-bold text-xl">
            D
          </div>
          <span className="font-sans text-2xl font-extrabold tracking-tight text-slate-900">
            DianApps
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-sans font-medium text-slate-700">
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600 transition-colors">
            <span className="text-orange-600 font-semibold flex items-center gap-1">
              Let&apos;s Talk AI
            </span>
            <ChevronDown className="w-4 h-4 text-orange-600" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Services</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Industries</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Portfolio</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Hire Resources</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Learn</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Right Action Pill Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-sans font-semibold text-sm transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
