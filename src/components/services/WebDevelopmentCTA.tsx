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
        
        {/* Main CTA Black & White Styled Banner matching AI Automation CTA */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-black p-8 sm:p-12 lg:p-16 text-center text-white border border-zinc-800 shadow-2xl mb-8">
          {/* Subtle Monochromatic Light Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

          {/* Centered Premium Icon Badge */}
          <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          {/* Main Elegant Title */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] mb-4 max-w-4xl mx-auto whitespace-nowrap">
            {currentCta.title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            {currentCta.subtitle}
          </p>

          {/* Action CTA Button */}
          <div className="flex justify-center">
            <a
              href="/#contact"
              className="group px-8 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-gradient-to-r hover:from-[#e947f5] hover:to-[#7a95e6] hover:text-white font-serif italic font-semibold text-base transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2 border border-zinc-200 hover:border-transparent"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Three Step Workflow Cards matching CTA Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentCta.steps.map((step, idx) => (
            <div key={idx} className="bg-zinc-950 border border-zinc-850/80 rounded-2xl p-6 text-left shadow-sm">
              <h3 className="font-sans font-bold text-sm text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-bold mr-1.5 font-mono">
                  {step.num}
                </span>{" "}
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
