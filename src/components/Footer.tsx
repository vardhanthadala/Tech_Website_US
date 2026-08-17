"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  hideCTA?: boolean;
  hideCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ hideCTA = false, hideCta = false }) => {
  const showBanner = !hideCTA && !hideCta;
  const isTopPadded = showBanner ? 'pt-24' : 'pt-16';

  return (
    <footer id="contact" className={`w-full bg-white text-slate-600 ${isTopPadded} pb-14 font-sans border-t border-slate-100 overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call To Action Banner */}
        {showBanner && (
          <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 mb-4 inline-block shadow-2xs"
            >
              Get Started
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              Ready to build<br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">your next product?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed"
            >
              No hassle, no legacy delays. Start building high-impact digital products instantly with Dexze.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex items-center justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-base hover:opacity-95 transition-all shadow-md active:scale-95"
              >
                Get started for free
              </Link>
            </motion.div>
          </div>
        )}

        {/* Minimalist 2-Zone Footer Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pb-16 border-b border-slate-100 text-sm font-normal">
          {/* Left Brand Area */}
          <div className="max-w-sm flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" suppressHydrationWarning className="inline-block mb-5 group">
                <Image
                  src="/logo.png"
                  alt="Dexze Logo"
                  width={160}
                  height={48}
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 opacity-90 hover:opacity-100"
                />
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                Dexze empowers teams to build scalable, AI-driven applications and modern web platforms — turning ambitious ideas into high-performing digital realities.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-slate-500 pt-1">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-all duration-300 hover:scale-115 cursor-pointer"
                aria-label="X / Twitter"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E4405F] transition-all duration-300 hover:scale-115 cursor-pointer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66C2] transition-all duration-300 hover:scale-115 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14 lg:gap-20">
            {/* Column 1: Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
                Services
              </h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li>AI Automation</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>UI / UX Design</li>
                <li>Cloud & DevOps</li>
              </ul>
            </div>

            {/* Column 2: Work */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
                Work
              </h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                {/* <li><Link href="/projects" className="hover:text-slate-900 transition-colors">All Projects</Link></li> */}
                <li><Link href="/projects" className="hover:text-slate-900 transition-colors">Healthcare Apps</Link></li>
                <li><Link href="/projects" className="hover:text-slate-900 transition-colors">FinTech Platforms</Link></li>
                <li><Link href="/projects" className="hover:text-slate-900 transition-colors">E-Commerce</Link></li>
                <li><Link href="/projects" className="hover:text-slate-900 transition-colors">AI & Robotics</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
                Company
              </h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Start a Project</Link></li>
                <li>
                  <a
                    href="https://www.dexze.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
                  >
                    <span>Creative Studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
                <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
                <li><a href="mailto:hello@dexze.com" className="hover:text-slate-900 transition-colors">hello@dexze.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clean Single Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div>
            © {new Date().getFullYear()} Dexze. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            All product names, logos, and brands are property of their respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
