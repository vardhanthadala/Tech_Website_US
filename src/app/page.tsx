'use client';

import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { motion } from "framer-motion";

import { CardCarousel } from "@/components/CardCarousel";
import { BrandMarquee } from "@/components/BrandMarquee";
import Navbar from "@/components/Navbar";
import GrowthStory from "@/components/GrowthStory";
import Footer from "@/components/Footer";

export default function Home() {
  const { opacity, yOffset } = useHeroAnimation();

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 overflow-hidden relative bg-[#f8fafc]">
      <Navbar />

      <main className="flex flex-1 w-full flex-col z-10">
        {/* Hero Section */}
        <motion.section 
          style={{ opacity, y: yOffset }}
          className="flex flex-col items-start justify-center px-6 sm:px-8 lg:px-12 pt-32 md:pt-40 max-w-7xl mx-auto w-full min-h-[80vh] relative"
        >
          {/* 3D Canvas Background - right side, 75% width */}
          <div className="absolute top-0 right-0 w-3/4 h-full z-0 pointer-events-none">
            <HeroCanvas />
          </div>
          <div className="max-w-md">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl xl:text-6xl font-normal tracking-tight leading-[1.15] mb-6 text-slate-900"
            >
              Building digital <br/>experiences that matter.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="text-[15px] font-normal text-slate-400 mb-8 leading-[1.85]"
            >
              We partner with visionary brands to create stunning, high-performance web and mobile applications that drive real impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 text-[11px] font-normal uppercase tracking-[0.15em] text-slate-400 mb-16"
            >
              <span>Design</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Strategy</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
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
                className="flex items-center justify-center h-12 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all text-[13px] font-normal"
              >
                Start a project
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-12 px-8 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all text-[13px] font-normal"
              >
                Our work
              </a>
            </motion.div>
          </div>

          {/* Brand Marquee positioned at bottom right */}
          <BrandMarquee />
        </motion.section>

        {/* Carousel Section */}
        <section className="w-full bg-white py-24 border-t border-slate-100 mt-16">
          <CardCarousel />
        </section>

        {/* Remote Section: Growth Story */}
        <section className="w-full">
          <GrowthStory />
        </section>
      </main>

      <Footer />
    </div>
  );
}
