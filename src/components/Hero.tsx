"use client";

import React from "react";
import LiquidSphereCanvas from "./LiquidSphereCanvas";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-blue-100/50">
      {/* Background Soft Aura Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-[650px] h-[650px] bg-blue-300/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left Column: Headlines & CTA */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.12]">
            Transform Next-Gen IT Needs With{" "}
            <span className="block mt-2 font-sans font-black">
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                AI-First Digital
              </span>{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Partner
              </span>
            </span>
          </h1>

          <p className="text-slate-600 font-sans text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            We are global IT disruptors leveraging AI-powered capabilities to build an ecosystem that takes innovation a step ahead.
          </p>

          <div className="pt-2">
            <a
              href="#audit"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1b365d] hover:bg-[#122440] text-white font-sans font-bold text-base transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-95"
            >
              <span>Claim Free AI Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Organic Liquid Morphing Canvas Animation */}
        <div className="lg:col-span-5 w-full flex items-center justify-center z-10">
          <LiquidSphereCanvas />
        </div>
      </div>

      {/* Floating Bottom Right Chat Widget Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="w-14 h-14 rounded-full bg-[#1b365d] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
          title="Chat with us"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
