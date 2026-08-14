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
    <section className="w-full bg-[#fcfcfd] py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Light Combination Styled Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/80 p-8 sm:p-12 lg:p-16 text-center text-slate-900 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          {/* Subtle Ambient Radial Light Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.06),transparent_70%)] pointer-events-none" />

          {/* Centered Premium Icon Badge */}
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100/80 flex items-center justify-center border border-slate-200/90 shadow-2xs backdrop-blur-md mb-6">
            <Sparkles className="w-5 h-5 text-slate-800" />
          </div>

          {/* Main Elegant Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-4 max-w-4xl mx-auto leading-tight">
            {currentCta.title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            {currentCta.subtitle}
          </p>

          {/* Action CTA Button */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-semibold text-base transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
