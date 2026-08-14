"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AiCategoryData } from "@/data/aiAutomationData";

interface AiAutomationUseCasesProps {
  category: AiCategoryData;
}

export const AiAutomationUseCases: React.FC<AiAutomationUseCasesProps> = ({ category }) => {
  return (
    <section className="w-full bg-[#fcfcfd] text-slate-900 py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-purple-50 text-purple-700 border border-purple-200 mb-4">
            Use Cases & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
            <span>{category.useCasesTitle.split(" ").slice(0, -2).join(" ")} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {category.useCasesTitle.split(" ").slice(-2).join(" ").toLowerCase()}
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal mt-3.5 leading-relaxed max-w-md mx-auto">
            {category.useCasesSubtitle}
          </p>
        </div>

        {/* Top 2x2 Grid Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {category.gridUseCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Real Life Image representing category context */}
                <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden mb-6 bg-slate-50 border border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center contrast-[1.02]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 font-sans">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Large Full-Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-md transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
                {category.bottomUseCase.title}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {category.bottomUseCase.description}
              </p>

              {/* Red/Purple link with trailing arrow matching layout references */}
              <a
                href="#contact"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1.5 text-base"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 mt-0.5" />
              </a>
            </div>

            {/* Right Image Column - Real Life Image */}
            <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
              <Image
                src={category.bottomUseCase.image}
                alt={category.bottomUseCase.imageAlt}
                fill
                className="object-cover object-center contrast-[1.02]"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
