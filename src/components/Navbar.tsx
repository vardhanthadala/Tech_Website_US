"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ExternalLink,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ai");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState<boolean>(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const categories = [
    {
      id: "ai",
      title: "AI Automation",
      icon: Brain,
      subtitle: "AI Automation & Autonomous Agentic Systems",
      desc: "Revolutionize your workflows with Agentic AI, Autonomous Agents, Custom LLMs, and Generative AI solutions.",
      subServices: [
        { name: "Autonomous AI Agents", slug: "/services/ai-automation/autonomous-ai-agents", desc: "Intelligent agents that plan, execute, and automate multi-step complex tasks." },
        { name: "Agentic AI Systems", slug: "/services/ai-automation/agentic-ai-systems", desc: "Self-governing AI architectures designed for enterprise decision making." },
        { name: "Generative AI & LLMs", slug: "/services/ai-automation/generative-ai-llms", desc: "Custom fine-tuned AI models trained on your proprietary enterprise data." },
        { name: "RAG Knowledge Engines", slug: "/services/ai-automation/rag-knowledge-engines", desc: "Retrieve accurate, real-time insights from internal documentation." },
      ],
    },
    {
      id: "web",
      title: "Web Development",
      icon: Globe,
      subtitle: "Full-Stack Web Engineering & Modern CMS",
      desc: "Blazing fast Next.js & React web applications designed to convert and scale effortlessly.",
      subServices: [
        { name: "Full-Stack Next.js Apps", slug: "/services/web-development/full-stack-nextjs-apps", desc: "Scalable server-rendered web applications with high performance." },
        { name: "Headless CMS & E-Commerce", slug: "/services/web-development/headless-cms-ecommerce", desc: "Flexible content and e-commerce platforms powered by modern APIs." },
        { name: "Progressive Web Apps (PWA)", slug: "/services/web-development/progressive-web-apps", desc: "Fast web applications that look, feel, and function like native apps." },
        { name: "Interactive 3D Web & WebGL", slug: "/services/web-development/interactive-3d-webgl", desc: "Custom WebGL visualizers and interactive 3D canvas experiences." },
      ],
    },
    {
      id: "app",
      title: "App Development",
      icon: Smartphone,
      subtitle: "Mobile App Development Services",
      desc: "Build scalable, high-performing native and cross-platform apps for iOS and Android.",
      subServices: [
        { name: "iOS & Swift Apps", slug: "/services/app-development/ios-native-swift", desc: "Native iOS 18 apps built with SwiftUI, Metal GPU shaders, and CoreData." },
        { name: "Android & Kotlin Apps", slug: "/services/app-development/android-kotlin", desc: "Modern Android apps powered by Jetpack Compose UI & Kotlin Coroutines." },
        { name: "Cross-Platform Mobile Apps", slug: "/services/app-development/cross-platform-flutter-react-native", desc: "Single-codebase Flutter & React Native apps with native C++ bridges." },
        { name: "Enterprise Mobile Suites", slug: "/services/app-development/enterprise-mobile-solutions", desc: "Mission-critical enterprise mobile platforms with Okta SSO & Intune MDM." },
      ],
    },
    {
      id: "uiux",
      title: "UI / UX Design",
      icon: Palette,
      subtitle: "User-Centered Design & Interactive UI",
      desc: "Crafting intuitive user interfaces, interactive wireframes, and modern design systems.",
      subServices: [
        { name: "Web Application UI/UX", slug: "/services/ui-ux-design/web-application-design", desc: "Intuitive data-dense SaaS dashboards and web application interfaces." },
        { name: "Mobile App UI/UX Design", slug: "/services/ui-ux-design/mobile-app-ui-ux", desc: "Engaging iOS & Android mobile screens with liquid micro-interactions." },
        { name: "Design Systems & Tokens", slug: "/services/ui-ux-design/design-systems-component-libraries", desc: "Enterprise Figma libraries & reusable code-synced design tokens." },
        { name: "UX Audit & Conversion Growth", slug: "/services/ui-ux-design/ux-audit-conversion-optimization", desc: "Data-driven usability research and conversion rate optimization." },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Services",
      icon: Cloud,
      subtitle: "Cloud Infrastructure & DevOps Automation",
      desc: "Enterprise cloud architecture, containerization, microservices, and CI/CD pipelines.",
      subServices: [
        { name: "AWS & Azure Infrastructure", slug: "/services/cloud-services/aws-azure-infrastructure", desc: "Seamless cloud migration and architecture optimization on AWS & Azure." },
        { name: "Kubernetes & Docker", slug: "/services/cloud-services/kubernetes-docker", desc: "Container orchestration for zero-downtime microservice deployments." },
        { name: "CI/CD Pipeline Automation", slug: "/services/cloud-services/cicd-pipeline-automation", desc: "Automated testing, building, and deployment release workflows." },
        { name: "Serverless Architecture", slug: "/services/cloud-services/serverless-architecture", desc: "Cost-effective serverless APIs with automatic instant scaling." },
      ],
    },
  ];

  const activeCat = categories.find((c) => c.id === selectedCategory) || categories[0];
  const ActiveCatIcon = activeCat.icon;

  return (
    <>
      {/* ─── Floating Island Navbar ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
          isScrolled ? "pt-3 px-4" : "pt-0 px-0"
        }`}
      >
        <div
          className={`w-full transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-[1200px] rounded-2xl bg-white/80 backdrop-blur-2xl border border-slate-200/70 shadow-lg shadow-black/[0.04]"
              : "max-w-full bg-transparent border-b border-transparent"
          }`}
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "px-5 h-[60px]" : "px-6 sm:px-8 lg:px-12 h-[72px]"
            }`}
          >

            {/* ─── Logo ─── */}
            <Link href="/" suppressHydrationWarning className="flex items-center gap-2.5 cursor-pointer group shrink-0">
              <Image
                src="/logo.png"
                alt="Dexze"
                width={110}
                height={32}
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${isScrolled ? "h-[26px]" : "h-[30px]"
                  }`}
                priority
              />
            </Link>

            {/* ─── Desktop Center Links (lg+) ─── */}
            <div className="hidden lg:flex items-center">
              <div
                className={`flex items-center rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-slate-100/80 px-1.5 py-1 gap-0.5"
                    : "bg-transparent px-1.5 py-1 gap-0.5"
                }`}
              >

                {/* Home */}
                <Link
                  href="/"
                  className="px-4 py-1.5 rounded-full text-[13.5px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 transition-all duration-200"
                >
                  Home
                </Link>

                {/* Services */}
                <div
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    className={`px-4 py-1.5 rounded-full text-[13.5px] font-medium flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                      isServicesOpen
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/60"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ─── Services Mega Dropdown ─── */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[720px] z-50"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      {/* Subtle connector arrow */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-slate-200/80 rounded-[2px]" />

                      <div className="rounded-[20px] bg-white border border-slate-200/80 shadow-2xl shadow-black/[0.12] overflow-hidden animate-fadeIn">
                        <div className="flex">
                          {/* Left: Category Tabs */}
                          <div className="w-[220px] bg-slate-50/80 p-3 flex flex-col gap-0.5 shrink-0 border-r border-slate-100">
                            {categories.map((cat) => {
                              const Icon = cat.icon;
                              const isActive = selectedCategory === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  onMouseEnter={() => setSelectedCategory(cat.id)}
                                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-white text-slate-900 shadow-sm"
                                    : "text-slate-500 hover:text-slate-800 hover:bg-white/60"
                                    }`}
                                >
                                  <div className={`p-1.5 rounded-lg transition-colors ${isActive ? "bg-slate-100 text-slate-800" : "bg-slate-200/50 text-slate-400"
                                    }`}>
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-[13px] font-medium">{cat.title}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Right: Active Category Details */}
                          <div className="flex-1 p-5">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/60">
                                <ActiveCatIcon className="w-4 h-4 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="text-[14px] font-semibold text-slate-900 tracking-tight">{activeCat.subtitle}</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5 leading-relaxed">{activeCat.desc}</p>
                              </div>
                            </div>

                            {/* Sub-services Grid */}
                            <div className="grid grid-cols-2 gap-2">
                              {activeCat.subServices.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.slug}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group/sub p-3 rounded-xl cursor-pointer hover:bg-slate-50 transition-all duration-200 block"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[13px] font-medium text-slate-700 group-hover/sub:text-slate-900 transition-colors">
                                      {sub.name}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-transparent group-hover/sub:text-slate-400 transition-all" />
                                  </div>
                                  <p className="text-[11.5px] text-slate-400 mt-1 leading-relaxed group-hover/sub:text-slate-500 transition-colors">
                                    {sub.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Projects */}
                <Link
                  href="/projects"
                  className="px-4 py-1.5 rounded-full text-[13.5px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 transition-all duration-200"
                >
                  Projects
                </Link>

                {/* Creative */}
                <Link
                  href="https://www.dexze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full text-[13.5px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 transition-all duration-200 flex items-center gap-1"
                >
                  Creative
                  <ExternalLink className="w-3 h-3 opacity-40" />
                </Link>
              </div>
            </div>

            {/* ─── Right: CTA + Mobile Toggle ─── */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="cta-shimmer-btn hidden lg:inline-block rounded-full transition-all active:scale-95 cursor-pointer"
              >
                <div className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-sans font-medium text-sm text-slate-900">
                    Contact Us
                  </span>
                </div>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex lg:hidden items-center justify-center w-10 h-10 rounded-xl bg-slate-100/80 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-[18px] h-[18px]" />
                ) : (
                  <Menu className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Full-screen Mobile Overlay ─── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="Dexze" width={110} height={32} className="h-7 w-auto object-contain" priority />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-[18px] h-[18px]" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 px-6 py-10 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3.5 rounded-2xl text-[22px] sm:text-[26px] font-medium text-slate-900 hover:bg-slate-50 tracking-tight transition-colors"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-[22px] sm:text-[26px] font-medium text-slate-900 hover:bg-slate-50 tracking-tight transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${mobileServicesAccordion ? "rotate-180 text-slate-900" : ""
                    }`}
                />
              </button>

              {mobileServicesAccordion && (
                <div className="mt-2 mx-4 space-y-4 pl-4 border-l-2 border-slate-200 pb-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className="space-y-2">
                        <div className="flex items-center gap-2.5 text-[15px] font-semibold text-slate-800">
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{cat.title}</span>
                        </div>
                        <div className="pl-9 space-y-1.5">
                          {cat.subServices.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.slug}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-[13.5px] text-slate-500 hover:text-slate-900 transition-colors py-0.5"
                            >
                              {sub.name}
                            </Link>
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
              className="block px-4 py-3.5 rounded-2xl text-[22px] sm:text-[26px] font-medium text-slate-900 hover:bg-slate-50 tracking-tight transition-colors"
            >
              Projects
            </Link>

            <Link
              href="https://www.dexze.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3.5 rounded-2xl text-[22px] sm:text-[26px] font-medium text-slate-900 hover:bg-slate-50 tracking-tight transition-colors"
            >
              Creative
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Footer */}
          <div className="px-6 py-6 border-t border-slate-100 space-y-5 shrink-0">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-slate-900 text-white text-[15px] font-semibold hover:bg-slate-800 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>© {new Date().getFullYear()} Dexze Inc.</span>
              <span>hello@dexze.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
