import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CloudServicesHero } from "@/components/services/CloudServicesHero";
import { CloudServicesInsights } from "@/components/services/CloudServicesInsights";
import { CloudServicesUseCases } from "@/components/services/CloudServicesUseCases";
import { CloudServicesFeatures } from "@/components/services/CloudServicesFeatures";
import { CloudServicesCTA } from "@/components/services/CloudServicesCTA";
import { cloudServicesCategories } from "@/data/cloudServicesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(cloudServicesCategories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = cloudServicesCategories[slug];

  if (!category) {
    return {
      title: "Category Not Found - Cloud Services",
    };
  }

  return {
    title: `${category.title} - Enterprise Cloud & DevOps | Tech Website`,
    description: `${category.headingBold} ${category.headingCursive}`,
  };
}

export default async function CloudServicesSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = cloudServicesCategories[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 bg-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Light Theme Hero Section matching reference screenshot structure & AI automation typography */}
        <CloudServicesHero currentCategory={category} />

        {/* Next Section: Interactive Topic Insights Grid matching exact reference screenshot UI */}
        <CloudServicesInsights
          sectionBadge={category.sectionBadge}
          sectionTitleBold={category.sectionTitleBold}
          sectionTitleCursive={category.sectionTitleCursive}
          sectionSubtitle={category.sectionSubtitle}
          topics={category.topics}
        />

        {/* Use Cases Section: 5 Alternating Topics (Image Left/Content Right, Image Right/Content Left) */}
        <CloudServicesUseCases
          useCasesBadge={category.useCasesBadge}
          useCasesTitleBold={category.useCasesTitleBold}
          useCasesTitleCursive={category.useCasesTitleCursive}
          useCasesSubtitle={category.useCasesSubtitle}
          useCases={category.useCases}
        />

        {/* Features Card Section matching reference screenshot layout & typography */}
        <CloudServicesFeatures
          featuresBadge={category.featuresBadge}
          featuresTitleBold={category.featuresTitleBold}
          featuresTitleCursive={category.featuresTitleCursive}
          featuresSubtitle={category.featuresSubtitle}
          features={category.features}
        />

        {/* Category CTA Banner matching UI/UX design page CTA */}
        <CloudServicesCTA category={category} />
      </main>

      {/* Footer */}
      <Footer hideCTA />
    </div>
  );
}
