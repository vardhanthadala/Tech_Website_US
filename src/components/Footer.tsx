"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-[#f4f5f8] text-slate-900 pt-24 pb-16 font-sans border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Call To Action Banner */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight">
            Try Dexze today
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            No hassle, no legacy delays. Start building high-impact digital products instantly.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#111111] text-white font-normal text-base hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Get started for free
            </a>
          </div>
        </div>

        {/* 5-Column Navigation Grid matching standard system alignment */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 lg:gap-16 pb-20 border-b border-slate-200/80 text-sm font-normal">
          {/* Column 1: Product / Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
              Product
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#services" className="hover:text-slate-900 transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">UI / UX Design</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Cloud Services</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
              Solutions
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Autonomous AI Agents</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Full-Stack Next.js</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">iOS & Android Apps</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Design Systems</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">DevOps & AWS</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
              Resources
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a></li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                  <span>Join Our Discord</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="#docs" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                  <span>Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="#tutorials" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                  <span>Tutorials</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="#hire" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                  <span>Hire An Expert</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li><a href="#changelog" className="hover:text-slate-900 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
              Company
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#customers" className="hover:text-slate-900 transition-colors">Customers</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li>
                <a href="#careers" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                  <span>Careers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 text-sm tracking-tight">
              Connect
            </h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="mailto:sales@dexze.com" className="hover:text-slate-900 transition-colors">Sales</a></li>
              <li><a href="mailto:support@dexze.com" className="hover:text-slate-900 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            © Dexze {new Date().getFullYear()}. All rights reserved
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-slate-700">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-950 transition-colors" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-slate-950 transition-colors" aria-label="YouTube">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-950 transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-950 transition-colors" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-6 text-[11px] text-slate-400 font-normal leading-relaxed">
          All featured work on this website is presented for illustrative purposes only, showcasing real-life examples of engineering design. Dexze does not claim ownership of any third-party logos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
