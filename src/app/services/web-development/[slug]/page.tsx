import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WebDevelopmentHero } from "@/components/services/WebDevelopmentHero";
import { WebDevelopmentStages } from "@/components/services/WebDevelopmentStages";
import { WebDevelopmentFeatures } from "@/components/services/WebDevelopmentFeatures";
import { WebDevelopmentProcess } from "@/components/services/WebDevelopmentProcess";
import { WebDevelopmentCTA } from "@/components/services/WebDevelopmentCTA";
import { webDevelopmentCategories } from "@/data/webDevelopmentData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(webDevelopmentCategories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = webDevelopmentCategories[slug];

  if (!category) {
    return {
      title: "Category Not Found - Web Development",
    };
  }

  return {
    title: `${category.title} - Web Development Services | Tech Website`,
    description: `${category.headingBold} ${category.headingLight}`,
  };
}

export default async function WebDevelopmentSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = webDevelopmentCategories[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 bg-white">
      {/* Existing Navbar left untouched as requested */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section matching reference screenshot & category content */}
        <WebDevelopmentHero currentCategory={category} />

        {/* Dynamic Scroll Trigger Stages Section */}
        <WebDevelopmentStages category={category} />

        {/* Agency Features Section */}
        <WebDevelopmentFeatures />

        {/* Process Steps Section */}
        <WebDevelopmentProcess category={category} />

        {/* Category-Specific Black & White CTA Banner */}
        <WebDevelopmentCTA category={category} />
      </main>

      {/* Existing Footer */}
      <Footer hideCTA />
    </div>
  );
}
