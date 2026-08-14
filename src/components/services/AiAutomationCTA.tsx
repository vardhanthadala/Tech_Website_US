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
        
        {/* Main CTA Black & White Styled Banner matching Hero Section */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-black p-8 sm:p-12 lg:p-16 text-center text-white border border-zinc-800 shadow-2xl mb-8">
          {/* Subtle Monochromatic Light Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

          {/* Centered Premium Icon Badge */}
          <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          {/* Main Elegant Title */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] mb-4 max-w-4xl mx-auto whitespace-nowrap">
            {currentCta.title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            {currentCta.subtitle}
          </p>

          {/* Action CTA Button */}
          <div className="flex justify-center">
            <a
              href="/#contact"
              className="group px-8 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-gradient-to-r hover:from-[#e947f5] hover:to-[#7a95e6] hover:text-white font-serif italic font-semibold text-base transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2 border border-zinc-200 hover:border-transparent"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Three Step Workflow Cards - Styled in Black & White theme matching CTA box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950 border border-zinc-850/80 rounded-2xl p-6 text-left shadow-sm">
            <h3 className="font-sans font-bold text-sm text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-bold mr-1.5 font-mono">01</span> Define your scope
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Map your files, database connections, and manual business workflows.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-850/80 rounded-2xl p-6 text-left shadow-sm">
            <h3 className="font-sans font-bold text-sm text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-bold mr-1.5 font-mono">02</span> Train and customize
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Select or fine-tune models tailored strictly to your terminology and security guidelines.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-850/80 rounded-2xl p-6 text-left shadow-sm">
            <h3 className="font-sans font-bold text-sm text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-bold mr-1.5 font-mono">03</span> Automate everywhere
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Integrate agents with Slack, email, internal APIs, or directly embed on your platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
