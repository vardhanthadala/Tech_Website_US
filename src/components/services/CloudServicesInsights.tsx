"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CloudTopicDetail } from "@/data/cloudServicesData";
import { CheckCircle2 } from "lucide-react";

interface CloudServicesInsightsProps {
  sectionBadge: string;
  sectionTitleBold: string;
  sectionTitleCursive: string;
  sectionSubtitle: string;
  topics: CloudTopicDetail[];
}

export const CloudServicesInsights: React.FC<CloudServicesInsightsProps> = ({
  sectionBadge,
  sectionTitleBold,
  sectionTitleCursive,
  sectionSubtitle,
  topics,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeTopic = topics[activeIndex] || topics[0];

  return (
    <section id="overview" className="w-full bg-[#fcfcfd] text-slate-900 py-20 sm:py-28 font-sans border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header matching standard design typography across all pages */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-4 uppercase tracking-[0.18em] font-sans">
              {sectionBadge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] mb-4"
          >
            <span>{sectionTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
              {sectionTitleCursive}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {sectionSubtitle}
          </motion.p>
        </div>

        {/* 2-Column Interactive Insights Grid (Preserved layout, real-life photography, points list) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Big Main Real-Life Photo Box */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTopic.id + "-image"}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeTopic.image}
                    alt={activeTopic.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 4 Numbered Topic Headings (Hover / Click to switch image & details) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-slate-200/80">
            {topics.map((topic, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={topic.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`py-5 px-4 rounded-xl transition-all cursor-pointer group ${
                    isActive
                      ? "bg-white border-l-4 border-purple-600 shadow-sm pl-6"
                      : "hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "bg-slate-200/80 text-slate-600 group-hover:bg-slate-300/80"
                      }`}
                    >
                      {topic.id}
                    </span>
                  </div>

                  <h4
                    className={`text-base sm:text-lg font-sans font-semibold leading-snug transition-colors ${
                      isActive ? "text-slate-950" : "text-slate-700 group-hover:text-slate-950"
                    }`}
                  >
                    {topic.title}
                  </h4>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 space-y-2 pt-2 border-t border-slate-100"
                    >
                      <p className="text-xs sm:text-sm text-slate-500 mb-2 leading-relaxed">
                        {topic.summary}
                      </p>
                      {topic.points && topic.points.length > 0 && (
                        <div className="space-y-2">
                          {topic.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                              <span className="text-xs font-medium text-slate-700">{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
