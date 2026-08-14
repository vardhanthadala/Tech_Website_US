"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { AiCategoryData, aiAutomationCategories } from "@/data/aiAutomationData";

interface AiAutomationHeroProps {
  currentCategory: AiCategoryData;
}

export const AiAutomationHero: React.FC<AiAutomationHeroProps> = ({ currentCategory }) => {
  const categoriesList = Object.values(aiAutomationCategories);

  return (
    <section className="w-full relative h-[88vh] min-h-[620px] max-h-[780px] bg-[#fdfdfd] text-slate-900 flex flex-col justify-center overflow-hidden pt-20 pb-8 border-b border-slate-200/80">
      
      {/* Seamless Right-Side Visual Container */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-3/5 pointer-events-none z-0 overflow-hidden flex items-center justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.slug + "-hero-image"}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex items-center justify-end"
          >
            {/* Image with CSS Mask for subtle soft feathering */}
            <div 
              className="relative w-full h-full"
              style={{
                maskImage: "radial-gradient(ellipse at 75% 50%, black 40%, transparent 85%)",
                WebkitMaskImage: "radial-gradient(ellipse at 75% 50%, black 40%, transparent 85%)"
              }}
            >
              <Image
                src={currentCategory.heroImage}
                alt={currentCategory.heroImageAlt}
                fill
                priority
                className="object-contain object-right"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            
            {/* Soft Edge Blend Gradients - Decreased white fade */}
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#fdfdfd] via-[#fdfdfd]/40 to-transparent w-1/4 h-full pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#fdfdfd] via-[#fdfdfd]/20 to-transparent h-16 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#fdfdfd] via-[#fdfdfd]/15 to-transparent h-16 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground Content Container - Fixed Left Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
          {/* Announcement Badge Pill - Light Theme */}
          <div className="h-9 flex items-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200/90 text-xs sm:text-sm font-sans backdrop-blur-md shadow-2xs"
            >
              <span className="text-slate-800 font-medium">{currentCategory.badge}</span>
            </motion.div>
          </div>

          {/* Headline Box */}
          <div className="min-h-[110px] sm:min-h-[120px] flex items-center mb-6">
            <motion.h1
              key={currentCategory.slug + "-heading"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal tracking-tight leading-[1.12] text-left text-slate-900 max-w-2xl"
            >
              <span className="text-slate-950 font-bold">{currentCategory.headingBold} </span>
              <span className="text-slate-700 font-normal">
                {currentCategory.headingLight.split(" ").slice(0, -1).join(" ")}{" "}
              </span>
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
                {currentCategory.headingLight.split(" ").slice(-1).join(" ").toLowerCase()}
              </span>
            </motion.h1>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
          >
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>{currentCategory.ctaText}</span>
              <span className="w-4 h-4 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Sparkles className="w-2.5 h-2.5" />
              </span>
            </a>

            <a
              href="#features"
              className="px-5 py-2.5 rounded-full bg-white text-slate-800 hover:bg-slate-50 border border-slate-200/90 font-sans font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>View details</span>
              <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </a>
          </motion.div>

          {/* Category Slugs Switcher Tabs */}
          <div className="w-full pt-5 border-t border-slate-200/80">
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-sans mb-3">
              AI Automation Category:
            </p>
            <div className="flex flex-wrap gap-2">
              {categoriesList.map((cat) => {
                const isActive = cat.slug === currentCategory.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/services/ai-automation/${cat.slug}`}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                      isActive
                        ? "bg-slate-950 text-white font-semibold shadow-md"
                        : "bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 border border-slate-200/80"
                    }`}
                  >
                    {cat.title}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
