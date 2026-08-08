'use client';

import { HeroCanvas } from "@/components/3d/HeroCanvas";
import Grainient from "@/components/Grainient";
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
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 overflow-hidden relative bg-[#f8fafc]">
      <Navbar />

      <main className="flex flex-1 w-full flex-col z-10">
        {/* Hero Section */}
        <section className="w-full relative min-h-screen overflow-hidden bg-[#f8fafc]">
          <motion.div 
            style={{ opacity, y: yOffset }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center pt-32 pb-24"
          >
            {/* Grainient Background */}
            <div className="absolute inset-0 z-0">
              <Grainient
                color1="#e1be7c"
                color2="#eee9e0"
                color3="#e1be7c"
                timeSpeed={0.25}
                colorBalance={0.0}
                warpStrength={1.0}
                warpFrequency={5.0}
                warpSpeed={2.0}
                warpAmplitude={50.0}
                blendAngle={0.0}
                blendSoftness={0.05}
                rotationAmount={500.0}
                noiseScale={2.0}
                grainAmount={0.1}
                grainScale={2.0}
                grainAnimated={false}
                contrast={1.5}
                gamma={1.0}
                saturation={1.0}
                centerX={0.0}
                centerY={0.0}
                zoom={0.9}
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
                <span className="font-serif italic text-[#11244e] whitespace-nowrap">experiences that matter.</span>
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-10"
              >
                We partner with visionary brands to create stunning, high-performance web and mobile applications that drive real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center items-center gap-4 text-[11px] font-normal uppercase tracking-[0.15em] text-slate-600 mb-12"
              >
                <span>Design</span>
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span>Strategy</span>
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span>Engineering</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a
                  href="#"
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-[#11244e] text-white hover:bg-slate-800 transition-all text-[13px] font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start a project
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 hover:bg-white transition-all text-[13px] font-medium shadow-sm hover:shadow-md"
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
