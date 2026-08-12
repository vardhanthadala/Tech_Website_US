'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProjectData } from '@/data/projectsData';

interface CaseStudyDetailClientProps {
  project: ProjectData;
  nextProject?: ProjectData;
  prevProject?: ProjectData;
}

function formatTitleWithGradient(title: string) {
  const words = title.split(' ');
  if (words.length <= 3) return <span>{title}</span>;

  const mainPart = words.slice(0, -3).join(' ');
  const gradientPart = words.slice(-3).join(' ');

  return (
    <>
      {mainPart}{' '}
      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">
        {gradientPart}
      </span>
    </>
  );
}

// Multi-directional Motion Variants
const slideLeftToRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const slideRightToLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const slideTopToBottom = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const slideBottomToTop = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function CaseStudyDetailClient({
  project,
  nextProject,
  prevProject,
}: CaseStudyDetailClientProps) {
  return (
    <main className="w-full bg-white text-slate-900 font-sans min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation: Left to Right */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={slideLeftToRight}
            className="mb-8 flex items-center gap-2 text-xs sm:text-sm font-medium font-sans"
          >
            <Link
              href="/projects"
              className="text-slate-500 hover:text-slate-950 transition-colors font-sans"
            >
              Projects
            </Link>
            <span className="text-slate-300 font-normal">/</span>
            <span className="text-slate-900 font-semibold tracking-wide font-sans">
              {project.brandTag}
            </span>
          </motion.nav>

          {/* Main Title: Top to Bottom */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideTopToBottom}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] max-w-4xl mb-10 font-sans"
          >
            {formatTitleWithGradient(project.title)}
          </motion.h1>

          {/* Specs Bar: Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 py-8 border-t border-b border-slate-100 font-sans"
          >
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans">CLIENT</p>
              <p className="font-semibold text-slate-900 text-sm font-sans">{project.client}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans">YEAR</p>
              <p className="font-semibold text-slate-900 text-sm font-sans">{project.year}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans">SERVICE</p>
              <p className="font-semibold text-slate-900 text-sm font-sans">{project.service}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans">INDUSTRY</p>
              <p className="font-semibold text-slate-900 text-sm font-sans">{project.industry}</p>
            </div>
            {project.websiteUrl && (
              <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-end">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-xs hover:opacity-90 transition-all shadow-xs font-sans"
                >
                  <span>Visit Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* Hero Showcase Cover Image: Bottom to Top */}
      <section className="pb-16 sm:pb-24 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideBottomToTop}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xs bg-slate-100"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Executive Overview & Impact Metrics Grid */}
      <section className="py-16 sm:py-24 border-t border-b border-slate-100 font-sans overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Tagline Column: Left to Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideLeftToRight}
              className="lg:col-span-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-6 inline-block shadow-2xs font-sans">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight leading-snug font-sans">
                {formatTitleWithGradient(project.heroTagline)}
              </h2>
            </motion.div>

            {/* Impact Metrics Grid: Right to Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideRightToLeft}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-100"
            >
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col font-sans">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight mb-2 leading-none font-sans whitespace-nowrap">
                    {metric.value}
                  </span>
                  <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider font-sans leading-tight">
                    {metric.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Challenge & Solution Section: Left to Right (Challenge) & Right to Left (Solution) */}
      <section className="py-16 sm:py-24 font-sans bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* The Challenge Column: Left to Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideLeftToRight}
              className="space-y-4"
            >
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest font-sans">
                THE CHALLENGE
              </p>
              <p className="text-slate-800 text-lg sm:text-xl font-normal leading-relaxed font-sans">
                {project.challenge}
              </p>
            </motion.div>

            {/* Our Solution Column: Right to Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideRightToLeft}
              className="space-y-4"
            >
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest font-sans">
                OUR SOLUTION
              </p>
              <p className="text-slate-800 text-lg sm:text-xl font-normal leading-relaxed font-sans">
                {project.solution}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Gallery / Visual Showcase: Top to Bottom (Featured Cover) & Left/Right (Grid) */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-12 sm:py-20 bg-slate-50/50 font-sans overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            
            {/* 1. Full-Width Featured Gallery Image: Top to Bottom */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideTopToBottom}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xs bg-slate-100 group"
            >
              <Image
                src={project.galleryImages[0]}
                alt={`${project.title} featured showcase`}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </motion.div>

            {/* 2. Side-by-Side Images Grid: Left Image (Left to Right) & Right Image (Right to Left) */}
            {project.galleryImages.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {project.galleryImages.slice(1).map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={idx % 2 === 0 ? slideLeftToRight : slideRightToLeft}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xs bg-slate-100 group"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} gallery screenshot ${idx + 2}`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* Client Testimonial: Bottom to Top */}
      {project.testimonial && (
        <section className="py-20 sm:py-28 border-t border-b border-slate-100 bg-white font-sans overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideBottomToTop}
            className="max-w-4xl mx-auto px-4 text-center"
          >
            <p className="text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-relaxed mb-8 font-sans">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-slate-900 text-base font-sans">{project.testimonial.author}</p>
              <p className="text-slate-400 text-xs font-medium mt-0.5 font-sans">{project.testimonial.role}</p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Minimalist Next & Previous Navigation Bar */}
      <section className="py-8 sm:py-12 border-t border-slate-100 bg-white font-sans overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Previous Project Arrow: Left to Right */}
          {prevProject ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeftToRight}
            >
              <Link
                href={`/projects/${prevProject.slug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors font-sans group cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                <span>Previous Project</span>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeftToRight}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors font-sans whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>All Projects</span>
              </Link>
            </motion.div>
          )}

          {/* Next Project Arrow Button: Right to Left */}
          {nextProject && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRightToLeft}
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all font-sans group shadow-xs cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
