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
    <section className="w-full bg-[#fdfbfd] py-16 lg:py-24 font-sans border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Modern Light CTA Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-slate-50/90 p-10 sm:p-14 lg:p-20 text-center text-slate-900 border border-slate-200 shadow-2xl shadow-slate-200/50">
          
          {/* Decorative Subtle Background Grid Mesh Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Ambient Glowing Orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100/40 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">


            {/* Main Elegant Title strictly in one line in cursive style */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight text-slate-900 mb-3 max-w-full mx-auto leading-tight whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-sm">
              {currentCta.title}
            </h2>

            {/* Subtitle Description strictly in 1 line */}
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto mb-8 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
              {currentCta.subtitle}
            </p>

            {/* Action CTA Button */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="group px-8 py-3.5 rounded-full bg-slate-900 text-white hover:bg-gradient-to-r hover:from-[#e947f5] hover:to-[#7a95e6] font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-transparent"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
