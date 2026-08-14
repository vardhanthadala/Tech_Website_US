"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  MessageSquare, 
  UserCheck, 
  FileText, 
  Code2, 
  Layers
} from "lucide-react";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface EngineeredForGrowthProps {
  category?: AppCategoryData;
}

export const EngineeredForGrowth: React.FC<EngineeredForGrowthProps> = ({ category }) => {
  // 6 Feature Items per category with premium violet icons
  const items = [
    {
      title: "Scalable knowledge base",
      description: "Build and segment a vector database with thousands of data sources.",
      icon: <Database className="w-7 h-7 text-[#9333ea]" />
    },
    {
      title: "Multi-LLM support",
      description: "Use any AI vendor, including OpenAI and Anthropic, to power agent responses, logic, and actions.",
      icon: <MessageSquare className="w-7 h-7 text-[#9333ea]" />
    },
    {
      title: "User control and collaboration",
      description: "Secure and manage work across your organization with SSO and advanced user permissions.",
      icon: <UserCheck className="w-7 h-7 text-[#9333ea]" />
    },
    {
      title: "Content management",
      description: "Curate agent content, components, and logic that scale across teams and agent use cases.",
      icon: <FileText className="w-7 h-7 text-[#9333ea]" />
    },
    {
      title: "Build in code",
      description: "Build custom logic, actions, and integrations with the full power of code, including API and JSON steps.",
      icon: <Code2 className="w-7 h-7 text-[#9333ea]" />
    },
    {
      title: "High-fidelity prototyping",
      description: "Test agent builds 1:1 in real-time and share with stakeholders for feedback & approval.",
      icon: <Layers className="w-7 h-7 text-[#9333ea]" />
    }
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Plain Light Container Card */}
        <div className="w-full bg-[#f8fafc]/80 rounded-3xl p-8 sm:p-14 lg:p-20 border border-slate-200/80 shadow-2xs relative overflow-hidden">
          
          {/* Subtle grid background texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* Centered Top Header with Lavender Badge & Cursive Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 relative z-10">
            
            {/* Lavender Purple Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold bg-[#fae8ff]/40 text-[#9333ea] border border-purple-200/80 shadow-2xs uppercase tracking-[0.18em] font-sans">
                ENGINEERED FOR GROWTH
              </span>
            </motion.div>

            {/* Cursive Signature Dual-Tone Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.15] mb-5"
            >
              <span>The platform that </span>
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-normal">
                meets your ambition.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Build, customize, ship and improve digital experiences - at scale.
            </motion.p>
          </div>

          {/* 6-Topic 3x2 Grid System matching Voiceflow reference screenshot layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 lg:gap-x-14 lg:gap-y-16 relative z-10">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col text-left group"
              >
                {/* Premium Icon Container */}
                <div className="mb-5 flex items-center justify-start">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs group-hover:scale-110 group-hover:border-purple-300 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Heading (Low Bold / Medium) */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 font-sans tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
