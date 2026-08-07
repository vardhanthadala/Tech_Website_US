"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ai");
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      id: "ai",
      title: "AI Automation",
      icon: Brain,
      subtitle: "AI Automation & Autonomous Agentic Systems",
      desc: "Revolutionize your workflows with Agentic AI, Autonomous Agents, Custom LLMs, and Generative AI solutions.",
      subServices: [
        { name: "Autonomous AI Agents", desc: "Intelligent agents that plan, execute, and automate multi-step complex tasks." },
        { name: "Agentic AI Systems", desc: "Self-governing AI architectures designed for enterprise decision making." },
        { name: "Generative AI & LLMs", desc: "Custom fine-tuned AI models trained on your proprietary enterprise data." },
        { name: "RAG Knowledge Engines", desc: "Retrieve accurate, real-time insights from internal documentation." },
      ],
    },
    {
      id: "web",
      title: "Web Development",
      icon: Globe,
      subtitle: "Full-Stack Web Engineering & Modern CMS",
      desc: "Blazing fast Next.js & React web applications designed to convert and scale effortlessly.",
      subServices: [
        { name: "Full-Stack Next.js Apps", desc: "Scalable server-rendered web applications with high performance." },
        { name: "Headless CMS & E-Commerce", desc: "Flexible content and e-commerce platforms powered by modern APIs." },
        { name: "Progressive Web Apps (PWA)", desc: "Fast web applications that look, feel, and function like native apps." },
        { name: "Interactive 3D Web & WebGL", desc: "Custom WebGL visualizers and interactive 3D canvas experiences." },
      ],
    },
    {
      id: "app",
      title: "App Development",
      icon: Smartphone,
      subtitle: "Mobile App Development Services",
      desc: "Build scalable, high-performing native and cross-platform apps for iOS and Android.",
      subServices: [
        { name: "iOS & Android App Development", desc: "High-performance native iOS and Android apps tailored for seamless user experiences." },
        { name: "Flutter Cross-Platform Apps", desc: "Fast, single-codebase cross-platform apps using Flutter technology." },
        { name: "React Native Apps", desc: "Flexible, native-like mobile apps using the React Native framework." },
        { name: "Super App Architecture", desc: "Multi-service super apps combining payments, chat, and booking." },
      ],
    },
    {
      id: "uiux",
      title: "UI / UX Design",
      icon: Palette,
      subtitle: "User-Centered Design & Interactive UI",
      desc: "Crafting intuitive user interfaces, interactive wireframes, and modern design systems.",
      subServices: [
        { name: "Interactive Wireframing", desc: "Map user journeys and interactive click-through prototypes before coding." },
        { name: "Design Systems & Tokens", desc: "Consistent component design libraries for web and mobile apps." },
        { name: "Mobile & Web UI Design", desc: "Pixel-perfect visual interfaces tailored for maximum engagement." },
        { name: "Data-Driven UX Audits", desc: "Usability research and funnel audits to maximize conversion rates." },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Services",
      icon: Cloud,
      subtitle: "Cloud Infrastructure & DevOps Automation",
      desc: "Enterprise cloud architecture, containerization, microservices, and CI/CD pipelines.",
      subServices: [
        { name: "AWS & Azure Infrastructure", desc: "Seamless cloud migration and architecture optimization on AWS & Azure." },
        { name: "Kubernetes & Docker", desc: "Container orchestration for zero-downtime microservice deployments." },
        { name: "CI/CD Pipeline Automation", desc: "Automated testing, building, and deployment release workflows." },
        { name: "Serverless Architecture", desc: "Cost-effective serverless APIs with automatic instant scaling." },
      ],
    },
  ];

  const activeCat = categories.find((c) => c.id === selectedCategory) || categories[0];
  const ActiveCatIcon = activeCat.icon;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-[#f4f5f7]/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </div>

        {/* Center Menu Links (Desktop >= 768px) */}
        <div className="hidden md:flex items-center gap-9 text-base font-sans font-medium text-slate-700">
          {/* Home */}
          <a
            href="/"
            className="relative py-6 group text-slate-700 hover:text-[#11244e] transition-colors"
          >
            <span>Home</span>
            <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-[#11244e] group-hover:w-full transition-all duration-300 rounded-full" />
          </a>

          {/* Services Mega Dropdown Trigger */}
          <div
            className="relative py-6 cursor-pointer group text-slate-700"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-[#11244e] transition-colors">
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#11244e]" : ""
                  }`}
              />
            </div>
            <span
              className={`absolute bottom-4 left-0 h-0.5 bg-[#11244e] transition-all duration-300 rounded-full ${isServicesOpen ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />

            {/* Clean Services Mega Dropdown Container */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[892px] p-[1px] rounded-[29px] bg-gradient-to-r from-violet-600/50 via-rose-500/50 to-amber-500/50 shadow-2xl shadow-slate-900/15 animate-fadeIn z-50 pointer-events-auto">
                <div className="w-full rounded-[28px] bg-white p-3 overflow-hidden flex">
                  {/* Left Sidebar Category Column */}
                  <div className="w-[300px] bg-[#f0f2f5] p-4 rounded-[22px] flex flex-col space-y-1 shrink-0">
                    <div className="text-[11.5px] font-sans font-semibold tracking-wider text-zinc-400 uppercase mb-3 px-3">
                      SERVICES
                    </div>
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          onMouseEnter={() => setSelectedCategory(cat.id)}
                          className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-sans text-xs text-left transition-all ${isSelected
                            ? "bg-white text-[#11244e] shadow-sm font-semibold scale-[1.01]"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 font-normal"
                            }`}
                        >
                          <div
                            className={`p-1.5 rounded-lg flex items-center justify-center ${isSelected
                              ? "bg-zinc-100 text-[#11244e]"
                              : "bg-zinc-200/70 text-zinc-500"
                              }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="truncate text-[14px]">{cat.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Sub-Services Area */}
                  <div className="flex-1 p-5.5 space-y-6 bg-white overflow-y-auto max-h-[520px]">
                    {/* Featured Header Banner */}
                    <div className="p-4 rounded-2xl bg-[#f4f5f8] border border-zinc-200/60 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white text-[#11244e] flex items-center justify-center shadow-xs shrink-0 border border-zinc-200/60">
                        <ActiveCatIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[15px] text-[#11244e] font-sans">
                          {activeCat.subtitle}
                        </h4>
                        <p className="text-xs text-zinc-500 mt-0.5 font-sans leading-relaxed">
                          {activeCat.desc}
                        </p>
                      </div>
                    </div>

                    {/* 2-Column Sub-Services List */}
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      {activeCat.subServices.map((sub, sIdx) => {
                        const isHovered = hoveredSubService === sub.name;
                        return (
                          <div
                            key={sIdx}
                            onMouseEnter={() => setHoveredSubService(sub.name)}
                            onMouseLeave={() => setHoveredSubService(null)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${isHovered
                              ? "border-zinc-200 bg-zinc-50/60 shadow-xs"
                              : "border-transparent bg-transparent"
                              }`}
                          >
                            <div className="font-semibold text-[14px] text-[#11244e] font-sans flex items-center justify-between">
                              <span className={isHovered ? "text-[#11244e]" : ""}>
                                {sub.name}
                              </span>
                              {isHovered && (
                                <ArrowRight className="w-3.5 h-3.5 text-[#11244e]" />
                              )}
                            </div>
                            <p className="text-xs text-zinc-500 mt-1 leading-relaxed font-sans font-normal">
                              {sub.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact us */}
          <a
            href="#contact"
            className="relative py-6 group text-slate-700 hover:text-[#11244e] transition-colors"
          >
            <span>Contact us</span>
            <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-[#11244e] group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
        </div>

        {/* Right Action Button (Desktop >= 768px) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="p-[1.25px] rounded-full bg-gradient-to-r from-violet-600/70 via-rose-500/70 to-amber-500/70 inline-block shadow-sm pointer-events-auto"
          >
            <div className="px-6 py-2 rounded-full bg-[#f4f6fa]">
              <span className="font-sans font-medium text-sm text-[#11244e]">
                Contact Us
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button (< 768px) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-200/60 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu (< 768px) */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#f4f5f7] border-b border-slate-200/80 px-6 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl animate-fadeIn">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-medium text-slate-800 hover:text-[#11244e] border-b border-slate-200/50"
          >
            Home
          </a>

          {/* Collapsible Mobile Services */}
          <div className="border-b border-slate-200/50 pb-2">
            <button
              onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
              className="w-full flex items-center justify-between py-2.5 text-base font-medium text-slate-800 hover:text-[#11244e]"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobileServicesAccordion ? "rotate-180 text-[#11244e]" : ""
                  }`}
              />
            </button>

            {mobileServicesAccordion && (
              <div className="mt-2 pl-3 space-y-4 border-l-2 border-slate-300">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.id} className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#11244e]">
                        <div className="p-1 rounded-md bg-zinc-200/80 text-zinc-500 flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{cat.title}</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        {cat.subServices.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1 text-xs text-slate-600 hover:text-[#11244e]"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-medium text-slate-800 hover:text-[#11244e] border-b border-slate-200/50"
          >
            Contact us
          </a>

          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full p-[1.25px] rounded-full bg-gradient-to-r from-violet-600/70 via-rose-500/70 to-amber-500/70 inline-block shadow-sm text-center"
            >
              <div className="w-full py-3 rounded-full bg-[#f4f6fa] text-center">
                <span className="font-sans font-medium text-sm text-[#11244e]">
                  Contact Us
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
