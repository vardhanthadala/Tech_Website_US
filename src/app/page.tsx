import React from "react";
import Navbar from "@/components/Navbar";
import NeuralNetworkTech from "@/components/NeuralNetworkTech";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero & Neural Network Section */}
        <section id="neural-network" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-mono text-stone-800">
              <span>ARTIFICIAL NEURAL NETWORK VISUALIZER</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-950 leading-tight">
              Intelligent Digital Engineering & Tech Services
            </h1>
            <p className="text-stone-600 font-sans text-base sm:text-lg">
              Interact with our Neural Network model below to explore our core capabilities in Artificial Intelligence, Machine Learning, Web Development, Mobile Apps, and Cloud Solutions.
            </p>
          </div>

          <NeuralNetworkTech />
        </section>

        {/* Services Detail Section */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
