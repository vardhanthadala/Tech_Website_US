"use client";

import React from "react";
import { Brain, Cpu, Globe, Smartphone, Cloud, CheckCircle2, ArrowUpRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const serviceList = [
    {
      icon: Brain,
      title: "Artificial Intelligence (AI)",
      subtitle: "Generative AI & Intelligent Agents",
      desc: "Custom LLM integrations, fine-tuned AI models, RAG systems, and autonomous agent workflows designed to automate and empower your business operations.",
      features: ["Custom LLM & RAG Solutions", "Autonomous AI Agents", "Natural Language Processing", "Generative AI Workflows"],
      badge: "Core AI",
    },
    {
      icon: Cpu,
      title: "Machine Learning (ML)",
      subtitle: "Predictive Analytics & Computer Vision",
      desc: "End-to-end Machine Learning pipelines from data preprocessing to model deployment (MLOps), predictive modeling, and real-time computer vision.",
      features: ["Predictive Data Models", "Computer Vision & OCR", "MLOps & Model Pipelines", "Deep Learning Systems"],
      badge: "Analytics",
    },
    {
      icon: Globe,
      title: "Web Development",
      subtitle: "Next.js & Modern Web Applications",
      desc: "Ultra-fast, scalable web applications built with Next.js, React, TypeScript, and modern CSS frameworks optimized for search engines and conversion.",
      features: ["Full-Stack Next.js Apps", "High Performance & SEO", "Interactive Web Visualizations", "Headless CMS & APIs"],
      badge: "Web Tech",
    },
    {
      icon: Smartphone,
      title: "App Development",
      subtitle: "Cross-Platform iOS & Android Apps",
      desc: "Sleek, responsive native and React Native mobile applications delivering seamless user experience, offline capabilities, and high performance.",
      features: ["iOS & Android Mobile Apps", "React Native & Flutter", "Real-Time Push & Sync", "App Store Deployment"],
      badge: "Mobile",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      subtitle: "AWS, Azure & DevOps Infrastructure",
      desc: "Scalable cloud architecture, Kubernetes containerization, CI/CD automation, serverless setups, and 24/7 reliability engineering.",
      features: ["Cloud Architecture (AWS/Azure)", "Docker & Kubernetes", "CI/CD Deployment Pipelines", "Serverless Microservices"],
      badge: "Infrastructure",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-mono text-stone-900">
          <span>WHAT WE BUILD</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-sans text-stone-950 tracking-tight">
          Our Technology Services
        </h2>
        <p className="text-stone-600 font-sans text-lg">
          We transform ideas into high-impact digital solutions across AI, Machine Learning, Web, Mobile, and Cloud Architecture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-stone-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-stone-950 text-white shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono font-medium">
                    {svc.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold font-sans text-stone-950 mb-1">{svc.title}</h3>
                <p className="text-xs font-mono text-stone-500 mb-4">{svc.subtitle}</p>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mb-6">{svc.desc}</p>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 mb-8">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-sans text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-950 text-stone-900 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-stone-950 group-hover:text-white"
              >
                <span>Explore {svc.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
