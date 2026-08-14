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
    <section className="w-full bg-[#fdfbfd] py-16 lg:py-24 font-sans border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Violet Delphi-style Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#8b5cf6] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-purple-500/15">
          {/* Ambient Soft Light Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(192,132,252,0.35),transparent_60%)] pointer-events-none" />

          {/* Main Title matching Hero Section Typography & Gradient Last Word */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-normal tracking-tight text-[#11244e] mb-4 max-w-4xl mx-auto leading-[1.15]">
            <span className="font-bold">{currentCta.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              {currentCta.title.split(" ").slice(-1).join(" ")}
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-md mx-auto mb-9 leading-relaxed">
            {currentCta.subtitle}
          </p>

          {/* Action CTA White Button with Hover Color Change */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="group px-8 py-3.5 rounded-full bg-slate-950 text-white hover:bg-gradient-to-r hover:from-[#e947f5] hover:to-[#7a95e6] hover:text-white font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-purple-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-transparent"
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
