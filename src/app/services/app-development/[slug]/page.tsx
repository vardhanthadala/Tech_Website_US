import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppDevelopmentHero } from "@/components/services/AppDevelopmentHero";
import { AppDevelopmentWorkflow } from "@/components/services/AppDevelopmentWorkflow";
import { AppDevelopmentSimulator } from "@/components/services/AppDevelopmentSimulator";
import { AppDevelopmentFeatures } from "@/components/services/AppDevelopmentFeatures";

import { appDevelopmentCategories } from "@/data/appDevelopmentData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(appDevelopmentCategories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = appDevelopmentCategories[slug];

  if (!category) {
    return {
      title: "Category Not Found - App Development",
    };
  }

  return {
    title: `${category.title} - Mobile App Development Services | Tech Website`,
    description: `${category.headingBold} ${category.headingCursive}`,
  };
}

export default async function AppDevelopmentSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = appDevelopmentCategories[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 bg-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section matching reference screenshot layout & category content */}
        <AppDevelopmentHero currentCategory={category} />

        {/* Interactive Sticky Workflow Milestones Section */}
        <AppDevelopmentWorkflow category={category} />

        {/* Unique Feature: Interactive Mobile Device Simulator */}
        <AppDevelopmentSimulator category={category} />

        {/* Mobile Agency Features Grid with Glowing Border Lines */}
        <AppDevelopmentFeatures category={category} />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
