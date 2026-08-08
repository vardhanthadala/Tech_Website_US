"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Bot, Code2, Smartphone, Palette, Cloud } from "lucide-react";

interface EditorialTestimonial {
  id: number;
  company: string;
  serviceTag: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  featured?: boolean;
}

const getServiceIcon = (tag: string) => {
  switch (tag) {
    case "AI Automation":
      return <Bot className="w-3 h-3 text-indigo-500" />;
    case "Web Development":
      return <Code2 className="w-3 h-3 text-blue-500" />;
    case "App Development":
      return <Smartphone className="w-3 h-3 text-emerald-500" />;
    case "UI / UX Design":
      return <Palette className="w-3 h-3 text-purple-500" />;
    case "Cloud Services":
      return <Cloud className="w-3 h-3 text-sky-500" />;
    default:
      return <Code2 className="w-3 h-3 text-slate-500" />;
  }
};

const getServiceHoverStyle = (tag: string, featured?: boolean) => {
  if (featured) {
    return "bg-gradient-to-br from-[#11244e] via-[#2c1d11] to-[#7c2d12] text-white border-white/10 hover:border-amber-400/50 shadow-xl shadow-amber-950/20";
  }
  switch (tag) {
    case "AI Automation":
      return "bg-[#faf6f0]/90 backdrop-blur-sm text-slate-900 border-[#e8dfd5]/80 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/15";
    case "Web Development":
      return "bg-[#faf6f0]/90 backdrop-blur-sm text-slate-900 border-[#e8dfd5]/80 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/15";
    case "App Development":
      return "bg-[#faf6f0]/90 backdrop-blur-sm text-slate-900 border-[#e8dfd5]/80 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/15";
    case "UI / UX Design":
      return "bg-[#faf6f0]/90 backdrop-blur-sm text-slate-900 border-[#e8dfd5]/80 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/15";
    case "Cloud Services":
      return "bg-[#faf6f0]/90 backdrop-blur-sm text-slate-900 border-[#e8dfd5]/80 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/15";
    default:
      return "bg-white/90 backdrop-blur-sm text-slate-900 border-slate-200/80 hover:border-[#11244e]/40 hover:shadow-xl hover:shadow-slate-200/60";
  }
};

const editorialTestimonials: EditorialTestimonial[] = [
  // Page 1 (6 cards: 3 top, 3 bottom)
  {
    id: 1,
    company: "Synthetix",
    serviceTag: "AI Automation",
    quote: "Dexze developed autonomous AI agents that automated 85% of our workflow routing. Their team's technical depth in LLM fine-tuning and agentic systems is second to none.",
    name: "Marcus Vance",
    role: "Head of AI Operations",
    avatar: "/peter_so.png",
  },
  {
    id: 2,
    company: "Hyperion Global",
    serviceTag: "Web Development",
    quote: "Rebuilding our web platform with Next.js and Dexze cut our page load times down to 800ms. Our conversion rates jumped by 42% within the first month post-launch.",
    name: "Elena Rostova",
    role: "VP of Product",
    avatar: "/elaina_shekhter.png",
    featured: true,
  },
  {
    id: 3,
    company: "CloudScale Inc.",
    serviceTag: "Cloud Services",
    quote: "Dexze migrated our legacy monolith to Kubernetes on AWS with zero downtime. Their multi-region auto-scaling setup handled our peak traffic spike effortlessly.",
    name: "David Chen",
    role: "CTO at CloudScale Inc.",
    avatar: "/bryan_olshock.png",
  },
  {
    id: 4,
    company: "HealthTrack",
    serviceTag: "App Development",
    quote: "The cross-platform Flutter app built by Dexze reached 250k downloads in 90 days with a 4.9-star App Store rating. Their attention to UX micro-interactions is outstanding.",
    name: "Sarah Jenkins",
    role: "Co-Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    company: "FlowState",
    serviceTag: "UI / UX Design",
    quote: "Dexze designed a comprehensive Figma design system for our entire SaaS suite. It sped up our frontend development cycle by 3x and brought complete visual harmony.",
    name: "Julian Thorne",
    role: "Head of Product Design",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    company: "DataStream",
    serviceTag: "AI Automation",
    quote: "Working with Dexze on custom AI agentic pipelines transformed our data operations. They delivered real-time automation models processing millions of events daily.",
    name: "Michael Ross",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  // Page 2
  {
    id: 7,
    company: "AeroSpace Labs",
    serviceTag: "Cloud Services",
    quote: "Dexze automated our multi-cloud deployment pipeline, increasing our release velocity by 4x while eliminating build failures across staging environments.",
    name: "Rachel Stern",
    role: "Director of Infrastructure",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    company: "Aura Media",
    serviceTag: "Web Development",
    quote: "From initial prototypes to full production launch in just 6 weeks, Dexze delivered an ultra-fast Next.js web platform that scaled smoothly to millions of views.",
    name: "Liam O'Connor",
    role: "Chief Digital Officer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    company: "PayGrid",
    serviceTag: "App Development",
    quote: "The cross-platform React Native payment app built by Dexze achieved 99.99% availability during peak transaction periods. Truly world-class mobile engineering.",
    name: "Sophia Martinez",
    role: "Head of Payments",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    company: "Vortex Gaming",
    serviceTag: "Cloud Services",
    quote: "Dexze engineered low-latency cloud backend servers handling 100k concurrent multiplayer sessions smoothly with zero packet loss.",
    name: "Alexey Volkov",
    role: "Lead Backend Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    company: "BioGenomics",
    serviceTag: "AI Automation",
    quote: "Our genomic data analysis AI model runs 10x faster thanks to Dexze's GPU-accelerated Python pipelines and distributed processing.",
    name: "Dr. Evelyn Reed",
    role: "Chief Scientist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    company: "OmniRetail",
    serviceTag: "Web Development",
    quote: "Dexze built a high-conversion Next.js e-commerce web platform that reduced cart abandonment by 28% and doubled mobile checkout speeds.",
    name: "Karan Mehta",
    role: "E-Commerce Director",
    avatar: "/peter_so.png",
  },
  // Page 3
  {
    id: 13,
    company: "SecureShield",
    serviceTag: "Cloud Services",
    quote: "Dexze audited and hardened our cloud infrastructure, implementing zero-trust security protocols and SOC2 compliance automation.",
    name: "Hannah Abbott",
    role: "CISO",
    avatar: "/elaina_shekhter.png",
  },
  {
    id: 14,
    company: "Pulse Analytics",
    serviceTag: "UI / UX Design",
    quote: "Dexze redesigned our entire SaaS interface with fluid micro-interactions and intuitive workflows, boosting daily active user retention by 35%.",
    name: "Brandon Cole",
    role: "VP of Analytics",
    avatar: "/bryan_olshock.png",
    featured: true,
  },
  {
    id: 15,
    company: "LogiShip",
    serviceTag: "AI Automation",
    quote: "Dexze's AI route optimization algorithms reduced our fleet fuel consumption by 22% in the first quarter of deployment.",
    name: "Carlos Rivera",
    role: "Head of Logistics Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 16,
    company: "MedConnect",
    serviceTag: "Web Development",
    quote: "HIPAA-compliant web platform with real-time video streaming and EHR integration delivered seamlessly ahead of schedule.",
    name: "Dr. Aris Thorne",
    role: "Chief Medical Officer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 17,
    company: "UrbanMobility",
    serviceTag: "App Development",
    quote: "Dexze built our fleet tracking mobile app connected to 50k IoT sensors with flawless real-time map rendering and offline sync.",
    name: "Clara Zhang",
    role: "Product Lead",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 18,
    company: "EdgeCloud",
    serviceTag: "Cloud Services",
    quote: "Dexze architected serverless cloud edge workers that cut infrastructure costs by 35% while improving global response times.",
    name: "Victor Stone",
    role: "Principal Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  const [activePage, setActivePage] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(editorialTestimonials.length / itemsPerPage);

  // Auto-cycle every 4 seconds unless paused by hover
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const currentTestimonials = editorialTestimonials.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  );

  return (
    <section className="py-24 bg-[#f5f0eb] font-sans border-t border-[#e8dfd5] relative overflow-hidden">
      {/* Ambient Background Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-100/50 via-orange-50/40 to-stone-100/30 blur-3xl opacity-80 pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="px-4 py-1.5 rounded-full bg-[#eee6dc] text-[#11244e] text-xs font-medium tracking-wide border border-[#e2d7cb]/80 mb-4 inline-block shadow-2xs"
          >
            Customer Stories
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight max-w-2xl leading-[1.15] mb-4">
            Empowering teams to build<br />
            <span className="font-serif italic text-[#11244e]">extraordinary software</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            Here is how Dexze helps industry leaders ship AI, web, mobile, and cloud platforms at enterprise scale.
          </p>
        </motion.div>

        {/* Cards Grid Container (Pauses auto-cycle on mouse enter) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[380px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {currentTestimonials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                    y: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group border shadow-xs ${getServiceHoverStyle(
                    item.serviceTag,
                    item.featured
                  )}`}
                >
                  {/* Decorative Quote Icon Watermark */}
                  <Quote
                    className={`absolute top-6 right-6 w-12 h-12 pointer-events-none stroke-[1] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${item.featured ? "text-white/10 group-hover:text-white/20" : "text-slate-900/10 group-hover:text-slate-900/20"
                      }`}
                  />

                  {/* Card Top: Company Name & Service Tag */}
                  <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
                    <span
                      className={`text-base font-semibold tracking-tight ${item.featured ? "text-white" : "text-[#11244e]"
                        }`}
                    >
                      {item.company}
                    </span>
                    <span
                      className={`text-[11px] px-3 py-1 rounded-full font-medium border inline-flex items-center gap-1.5 transition-colors ${item.featured
                        ? "bg-white/10 text-slate-200 border-white/15 group-hover:bg-white/20"
                        : "bg-[#eee6dc] text-slate-700 border-[#e2d7cb]/70 group-hover:bg-[#e2d7cb]/80"
                        }`}
                    >
                      {getServiceIcon(item.serviceTag)}
                      <span>{item.serviceTag}</span>
                    </span>
                  </div>

                  {/* Card Middle: Editorial Quote */}
                  <p
                    className={`text-sm font-normal leading-[1.75] mb-6 relative z-10 ${item.featured ? "text-slate-200" : "text-slate-600"
                      }`}
                  >
                    &quot;{item.quote}&quot;
                  </p>

                  {/* Card Bottom: Author Info */}
                  <div
                    className={`flex items-center gap-3 pt-5 border-t relative z-10 ${item.featured ? "border-white/10" : "border-slate-100"
                      }`}
                  >
                    <div className="overflow-hidden rounded-full border border-slate-200/80 shadow-2xs shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-medium leading-tight ${item.featured ? "text-white" : "text-slate-900"
                          }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-[11px] font-normal mt-0.5 ${item.featured ? "text-slate-400" : "text-slate-500"
                          }`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots (Manual & Auto-cycle Indicators) */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePage(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePage === idx ? "w-8 bg-[#11244e]" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}