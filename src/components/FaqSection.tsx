"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategoryGroup {
  categoryTitle: string;
  questions: FaqQuestion[];
}

const faqGroups: FaqCategoryGroup[] = [
  {
    categoryTitle: "Dexze basics",
    questions: [
      {
        id: "b1",
        question: "Why should I choose Dexze?",
        answer:
          "Dexze combines senior AI researchers, full-stack engineers, and UI/UX designers into dedicated agile squads. We deliver production-ready software 3x faster with zero technical debt, 100% IP ownership, and enterprise SLA reliability across AI, web, mobile, and cloud.",
      },
      {
        id: "b2",
        question: "What is Dexze?",
        answer:
          "Dexze is an end-to-end digital engineering and AI agency specializing in AI Automation, Next.js Web Development, Mobile Apps (iOS/Android), UI/UX Design Systems, and Cloud Infrastructure.",
      },
      {
        id: "b3",
        question: "How much does Dexze cost?",
        answer:
          "We offer transparent milestone-based project pricing for defined MVPs and flexible monthly retainer plans for continuous engineering and AI automation, designed to fit startups to enterprise teams.",
      },
    ],
  },
  {
    categoryTitle: "Billing questions",
    questions: [
      {
        id: "q1",
        question: "What's the cancellation policy?",
        answer:
          "You can adjust or pause your monthly engineering retainer with a simple 30-day notice. We earn your partnership through continuous delivery, not restrictive long-term lock-ins.",
      },
      {
        id: "q2",
        question: "I am a startup or nonprofit. Do you offer any discounts?",
        answer:
          "Yes! We offer dedicated 15% credits and special rate tiers for early-stage backed startups and non-profit organizations.",
      },
      {
        id: "q3",
        question: "What payment methods do you support?",
        answer:
          "We accept ACH bank transfers, wire transfers, major credit cards, and corporate invoicing in USD, EUR, GBP, CAD, and AUD.",
      },
      {
        id: "q4",
        question: "Do you offer yearly price plans?",
        answer:
          "Yes, clients who commit to annual engineering retainers receive a 15% discount across all engineering hours and cloud management services.",
      },
      {
        id: "q5",
        question: "What's the commitment?",
        answer:
          "For fixed-scope projects, commitment is strictly bound to agreed milestone deliverables. For monthly retainers, commitment is month-to-month with 30-day flexibility.",
      },
      {
        id: "q6",
        question: "What's the cost of additional users or engineers?",
        answer:
          "You can scale your dedicated squad by adding senior AI engineers, mobile developers, or cloud architects at transparent fixed hourly or monthly rates.",
      },
      {
        id: "q7",
        question: "Can I upgrade to a different plan at a later time?",
        answer:
          "Absolutely. You can seamlessly upgrade from an initial MVP discovery sprint to a full-stack dedicated monthly engineering retainer whenever your product roadmap expands.",
      },
      {
        id: "q8",
        question: "Do you offer Enterprise plans?",
        answer:
          "Yes. Enterprise plans include dedicated DevOps engineers, guaranteed 99.99% cloud SLAs, 15-minute emergency response windows, and SOC2/HIPAA compliance support.",
      },
    ],
  },
  {
    categoryTitle: "Product questions",
    questions: [
      {
        id: "p1",
        question: "Can I use Dexze for my client's sites?",
        answer:
          "Yes! We offer white-label engineering services for agencies, venture studios, and enterprises needing top-tier web, app, and AI development under their own brand.",
      },
      {
        id: "p2",
        question: "What is Dexze's Fair Use Policy?",
        answer:
          "We enforce a strict zero-data-retention policy for AI systems. Your proprietary code, customer data, and knowledge bases are encrypted and never used to train public LLM models.",
      },
      {
        id: "p3",
        question: "What does Dexze do with my data?",
        answer:
          "All client data is encrypted at rest (AES-256) and in transit (TLS 1.3) within isolated cloud environments under strict NDAs. We never share or sell client data under any circumstances.",
      },
    ],
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("b1");

  const toggleQuestion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-24 border-t border-slate-100 font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="mb-14">
          <span className="px-4 py-1.5 rounded-full bg-[#f4f5f7] text-[#11244e] text-xs font-medium tracking-wide border border-slate-200/80 mb-4 inline-block shadow-2xs">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] max-w-2xl mb-4 font-sans">
            Frequently asked questions
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            We&apos;re here to help with any questions you have about plans, pricing, and supported features.
          </p>
        </div>

        {/* Categorized FAQ Groups */}
        <div className="space-y-20">
          {faqGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16"
            >
              {/* Left Side: Category Heading */}
              <div className="w-full md:w-1/3 shrink-0">
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight font-sans">
                  {group.categoryTitle}
                </h3>
              </div>

              {/* Right Side: Accordion Question List */}
              <div className="w-full md:w-2/3 divide-y divide-slate-200/70 border-t border-b border-slate-200/70">
                {group.questions.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div key={item.id} className="py-2">
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full py-4 text-left flex items-center justify-between gap-4 cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg font-normal text-slate-900 group-hover:text-[#11244e] transition-colors leading-snug font-sans">
                          {item.question}
                        </span>

                        <span className="text-slate-400 group-hover:text-slate-900 transition-colors shrink-0 pl-2">
                          {isOpen ? (
                            <Minus className="w-4 h-4 stroke-[1.5]" />
                          ) : (
                            <Plus className="w-4 h-4 stroke-[1.5]" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-500 text-sm sm:text-base leading-[1.85] pb-5 pt-1 font-normal max-w-2xl">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom "Have additional questions?" Footer (Hidden for now) */}
        {/* <div className="mt-28 pt-16 border-t border-slate-200/60 flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-8 font-sans">
            Have additional questions?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 max-w-2xl text-xs sm:text-sm font-normal">
            <div>
              <span className="text-slate-400 block mb-1">Help Articles</span>
              <a href="#" className="text-slate-900 hover:text-[#11244e] font-medium transition-colors">
                Knowledge Base
              </a>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Customer support</span>
              <a href="mailto:hello@dexze.com" className="text-slate-900 hover:text-[#11244e] font-medium transition-colors">
                Email hello@dexze.com
              </a>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Learn more</span>
              <a href="#contact" className="text-slate-900 hover:text-[#11244e] font-medium transition-colors">
                Get a Demo
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
