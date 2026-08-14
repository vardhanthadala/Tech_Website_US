import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AiAutomationHero } from "@/components/services/AiAutomationHero";
import { AiAutomationDetails } from "@/components/services/AiAutomationDetails";

import { aiAutomationCategories } from "@/data/aiAutomationData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(aiAutomationCategories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = aiAutomationCategories[slug];

  if (!category) {
    return {
      title: "Category Not Found - AI Automation",
    };
  }

  return {
    title: `${category.title} - AI Automation Services | Tech Website`,
    description: `${category.headingBold} ${category.headingLight}`,
  };
}

export default async function AiAutomationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = aiAutomationCategories[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased selection:bg-slate-200 bg-white">
      {/* Existing Navbar left untouched as requested */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section matching reference screenshot & category content */}
        <AiAutomationHero currentCategory={category} />

        {/* Technical Details, Stats & Features */}
        <AiAutomationDetails category={category} />

      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  );
}
