"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { WebCategoryData } from "@/data/webDevelopmentData";

interface WebDevelopmentCTAProps {
  category: WebCategoryData;
}

export const WebDevelopmentCTA: React.FC<WebDevelopmentCTAProps> = ({ category }) => {
  // Category-specific CTA content map for Web Development
  const ctaContentMap: Record<
    string,
    {
      title: string;
      subtitle: string;
      steps: Array<{ num: string; title: string; desc: string }>;
    }
  > = {
    "full-stack-nextjs-apps": {
      title: "Build your Next.js Application",
      subtitle: "Architect zero-latency React 19 apps powered by Server Components and Edge runtime optimization.",
      steps: [
        {
          num: "01",
          title: "Architecture & RFC",
          desc: "Define database schemas, API routes, and Server Component trees."
        },
        {
          num: "02",
          title: "Engineered for speed",
          desc: "Develop type-safe server actions with zero-bundle-size client hydration."
        },
        {
          num: "03",
          title: "Deploy globally",
          desc: "Ship to Vercel edge networks with sub-100ms global load times."
        }
      ]
    },
    "headless-cms-ecommerce": {
      title: "Launch your Headless Storefront",
      subtitle: "Decouple your content catalog using modern CMS builders and high-converting checkout APIs.",
      steps: [
        {
          num: "01",
          title: "Model your CMS",
          desc: "Structure Sanity, Contentful, or Strapi content schemas and asset types."
        },
        {
          num: "02",
          title: "Connect GraphQL",
          desc: "Link real-time inventory and catalog search with Algolia & Shopify APIs."
        },
        {
          num: "03",
          title: "Global Checkout",
          desc: "Process multi-currency orders with bank-grade Stripe session security."
        }
      ]
    },
    "progressive-web-apps": {
      title: "Deploy your Progressive PWA",
      subtitle: "Deliver native-like mobile web applications that run offline with background synchronization.",
      steps: [
        {
          num: "01",
          title: "Cache Manifests",
          desc: "Configure service worker manifests and stale-while-revalidate rules."
        },
        {
          num: "02",
          title: "IndexedDB Fabric",
          desc: "Persist local user input in client databases during offline sessions."
        },
        {
          num: "03",
          title: "Push Telemetry",
          desc: "Dispatch Web Push alerts and trigger instant home screen installation."
        }
      ]
    },
    "interactive-3d-webgl": {
      title: "Create your 3D WebGL Canvas",
      subtitle: "Immerse visitors with GPU-accelerated Three.js visualizers and interactive shader scenes.",
      steps: [
        {
          num: "01",
          title: "Draco Mesh Setup",
          desc: "Optimize 3D GLTF models and buffer geometries for instant page loads."
        },
        {
          num: "02",
          title: "Author Shaders",
          desc: "Code custom GLSL fragment shaders to render morphing lighting patterns."
        },
        {
          num: "03",
          title: "60 FPS Render",
          desc: "Lock dynamic window scroll mechanics to 60 FPS physics engines."
        }
      ]
    }
  };

  const currentCta = ctaContentMap[category.slug] || ctaContentMap["full-stack-nextjs-apps"];

  return (
    <section className="w-full bg-[#fcfcfd] py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Light Combination Styled Banner with Rich Modern UI Design */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-purple-50/30 p-8 sm:p-14 lg:p-20 text-center text-slate-900 border border-slate-200/90 shadow-2xl shadow-purple-900/[0.04]">
          
          {/* Decorative Subtle Background Grid Mesh Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f018_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f018_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Dual Ambient Radial Glow Orbs */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-200/40 via-indigo-200/30 to-rose-200/40 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 blur-[80px] rounded-full pointer-events-none" />

          {/* Decorative Subtle Floating Ring Orbs */}
          <div className="absolute top-6 left-8 w-24 h-24 rounded-full border border-purple-200/40 bg-purple-100/20 blur-xs pointer-events-none hidden sm:block" />
          <div className="absolute bottom-6 right-8 w-32 h-32 rounded-full border border-indigo-200/40 bg-indigo-100/20 blur-xs pointer-events-none hidden sm:block" />

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Centered Premium Glowing Icon Badge */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-purple-200/80 shadow-md shadow-purple-500/10 backdrop-blur-xl mb-6 group hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-50 to-slate-100 flex items-center justify-center border border-purple-100">
                <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
              </div>
            </div>

            {/* Top Micro Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200/90 text-xs font-semibold mb-5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
              <span>Ready to elevate your web platform?</span>
            </div>

            {/* Main Elegant Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-slate-900 mb-5 max-w-4xl mx-auto leading-[1.15]">
              {currentCta.title}
            </h2>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-base sm:text-lg font-normal max-w-xl mx-auto mb-10 leading-relaxed">
              {currentCta.subtitle}
            </p>

            {/* Action CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="group px-9 py-4 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-slate-950/20 active:scale-95 flex items-center gap-3 cursor-pointer"
              >
                <span>Get Started</span>
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
