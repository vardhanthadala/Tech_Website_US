"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { CloudCategoryData } from "@/data/cloudServicesData";

interface CloudServicesCTAProps {
  category: CloudCategoryData;
}

export const CloudServicesCTA: React.FC<CloudServicesCTAProps> = ({ category }) => {
  const ctaContentMap: Record<
    string,
    {
      title: string;
      subtitle: string;
      steps: Array<{ num: string; title: string; desc: string }>;
    }
  > = {
    "aws-azure-infrastructure": {
      title: "Scale Multi-Cloud Infrastructure",
      subtitle: "Deploy resilient, high-availability AWS & Azure environments with zero-downtime failover and automated security governance.",
      steps: [
        {
          num: "01",
          title: "VPC & Network Peering",
          desc: "Establish active-active multi-region load balancing and encrypted hardware tunnels."
        },
        {
          num: "02",
          title: "FinOps & Cost Control",
          desc: "Automate spot instance fleet scaling and idle resource termination policies."
        },
        {
          num: "03",
          title: "Zero-Trust IAM Guardrails",
          desc: "Enforce SOC2 policy compliance and temporary STS role credentials across accounts."
        }
      ]
    },
    "kubernetes-docker": {
      title: "Scale Container Microservices",
      subtitle: "Build self-healing Kubernetes clusters with automated canary rollouts, Istio service mesh, and event-driven autoscaling.",
      steps: [
        {
          num: "01",
          title: "EKS / AKS Cluster Provisioning",
          desc: "Deploy elastic Kubernetes master control planes with custom node placement rules."
        },
        {
          num: "02",
          title: "Istio Service Mesh mTLS",
          desc: "Enforce strict mutual TLS encryption between microservices with sidecar proxies."
        },
        {
          num: "03",
          title: "Zero-Downtime Rollouts",
          desc: "Execute automated canary releases and instant Prometheus metric rollbacks."
        }
      ]
    },
    "cicd-pipeline-automation": {
      title: "Automate Release Pipelines",
      subtitle: "Deliver code to production 10x faster with declarative GitOps pipelines, ephemeral staging environments, and parallel test runners.",
      steps: [
        {
          num: "01",
          title: "ArgoCD GitOps Sync",
          desc: "Automate cluster manifest reconciliation using Git as the single source of truth."
        },
        {
          num: "02",
          title: "Ephemeral PR Sandboxes",
          desc: "Generate instant preview URLs with synthetic data for every pull request."
        },
        {
          num: "03",
          title: "Shift-Left DevSecOps",
          desc: "Inject automated SAST & container layer CVE scan gates into CI build steps."
        }
      ]
    },
    "serverless-architecture": {
      title: "Deploy Serverless Stack",
      subtitle: "Eliminate server management overhead with auto-scaling AWS Lambda, API Gateways, and pay-per-use database streams.",
      steps: [
        {
          num: "01",
          title: "AWS Lambda & Gateway Setup",
          desc: "Configure sub-100ms API Gateway routes triggering scalable Lambda functions."
        },
        {
          num: "02",
          title: "Provisioned Concurrency",
          desc: "Pre-warm execution environments to eliminate cold-start initialization delays."
        },
        {
          num: "03",
          title: "DynamoDB Auto-Scale Streams",
          desc: "Connect event-driven database streams with sub-millisecond execution logs."
        }
      ]
    }
  };

  const currentCta = ctaContentMap[category.slug] || ctaContentMap["aws-azure-infrastructure"];

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
