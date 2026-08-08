'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  'Vercel',
  'Stripe',
  'Linear',
  'Raycast',
  'Figma',
  'Arc',
  'Loom'
];

export const BrandMarquee = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 overflow-hidden">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px bg-white/10 flex-1" />
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">
          Trusted by innovative teams
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        
        {/* Marquee Track */}
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust value based on content width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {/* Double the list to create a seamless loop */}
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-slate-700 tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
