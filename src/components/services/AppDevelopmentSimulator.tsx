"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface AppDevelopmentSimulatorProps {
  category: AppCategoryData;
}

export const AppDevelopmentSimulator: React.FC<AppDevelopmentSimulatorProps> = ({ category }) => {
  const tabs = category.simulatorTabs || [];
  const [activeTabId, setActiveTabId] = useState<string | null>(tabs[0]?.id || null);
  const [isPaused, setIsPaused] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic dropdown opening animation cycling through cards every 4 seconds when not paused
  useEffect(() => {
    if (isPaused || tabs.length === 0) return;

    const interval = setInterval(() => {
      setActiveTabId((prevId) => {
        const currentIndex = tabs.findIndex((t) => t.id === prevId);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, tabs]);

  const handleCardClick = (id: string) => {
    // Pause auto-animation on user click
    setIsPaused(true);

    // Toggle behavior: if already open, close it; otherwise open it
    setActiveTabId((prevId) => (prevId === id ? null : id));

    // Reset any existing inactivity timeout
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Restart automatic animation after 8 seconds of no further interaction
    inactivityTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  const activeTab = tabs.find((t) => t.id === activeTabId);

  return (
    <section className="w-full bg-[#fbfbfd] text-slate-900 py-24 sm:py-32 relative overflow-hidden font-sans border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Lavender Badge & Cursive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-left"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-5 uppercase tracking-[0.18em] font-sans">
            USE CASES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] mb-5">
            <span>{category.simulatorTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {category.simulatorTitleCursive}
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            {category.simulatorSubtitle}
          </p>
        </motion.div>

        {/* 2-Column Workspace with Motion Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: 4 Expanding Cards */}
          <div className="lg:col-span-6 space-y-4">
            {tabs.map((tab, idx) => {
              const isActive = tab.id === activeTabId;
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-white border-purple-300 shadow-md"
                      : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => handleCardClick(tab.id)}
                    className="w-full text-left p-5 sm:p-6 cursor-pointer flex items-center justify-between group outline-hidden"
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#e947f5] to-[#7a95e6]"
                      />
                    )}

                    <div className="flex-1 pr-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight mb-1">
                        {tab.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium">
                        {tab.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isActive
                          ? "bg-purple-100 text-[#9333ea] rotate-180"
                          : "bg-slate-200/60 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanding Content Area */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-purple-100/70"
                      >
                        <div className="p-5 sm:p-6 space-y-4 bg-purple-50/20">
                          {/* Image preview for mobile screens when expanded */}
                          <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs lg:hidden mb-4">
                            <Image
                              src={tab.screenImage}
                              alt={tab.screenImageAlt}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 1024px) 100vw, 300px"
                            />
                          </div>

                          <ul className="space-y-3">
                            {tab.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-purple-100 text-[#9333ea] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                                <span className="text-xs sm:text-sm font-normal text-slate-650 leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic iPhone Frame Showcase */}
          <div className="lg:col-span-6 lg:block hidden sticky top-20 -mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center relative"
            >
              {/* Glowing Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-pink-100/40 rounded-full filter blur-3xl pointer-events-none transform scale-90" />

              <div className="relative w-full max-w-[340px] aspect-[9/18.5] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden z-10">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950/90" />
                  <div className="w-2 h-2 rounded-full bg-indigo-900/60" />
                </div>

                {/* Animated Screen Image Transition */}
                <AnimatePresence mode="wait">
                  {activeTab ? (
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-slate-950"
                    >
                      <Image
                        src={activeTab.screenImage}
                        alt={activeTab.screenImageAlt}
                        fill
                        className="object-cover object-top contrast-[1.02]"
                        sizes="340px"
                        priority
                      />
                    </motion.div>
                  ) : tabs[0] ? (
                    <motion.div
                      key={tabs[0].id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-slate-950"
                    >
                      <Image
                        src={tabs[0].screenImage}
                        alt={tabs[0].screenImageAlt}
                        fill
                        className="object-cover object-top contrast-[1.02]"
                        sizes="340px"
                        priority
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
