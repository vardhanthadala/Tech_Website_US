'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Check } from 'lucide-react';
import { PROJECTS_DATA, ProjectData } from '@/data/projectsData';

const SERVICES_OPTIONS = ['All Services', 'AI Automation', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Services'];
const INDUSTRIES_OPTIONS = ['All Industries', 'Healthcare', 'FinTech', 'E-Commerce', 'Consumer Tech'];

export const Projects = () => {
  const [selectedService, setSelectedService] = useState<string>('All Services');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');

  const [activeDropdown, setActiveDropdown] = useState<'service' | 'industry' | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedService !== 'All Services' && p.service !== selectedService) return false;
    if (selectedIndustry !== 'All Industries' && p.industry !== selectedIndustry) return false;
    return true;
  });

  const toggleDropdown = (name: 'service' | 'industry') => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  return (
    <section className="w-full bg-white text-slate-900 pt-20 pb-32 font-sans min-h-screen relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          
          {/* Badge Pill Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-6 inline-block shadow-2xs">
              Case Studies
            </span>
          </motion.div>

          {/* Main Title Entrance */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6 font-sans text-center max-w-4xl mx-auto"
          >
            Explore relevant projects<br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">from 100+ cases</span>
          </motion.h1>

          {/* Subtitle Paragraph Entrance */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-10 font-sans"
          >
            Discover how we partner with visionary brands to create stunning, high-performance digital applications that drive real impact.
          </motion.p>

          {/* Filter Pills Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 relative z-30"
          >
            
            {/* Services Filter Pill */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('service')}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all flex items-center gap-2.5 cursor-pointer shadow-2xs font-sans ${
                  selectedService !== 'All Services' || activeDropdown === 'service'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <span>{selectedService === 'All Services' ? 'Services' : selectedService}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'service' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'service' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 py-2 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50 animate-fadeIn font-sans">
                  {SERVICES_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelectedService(opt);
                        setActiveDropdown(null);
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-slate-50 text-slate-700 hover:text-slate-900 flex items-center justify-between transition-colors font-sans"
                    >
                      <span>{opt}</span>
                      {selectedService === opt && <Check className="w-4 h-4 text-slate-900" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Filter Pill */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('industry')}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all flex items-center gap-2.5 cursor-pointer shadow-2xs font-sans ${
                  selectedIndustry !== 'All Industries' || activeDropdown === 'industry'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <span>{selectedIndustry === 'All Industries' ? 'Industries' : selectedIndustry}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industry' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'industry' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 py-2 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50 animate-fadeIn font-sans">
                  {INDUSTRIES_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelectedIndustry(opt);
                        setActiveDropdown(null);
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-slate-50 text-slate-700 hover:text-slate-900 flex items-center justify-between transition-colors font-sans"
                    >
                      <span>{opt}</span>
                      {selectedIndustry === opt && <Check className="w-4 h-4 text-slate-900" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </motion.div>
        </div>

        {/* Projects Grid Entrance & Image Reveal Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 lg:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const isFull = project.layout === 'full';
              const initialDirection = isFull
                ? { opacity: 0, y: 50, scale: 0.96 }
                : isEven
                ? { opacity: 0, x: -50 }
                : { opacity: 0, x: 50 };

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={initialDirection}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: (idx % 2) * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`group flex flex-col ${
                    isFull ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <Link href={`/projects/${project.slug}`} className="flex flex-col group cursor-pointer">
                    {/* Animated Image Container with Scale Reveal */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: (idx % 2) * 0.1 + 0.1,
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className={`relative w-full overflow-hidden bg-slate-100 rounded-3xl mb-5 shadow-xs ${project.imageAspect}`}
                    >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes={project.layout === 'full' ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                      priority={idx < 4}
                    />
                  </motion.div>

                  {/* Card Content Text Footer */}
                  <div className="flex flex-col space-y-1.5 px-0.5">
                    {/* Category Tag */}
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest font-sans">
                      {project.brandTag}
                    </p>

                    {/* Decreased Title Size */}
                    {project.layout === 'full' && project.description ? (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pt-0.5">
                        <h2 className="md:col-span-7 text-xl sm:text-2xl font-normal text-slate-900 tracking-tight leading-snug font-sans group-hover:text-slate-700 transition-colors">
                          {project.title}
                        </h2>
                        <p className="md:col-span-5 text-slate-500 text-sm sm:text-base font-normal leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>
                    ) : (
                      <h2 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight leading-snug font-sans group-hover:text-slate-700 transition-colors max-w-xl">
                        {project.title}
                      </h2>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="w-full py-24 text-center">
            <p className="text-slate-500 text-base sm:text-lg font-normal font-sans">No projects found matching the selected filters.</p>
            <button
              onClick={() => {
                setSelectedService('All Services');
                setSelectedIndustry('All Industries');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:opacity-95 transition-all font-sans"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
