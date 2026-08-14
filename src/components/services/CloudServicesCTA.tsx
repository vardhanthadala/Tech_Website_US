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
              <span>Ready to transform your infrastructure?</span>
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
