"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    titleAccent: "& Analyze",
    description:
      "Deep-dive audit of your existing systems, AI automation feasibility analysis, and technical architecture blueprint. We map every data flow, identify bottlenecks, and align sprint milestones to your business KPIs.",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Concept",
    titleAccent: "& Sketch",
    description:
      "High-fidelity Figma design systems, interactive prototypes, and component token libraries engineered for 35% higher user retention and 3× faster developer handoff. Every flow is validated with usability testing.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Design",
    titleAccent: "& Build",
    description:
      "Full-stack development with Next.js, Flutter, and custom LLM agentic pipelines. Bi-weekly demo builds, continuous staging deployments, automated end-to-end test coverage, and transparent sprint retrospectives.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Launch",
    titleAccent: "& Scale",
    description:
      "Zero-downtime deployment to multi-region AWS/GCP/Azure with Docker, Kubernetes, automated load balancing, and 30-day post-launch hypercare with 24/7 SLA monitoring. We don't just ship — we stay until it scales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function EngineeringProcess() {
  return (
    <section className="w-full bg-[#faf8f5] py-16 sm:py-20 border-t border-[#e8dfd5] font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#eee6dc] text-[#11244e] text-xs font-medium tracking-wide border border-[#e2d7cb]/80 mb-4 inline-block shadow-2xs">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] max-w-2xl mb-4 font-sans">
            Our engineering process,<br />
            <span className="font-serif italic text-[#11244e]">from concept to enterprise scale.</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            A structured, 4-step agile workflow built for rapid iteration, transparent communication, and production reliability.
          </p>
        </div>

        {/* Process Steps — Alternating Image-Filled Numbers */}
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col-reverse ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-4 lg:gap-0 py-6 sm:py-8 border-t border-[#e8dfd5] first:border-t-0`}
              >
                {/* Text Content */}
                <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-12 text-left" : "lg:pl-12 text-left lg:text-right"}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                    {step.title} <span className="font-serif italic text-[#11244e] font-normal">{step.titleAccent}</span>
                  </h3>
                  <p
                    className="text-slate-500 text-sm sm:text-[15px] leading-[1.9] font-normal max-w-lg"
                    style={!isEven ? { marginLeft: "auto" } : {}}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Giant Number with Image Fill */}
                <div className={`w-full lg:w-1/2 flex items-center justify-start ${isEven ? "lg:justify-end" : "lg:justify-start"} select-none mb-2 lg:mb-0`}>
                  <div
                    className="text-[120px] sm:text-[150px] lg:text-[190px] font-black leading-none tracking-tighter"
                    style={{
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
