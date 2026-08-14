"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CloudUseCaseDetail } from "@/data/cloudServicesData";
import { CheckCircle2 } from "lucide-react";

interface CloudServicesUseCasesProps {
  useCasesBadge: string;
  useCasesTitleBold: string;
  useCasesTitleCursive: string;
  useCasesSubtitle: string;
  useCases: CloudUseCaseDetail[];
}

export const CloudServicesUseCases: React.FC<CloudServicesUseCasesProps> = ({
  useCasesBadge,
  useCasesTitleBold,
  useCasesTitleCursive,
  useCasesSubtitle,
  useCases,
}) => {
  return (
    <section className="w-full bg-white text-slate-900 py-20 sm:py-28 font-sans border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header matching Insights typography style */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs mb-4 uppercase tracking-[0.18em] font-sans">
              {useCasesBadge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] mb-4"
          >
            <span>{useCasesTitleBold} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
              {useCasesTitleCursive}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {useCasesSubtitle}
          </motion.p>
        </div>

        {/* 5 Alternating Topics Stack (Image Left / Content Right, then Content Left / Image Right) */}
        <div className="space-y-16 sm:space-y-24">
          {useCases.map((uc, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isImageLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 w-full ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/80 group">
                    <Image
                      src={uc.image}
                      alt={uc.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Topic Heading with Number */}
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mb-4 leading-snug flex items-center gap-3">
                    <span className="text-purple-600 font-mono text-xl sm:text-2xl font-bold">{uc.id}.</span>
                    <span>{uc.tag}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
                    {uc.description}
                  </p>

                  {/* Points list */}
                  {uc.points && uc.points.length > 0 && (
                    <div className="w-full space-y-3 pt-4 border-t border-slate-100">
                      {uc.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
