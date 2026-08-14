"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WebCategoryData } from "@/data/webDevelopmentData";

interface WebDevelopmentProcessProps {
  category: WebCategoryData;
}

export const WebDevelopmentProcess: React.FC<WebDevelopmentProcessProps> = ({ category }) => {
  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 relative overflow-hidden font-sans border-b border-slate-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading Section mirroring Workflow styling */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          
          {/* Lavender Workflow-style Badge */}
          <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-4 uppercase tracking-[0.18em] font-sans">
            Architecture
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] text-balance mb-4">
            <span>{category.processTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold font-normal">
              {category.processTitleCursive}
            </span>
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            {category.processSubtitle}
          </p>
        </div>

        {/* Vertical Stack of Process Steps with sequential lit-up lines that remain glowing */}
        <div className="space-y-24 sm:space-y-32">
          {category.processRows.map((row, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Left Column: Image mockup wrapper with sequential borders */}
                <div className="lg:col-span-6 w-full relative">
                  
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full aspect-[4/3] rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden bg-slate-50 p-1.5 group"
                  >
                    {/* Glowing light borders that light up in order and remain glowing */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-10">
                      
                      {/* 1. Left Border: Lights up first (bottom to top) */}
                      <motion.div
                        variants={{
                          hidden: { height: "0%" },
                          visible: { height: "100%", transition: { delay: 0.1, duration: 0.4, ease: "linear" } }
                        }}
                        className="absolute left-0 bottom-0 w-[2.5px] bg-gradient-to-t from-[#e947f5] to-[#7a95e6] shadow-[0_0_10px_#e947f5]"
                      />

                      {/* 2a. Top Border: Lights up second (left to right) */}
                      <motion.div
                        variants={{
                          hidden: { width: "0%" },
                          visible: { width: "100%", transition: { delay: 0.5, duration: 0.4, ease: "linear" } }
                        }}
                        className="absolute left-0 top-0 h-[2.5px] bg-gradient-to-r from-[#e947f5] to-[#7a95e6] shadow-[0_0_10px_#7a95e6]"
                      />

                      {/* 2b. Bottom Border: Lights up second (left to right) */}
                      <motion.div
                        variants={{
                          hidden: { width: "0%" },
                          visible: { width: "100%", transition: { delay: 0.5, duration: 0.4, ease: "linear" } }
                        }}
                        className="absolute left-0 bottom-0 h-[2.5px] bg-gradient-to-r from-[#e947f5] to-[#7a95e6] shadow-[0_0_10px_#e947f5]"
                      />

                      {/* 3. Right Border: Lights up third (top & bottom to middle) */}
                      <motion.div
                        variants={{
                          hidden: { height: "0%" },
                          visible: { height: "100%", transition: { delay: 0.9, duration: 0.4, ease: "linear" } }
                        }}
                        className="absolute right-0 top-0 w-[2.5px] bg-gradient-to-b from-[#7a95e6] to-[#e947f5] shadow-[0_0_10px_#7a95e6]"
                      />
                    </div>

                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-100">
                      <Image
                        src={row.image}
                        alt={row.imageAlt}
                        fill
                        className="object-cover object-center contrast-[1.01]"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority={idx === 0}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Step details & animated laser indicators */}
                <div className="lg:col-span-6 flex flex-col justify-center relative">
                  
                  {/* Stepper indicator with laser line pulse bridge */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center gap-4 mb-4 relative"
                  >
                    
                    {/* 4. Laser Connector Line: Lights up fourth (left to right, stays lit) */}
                    <div className="hidden lg:block absolute left-[-64px] w-[40px] h-[2px] overflow-hidden">
                      <motion.div
                        variants={{
                          hidden: { width: "0%" },
                          visible: { width: "100%", transition: { delay: 1.3, duration: 0.4, ease: "easeOut" } }
                        }}
                        className="h-full bg-gradient-to-r from-[#e947f5] to-[#7a95e6] shadow-[0_0_8px_#7a95e6]"
                      />
                    </div>

                    {/* 5. Step Number: Lights up fifth (glowing text transition, stays glowing) */}
                    <motion.span
                      variants={{
                        hidden: { color: "#cbd5e1", textShadow: "none" },
                        visible: { 
                          color: "#9333ea", 
                          textShadow: "0 0 12px rgba(147, 51, 234, 0.4)",
                          transition: { delay: 1.7, duration: 0.3 }
                        }
                      }}
                      className="text-base sm:text-lg font-bold tracking-wider font-mono"
                    >
                      {row.number}
                    </motion.span>
                    
                    {/* 6. Heading Horizontal Line: Lights up sixth (left to right across heading top, stays lit) */}
                    <div className="h-[2px] flex-1 bg-slate-100 overflow-hidden rounded-full">
                      <motion.div
                        variants={{
                          hidden: { width: "0%" },
                          visible: { width: "100%", transition: { delay: 2.0, duration: 0.5, ease: "easeOut" } }
                        }}
                        className="h-full bg-gradient-to-r from-purple-200 via-purple-300 to-transparent"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight font-sans mb-3">
                    {row.title}
                  </h3>
                  
                  <p className="text-slate-655 text-sm sm:text-base leading-relaxed mb-6">
                    {row.description}
                  </p>

                  {/* Bullet points mapping */}
                  {row.points && row.points.length > 0 && (
                    <ul className="space-y-3">
                      {row.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 border border-purple-200 bg-[#fae8ff]/30 text-[#9333ea] mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-slate-700 text-sm sm:text-base font-medium leading-normal">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
