"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Globe, Zap, Coins, Cpu, Shield, Database, Lock } from "lucide-react";
import { AiCategoryData, InfrastructureBenefit } from "@/data/aiAutomationData";

interface AiAutomationBenefitsProps {
  category: AiCategoryData;
}

const getBenefitIcon = (iconName: string) => {
  const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
    server: Server,
    globe: Globe,
    zap: Zap,
    coins: Coins,
    cpu: Cpu,
    shield: Shield,
    database: Database,
    lock: Lock,
  };
  const IconComponent = iconsMap[iconName] || Server;
  return <IconComponent className="w-6 h-6 text-purple-600" />;
};

export const AiAutomationBenefits: React.FC<AiAutomationBenefitsProps> = ({ category }) => {
  return (
    <section className="w-full bg-white text-slate-900 py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Dual-Tone Header matching screenshot reference */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans tracking-tight leading-[1.12] flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-slate-900 font-bold">{category.benefitHeaderBold}</span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {category.benefitHeaderLight.toLowerCase()}
            </span>
          </h2>
        </div>

        {/* 4 Column Features Grid divided by subtle vertical borders */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-l border-slate-200">
          {category.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 border-r border-b md:border-b-0 border-slate-200 flex flex-col items-start hover:bg-slate-50/50 transition-colors"
            >
              {/* Premium Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100 shadow-xs mb-6">
                {getBenefitIcon(benefit.iconName)}
              </div>

              {/* Uppercase Heading */}
              <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wider text-slate-900 uppercase mb-3">
                {benefit.title}
              </h3>

              {/* Description paragraph */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
