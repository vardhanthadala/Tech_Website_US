"use client";

import React, { useState } from "react";
import DynamicServiceCanvas, { ServiceMode } from "./DynamicServiceCanvas";
import { Brain, Cpu, Globe, Smartphone, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<ServiceMode>("AI");

  const serviceDetails = {
    AI: {
      title: "Artificial Intelligence (AI)",
      tagline: "Autonomous Agents & Neural Intelligence",
      desc: "Custom LLMs, Generative AI models, Retrieval-Augmented Generation (RAG), and autonomous decision agents designed to supercharge your business capabilities.",
      highlights: ["Custom LLM Training", "Autonomous AI Agents", "RAG Knowledge Engines", "Natural Language Processing"],
      icon: Brain,
    },
    ML: {
      title: "Machine Learning (ML)",
      tagline: "Predictive Analytics & Deep Learning",
      desc: "End-to-end Machine Learning pipelines from data preprocessing to real-time MLOps, computer vision, and predictive analytics models.",
      highlights: ["Predictive Data Models", "Computer Vision & OCR", "MLOps Pipelines", "Real-Time Inference"],
      icon: Cpu,
    },
    Web: {
      title: "Web Development",
      tagline: "High-Performance Next.js Web Apps",
      desc: "Blazing fast, scalable web applications built with Next.js, React, TypeScript, and modern CSS architecture optimized for search engines and conversion.",
      highlights: ["Full-Stack Next.js Apps", "High SEO & Lighthouse Scores", "Interactive Web Visualizations", "Headless CMS Integrations"],
      icon: Globe,
    },
    App: {
      title: "App Development",
      tagline: "Cross-Platform iOS & Android Apps",
      desc: "Sleek, responsive native and React Native mobile applications delivering seamless user experiences, offline capabilities, and high performance.",
      highlights: ["iOS & Android Mobile Apps", "React Native & Flutter", "Real-Time Data Sync", "App Store Publishing"],
      icon: Smartphone,
    },
    Cloud: {
      title: "Cloud Services",
      tagline: "AWS / Azure & DevOps Infrastructure",
      desc: "Scalable cloud architecture, Kubernetes containerization, CI/CD automation pipelines, serverless setups, and 24/7 reliability engineering.",
      highlights: ["AWS / Azure Architecture", "Kubernetes & Docker", "Automated CI/CD Pipelines", "Serverless Microservices"],
      icon: Cloud,
    },
  };

  const activeSvc = serviceDetails[currentMode];
  const Icon = activeSvc.icon;

  return (
    <section id="hero" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Top Headline */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-mono text-stone-800">
          <span>NEXT-GEN TECH AGENCY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-950 leading-tight font-sans">
          Engineering the Future of AI, Web & Cloud
        </h1>
        <p className="text-stone-600 font-sans text-base sm:text-lg">
          Click any service tab inside the canvas below to watch the 3D particle swarm morph into its signature animation!
        </p>
      </div>

      {/* Main Interactive 3D Particle Morphing Canvas Visualizer */}
      <div className="w-full">
        <DynamicServiceCanvas currentMode={currentMode} onSelectMode={setCurrentMode} />
      </div>

      {/* Active Service Detail Card */}
      <div className="w-full mt-8 p-8 rounded-3xl bg-white border border-stone-200 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-all animate-fadeIn">
        <div className="flex items-start gap-5">
          <div className="p-4 rounded-2xl bg-stone-950 text-white shadow-md shrink-0">
            <Icon className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold font-sans text-stone-950">{activeSvc.title}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
                {currentMode} Engine
              </span>
            </div>
            <p className="text-xs font-mono text-stone-500">{activeSvc.tagline}</p>
            <p className="text-sm text-stone-600 font-sans max-w-2xl leading-relaxed">{activeSvc.desc}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {activeSvc.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-sans text-stone-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="px-6 py-3.5 rounded-2xl bg-stone-950 hover:bg-stone-800 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-md shrink-0 self-stretch lg:self-auto justify-center"
        >
          <span>Get Started with {currentMode}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
