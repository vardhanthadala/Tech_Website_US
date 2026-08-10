'use client';

import FloatingLines from "@/components/FloatingLines";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { motion } from "framer-motion";


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
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 overflow-hidden relative bg-white">
      <Navbar />

      <main className="flex flex-1 w-full flex-col z-10">
        {/* Hero Section */}
        <section className="w-full relative min-h-screen overflow-hidden bg-transparent">
          <motion.div
            style={{ opacity, y: yOffset }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
          >
            {/* Grainient Background */}
            <div className="absolute inset-0 z-0 bg-white">
              <FloatingLines
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={[5, 7, 10]}
                lineDistance={[8, 6, 4]}
                bendRadius={5.0}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6 font-sans text-center max-w-4xl mx-auto"
              >
                Building digital<br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] whitespace-nowrap">experiences that matter.</span>
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-500 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-10"
              >
                We partner with visionary brands to create stunning, high-performance web and mobile applications that drive real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center items-center gap-4 text-[11px] font-normal uppercase tracking-[0.15em] text-slate-500 mb-12"
              >
                <span>Design</span>
                <span className="w-1 h-1 rounded-full bg-slate-900/40" />
                <span>Strategy</span>
                <span className="w-1 h-1 rounded-full bg-slate-900/40" />
                <span>Engineering</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium text-base hover:opacity-95 transition-all shadow-md active:scale-95 flex items-center justify-center font-sans"
                >
                  Start a project
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all text-base font-medium shadow-sm"
                >
                  Our work
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Brand Marquee Section */}
        <section className="w-full bg-white py-12 border-b border-slate-100 relative z-20">
          <BrandMarquee />
        </section>

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
