"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Logo */}
        <Link href="/" suppressHydrationWarning className="flex items-center gap-3 cursor-pointer group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center Menu Links (Desktop >= 1024px) */}
        <div className={`hidden lg:flex items-center gap-9 text-base font-sans font-medium text-slate-900`}>
          {/* Home */}
          <Link
            href="/"
            className={`relative py-6 group transition-colors text-slate-700 hover:text-slate-900`}
          >
            <span>Home</span>
            <span className={`absolute bottom-4 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full bg-slate-900`} />
          </Link>

          {/* Services Mega Dropdown Trigger */}
          <div
            className={`relative py-6 cursor-pointer group text-slate-700`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className={`flex items-center gap-1 transition-colors hover:text-slate-900`}>
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-slate-900" : "text-slate-500"
                }`}
              />
            </div>
            <span
              className={`absolute bottom-4 left-0 h-0.5 transition-all duration-300 rounded-full ${
                isServicesOpen ? "w-full" : "w-0 group-hover:w-full"
              } bg-white`}
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
                            ? "bg-white text-slate-900 shadow-sm font-semibold scale-[1.01]"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 font-normal"
                            }`}
                        >
                          <div
                            className={`p-1.5 rounded-lg flex items-center justify-center ${isSelected
                              ? "bg-zinc-100 text-slate-900"
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
                      <div className="w-11 h-11 rounded-xl bg-white text-slate-900 flex items-center justify-center shadow-xs shrink-0 border border-zinc-200/60">
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
                              <ArrowRight
                                className={`w-3.5 h-3.5 transition-all ${isHovered
                                  ? "opacity-100 translate-x-0 text-slate-900"
                                  : "opacity-0 -translate-x-2"
                                  }`}
                              />
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

          {/* Projects */}
          <Link
            href="/projects"
            className={`relative py-6 group transition-colors text-slate-700 hover:text-slate-900`}
          >
            <span>Projects</span>
            <span className={`absolute bottom-4 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full bg-slate-900`} />
          </Link>
        </div>

        {/* Right CTA Button (Desktop >= 1024px) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="p-[1.25px] rounded-full bg-gradient-to-r from-violet-600/70 via-rose-500/70 to-amber-500/70 inline-block shadow-xs hover:shadow-md transition-all active:scale-95 group cursor-pointer"
          >
            <div className="px-6 py-2.5 rounded-full bg-white group-hover:bg-slate-50 transition-colors">
              <span className="font-sans font-medium text-sm text-slate-900">
                Contact Us
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger Toggle Button (< 1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-slate-900 text-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200/80 shadow-2xs cursor-pointer focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform rotate-90" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile & Tablet Overlay Menu (< 1024px) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] w-full h-screen bg-white text-slate-900 flex flex-col justify-between px-6 py-6 sm:px-10 sm:py-8 overflow-y-auto font-sans animate-fadeIn">
          
          {/* Header Row: Logo & Close Button */}
          <div className="flex items-center justify-between w-full pb-6 border-b border-slate-100 shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200/80 shadow-2xs cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Main Navigation Links */}
          <div className="my-auto py-8 space-y-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-normal text-slate-900 hover:text-blue-600 tracking-tight transition-colors font-sans"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="space-y-3">
              <button
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-normal text-slate-900 hover:text-blue-600 tracking-tight transition-colors font-sans"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-7 h-7 text-slate-400 transition-transform duration-300 ${
                    mobileServicesAccordion ? "rotate-180 text-slate-900" : ""
                  }`}
                />
              </button>

              {mobileServicesAccordion && (
                <div className="pt-2 pl-4 space-y-6 border-l-2 border-slate-200">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className="space-y-2">
                        <div className="flex items-center gap-2.5 text-base font-semibold text-slate-900">
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{cat.title}</span>
                        </div>
                        <div className="pl-8 space-y-1.5">
                          {cat.subServices.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href="#contact"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors"
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

            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-normal text-slate-900 hover:text-blue-600 tracking-tight transition-colors font-sans"
            >
              Projects
            </Link>
          </div>

          {/* Footer Info & Contact CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-6 shrink-0">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-slate-900 text-white text-center font-semibold text-base hover:bg-slate-800 transition-colors shadow-md"
            >
              Contact Us
            </Link>

            <div className="flex items-center justify-between text-xs text-slate-400 font-medium font-sans">
              <span>© {new Date().getFullYear()} Dexze Inc.</span>
              <span>hello@dexze.com</span>
            </div>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
