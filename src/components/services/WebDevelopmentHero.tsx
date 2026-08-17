"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WebCategoryData, webDevelopmentCategories } from "@/data/webDevelopmentData";
import Grainient from "@/components/Grainient";

interface WebDevelopmentHeroProps {
  currentCategory: WebCategoryData;
}

export const WebDevelopmentHero: React.FC<WebDevelopmentHeroProps> = ({ currentCategory }) => {
  const router = useRouter();

  // Create standard ordered list of categories to map switcher tabs
  const categoriesList = [
    webDevelopmentCategories["full-stack-nextjs-apps"],
    webDevelopmentCategories["headless-cms-ecommerce"],
    webDevelopmentCategories["progressive-web-apps"],
    webDevelopmentCategories["interactive-3d-webgl"],
  ];

  const handleTabChange = (slug: string) => {
    router.push(`/services/web-development/${slug}`);
  };

  return (
    <section className="w-full bg-white text-slate-900 pt-28 pb-16 lg:pt-36 lg:pb-24 font-sans relative overflow-hidden">
      
      {/* Centered Content Layout matching Valley UI screenshot references */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200/90 text-xs sm:text-sm font-sans mb-6 backdrop-blur-md shadow-2xs"
        >
          <span className="text-slate-800 font-medium">{currentCategory.badge}</span>
        </motion.div>

        {/* Dynamic Heading with exact one-word cursive gradient treatment */}
        <div className="min-h-[100px] sm:min-h-[110px] flex items-center justify-center max-w-4xl mb-6">
          <motion.h1
            key={currentCategory.slug + "-heading"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-[1.12] text-slate-900"
          >
            <span>{currentCategory.headingBold} </span>
            <span className="text-slate-900 font-normal">
              {currentCategory.headingLight.split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {currentCategory.headingLight.split(" ").slice(-1).join(" ").toLowerCase()}
            </span>
          </motion.h1>
        </div>

        {/* Description paragraph */}
        <motion.p
          key={currentCategory.slug + "-desc"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-650 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal"
        >
          {currentCategory.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
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

        {/* Category switcher row matching AI automation pill buttons */}
        <div className="w-full max-w-4xl border-t border-slate-200/80 pt-6 mb-10">
          <p className="text-[11.5px] uppercase tracking-[0.15em] text-slate-400 font-sans font-semibold mb-3">
            Web Development Category:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categoriesList.map((cat) => {
              const isActive = cat.slug === currentCategory.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleTabChange(cat.slug)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-sans transition-all active:scale-95 border cursor-pointer ${
                    isActive
                      ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                      : "bg-slate-50 text-slate-650 border-slate-200/80 hover:bg-slate-100"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Full-width container featuring full screen dynamic Grainient background canvas */}
      <div className="w-full border-t border-slate-200/80 bg-slate-50/20 py-20 sm:py-28 lg:py-32 relative flex justify-center items-center overflow-hidden">
        
        {/* Full-width dynamic rainbow Grainient canvas */}
        <Grainient className="absolute inset-0 w-full h-full pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />

        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
          {/* Centered Website Mockup Image Card */}
          <motion.div
            key={currentCategory.slug + "-image"}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-2xl border border-slate-200/60 shadow-2xl p-2 bg-white/95 backdrop-blur-xs"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
              <Image
                src={currentCategory.heroImage}
                alt={currentCategory.heroImageAlt}
                fill
                className="object-cover object-center contrast-[1.01]"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
