"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface AppDevelopmentFeaturesProps {
  category?: AppCategoryData;
}

export const AppDevelopmentFeatures: React.FC<AppDevelopmentFeaturesProps> = ({ category }) => {
  const cards = category?.featuresCards || [
    {
      title: "Canvas",
      description: "Plan, create, and collaborate—intuitively and at scale.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Abstract design canvas UI illustration"
    },
    {
      title: "Studio",
      description: "Build custom, high-speed mobile workflows—fast.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Studio workflow automation visualizer"
    },
    {
      title: "Engine IQ",
      description: "Maintain quality & security with a unified performance hub.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      imageAlt: "High-speed performance intelligence engine"
    },
    {
      title: "Trust",
      description: "Stay safe, stay compliant, and stay in total control.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Security trust and hardware enclave protection"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfd] text-slate-900 py-24 sm:py-32 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Top Header matching Jasper platform reference screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/50 text-[#9333ea] border border-purple-200/70 uppercase tracking-[0.2em] font-sans">
              ENGINEERED FOR GROWTH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-6"
          >
            <span>The native platform that </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              transforms mobile apps
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {category
              ? `Architected with high-speed compilation pipelines, bank-grade encryption, and sub-second execution for ${category.title}.`
              : "We fuse premium aesthetic styling with high-performance codebase architectures to deliver products that look stunning and execute fast."}
          </motion.p>
        </div>

        {/* 4 Cards Row with Clean White Card Backgrounds & Topic Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[380px] shadow-2xs hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card Header Title with low bold / medium font weight */}
              <div>
                <h3 className="text-xl sm:text-2xl font-sans font-medium text-slate-800 tracking-tight mb-4">
                  {card.title}
                </h3>
              </div>

              {/* Middle Topic Image Container */}
              <div className="w-full h-44 my-2 relative rounded-xl overflow-hidden border border-slate-200/70 bg-slate-50">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Bottom Description */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
