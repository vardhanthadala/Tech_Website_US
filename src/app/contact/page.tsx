'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';

const DEXZE_QUOTES = [
  "“We don't just build software — we engineer scalable digital products crafted for long-term enterprise growth.”",
  "“Our squads are led by battle-tested senior engineers and AI researchers who bring deep technical rigor to every line of code.”",
  "“From raw architectural concepts to production deployment, we engineer zero-debt solutions that scale effortlessly.”",
  "“We stay with you through every phase — engineering robust, high-performance systems built to handle millions of real-time users.”"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % DEXZE_QUOTES.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    message?: string;
    submit?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // Phone Validation (Required)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 7) {
        newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
      }
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4aee4fe5-4139-4fd3-92e6-559689c2f574",
          subject: `New Project Inquiry from ${formData.fullName} - Dexze Tech`,
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: result.message || "Something went wrong. Please try again or email us directly.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to connect to the server. Please check your internet connection and try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-sans antialiased bg-white selection:bg-slate-200">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Sales Copy & Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between h-full space-y-12 lg:pr-8"
            >
              <div className="space-y-6">
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide border border-slate-200 inline-block shadow-2xs font-sans">
                  Sales & Support
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] font-sans">
                  Talk to our <br />
                  <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e947f5] to-[#7a95e6]">
                    sales team
                  </span>
                </h1>

                <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal leading-relaxed font-sans max-w-xl">
                  Partnering with Dexze is the fastest way to turn your vision into enterprise-grade web, mobile, and AI products. If your business is looking for migration support, custom development, or AI automation, our team will be happy to guide you.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm font-normal font-sans pt-2">
                  Provide your information and we&apos;ll be in touch within 24 hours.
                </p>
                {/* Auto-Rotating Dexze Value Quote Card (Desktop >= 1024px) */}
                <div className="hidden lg:block pt-10 border-t border-slate-100 space-y-4">
                  <div className="min-h-[100px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.blockquote
                        key={activeQuoteIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight leading-snug font-sans"
                      >
                        {DEXZE_QUOTES[activeQuoteIndex]}
                      </motion.blockquote>
                    </AnimatePresence>
                  </div>

                  {/* Interactive Quote Dots Indicator */}
                  <div className="flex items-center gap-2 pt-2">
                    {DEXZE_QUOTES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveQuoteIndex(idx)}
                        aria-label={`Go to quote ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          activeQuoteIndex === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vertical Split Divider (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 h-full min-h-[500px] flex justify-center items-center">
              <div className="w-px h-full bg-slate-200/80" />
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-2 sm:p-4">
                <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight leading-snug font-sans mb-8">
                  Tell us how can we help
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 px-6 sm:px-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-5 font-sans"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md">
                      <Check className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight leading-snug font-sans">
                      Thank you! We&apos;ve received your message.
                    </h3>

                    <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-md font-sans">
                      A Dexze product strategist will review your project details and reach out within 24 hours to schedule a discovery call.
                    </p>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrors({});
                        setFormData({ fullName: '', email: '', phone: '', message: '' });
                      }}
                      className="mt-3 px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wide transition-all shadow-md active:scale-95 font-sans cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6 font-sans">

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">
                        Full name <span className="text-rose-500 font-sans">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-normal transition-all font-sans focus:outline-none ${errors.fullName
                            ? 'border-rose-400 bg-rose-50/20 text-rose-950 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
                            : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900'
                          }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 font-medium font-sans animate-fadeIn">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">
                        Email <span className="text-rose-500 font-sans">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-normal transition-all font-sans focus:outline-none ${errors.email
                            ? 'border-rose-400 bg-rose-50/20 text-rose-950 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
                            : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900'
                          }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 font-medium font-sans animate-fadeIn">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">
                        Phone number <span className="text-rose-500 font-sans">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="1-(222)-333-4444"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-normal transition-all font-sans focus:outline-none ${errors.phone
                            ? 'border-rose-400 bg-rose-50/20 text-rose-950 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
                            : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900'
                          }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 font-medium font-sans animate-fadeIn">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">
                        How can we help? <span className="text-rose-500 font-sans">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="I'm interested in Dexze... I'd like to learn more about..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-normal transition-all font-sans resize-none focus:outline-none ${errors.message
                            ? 'border-rose-400 bg-rose-50/20 text-rose-950 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
                            : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900'
                          }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-600 font-medium font-sans animate-fadeIn">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submission Error Banner */}
                    {errors.submit && (
                      <p className="text-xs text-rose-600 font-medium font-sans animate-fadeIn text-right">
                        {errors.submit}
                      </p>
                    )}

                    {/* Submit Button aligned to right */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 font-sans cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send message</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

                {/* Auto-Rotating Dexze Value Quote Card (Mobile < 1024px) */}
                <div className="block lg:hidden pt-12 border-t border-slate-100 space-y-4 mt-8">
                  <div className="min-h-[100px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.blockquote
                        key={activeQuoteIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight leading-snug font-sans"
                      >
                        {DEXZE_QUOTES[activeQuoteIndex]}
                      </motion.blockquote>
                    </AnimatePresence>
                  </div>

                  {/* Interactive Quote Dots Indicator */}
                  <div className="flex items-center gap-2 pt-2">
                    {DEXZE_QUOTES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveQuoteIndex(idx)}
                        aria-label={`Go to quote ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          activeQuoteIndex === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer hideCta={true} />
    </div>
  );
}
