'use client';

import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';

const CARDS = [
  {
    id: 1,
    brand: 'ANTHROPIC',
    headline: 'See how Anthropic accelerates AI adoption with Mintlify',
    stats: [
      { value: '2M', label: 'Monthly active\ndevelopers' },
      { value: '4+', label: 'Products serviced' }
    ],
    bgColor: '#ea580c', // Tailwind orange-600 approx
    imgColor: '#fdba74',
  },
  {
    id: 2,
    brand: 'coinbase',
    headline: 'How Coinbase became agent-ready with Mintlify',
    stats: [
      { value: '+50x', label: 'Faster deployment time' },
      { value: '12+', label: 'Products serviced' }
    ],
    bgColor: '#2563eb', // Tailwind blue-600 approx
    imgColor: '#93c5fd',
  },
  {
    id: 3,
    brand: 'HubSpot',
    headline: 'How HubSpot built a next-generation experience',
    stats: [
      { value: '+2x', label: 'Faster time to\nproduction' },
      { value: '10+', label: 'Teams onboarded' }
    ],
    bgColor: '#ff7a59', // HubSpot orange
    imgColor: '#ffb3a0',
  },
  {
    id: 4,
    brand: 'Stripe',
    headline: 'Streamlining payment docs for millions of users',
    stats: [
      { value: '99%', label: 'Uptime reliability' },
      { value: '5+', label: 'New regions' }
    ],
    bgColor: '#6366f1', // Stripe blurple
    imgColor: '#a5b4fc',
  },
  {
    id: 5,
    brand: 'Vercel',
    headline: 'Scaling frontend deployments with incredible speed',
    stats: [
      { value: '10x', label: 'Faster builds' },
      { value: '100k+', label: 'Deployments daily' }
    ],
    bgColor: '#171717', // Neutral-900
    imgColor: '#525252',
  }
];

export const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (e: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      // Next
      setActiveIndex((prev) => Math.min(prev + 1, CARDS.length - 1));
    } else if (offset > 50 || velocity > 500) {
      // Prev
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const nextCard = () => setActiveIndex((prev) => Math.min(prev + 1, CARDS.length - 1));
  const prevCard = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-4xl font-normal tracking-tight text-slate-900 mb-1">
            Powering businesses of all sizes.
          </h2>
          <p className="text-[15px] font-normal text-slate-400 leading-[1.85]">
            Run your business on a reliable <br className="hidden md:block"/> platform that adapts to your needs.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <div className="flex gap-2">
            <button 
              onClick={prevCard}
              disabled={activeIndex === 0}
              className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextCard}
              disabled={activeIndex === CARDS.length - 1}
              className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          <button className="h-10 px-6 bg-slate-900 text-white font-normal text-[13px] rounded-md hover:bg-slate-800 transition-colors flex items-center gap-2">
            For enterprises
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full overflow-hidden pb-12 relative">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing pl-[max(3rem,calc((100vw-80rem)/2+3rem))] pr-[max(3rem,calc((100vw-80rem)/2+3rem))]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: `calc(-${activeIndex} * (min(85vw, 60rem) + 1.5rem))` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: 'max-content' }}
        >
          {CARDS.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveIndex(index)}
                animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.95 }}
                transition={{ duration: 0.4 }}
                className={`flex w-[85vw] max-w-[60rem] h-[28rem] rounded-xl overflow-hidden shrink-0 shadow-lg ${!isActive ? 'cursor-pointer' : ''}`}
              >
                {/* Left side text/stats */}
                <div 
                  className="w-1/2 p-10 flex flex-col justify-between text-white relative overflow-hidden"
                  style={{ backgroundColor: card.bgColor }}
                >
                  {/* Grid pattern background overlay (simplified) */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  <div className="relative z-10">
                    <div className="font-bold text-sm tracking-wider uppercase mb-8">{card.brand}</div>
                    <h3 className="text-3xl font-medium leading-tight max-w-[90%]">
                      {card.headline}
                    </h3>
                  </div>

                  <div className="flex gap-12 relative z-10 mt-auto mb-6">
                    {card.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-4xl font-semibold mb-2">{stat.value}</div>
                        <div className="text-sm opacity-90 whitespace-pre-line leading-snug">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    <button className="bg-white text-zinc-900 px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-zinc-100 transition-colors flex items-center gap-2">
                      Read the story 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>

                {/* Right side image placeholder */}
                <div 
                  className="w-1/2 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: card.imgColor }}
                >
                  <div className="absolute inset-0 bg-black/5" />
                  <span className="text-black/30 font-medium tracking-widest uppercase text-sm">Image Placeholder</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-8">
        {CARDS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-zinc-800 w-6' 
                : 'bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
