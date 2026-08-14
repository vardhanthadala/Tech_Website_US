"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { UiUxCategoryData, uiUxCategories } from "@/data/uiUxData";

interface UiUxHeroProps {
  currentCategory: UiUxCategoryData;
}

export const UiUxHero: React.FC<UiUxHeroProps> = ({ currentCategory }) => {
  const router = useRouter();
  const categoriesList = Object.values(uiUxCategories);
  const [emailInput, setEmailInput] = useState("");

  const handleTabChange = (slug: string) => {
    router.push(`/services/ui-ux-design/${slug}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      router.push(`/contact?email=${encodeURIComponent(emailInput)}`);
    }
  };

  return (
    <section className="w-full bg-white text-slate-900 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 font-sans border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Secoda Reference Screenshot Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Headline matching AI Automation Page Typography, Subtitle, & Email Input Form */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-4">
            
            {/* Category Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200/90 text-xs sm:text-sm font-sans mb-6 backdrop-blur-md shadow-2xs"
            >
              <span className="text-slate-800 font-medium">{currentCategory.badge}</span>
            </motion.div>

            {/* Main Headline - Typography EXACTLY matching AI Automation page */}
            <div className="min-h-[90px] sm:min-h-[105px] flex items-center mb-5">
              <motion.h1
                key={currentCategory.slug + "-heading"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-sans tracking-tight leading-[1.1] text-left text-slate-950 max-w-2xl"
              >
                <span className="font-bold text-slate-950">{currentCategory.headingBold} </span>
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
                  {currentCategory.headingCursive}
                </span>
              </motion.h1>
            </div>

            {/* Description Subtitle */}
            <motion.p
              key={currentCategory.slug + "-desc"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8"
            >
              {currentCategory.description}
            </motion.p>

            {/* Action Buttons: Start Project & View Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4"
            >
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#050714] text-white hover:bg-slate-900 font-sans font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Project</span>
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <Sparkles className="w-3 h-3 text-white" />
                </span>
              </a>

              <a
                href="#features"
                className="px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 font-sans font-medium text-xs sm:text-sm border border-slate-200/90 transition-all shadow-2xs active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Clean Floating Screenshot Box */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <motion.div
              key={currentCategory.slug + "-hero-frame"}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] max-w-[620px] rounded-2xl bg-white shadow-xl border border-slate-200/80 overflow-hidden"
            >
              <Image
                src={currentCategory.heroImage}
                alt={currentCategory.heroImageAlt}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

        </div>

        {/* Centered Select Category Switcher Row (Matching App Development Hero design) */}
        <div className="w-full flex flex-col items-center text-center border-t border-slate-200/80 pt-8 mt-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8e9bb0] font-sans font-bold mb-4">
            UI/UX DESIGN CATEGORY:
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
