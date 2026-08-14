"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { AppCategoryData } from "@/data/appDevelopmentData";

interface AppDevelopmentCTAProps {
  category: AppCategoryData;
}

export const AppDevelopmentCTA: React.FC<AppDevelopmentCTAProps> = ({ category }) => {
  const ctaContentMap: Record<
    string,
    {
      title: string;
      subtitle: string;
      steps: Array<{ num: string; title: string; desc: string }>;
    }
  > = {
    "ios-native-swift": {
      title: "Deploy your iOS Application",
      subtitle: "Build liquid-smooth SwiftUI apps compliant with Apple Human Interface Guidelines and App Store standards.",
      steps: [
        {
          num: "01",
          title: "Swift UI & State",
          desc: "Define SwiftUI views, Combine data streams, and NavigationStack flows."
        },
        {
          num: "02",
          title: "TestFlight Preview",
          desc: "Automate build passes and distribute internal TestFlight beta builds."
        },
        {
          num: "03",
          title: "App Store Release",
          desc: "Publish to the Apple App Store with full privacy manifests & sub-24h reviews."
        }
      ]
    },
    "android-kotlin": {
      title: "Launch your Android Application",
      subtitle: "Develop high-performance Jetpack Compose Android applications optimized for thousands of device form-factors.",
      steps: [
        {
          num: "01",
          title: "Compose UI Tree",
          desc: "Build Material You interfaces with dynamic colors & zero-delay recomposition."
        },
        {
          num: "02",
          title: "Room Database Fabric",
          desc: "Implement local SQLite caching with Kotlin Coroutine Flow streams."
        },
        {
          num: "03",
          title: "Play Console Release",
          desc: "Deploy Android App Bundles (.aab) directly to Google Play tracks."
        }
      ]
    },
    "cross-platform-flutter-react-native": {
      title: "Ship your Cross-Platform App",
      subtitle: "Write once and launch natively on iOS and Android simultaneously with native C++/Swift bridges.",
      steps: [
        {
          num: "01",
          title: "Shared Logic Tree",
          desc: "Write 95%+ reusable Dart or React Native TypeScript code."
        },
        {
          num: "02",
          title: "Native FFI Bridge",
          desc: "Connect hardware APIs (Biometrics, BLE, Camera) with sub-1ms JSI calls."
        },
        {
          num: "03",
          title: "Dual Store Launch",
          desc: "Publish unified iOS and Android builds with Over-The-Air code pushes."
        }
      ]
    },
    "enterprise-mobile-solutions": {
      title: "Architect your Enterprise Suite",
      subtitle: "Deploy secure corporate mobile applications integrated with Okta SSO, Intune MDM, and SAP ERP backends.",
      steps: [
        {
          num: "01",
          title: "SSO & MDM Config",
          desc: "Configure SAML 2.0 / Azure AD logins and containerized data vaults."
        },
        {
          num: "02",
          title: "ERP Gateway Sync",
          desc: "Connect field operation devices to SAP and Salesforce through gRPC APIs."
        },
        {
          num: "03",
          title: "Private Store Release",
          desc: "Distribute custom builds via Apple Business Manager and Managed Play."
        }
      ]
    }
  };

  const currentCta = ctaContentMap[category.slug] || ctaContentMap["ios-native-swift"];

  return (
    <section className="w-full bg-[#fdfbfd] py-16 lg:py-24 font-sans border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Modern CTA Banner with Tech Website Brand Design */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e947f5] via-[#a855f7] to-[#7a95e6] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-purple-500/20 border border-white/20">
          
          {/* Decorative Subtle Background Grid Mesh Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Ambient Glowing Orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Centered Premium Glowing Icon Badge */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shadow-lg backdrop-blur-md mb-8 group hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>

            {/* Main Elegant Title strictly in one line in pure white cursive style */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight text-white mb-3 max-w-full mx-auto leading-tight whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-sm">
              {currentCta.title}
            </h2>

            {/* Subtitle Description strictly in 1 line */}
            <p className="text-white/90 text-sm sm:text-base font-normal max-w-2xl mx-auto mb-8 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
              {currentCta.subtitle}
            </p>

            {/* Action CTA White Button with Gradient Background Change on Hover */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="group px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-950 hover:text-white font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-transparent"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
