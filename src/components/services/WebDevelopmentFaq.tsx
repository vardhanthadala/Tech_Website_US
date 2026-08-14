"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const WebDevelopmentFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Which platforms and frameworks do you use?",
      answer: "We primarily build custom full-stack web applications utilizing Next.js (React), TailwindCSS, TypeScript, and Node.js. For headless ecommerce storefronts, we configure Shopify Plus paired with Sanity CMS or Contentful to deliver zero-latency experiences."
    },
    {
      question: "Will my website rank high on Google (SEO)?",
      answer: "Absolutely. Search engine optimization is architected directly into our core layouts. We configure semantic HTML, schema structure generation markup (JSON-LD), localized metadata parameters, dynamic sitemaps, and guarantee a 99+ Lighthouse performance audit score."
    },
    {
      question: "Do you offer post-launch code audits and support?",
      answer: "Yes, we support our launches with 30 days of complimentary technical support. We also offer monthly retainer plans covering node version updates, security audits, CMS editor expansion, page content additions, and layout optimization adjustments."
    },
    {
      question: "What is your typical development timeframe?",
      answer: "Custom website architectures typically take 4 to 8 weeks depending on catalog complexity. Standard full-stack React projects take 6 to 10 weeks, from system schema wireframes to Vercel edge region routing setups."
    }
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accordion Title Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-650 border border-slate-200/60 shadow-2xs mb-5 uppercase tracking-wider">
            Faq
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12] mb-5">
            Got questions? We've got{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6] font-semibold">
              answers.
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            Find answers to commonly asked questions about our framework standards, search parameters, and timelines.
          </p>
        </div>

        {/* Collapsible FAQ Panels */}
        <div className="space-y-4 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors bg-white shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
