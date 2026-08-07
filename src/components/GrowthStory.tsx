"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
  Star,
  Bot,
  Cpu,
  Workflow,
  Zap,
  BrainCircuit,
  Code2,
  Globe,
  Terminal,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
  AppWindow,
  Gauge,
  Radio,
  Palette,
  Layout,
  Component,
  Eye,
  PenTool,
  Cloud,
  Server,
  Database,
  GitBranch,
  HardDrive,
} from "lucide-react";

/* ── Spring counter that re-triggers when value changes ── */
const Counter: React.FC<{ end: number; suffix?: string; key?: string | number }> = ({ end, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 28, stiffness: 50 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    mv.set(0);
    const t = setTimeout(() => mv.set(end), 80);
    return () => clearTimeout(t);
  }, [end, mv]);

  useEffect(() => spring.on("change", (v) => setVal(Math.round(v))), [spring]);

  return <span ref={ref}>{val}{suffix}</span>;
};

/* ── Service definitions with technology SVGs/Icons ── */
const services = [
  {
    name: "AI Automation",
    description: "We build autonomous AI agents, LLM pipelines, and agentic systems that eliminate manual work and scale operations intelligently.",
    tagline: "Supercharge your business workflows with intelligent autonomous agents.",
    cards: {
      top: { end: 89, suffix: "%", label: "Reduction in manual work across automated workflows.", icon: Bot },
      tall: { end: 150, suffix: "+", label: "AI models deployed across enterprise systems.", icon: Cpu },
      featured: { end: 350, suffix: "+", label: "Automation pipelines built and shipped.", icon: Workflow },
      bottomL: { end: 200, suffix: "+", label: "Workflows automated for clients globally.", icon: Zap },
      bottomR: { end: 8, suffix: "+", label: "Industries transformed with AI-first solutions.", icon: BrainCircuit },
    },
    techIcons: ["Python", "PyTorch", "OpenAI", "LangChain", "FastAPI", "TensorFlow", "Hugging Face", "Pinecone", "Redis", "Celery", "scikit-learn", "Pandas", "NumPy", "Airflow", "MLflow"],
  },
  {
    name: "Web Development",
    description: "From full-stack Next.js apps to headless e-commerce and PWAs — we build fast, scalable, production-ready web platforms.",
    tagline: "Engineered for maximum speed, security, and search engine visibility.",
    cards: {
      top: { end: 120, suffix: "+", label: "Web applications shipped for global clients.", icon: Globe },
      tall: { end: 98, suffix: "%", label: "Client satisfaction rate across all web projects.", icon: Code2 },
      featured: { end: 300, suffix: "+", label: "Full-stack projects delivered end-to-end.", icon: Terminal },
      bottomL: { end: 45, suffix: "+", label: "Technology stacks mastered and production-ready.", icon: Layers },
      bottomR: { end: 5, suffix: "+", label: "Years building high-performance web products.", icon: Monitor },
    },
    techIcons: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "GraphQL", "PostgreSQL", "Prisma", "Vercel", "Redux", "Zustand", "MongoDB", "Express", "Vite", "Webpack"],
  },
  {
    name: "App Development",
    description: "iOS, Android, Flutter, and React Native apps built with a focus on performance, UX, and long-term scalability.",
    tagline: "Native performance combined with fluid, custom-crafted user experiences.",
    cards: {
      top: { end: 80, suffix: "+", label: "Mobile apps launched across iOS and Android.", icon: Smartphone },
      tall: { end: 4, suffix: ".9★", label: "Average App Store rating across our client apps.", icon: Tablet },
      featured: { end: 200, suffix: "+", label: "Cross-platform apps shipped globally.", icon: AppWindow },
      bottomL: { end: 60, suffix: "+", label: "Enterprise clients with active mobile products.", icon: Gauge },
      bottomR: { end: 3, suffix: " Platforms", label: "iOS, Android, and Flutter fully supported.", icon: Radio },
    },
    techIcons: ["iOS", "Android", "Flutter", "React Native", "Swift", "Kotlin", "Dart", "Firebase", "Expo", "Xcode", "Gradle", "Fastlane", "TestFlight", "Redux", "SQLite"],
  },
  {
    name: "UI / UX Design",
    description: "Wireframes, design systems, mobile and web UI — we craft interfaces people actually enjoy using, backed by data.",
    tagline: "Functional beauty backed by direct user testing and clean design systems.",
    cards: {
      top: { end: 95, suffix: "%", label: "User satisfaction improvement post design overhaul.", icon: Palette },
      tall: { end: 200, suffix: "+", label: "Screens and components designed across projects.", icon: Layout },
      featured: { end: 400, suffix: "+", label: "UI designs crafted for web and mobile products.", icon: Component },
      bottomL: { end: 80, suffix: "+", label: "Brands elevated with Dexze design systems.", icon: Eye },
      bottomR: { end: 15, suffix: "+", label: "Complete design systems built from scratch.", icon: PenTool },
    },
    techIcons: ["Figma", "Design Systems", "Prototyping", "UX Audits", "Framer", "Sketch", "Adobe XD", "Storybook", "Zeplin", "InVision", "Lottie", "Principle", "Miro", "Hotjar", "Maze"],
  },
  {
    name: "Cloud Services",
    description: "AWS, Azure, Kubernetes, CI/CD, and serverless architecture — we build infrastructure that scales without breaking.",
    tagline: "Highly resilient cloud architectures designed to grow with your business.",
    cards: {
      top: { end: 99, suffix: ".9%", label: "Uptime achieved across managed cloud infrastructures.", icon: Cloud },
      tall: { end: 50, suffix: "+", label: "Cloud deployments live in production globally.", icon: Server },
      featured: { end: 300, suffix: "+", label: "Cloud infrastructure setups managed end-to-end.", icon: Database },
      bottomL: { end: 120, suffix: "+", label: "Legacy systems migrated to modern cloud stacks.", icon: GitBranch },
      bottomR: { end: 12, suffix: "+", label: "Cloud tools and platforms we actively work with.", icon: HardDrive },
    },
    techIcons: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Azure", "GCP", "Ansible", "Jenkins", "GitHub Actions", "Nginx", "Prometheus", "Grafana", "Helm", "Vault"],
  },
];

export const GrowthStory: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle every 8 seconds (unless user manually selected a service)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectService = (index: number) => {
    setActive(index);
    setIsPaused(true);
  };

  const svc = services[active];

  const fadeSlide = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section className="w-full bg-white py-24 border-t border-slate-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <span className="px-4 py-1.5 rounded-full bg-[#f4f5f7] text-[#11244e] text-xs font-medium tracking-wide border border-slate-200/80 mb-4 inline-block">
            Growth Story
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] max-w-2xl mb-4">
            Engineered for growth,<br />
            <span className="font-serif italic text-[#11244e]">built for enterprise scale</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            Real-time metrics and proven performance across AI automation, web platforms, mobile apps, and cloud infrastructure.
          </p>
        </div>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "1.15fr 1fr 1fr", gridTemplateRows: "auto auto auto" }}
        >
          {/* ── Mission Card (clean dark) ── */}
          <div
            className="relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden"
            style={{
              gridColumn: "1", gridRow: "1 / 3",
              background: "linear-gradient(160deg, #1c1c1c 0%, #2a2a2a 50%, #1c1c1c 100%)",
            }}
          >
            {/* Subtle frosted dot texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

            {/* Background Watermark SVG for Mission Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-main-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.05, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute right-[-20px] bottom-[-20px] pointer-events-none text-white"
              >
                {React.createElement(svc.cards.featured.icon, { className: "w-56 h-56 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>

            {/* Cycling service indicator pills */}
            <div className="relative z-10 flex flex-wrap gap-2.5 mb-6">
              {services.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => handleSelectService(i)}
                  className={`text-[12px] font-normal px-4 py-1.5 rounded-full border transition-all duration-300 ${i === active
                    ? "bg-white/10 text-white border-white/40 shadow-xs"
                    : "bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-slate-200"
                    }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Service description (animated) */}
            <div className="relative z-10 flex-1 min-h-[90px]">
              <AnimatePresence mode="wait">
                <motion.div key={active} {...fadeSlide}>
                  <p className="text-slate-300 text-[15px] font-normal leading-[1.85]">
                    {svc.description}
                  </p>

                  {/* Tagline Highlight */}
                  <p className="mt-5 text-slate-400 text-[13px] italic font-normal border-l-2 border-slate-700/60 pl-3.5 leading-relaxed">
                    &ldquo;{svc.tagline}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Scrolling Tech Marquee */}
            <div className="relative z-10 mt-8 border-t border-white/5 pt-5">
              <p className="text-slate-500 text-[10px] font-normal uppercase tracking-[0.15em] mb-4">Tech Stack</p>
              <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`marquee-${active}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2"
                    style={{ width: "max-content", animation: "marquee-scroll 20s linear infinite" }}
                  >
                    {[...svc.techIcons, ...svc.techIcons].map((tech, i) => (
                      <span
                        key={`${tech}-${i}`}
                        className="inline-flex items-center shrink-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-medium tracking-wide whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Col 2 Row 1: Top stat card ── */}
          <div className="relative rounded-2xl bg-[#f4f5f7] p-7 flex flex-col justify-between min-h-[150px] overflow-hidden group"
            style={{ gridColumn: "2", gridRow: "1" }}>
            <AnimatePresence mode="wait">
              <motion.div key={`top-${active}`} {...fadeSlide} className="flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[42px] font-normal text-slate-900 tracking-tight leading-none">
                    <Counter key={`top-v-${active}`} end={svc.cards.top.end} suffix={svc.cards.top.suffix} />
                  </div>
                  {/* Technology Icon */}
                  {React.createElement(svc.cards.top.icon, {
                    className: "w-6 h-6 text-slate-400 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 opacity-60",
                  })}
                </div>
                <p className="text-slate-500 text-sm font-normal mt-4 leading-[1.65]">
                  {svc.cards.top.label}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Background Watermark SVG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-top-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.06, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-15px] bottom-[-15px] pointer-events-none text-slate-900 group-hover:opacity-[0.11] transition-opacity duration-300"
              >
                {React.createElement(svc.cards.top.icon, { className: "w-32 h-32 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Col 3 Row 1-2: Tall stat card ── */}
          <div className="relative rounded-2xl bg-[#f4f5f7] p-7 flex flex-col justify-between overflow-hidden group"
            style={{ gridColumn: "3", gridRow: "1 / 3" }}>
            <AnimatePresence mode="wait">
              <motion.div key={`tall-${active}`} {...fadeSlide} className="flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[42px] font-normal text-slate-900 tracking-tight leading-none">
                    <Counter key={`tall-v-${active}`} end={svc.cards.tall.end} suffix={svc.cards.tall.suffix} />
                  </div>
                  {/* Technology Icon */}
                  {React.createElement(svc.cards.tall.icon, {
                    className: "w-6 h-6 text-slate-400 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 opacity-60",
                  })}
                </div>
                <p className="text-slate-500 text-sm font-normal leading-[1.65]">
                  {svc.cards.tall.label}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Background Watermark SVG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-tall-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.06, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-20px] bottom-[-20px] pointer-events-none text-slate-900 group-hover:opacity-[0.11] transition-opacity duration-300"
              >
                {React.createElement(svc.cards.tall.icon, { className: "w-44 h-44 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Col 2 Row 2-3: Featured card (with border) ── */}
          <div className="relative rounded-2xl bg-[#f4f5f7] border-2 border-slate-900/10 p-7 flex flex-col justify-between overflow-hidden group"
            style={{ gridColumn: "2", gridRow: "2 / 4" }}>
            <AnimatePresence mode="wait">
              <motion.div key={`feat-${active}`} {...fadeSlide} className="flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[48px] font-normal text-slate-900 tracking-tight leading-none">
                    <Counter key={`feat-v-${active}`} end={svc.cards.featured.end} suffix={svc.cards.featured.suffix} />
                  </div>
                  {/* Technology Icon */}
                  {React.createElement(svc.cards.featured.icon, {
                    className: "w-7 h-7 text-slate-500 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 opacity-70",
                  })}
                </div>
                <p className="text-slate-500 text-sm font-normal leading-[1.65]">
                  {svc.cards.featured.label}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Background Watermark SVG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-feat-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.06, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-20px] bottom-[-20px] pointer-events-none text-slate-900 group-hover:opacity-[0.11] transition-opacity duration-300"
              >
                {React.createElement(svc.cards.featured.icon, { className: "w-48 h-48 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Col 1 Row 3: Short bottom-left card ── */}
          <div className="relative rounded-2xl bg-[#f4f5f7] p-7 flex flex-col justify-between min-h-[130px] overflow-hidden group"
            style={{ gridColumn: "1", gridRow: "3" }}>
            <AnimatePresence mode="wait">
              <motion.div key={`botL-${active}`} {...fadeSlide} className="flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[42px] font-normal text-slate-900 tracking-tight leading-none">
                    <Counter key={`botL-v-${active}`} end={svc.cards.bottomL.end} suffix={svc.cards.bottomL.suffix} />
                  </div>
                  {/* Technology Icon */}
                  {React.createElement(svc.cards.bottomL.icon, {
                    className: "w-6 h-6 text-slate-400 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 opacity-60",
                  })}
                </div>
                <p className="text-slate-500 text-sm font-normal mt-3 leading-[1.65]">
                  {svc.cards.bottomL.label}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Background Watermark SVG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-botL-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.06, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-15px] bottom-[-15px] pointer-events-none text-slate-900 group-hover:opacity-[0.11] transition-opacity duration-300"
              >
                {React.createElement(svc.cards.bottomL.icon, { className: "w-28 h-28 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Col 3 Row 3: Short bottom-right card ── */}
          <div className="relative rounded-2xl bg-[#f4f5f7] p-7 flex flex-col justify-between min-h-[130px] overflow-hidden group"
            style={{ gridColumn: "3", gridRow: "3" }}>
            <AnimatePresence mode="wait">
              <motion.div key={`botR-${active}`} {...fadeSlide} className="flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[42px] font-normal text-slate-900 tracking-tight leading-none">
                    <Counter key={`botR-v-${active}`} end={svc.cards.bottomR.end} suffix={svc.cards.bottomR.suffix} />
                  </div>
                  {/* Technology Icon */}
                  {React.createElement(svc.cards.bottomR.icon, {
                    className: "w-6 h-6 text-slate-400 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 opacity-60",
                  })}
                </div>
                <p className="text-slate-500 text-sm font-normal mt-3 leading-[1.65]">
                  {svc.cards.bottomR.label}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Background Watermark SVG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-botR-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.06, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-15px] bottom-[-15px] pointer-events-none text-slate-900 group-hover:opacity-[0.11] transition-opacity duration-300"
              >
                {React.createElement(svc.cards.bottomR.icon, { className: "w-28 h-28 stroke-[0.8]" })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Active service progress dots */}
        <div className="flex gap-2 mt-5">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelectService(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-slate-900" : "w-4 bg-slate-300"
                }`}
            />
          ))}
        </div>

        {/* Bottom copy row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mt-14 pt-10 border-t border-slate-100">
          <h3 className="text-[22px] sm:text-[28px] font-normal text-slate-900 max-w-sm leading-[1.3] tracking-tight">
            Building Quality AI Solutions<br />
            <span className="text-slate-400">for a Smarter Future</span>
          </h3>
          <p className="text-slate-500 text-sm max-w-xl leading-[1.85] font-normal">
            At Dexze, we don&apos;t just use AI in our operations — we tailor its usability for our customers.
            Our solutions are designed for everyone, adapting to any industry&apos;s unique needs.
            No tech expertise required, just a vision. We&apos;ll handle the rest.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GrowthStory;
