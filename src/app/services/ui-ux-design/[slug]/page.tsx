import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UiUxHero } from "@/components/services/UiUxHero";
import { UiUxWorkflow } from "@/components/services/UiUxWorkflow";
import { UiUxUseCases } from "@/components/services/UiUxUseCases";
import { EngineeredForGrowth } from "@/components/services/EngineeredForGrowth";
import { AppDevelopmentCTA } from "@/components/services/AppDevelopmentCTA";
import { uiUxCategories } from "@/data/uiUxData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(uiUxCategories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = uiUxCategories[slug];

  if (!category) {
    return {
      title: "Category Not Found - UI/UX Design",
    };
  }

  return {
    title: `${category.title} - UI/UX Design Services | Tech Website`,
    description: `${category.headingBold} ${category.headingCursive}`,
  };
}

export default async function UiUxDesignSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = uiUxCategories[slug];

  if (!category) {
    notFound();
  }

  // Convert UiUxCategoryData into AppCategoryData format for reusable components
  const appCategoryAdapter = {
    slug: category.slug,
    title: category.title,
    badge: category.badge,
    headingBold: category.headingBold,
    headingCursive: category.headingCursive,
    mobileMockup: category.heroImage,
    webMockup: category.heroImage,
    description: category.description,
    ctaText: category.ctaText,
    howWeWorkTitleBold: "Everything you need for exceptional UI/UX",
    howWeWorkTitleCursive: "design",
    howWeWorkSubtitle: "We engineer pixel-perfect design systems, high-fidelity prototypes, and user-validated interfaces.",
    stages: category.stages,
    simulatorTitleBold: category.simulatorTitleBold,
    simulatorTitleCursive: category.simulatorTitleCursive,
    simulatorSubtitle: category.simulatorSubtitle,
    simulatorTabs: category.simulatorTabs,
    featuresCards: category.featuresCards
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 bg-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Secoda Reference Screenshot UI/UX Hero Section */}
        <UiUxHero currentCategory={category} />

        {/* Dedicated UI/UX Workflow Section */}
        <UiUxWorkflow category={appCategoryAdapter} />

        {/* 5-Topic 2-Row Use Cases Section matching reference screenshot */}
        <UiUxUseCases category={appCategoryAdapter} />

        {/* Engineered for Growth Features Grid matching Voiceflow reference screenshot */}
        <EngineeredForGrowth category={appCategoryAdapter} />

        {/* Category CTA Banner */}
        <AppDevelopmentCTA category={appCategoryAdapter} />
      </main>

      {/* Footer */}
      <Footer hideCTA />
    </div>
  );
}
