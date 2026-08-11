"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ExpandableVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific container
  // "start end" = top of container hits bottom of viewport (just entering)
  // "end start" = bottom of container hits top of viewport (just leaving)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll to prevent jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map the scroll progress to width and scale
  // 0.0 to 0.4: Entering screen -> Expanding to full width
  // 0.4 to 0.6: In center of screen -> Holding full width
  // 0.6 to 1.0: Leaving screen -> Shrinking back down
  const scale = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    [0.85, 1, 1, 0.85]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <section ref={containerRef} className="w-full pt-2 pb-8 md:pt-4 md:pb-12 flex justify-center items-center overflow-hidden bg-white z-10 relative">
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-7xl aspect-[2/1] bg-transparent rounded-xl md:rounded-2xl overflow-hidden relative border border-slate-200/20 group mx-4 sm:mx-6 lg:mx-8"
      >
        {/* Auto-playing Tech Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        >
          <source src="https://res.cloudinary.com/ditzm1vpo/video/upload/v1786463795/8762946-uhd_3840_2160_25fps_yolo9p.mp4" type="video/mp4" />
        </video>

      </motion.div>
    </section>
  );
}
