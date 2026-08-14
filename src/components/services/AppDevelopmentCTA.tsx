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
