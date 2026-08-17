"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS_DATA } from "@/data/projectsData";

export default function OurHistory() {
  const featuredProjects = PROJECTS_DATA.filter(
    (p) =>
      p.service === "Web Development" ||
      p.service === "Mobile Apps" ||
      p.service === "AI Automation"
  );
  
  // Duplicate array to achieve seamless infinite loop
  const marqueeList = [...featuredProjects, ...featuredProjects, ...featuredProjects];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-20 font-sans relative z-10 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-5 inline-block">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Transforming visions into <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">
                digital reality.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View all projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container with Subtle Fade Edges */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge blur/gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max">
          <motion.div
            className="flex gap-6 sm:gap-8 pr-6 sm:pr-8"
            animate={{
              x: isPaused ? undefined : ["0%", "-33.333%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {marqueeList.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={`/projects`}
                className="w-[320px] sm:w-[420px] lg:w-[460px] flex-shrink-0 flex flex-col group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden mb-5 bg-slate-100 border border-slate-200/80 shadow-sm rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      {item.industry}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-slate-400 text-xs font-medium">
                      {item.service}
                    </span>
                  </div>
                  <h3 className="text-slate-900 text-lg sm:text-xl font-medium tracking-tight mb-2 group-hover:text-slate-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
