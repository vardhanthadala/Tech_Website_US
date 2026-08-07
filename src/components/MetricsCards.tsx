'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: 'Global Latency',
    value: '< 15ms',
    subtitle: 'Across 120+ edge nodes',
    colorClass: 'bg-emerald-400'
  },
  {
    title: 'Uptime SLA',
    value: '99.99%',
    subtitle: 'Enterprise-grade reliability',
    colorClass: 'bg-blue-400'
  },
  {
    title: 'Code Shipped',
    value: '2.4M+',
    subtitle: 'Lines of code deployed daily',
    colorClass: 'bg-violet-400'
  }
];

export const MetricsCards = () => {
  return (
    <div className="absolute bottom-12 right-12 md:right-[max(3rem,calc((100vw-80rem)/2+3rem))] z-20 hidden md:block">
      <div className="flex bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl overflow-hidden divide-x divide-white/40">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: "easeOut" }}
            className="p-5 min-w-[160px] bg-white/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${metric.colorClass} animate-pulse`} />
              <span className="text-[10px] font-semibold text-zinc-600 tracking-wider uppercase">
                {metric.title}
              </span>
            </div>
            <div className="text-xl font-bold text-zinc-900 mb-0.5 tracking-tight">
              {metric.value}
            </div>
            <div className="text-[10px] text-zinc-500 leading-tight">
              {metric.subtitle}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
