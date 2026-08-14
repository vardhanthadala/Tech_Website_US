"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { CloudCategoryData, cloudServicesCategories } from "@/data/cloudServicesData";

interface CloudServicesHeroProps {
  currentCategory: CloudCategoryData;
}

export const CloudServicesHero: React.FC<CloudServicesHeroProps> = ({ currentCategory }) => {
  const categoriesList = Object.values(cloudServicesCategories);

  return (
    <section className="w-full bg-[#fdfdfd] text-[#0f172a] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 font-sans border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header Block (Exact layout & typography matching requested reference screenshot & AI Automation style) */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Badge Pill */}
          <motion.div
            key={currentCategory.slug + "-badge"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200/90 text-xs sm:text-sm font-sans mb-5 shadow-2xs"
          >
            <span className="text-slate-800 font-medium">{currentCategory.badge}</span>
          </motion.div>

          {/* Main Headline (AI Automation Typography style: bold + italic serif gradient) */}
          <motion.h1
            key={currentCategory.slug + "-heading"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12] mb-6"
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
            className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mb-8"
          >
            {currentCategory.description}
          </motion.p>

          {/* Dual Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Book a call</span>
              <span className="w-4 h-4 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Sparkles className="w-2.5 h-2.5" />
              </span>
            </a>

            <a
              href="#overview"
              className="px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-50 border border-slate-200/90 font-sans font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>View details</span>
              <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </a>
          </motion.div>

        </div>

        {/* 3 Full Hero Box Images Grid (Pure full image boxes with real life website/dashboard UI screenshots) */}
        <motion.div
          key={currentCategory.slug + "-cards-grid"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {currentCategory.heroCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Centered Select Category Buttons Row (Category Switcher) */}
        <div className="w-full flex flex-col items-center text-center border-t border-slate-200/80 pt-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-sans font-bold mb-4">
            CLOUD SERVICES CATEGORIES:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {categoriesList.map((cat) => {
              const isActive = cat.slug === currentCategory.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/services/cloud-services/${cat.slug}`}
                  className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold font-sans transition-all active:scale-95 border ${
                    isActive
                      ? "bg-slate-950 text-white border-slate-950 shadow-md"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
