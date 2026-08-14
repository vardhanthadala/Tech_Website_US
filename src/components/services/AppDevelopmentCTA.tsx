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
    <section className="w-full bg-[#fcfcfd] py-16 lg:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Light Combination Styled Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/80 p-8 sm:p-12 lg:p-16 text-center text-slate-900 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.06),transparent_70%)] pointer-events-none" />

          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100/80 flex items-center justify-center border border-slate-200/90 shadow-2xs backdrop-blur-md mb-6">
            <Sparkles className="w-5 h-5 text-slate-800" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-4 max-w-4xl mx-auto leading-tight">
            {currentCta.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            {currentCta.subtitle}
          </p>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-sans font-semibold text-base transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
