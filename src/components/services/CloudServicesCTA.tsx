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
        
        {/* Main CTA Light Combination Styled Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/80 p-8 sm:p-12 lg:p-16 text-center text-slate-900 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.06),transparent_70%)] pointer-events-none" />

          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100/80 flex items-center justify-center border border-slate-200/90 shadow-2xs backdrop-blur-md mb-6">
            <Sparkles className="w-5 h-5 text-slate-800" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
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
