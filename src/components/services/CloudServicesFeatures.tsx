"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CloudFeatureDetail } from "@/data/cloudServicesData";

interface CloudServicesFeaturesProps {
  featuresBadge: string;
  featuresTitleBold: string;
  featuresTitleCursive: string;
  featuresSubtitle: string;
  features: CloudFeatureDetail[];
}

export const CloudServicesFeatures: React.FC<CloudServicesFeaturesProps> = ({
  featuresBadge,
  featuresTitleBold,
  featuresTitleCursive,
  featuresSubtitle,
  features,
}) => {
  return (
    <section className="w-full bg-[#fcfcfd] text-slate-900 py-20 sm:py-28 font-sans border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Container matching the Engineered for Growth section box in UI/UX page */}
        <div className="w-full rounded-3xl bg-[#f8fafc]/80 border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-2xs">
          
          {/* Section Header with Badge & Signature Typography */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-white text-[#9333ea] border border-purple-200/80 shadow-2xs mb-5 uppercase tracking-[0.18em] font-sans">
                {featuresBadge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              <span>{featuresTitleBold} </span>
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
                {featuresTitleCursive}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed"
            >
              {featuresSubtitle}
            </motion.p>
          </div>

          {/* 4 Feature Image Cards Row matching reference screenshot UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start group"
              >
                {/* Real Life Feature Card Image Box */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-md border border-slate-200/80 mb-5">
                  <Image
                    src={feat.image}
                    alt={feat.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Feature Title & Description underneath */}
                <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900 mb-1.5 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
