"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface UiUxUseCasesProps {
  category: AppCategoryData;
}

export const UiUxUseCases: React.FC<UiUxUseCasesProps> = ({ category }) => {
  const tabs = category.simulatorTabs || [];
  
  // Render exactly 5 topic items: 2 in top row, 3 in bottom row
  const topRowItems = tabs.slice(0, 2);
  const bottomRowItems = tabs.slice(2, 5);

  return (
    <section id="use-cases" className="w-full bg-white font-sans text-slate-900 py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Clean Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs uppercase tracking-[0.18em] font-sans">
              USE CASES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] mb-4"
          >
            <span>{category.simulatorTitleBold || "Scale up and down in your"} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
              {category.simulatorTitleCursive || "sleep"}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl"
          >
            {category.simulatorSubtitle || "Cloud scales your app automatically, so you can handle any amount of traffic without breaking a sweat."}
          </motion.p>
        </div>

        {/* 2-ROW GRID SYSTEM (Row 1: 2 cols, Row 2: 3 cols) */}
        <div className="space-y-16 lg:space-y-20">
          
          {/* FIRST ROW: 2 Columns with Real-Life Images & Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {topRowItems.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col text-left group"
              >
                {/* Topic Heading with Sequential Number */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-purple-600 font-mono font-bold text-base sm:text-lg">0{idx + 1}.</span>
                  <span>{item.title}</span>
                </h3>

                {/* Real-Life Aesthetic UI/UX Screenshot Image Box */}
                <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-2xs mb-4">
                  <Image
                    src={item.screenImage}
                    alt={item.screenImageAlt || item.title}
                    fill
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Detailed Bullet Points */}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 font-normal font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* SECOND ROW: 3 Columns with Real-Life Images & Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {bottomRowItems.map((item, idx) => (
              <motion.div
                key={item.id || idx + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col text-left group"
              >
                {/* Topic Heading with Sequential Number */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-purple-600 font-mono font-bold text-sm sm:text-base">0{idx + 3}.</span>
                  <span>{item.title}</span>
                </h3>

                {/* Real-Life Aesthetic UI/UX Screenshot Image Box */}
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-2xs mb-4">
                  <Image
                    src={item.screenImage}
                    alt={item.screenImageAlt || item.title}
                    fill
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Detailed Bullet Points */}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 font-normal font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
