"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Compass, Code2, Rocket } from "lucide-react";

const pillars = [
  {
    title: "Discovery & Design",
    subtitle: "STRATEGIC ARCHITECTURE",
    description: "We audit your systems for AI feasibility and craft high-fidelity Figma prototypes. Every data flow is mapped and validated with usability testing for faster developer handoff.",
    icon: Compass,
    images: [
      "/images/engineering/discovery.png"
    ]
  },
  {
    title: "Full-Stack Engineering",
    subtitle: "AGILE DEVELOPMENT",
    description: "We build enterprise-grade platforms using Next.js, Flutter, and custom LLM agentic pipelines. Benefit from bi-weekly demo builds and automated end-to-end test coverage.",
    icon: Code2,
    images: [
      "/images/engineering/fullstack.png"
    ]
  },
  {
    title: "Deployment & Scale",
    subtitle: "ZERO-DOWNTIME LAUNCH",
    description: "Multi-region deployments on AWS, GCP, or Azure with Kubernetes and automated load balancing. We provide 30-day post-launch hypercare, because we stay until it scales.",
    icon: Rocket,
    images: [
      "/images/engineering/deployment.png"
    ]
  }
];

export default function EngineeringProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="w-full bg-white py-24 border-t border-slate-100 font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-4 inline-block shadow-2xs">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] max-w-2xl mb-4 font-sans">
            A seamless process for <br className="hidden md:block" />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">extraordinary results</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            A seamless, transparent engineering process designed to scale your vision into reality.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>

          {/* Curved Wave Connecting SVG Path (Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              {/* Background Light Curved Path */}
              <path
                d="M 500,60 C 200,220 800,420 500,560 C 200,700 800,880 500,980"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              {/* Animated Gradient Path */}
              <motion.path
                d="M 500,60 C 200,220 800,420 500,560 C 200,700 800,880 500,980"
                fill="none"
                stroke="url(#curved-wave-gradient)"
                strokeWidth="4"
                style={{ pathLength: scrollYProgress }}
              />
              <defs>
                <linearGradient id="curved-wave-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e947f5" />
                  <stop offset="50%" stopColor="#7a95e6" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-20 lg:space-y-32 relative z-10">
            {pillars.map((pillar, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = pillar.icon;

              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Image Half */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 relative"
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src={pillar.images[0]} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                      {/* Floating Phase Pill Badge on Image */}
                      <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-md flex items-center gap-2">
                        <IconComponent className="w-3.5 h-3.5 text-slate-700" />
                        <span className="text-xs font-semibold text-slate-800 tracking-wide">PHASE 0{idx + 1}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Half */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}
                  >
                    <div className="relative">
                      {/* Giant Background Number */}
                      <div className="absolute -top-12 -left-4 lg:-left-12 text-[140px] lg:text-[180px] font-black text-slate-100/60 leading-none select-none z-0 pointer-events-none tracking-tighter">
                        0{idx + 1}
                      </div>

                      <div className="relative z-10 pt-4">
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                          {pillar.subtitle}
                        </p>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mb-4 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
