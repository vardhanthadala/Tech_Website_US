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
    <section className="w-full bg-[#fdfbf7] py-16 lg:py-24 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Delphi-style Gradient Banner (Light Warm Palette) */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#ff6b4a] via-[#f97316] to-[#e11d48] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-orange-500/10 mb-6">
          {/* Subtle Ambient Light Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.3),transparent_60%)] pointer-events-none" />

          {/* Centered Monogram / Symbol */}
          <div className="mx-auto text-2xl font-serif text-white/90 mb-5 tracking-widest select-none">
            \u220B\u220C
          </div>

          {/* Main Elegant Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
            {currentCta.title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-white/90 text-sm sm:text-base font-normal max-w-md mx-auto mb-9 leading-relaxed">
            {currentCta.subtitle}
          </p>

          {/* Action CTA White Button */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
          </div>
        </div>

        {/* 3 Step Light Cards matching Reference Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#f7f3eb]/90 border border-[#e8dfd1]/80 rounded-3xl p-7 text-left shadow-2xs hover:bg-[#f4efe4] transition-colors">
            <h3 className="font-sans font-semibold text-base sm:text-lg text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-[#ea580c] font-mono font-semibold text-base sm:text-lg">01</span>
              <span>Define your scope</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Map your files, database connections, and manual business workflows.
            </p>
          </div>

          <div className="bg-[#f7f3eb]/90 border border-[#e8dfd1]/80 rounded-3xl p-7 text-left shadow-2xs hover:bg-[#f4efe4] transition-colors">
            <h3 className="font-sans font-semibold text-base sm:text-lg text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-[#ea580c] font-mono font-semibold text-base sm:text-lg">02</span>
              <span>Train and customize</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Select or fine-tune models tailored strictly to your terminology and security guidelines.
            </p>
          </div>

          <div className="bg-[#f7f3eb]/90 border border-[#e8dfd1]/80 rounded-3xl p-7 text-left shadow-2xs hover:bg-[#f4efe4] transition-colors">
            <h3 className="font-sans font-semibold text-base sm:text-lg text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-[#ea580c] font-mono font-semibold text-base sm:text-lg">03</span>
              <span>Automate everywhere</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Integrate agents with Slack, email, internal APIs, or directly embed on your platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
