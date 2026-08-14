"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Eye, Zap, Shield } from "lucide-react";

export const WebDevelopmentFeatures: React.FC = () => {
  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      label: "Sub-100ms FCP",
      title: "Edge Runtime Rendering",
      description: "Static content is cached dynamically at edge regions globally, eliminating server cold starts completely."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      label: "99+ Performance score",
      title: "Optimized React Compiler",
      description: "Our components utilize strict code splitting and asset compression pipelines to guarantee perfect Lighthouse audits."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      label: "Strict security standard",
      title: "Bank-Grade Encryption",
      description: "Decoupled headless logic secures corporate datasets behind high-speed authorization middleware filters."
    },
    {
      icon: <Eye className="w-5 h-5 text-rose-500" />,
      label: "SEO Core web vitals",
      title: "Semantic markup & Schema",
      description: "Pre-rendered JSON-LD structure metadata profiles automatically rank higher inside visual search index spiders."
    }
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dual-Tone Cursive Title Layout */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-5 uppercase tracking-[0.18em] font-sans">
            Engineered for growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] mb-5">
            Engineered for speed, built to{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              convert.
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            We merge premium aesthetic styling with high-performance codebase architectures to deliver products that look stunning and execute fast.
          </p>
        </div>

        {/* 4 Feature Cards Grid Layout with sequential glowing borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-2xs hover:shadow-xs hover:border-slate-350 transition-all flex flex-col justify-between min-h-[220px] group relative overflow-hidden"
            >
              {/* Sequenced Glowing Borders matching architecture line flow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-10">
                {/* 1. Left Border: Lights up bottom-to-top */}
                <motion.div
                  variants={{
                    hidden: { height: "0%" },
                    visible: { height: "100%", transition: { delay: 0.1 + idx * 0.15, duration: 0.4, ease: "linear" } }
                  }}
                  className="absolute left-0 bottom-0 w-[2px] bg-gradient-to-t from-[#e947f5] to-[#7a95e6] shadow-[0_0_8px_#e947f5]"
                />
                {/* 2a. Top Border: Lights up left-to-right */}
                <motion.div
                  variants={{
                    hidden: { width: "0%" },
                    visible: { width: "100%", transition: { delay: 0.5 + idx * 0.15, duration: 0.4, ease: "linear" } }
                  }}
                  className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#e947f5] to-[#7a95e6] shadow-[0_0_8px_#7a95e6]"
                />
                {/* 2b. Bottom Border: Lights up left-to-right */}
                <motion.div
                  variants={{
                    hidden: { width: "0%" },
                    visible: { width: "100%", transition: { delay: 0.5 + idx * 0.15, duration: 0.4, ease: "linear" } }
                  }}
                  className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#e947f5] to-[#7a95e6] shadow-[0_0_8px_#e947f5]"
                />
                {/* 3. Right Border: Lights up top-to-bottom */}
                <motion.div
                  variants={{
                    hidden: { height: "0%" },
                    visible: { height: "100%", transition: { delay: 0.9 + idx * 0.15, duration: 0.4, ease: "linear" } }
                  }}
                  className="absolute right-0 top-0 w-[2px] bg-gradient-to-b from-[#7a95e6] to-[#e947f5] shadow-[0_0_8px_#7a95e6]"
                />
              </div>

              <div className="relative z-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans tracking-tight mb-2 group-hover:text-indigo-650 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
