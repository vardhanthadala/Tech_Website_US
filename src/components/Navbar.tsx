"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, Brain, Globe, Smartphone, Palette, Cloud } from "lucide-react";

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const servicesList = [
    { title: "AI Automation", desc: "Custom LLMs, Autonomous Agents & Workflows", icon: Brain },
    { title: "Web Development", desc: "Full-Stack Next.js & Modern Web Apps", icon: Globe },
    { title: "Mobile App Development", desc: "Native iOS & Android, React Native & Flutter", icon: Smartphone },
    { title: "UI / UX Design", desc: "Interactive Wireframes & High-Fidelity UI", icon: Palette },
    { title: "Cloud Services", desc: "AWS, Azure, DevOps & Kubernetes", icon: Cloud },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f4f6fa]/90 backdrop-blur-xl border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Stylized 'D' Icon Mark */}
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#11244e]">
              <path
                d="M8 4H16C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28H8V4Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11V21"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute bottom-1 right-0 w-2.5 h-2.5 rounded-full bg-orange-500 ring-2 ring-[#f4f6fa]" />
          </div>
          <span className="font-sans text-2xl font-extrabold tracking-tight text-[#11244e]">
            Dexze
          </span>
        </div>

        {/* Center Menu Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-sans font-medium text-slate-700">
          {/* Let's Talk AI */}
          <div
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("ai")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 text-[#e86629] font-semibold hover:text-[#d35319] transition-colors">
              <span>Let&apos;s Talk AI</span>
              <ChevronDown className="w-4 h-4 text-[#e86629] group-hover:rotate-180 transition-transform duration-200" />
            </div>

            {/* Dropdown Menu */}
            {activeDropdown === "ai" && (
              <div className="absolute top-full left-0 w-80 p-4 rounded-2xl bg-white shadow-2xl border border-slate-100 animate-fadeIn space-y-2">
                <div className="p-3 rounded-xl bg-orange-50 hover:bg-orange-100/70 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#11244e]">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span>AI Consultation</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Free AI readiness audit & roadmap for your enterprise.</p>
                </div>
                <div className="p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="font-semibold text-sm text-slate-800">Generative AI & LLMs</div>
                  <p className="text-xs text-slate-500 mt-0.5">Custom model fine-tuning & RAG architectures.</p>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 hover:text-[#11244e] transition-colors">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] group-hover:rotate-180 transition-transform duration-200" />
            </div>

            {/* Services Mega Dropdown */}
            {activeDropdown === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] p-4 rounded-2xl bg-white shadow-2xl border border-slate-100 animate-fadeIn space-y-1">
                {servicesList.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl hover:bg-slate-50 transition-all flex items-start gap-3 cursor-pointer group/item"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-[#11244e] group-hover/item:bg-[#11244e] group-hover/item:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-900 group-hover/item:text-[#11244e]">
                          {s.title}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industries */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#11244e] transition-colors py-6 group">
            <span>Industries</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] transition-colors" />
          </div>

          {/* Portfolio */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#11244e] transition-colors py-6 group">
            <span>Portfolio</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] transition-colors" />
          </div>

          {/* Hire Resources */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#11244e] transition-colors py-6 group">
            <span>Hire Resources</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] transition-colors" />
          </div>

          {/* Learn */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#11244e] transition-colors py-6 group">
            <span>Learn</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] transition-colors" />
          </div>
        </div>

        {/* Right CTA Button matching reference image gradient border */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="relative p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 hover:scale-105 transition-transform duration-200 group"
          >
            <div className="px-6 py-2.5 rounded-full bg-[#f4f6fa] group-hover:bg-transparent transition-colors">
              <span className="font-sans font-semibold text-sm text-[#11244e] group-hover:text-white transition-colors">
                Contact Us
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
