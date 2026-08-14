"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Brain, Zap, Shield, Lock } from "lucide-react";
import { AiCategoryData, TopicDetail } from "@/data/aiAutomationData";

interface AiAutomationInteractiveFeaturesProps {
  category: AiCategoryData;
}

const getTopicIcon = (index: number) => {
  const icons = [Brain, Zap, Shield, Lock];
  const IconComponent = icons[index % icons.length];
  return <IconComponent className="w-5 h-5" />;
};

export const AiAutomationInteractiveFeatures: React.FC<AiAutomationInteractiveFeaturesProps> = ({ category }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState<number>(0);
  const activeTopic: TopicDetail = category.topics[activeTopicIndex] || category.topics[0];

  return (
    <div id="features" className="w-full bg-white text-slate-900 py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Light theme with mini sub-heading tag & larger title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-purple-50 text-purple-700 border border-purple-200 mb-4">
            Capabilities & Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
            <span>{category.sectionTitle.split(" ").slice(0, -2).join(" ")} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {category.sectionTitle.split(" ").slice(-2).join(" ").toLowerCase()}
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal mt-3.5 leading-relaxed max-w-xl mx-auto">
            {category.sectionSubtitle}
          </p>
        </div>

        {/* Top 4 Interactive Topic Cards (Light Theme Secoda Grid Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {category.topics.map((topic, idx) => {
            const isActive = idx === activeTopicIndex;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicIndex(idx)}
                className={`p-5.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]"
                    : "bg-slate-100/80 text-slate-700 border-slate-200/80 hover:bg-slate-200/70 hover:text-slate-900"
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isActive ? "bg-white/15 text-white" : "bg-white text-purple-700 border border-slate-200 shadow-xs"
                    }`}
                  >
                    {getTopicIcon(idx)}
                  </div>
                  <h3 className={`text-base sm:text-lg font-semibold mb-1.5 ${isActive ? "text-white" : "text-slate-900"}`}>
                    {topic.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isActive ? "text-slate-300" : "text-slate-600"}`}>
                    {topic.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Interactive Feature Container (Light Theme Secoda Card Layout) */}
        <div className="w-full bg-slate-100/90 text-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-4 border border-purple-200">
                {activeTopic.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                {activeTopic.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {activeTopic.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8 w-full">
                {activeTopic.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action Button */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-sans font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>{activeTopic.ctaText}</span>
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Right Monitor / Laptop Frame - Styled matching screenshot reference */}
            <div className="lg:col-span-7 w-full relative flex flex-col items-center justify-center">
              <div className="w-full relative rounded-2xl border-[10px] sm:border-[14px] border-black bg-black shadow-2xl overflow-hidden">
                {/* Screen Display Area displaying Real-Life Photo */}
                <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-lg overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTopic.id + "-laptop"}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeTopic.laptopImage}
                        alt={activeTopic.laptopImageAlt}
                        fill
                        priority
                        className="object-cover object-center contrast-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Metallic Stand Base - Styled matching screenshot reference */}
              <div className="w-28 sm:w-36 h-5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-b-xl shadow-md border-t border-slate-300/80 -mt-0.5" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
