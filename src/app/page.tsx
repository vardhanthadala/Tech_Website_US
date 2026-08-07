import React from "react";
import Navbar from "@/components/Navbar";
import GrowthStory from "@/components/GrowthStory";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <GrowthStory />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
