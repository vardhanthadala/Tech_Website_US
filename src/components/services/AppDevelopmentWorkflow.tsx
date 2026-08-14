"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface AppDevelopmentWorkflowProps {
  category: AppCategoryData;
}

export const AppDevelopmentWorkflow: React.FC<AppDevelopmentWorkflowProps> = ({ category }) => {
  return (
    <section id="workflow" className="w-full bg-[#fcfcfd] font-sans text-slate-900 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header matching original App Development Workflow styling */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-4 uppercase tracking-[0.18em] font-sans">
              DEVELOPMENT WORKFLOW
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#111827] tracking-tight leading-[1.15] mb-4"
          >
            <span>{category.howWeWorkTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
              {category.howWeWorkTitleCursive}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {category.howWeWorkSubtitle}
          </motion.p>
        </div>

        {/* 6-Card Grid (3 cols on lg, 2 cols on md, 1 col on sm) matching original card structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {category.stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#f9fafb]/80 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Top Graphic / Real-Life Image Container */}
              <div className="w-full h-52 sm:h-56 bg-slate-100/70 relative p-4 flex items-center justify-center border-b border-dashed border-slate-200 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xs border border-slate-200/60 bg-white">
                  <Image
                    src={stage.image}
                    alt={stage.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-sans mb-2.5 tracking-tight leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Key feature pills row at card bottom */}
                <div className="pt-4 border-t border-dashed border-slate-200/80 flex flex-wrap gap-1.5">
                  {stage.cards.map((cardItem, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-3xs"
                    >
                      {cardItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
