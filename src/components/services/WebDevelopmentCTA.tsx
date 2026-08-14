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
    <section className="w-full bg-[#fdfbf7] py-16 lg:py-24 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Delphi-style Gradient Banner (Light Warm Palette) */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#ff6b4a] via-[#f97316] to-[#e11d48] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-orange-500/10 mb-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.3),transparent_60%)] pointer-events-none" />

          <div className="mx-auto text-2xl font-serif text-white/90 mb-5 tracking-widest select-none">
            \u220B\u220C
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
            {currentCta.title}
          </h2>

          <p className="text-white/90 text-sm sm:text-base font-normal max-w-md mx-auto mb-9 leading-relaxed">
            {currentCta.subtitle}
          </p>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
          </div>
        </div>

        {/* 3 Step Light Cards matching Reference Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentCta.steps.map((step, idx) => (
            <div key={idx} className="bg-[#f7f3eb]/90 border border-[#e8dfd1]/80 rounded-3xl p-7 text-left shadow-2xs hover:bg-[#f4efe4] transition-colors">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-slate-900 mb-2.5 flex items-center gap-2">
                <span className="text-[#ea580c] font-mono font-semibold text-base sm:text-lg">{step.num}</span>
                <span>{step.title}</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
