'use client';

import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { motion } from "framer-motion";

import { CardCarousel } from "@/components/CardCarousel";
import { BrandMarquee } from "@/components/BrandMarquee";

export default function Home() {
  const { opacity, yOffset } = useHeroAnimation();

  return (
    <div className="flex flex-col min-h-screen text-zinc-900 font-sans antialiased selection:bg-zinc-200 overflow-hidden relative">
      
      {/* 3D Canvas Background - right side, 75% width */}
      <div className="absolute top-0 right-0 w-3/4 h-full z-0 pointer-events-none">
        <HeroCanvas />
      </div>

      {/* Navigation - Minimal and Spaced */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full flex justify-between items-center px-12 py-10 max-w-7xl mx-auto z-10"
      >
        <div className="font-semibold text-2xl tracking-tighter">
          TechUS.
        </div>
        <nav className="hidden md:flex gap-12 text-sm">
          <a href="#" className="hover:text-zinc-500 transition-colors">Services</a>
          <a href="#" className="hover:text-zinc-500 transition-colors">Work</a>
          <a href="#" className="hover:text-zinc-500 transition-colors">About</a>
          <a href="#" className="hover:text-zinc-500 transition-colors">Contact</a>
        </nav>
      </motion.header>

      <main className="flex flex-1 w-full flex-col z-10">
        {/* Hero Section */}
        <motion.section 
          style={{ opacity, y: yOffset }}
          className="flex flex-col items-start justify-center px-12 pt-24 md:pt-32 max-w-7xl mx-auto w-full min-h-[80vh] relative"
        >
          <div className="max-w-md">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl xl:text-6xl tracking-tight leading-[1.15] mb-6 text-zinc-900"
            >
              Building digital <br/>experiences that matter.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="text-base md:text-lg text-zinc-500 mb-8 leading-relaxed"
            >
              We partner with visionary brands to create stunning, high-performance web and mobile applications that drive real impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-16"
            >
              <span>Design</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>Strategy</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>Engineering</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#"
                className="flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all text-sm"
              >
                Start a project
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-12 px-8 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all text-sm"
              >
                Our work
              </a>
            </motion.div>
          </div>

          {/* Brand Marquee positioned at bottom right */}
          <BrandMarquee />
        </motion.section>

        {/* Carousel Section */}
        <section className="w-full bg-white pt-48 pb-32 mt-16">
          <CardCarousel />
        </section>
      </main>
    </div>
  );
}
