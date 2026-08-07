import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
