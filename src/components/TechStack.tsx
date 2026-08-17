"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Layout, Server, Cloud, Shield, Cpu, Code2, Terminal, Network, AppWindow } from "lucide-react";

// Tech stack data
const technologies = [
  { name: "React & Next.js", icon: Layout, category: "Frontend", color: "from-blue-400 to-cyan-400" },
  { name: "Node.js & Python", icon: Terminal, category: "Backend", color: "from-green-400 to-emerald-500" },
  { name: "AWS & Azure", icon: Cloud, category: "Cloud", color: "from-orange-400 to-amber-500" },
  { name: "PostgreSQL & Redis", icon: Database, category: "Database", color: "from-blue-500 to-indigo-500" },
  { name: "Docker & K8s", icon: Server, category: "DevOps", color: "from-cyan-500 to-blue-600" },
  { name: "AI & LLMs", icon: Cpu, category: "Intelligence", color: "from-purple-500 to-fuchsia-500" },
  { name: "GraphQL & REST", icon: Network, category: "API", color: "from-pink-500 to-rose-500" },
  { name: "React Native & Flutter", icon: AppWindow, category: "Mobile", color: "from-sky-400 to-blue-500" },
  { name: "TypeScript", icon: Code2, category: "Language", color: "from-blue-600 to-blue-700" },
  { name: "Zero Trust", icon: Shield, category: "Security", color: "from-slate-400 to-slate-500" },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="w-full bg-[#0a0f1c] py-24 sm:py-32 relative overflow-hidden font-sans border-y border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#e947f5] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-[#7a95e6] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-medium tracking-wide border border-white/10 mb-6 inline-block backdrop-blur-md"
          >
            Technology Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6"
          >
            Powered by modern, <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">scalable technologies.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base lg:text-lg font-normal leading-relaxed"
          >
            We don't compromise on architecture. Our stack is meticulously chosen for maximum performance, security, and enterprise-grade scalability.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5"
        >
          {technologies.map((tech) => (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 ease-out z-0 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-[inset_0_1px_4px_rgba(255,255,255,0.02)] relative overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
                   {React.createElement(tech.icon, { className: "w-6 h-6 text-slate-300 group-hover:text-white relative z-10 transition-colors" })}
                </div>
                <h3 className="text-slate-200 text-sm font-medium mb-1.5 group-hover:text-white transition-colors">{tech.name}</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs tracking-[0.1em] uppercase font-medium">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
