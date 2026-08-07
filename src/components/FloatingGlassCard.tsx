'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingGlassCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      className="absolute bottom-32 right-12 md:right-24 z-20 pointer-events-none hidden md:block"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-[280px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-800 tracking-wider uppercase">System Status</span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">12ms</span>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-600">
              <span>Performance</span>
              <span className="font-medium">99.9%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-200/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "99.9%" }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                className="h-full bg-zinc-800 rounded-full"
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-600">
              <span>Global Edge Network</span>
              <span className="font-medium">Optimized</span>
            </div>
            <div className="flex gap-1 h-8 items-end pt-2">
              {[40, 70, 45, 90, 60, 85, 100, 75].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: "backOut" }}
                  className="flex-1 bg-zinc-800/80 rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
