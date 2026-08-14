"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { AiCategoryData } from "@/data/aiAutomationData";

interface AiAutomationCTAProps {
  category: AiCategoryData;
}

export const AiAutomationCTA: React.FC<AiAutomationCTAProps> = ({ category }) => {
  // Category-specific CTA content
  const ctaContentMap: Record<string, { title: string; subtitle: string }> = {
    "autonomous-ai-agents": {
      title: "Deploy your first AI Agent",
      subtitle: "Integrate self-operating workflows and tools to automate operations, infinitely."
    },
    "agentic-ai-systems": {
      title: "Architect your Multi-Agent Swarm",
      subtitle: "Scale specialized AI networks to collaborate across business units, seamlessly."
    },
    "generative-ai-llms": {
      title: "Fine-tune your Custom LLMs",
      subtitle: "Train custom foundation models with absolute privacy and zero data leakage."
    },
    "rag-knowledge-engines": {
      title: "Connect your Enterprise Data",
      subtitle: "Build a zero-hallucination vector knowledge base cited with real-time sources."
    }
  };

  const currentCta = ctaContentMap[category.slug] || ctaContentMap["autonomous-ai-agents"];

  return (
    <section className="w-full bg-[#fdfbfd] py-16 lg:py-24 font-sans border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Violet Delphi-style Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#8b5cf6] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-purple-500/15">
          {/* Ambient Soft Light Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(192,132,252,0.35),transparent_60%)] pointer-events-none" />

          {/* Main Elegant Title strictly in one line in pure white cursive style */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight text-white mb-3 max-w-full mx-auto leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            {currentCta.title}
          </h2>

          {/* Subtitle Description strictly in 1 line */}
          <p className="text-white/90 text-sm sm:text-base font-normal max-w-2xl mx-auto mb-8 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
            {currentCta.subtitle}
          </p>

          {/* Action CTA White Button with Gradient Background Change on Hover */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-gradient-to-r hover:from-[#e947f5] hover:to-[#7a95e6] hover:text-white font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-white/40"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
