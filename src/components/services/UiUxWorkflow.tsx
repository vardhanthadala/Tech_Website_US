"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface UiUxWorkflowProps {
  category: AppCategoryData;
}

export const UiUxWorkflow: React.FC<UiUxWorkflowProps> = ({ category }) => {
  return (
    <section id="workflow" className="w-full bg-white font-sans text-slate-900 py-20 sm:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Header matching reference screenshot */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs uppercase tracking-[0.18em] font-sans">
              DEVELOPMENT WORKFLOW
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] mb-5"
          >
            <span>{category.howWeWorkTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {category.howWeWorkTitleCursive}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl"
          >
            {category.howWeWorkSubtitle}
          </motion.p>
        </div>

        {/* Plain Uncarded 2x3 Grid Layout matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {category.stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="flex flex-col text-left group"
            >
              {/* Taller Height & Narrower Width Image Container */}
              <div className="w-full max-w-md h-64 sm:h-72 relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs mb-5">
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              {/* Title & Detailed Description */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans tracking-tight mb-2 leading-snug">
                {stage.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                {stage.subtitle}
              </p>

              {/* Bullet Points List for Extra Detail */}
              {stage.cards && stage.cards.length > 0 && (
                <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                  {stage.cards.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 font-normal font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea] mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
