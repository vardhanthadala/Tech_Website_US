'use client';

import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { motion } from "framer-motion";

import { CardCarousel } from "@/components/CardCarousel";
import { BrandMarquee } from "@/components/BrandMarquee";
import Navbar from "@/components/Navbar";
import GrowthStory from "@/components/GrowthStory";
import EngineeringProcess from "@/components/EngineeringProcess";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { opacity, yOffset } = useHeroAnimation();

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-amber-100 overflow-hidden relative bg-[#faf8f5]">
      <Navbar />

      <main className="flex flex-1 w-full flex-col z-10">
        {/* Hero Section */}
        <motion.section
          style={{ opacity, y: yOffset }}
          className="w-full pt-32 pb-16 md:pt-40 min-h-[80vh] relative font-sans"
        >
          {/* 3D Canvas Background - right side, 75% width */}
          <div className="absolute top-0 right-0 w-3/4 h-full z-0 pointer-events-none">
            <HeroCanvas />
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              {/* Section Pill Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="px-4 py-1.5 rounded-full bg-[#eee6dc] text-[#11244e] text-xs font-medium tracking-wide border border-[#e2d7cb]/80 mb-4 inline-block shadow-2xs"
              >
                Digital Engineering
              </motion.span>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4 font-sans"
              >
                Building digital<br />
                <span className="font-serif italic text-[#11244e]">experiences that matter.</span>
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-500 text-base sm:text-lg font-normal max-w-xl leading-relaxed mb-8"
              >
                We partner with visionary brands to create stunning, high-performance web and mobile applications that drive real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 text-[11px] font-normal uppercase tracking-[0.15em] text-slate-400 mb-10"
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
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="#"
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-[#11244e] via-[#9a3412] to-[#c2703e] text-white hover:opacity-90 transition-all text-[13px] font-medium shadow-md shadow-amber-600/20"
                >
                  Start a project
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-[#f2ece4] text-[#11244e] border border-[#e2d7cb]/80 hover:bg-[#e7ded3] transition-all text-[13px] font-medium"
                >
                  Our work
                </a>
              </motion.div>
            </div>
          </div>

          {/* Brand Marquee positioned at bottom right */}
          <BrandMarquee />
        </motion.section>

        {/* Carousel Section (Hidden for now) */}
        {/* <section className="w-full bg-white py-24 border-t border-slate-100 mt-16">
          <CardCarousel />
        </section> */}

        {/* Remote Section: Growth Story */}
        <section className="w-full">
          <GrowthStory />
        </section>

        {/* Process Section: How We Work */}
        <section className="w-full">
          <EngineeringProcess />
        </section>

        <section className="w-full">
          <Testimonials />
        </section>

        <section className="w-full">
          <FaqSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
