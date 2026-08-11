"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CloudSky() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-sky-50/30">
      
      {/* Base Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />

      {/* Main Cloud Image with Slow Panning */}
      <motion.div
        className="absolute -inset-[20%] w-[140%] h-[140%] z-0 opacity-80"
        style={{
          backgroundImage: "url('/images/heavenly-sky.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          x: ["-12%", "12%", "-12%"],
          y: ["-4%", "4%", "-4%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Subtle secondary layer for parallax depth (optional, using the same image but offset and blurred) */}
      <motion.div
        className="absolute -inset-[30%] w-[160%] h-[160%] z-0 opacity-40 blur-2xl mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/heavenly-sky.png')",
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          x: ["15%", "-15%", "15%"],
          y: ["5%", "-5%", "5%"],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
