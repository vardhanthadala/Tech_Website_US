"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { AppCategoryData, appDevelopmentCategories } from "@/data/appDevelopmentData";

interface AppDevelopmentHeroProps {
  currentCategory: AppCategoryData;
}

export const AppDevelopmentHero: React.FC<AppDevelopmentHeroProps> = ({ currentCategory }) => {
  const router = useRouter();
  const categoriesList = Object.values(appDevelopmentCategories);

  const handleTabChange = (slug: string) => {
    router.push(`/services/app-development/${slug}`);
  };

  return (
    <section className="w-full bg-[#fdfdfd] text-slate-900 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 font-sans border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Typography & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
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

            {/* Main Headline with Signature Dual-Tone Cursive Style */}
            <motion.h1
              key={currentCategory.slug + "-title"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-slate-900 leading-[1.12] mb-5"
            >
              <span>{currentCategory.headingBold} </span>
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
                {currentCategory.headingCursive}
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              key={currentCategory.slug + "-desc"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl mb-7"
            >
              {currentCategory.description}
            </motion.p>

            {/* Dual Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="/contact"
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>{currentCategory.ctaText}</span>
                <span className="w-4 h-4 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <Sparkles className="w-2.5 h-2.5" />
                </span>
              </a>

              <a
                href="#workflow"
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-slate-800 hover:bg-slate-50 border border-slate-200/80 font-sans font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>View details</span>
                <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Webpage Dashboard Structure + 10% Overlapping Smartphone Mockup */}
          <div className="lg:col-span-6 relative w-full flex justify-end items-start pt-0 -mt-4 lg:-mt-10">
            
            <motion.div
              key={currentCategory.slug + "-hero-showcase"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[640px] flex items-center justify-end"
            >
              
              {/* Main Webpage Dashboard Structure Container */}
              <div className="relative w-[90%] sm:w-[92%] rounded-2xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden aspect-[16/10] ml-auto">
                <div className="relative w-full h-full bg-white">
                  <Image
                    src={currentCategory.webMockup}
                    alt="Web portal management dashboard UI"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
              </div>

              {/* Smartphone Frame Mockup */}
              <div className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-[34%] max-w-[210px] aspect-[9/18.5] rounded-[2.2rem] border-[5px] border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden z-20 transition-transform hover:scale-[1.02]">
                
                {/* Smartphone Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-950/90 mr-1" />
                  <div className="w-1 h-1 rounded-full bg-indigo-900/60" />
                </div>

                {/* Smartphone Real App UI Screenshot */}
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-950">
                  <Image
                    src={currentCategory.mobileMockup}
                    alt={currentCategory.title + " mobile app interface screenshot"}
                    fill
                    className="object-cover object-top"
                    sizes="210px"
                    priority
                  />
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Centered Category Switcher Row (Matching exact reference screenshot layout) */}
        <div className="w-full flex flex-col items-center text-center border-t border-slate-200/60 pt-8 mt-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8e9bb0] font-sans font-bold mb-4">
            APP DEVELOPMENT CATEGORY:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {categoriesList.map((cat) => {
              const isActive = cat.slug === currentCategory.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleTabChange(cat.slug)}
                  className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold font-sans transition-all active:scale-95 border cursor-pointer ${
                    isActive
                      ? "bg-[#050714] text-white border-[#050714] shadow-md"
                      : "bg-[#f8fafc] text-[#1e293b] border-[#e2e8f0]/90 hover:bg-slate-100/80 hover:border-slate-300"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
