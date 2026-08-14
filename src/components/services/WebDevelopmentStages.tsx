"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WebCategoryData } from "@/data/webDevelopmentData";

interface WebDevelopmentStagesProps {
  category: WebCategoryData;
}

export const WebDevelopmentStages: React.FC<WebDevelopmentStagesProps> = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll to a specific sentinel index when left list item is clicked
  const scrollToStage = (index: number) => {
    const sentinel = sentinelRefs.current[index];
    if (sentinel) {
      sentinel.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Scroll detection logic to update active stage based on scrolling sentinels
  useEffect(() => {
    const handleScroll = () => {
      const sentinels = sentinelRefs.current;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight / 2; // Midpoint trigger line

      let currentActive = 0;
      let minDistance = Infinity;

      sentinels.forEach((sentinel, idx) => {
        if (!sentinel) return;
        const rect = sentinel.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - threshold);

        if (distance < minDistance) {
          minDistance = distance;
          currentActive = idx;
        }
      });

      setActiveIndex(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category.stages]);

  const activeStage = category.stages[activeIndex] || category.stages[0];

  return (
    <div id="workflow" ref={containerRef} className="relative w-full bg-white font-sans text-slate-900 border-b border-slate-200">
      
      {/* 1. Header is placed naturally at the top of the section, so it scrolls away */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-6 text-left">
        
        {/* Workflow Badge above Heading */}
        <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-4 uppercase tracking-[0.18em] font-sans">
          Workflow
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] text-balance mb-4">
          <span>{category.howWeWorkTitleBold} </span>
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold font-normal">
            {category.howWeWorkTitleCursive}
          </span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
          {category.howWeWorkSubtitle}
        </p>
      </div>

      {/* 2. Sticky Presentation Wrapper (Locks only the layout grid in viewport) */}
      <div className="sticky top-20 w-full h-[calc(100vh-5rem)] flex flex-col justify-center py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* 2-Column Presentation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Stepper Milestones (Aligned naturally to eliminate white space gap) */}
            <div className="lg:col-span-4 space-y-8 flex flex-col justify-between min-h-[220px] lg:pt-0">
              <div className="relative pl-10">
                
                {/* Vertical Dashed Line aligned to center of 24px circular nodes */}
                <div className="absolute left-[11px] top-2.5 bottom-2.5 w-[1px] border-l border-dashed border-slate-300" />

                {/* Stages Navigation List */}
                <div className="space-y-7">
                  {category.stages.map((stage, idx) => {
                    const isActive = idx === activeIndex;
                    const isVisited = idx <= activeIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToStage(idx)}
                        className="w-full text-left flex items-start relative group outline-hidden cursor-pointer"
                      >
                        {/* Enlarged Circular Indicator (24px) styled with gradient theme */}
                        <div
                          className={`absolute left-[-40px] top-1 w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isVisited
                              ? "bg-white border-[#e947f5] shadow-sm scale-110"
                              : "bg-slate-200 border-slate-200 group-hover:bg-slate-300 group-hover:border-slate-300"
                          }`}
                        >
                          {isVisited && (
                            <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#e947f5] to-[#7a95e6]" />
                          )}
                        </div>

                        {/* Enlarged Stage Name */}
                        <div className="pl-1">
                          <span
                            className={`block text-sm sm:text-base font-sans tracking-wide transition-colors ${
                              isActive
                                ? "text-slate-900 font-bold"
                                : "text-slate-450 hover:text-slate-700 font-bold"
                            }`}
                          >
                            {stage.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Exploration Link */}
              <div className="pt-5 border-t border-slate-100 lg:block hidden">
                <a
                  href="#contact"
                  className="text-slate-800 font-bold hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base cursor-pointer group"
                >
                  <span>Explore our process</span>
                  <ArrowRight className="w-4 h-4 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Premium Layout directly on the white canvas (no container wrapper) */}
            <div className="lg:col-span-8 relative min-h-[360px] flex flex-col justify-center w-full">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  {/* Active Stage Header */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-tight font-sans mb-2.5">
                      {activeStage.title}
                    </h3>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      {activeStage.subtitle}
                    </p>
                  </div>

                  {/* Horizontal 3-Cards Row (deliverables) matching the Workflow badge colors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {activeStage.cards.map((cardText, cIdx) => {
                      return (
                        <div
                          key={cIdx}
                          className="rounded-xl p-3 flex items-start gap-2 shadow-3xs border transition-all bg-[#fae8ff]/25 border-purple-200/80"
                        >
                          <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 border mt-0.5 bg-purple-100/60 border-purple-200/50 text-[#9333ea]">
                            <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                          </div>
                          <span className="text-[11.5px] sm:text-xs font-semibold leading-snug text-purple-955">
                            {cardText}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Active Stage Real-Life Image Mockup Card with taller aspect-ratio */}
                  <div className="relative w-full aspect-[16/10] max-h-[250px] sm:max-h-[320px] lg:max-h-[380px] rounded-2xl overflow-hidden border border-slate-200/60 shadow-2xl bg-slate-50 mt-2">
                    <Image
                      src={activeStage.image}
                      alt={activeStage.imageAlt}
                      fill
                      className="object-cover object-center contrast-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>

      {/* 2. Invisible Scroll Sentinels (Created down the page to drive scrolling heights) */}
      <div className="relative z-0 pointer-events-none">
        {category.stages.map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              sentinelRefs.current[idx] = el;
            }}
            className="h-[80vh] w-full"
          />
        ))}
      </div>

    </div>
  );
};
