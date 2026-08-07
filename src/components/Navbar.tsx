"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Brain, Globe, Smartphone, Palette, Cloud } from "lucide-react";

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
        <div className="flex items-center gap-3 cursor-pointer group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </div>

        {/* Center Menu Links: Home, Services, Contact us */}
        <div className="hidden md:flex items-center gap-8 text-base font-sans font-medium text-slate-700">
          {/* Home */}
          <a
            href="/"
            className="hover:text-[#11244e] font-semibold transition-colors py-6"
          >
            Home
          </a>

          {/* Services with Mega Dropdown */}
          <div
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 hover:text-[#11244e] transition-colors">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#11244e] group-hover:rotate-180 transition-transform duration-200" />
            </div>

            {/* Services Dropdown */}
            {activeDropdown === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] p-4 rounded-2xl bg-white shadow-2xl border border-slate-100 animate-fadeIn space-y-1">
                {servicesList.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href="#services"
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
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact us */}
          <a
            href="#contact"
            className="hover:text-[#11244e] transition-colors py-6"
          >
            Contact us
          </a>
        </div>

        {/* Right Action Button */}
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
