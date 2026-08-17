"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Aura Global",
    category: "AI Trading Platform",
    description: "An ultra-low latency trading dashboard powered by predictive AI models. We built the complete web infrastructure handling millions of transactions daily.",
    tags: ["Next.js", "Python", "WebSockets"],
    color: "from-blue-100 to-indigo-50",
    accent: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nova Health",
    category: "Telemedicine App",
    description: "A HIPAA-compliant mobile platform connecting patients with specialists instantly. Features end-to-end encrypted video and EHR integration.",
    tags: ["React Native", "Node.js", "AWS"],
    color: "from-emerald-50 to-teal-100",
    accent: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white py-14 sm:py-20 font-sans relative z-10 border-t border-slate-100" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-4 inline-block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Recent case studies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-2"
            >
              View all work <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12 sm:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group cursor-pointer"
    >
      {/* Image Area */}
      <div className="w-full lg:w-[55%] aspect-[4/3] sm:aspect-[16/11] relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center py-4 lg:py-0">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-2 h-2 rounded-full ${project.accent}`} />
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{project.category}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 tracking-tight leading-[1.15]">
          {project.title}
        </h3>

        <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-medium tracking-wide rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:gap-4 transition-all duration-300">
          Read case study <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}
