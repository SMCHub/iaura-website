"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is iAura?",
    answer:
      "iAura is an AI-powered app that transforms your voice into a unique, personalized aura image. You record a short voice clip, our AI analyzes your personality traits and emotional patterns, and then generates a one-of-a-kind visual representation of your aura.",
  },
  {
    question: "How does the AI analysis work?",
    answer:
      "We use advanced speech-to-text technology to transcribe your voice recording, then analyze the content using GPT-4 to identify personality traits, emotional patterns, and key themes. This analysis is then used to create a detailed prompt that generates your unique aura image via DALL-E 3.",
  },
  {
    question: "Is my voice recording stored?",
    answer:
      "No. Your voice recordings are processed in real-time and immediately deleted after analysis. We only store the generated text analysis and aura image. Your privacy and data security are our top priorities.",
  },
  {
    question: "What are credits and how do they work?",
    answer:
      "Each credit allows you to generate one complete aura (voice analysis + image generation). You start with 3 free credits when you sign up. Additional credits can be purchased in packs -- no subscription required. Credits never expire.",
  },
  {
    question: "Can I share my generated auras?",
    answer:
      "Absolutely! You can share your aura images directly from the app to social media, messaging apps, or save them to your device. You can also set them as your profile picture within the app.",
  },
  {
    question: "What languages are supported?",
    answer:
      "iAura currently supports English for voice recording and analysis. We are working on adding support for additional languages in future updates.",
  },
  {
    question: "Do credits expire?",
    answer:
      "No, credits never expire. Once purchased, they remain in your account until you use them. There's no rush to use them up.",
  },
  {
    question: "Is iAura available on Android?",
    answer:
      "iAura is currently available exclusively on iOS. An Android version is being considered for future development based on demand.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-medium group-hover:text-white transition-colors pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#00C9B8]/10 border-[#00C9B8]/30 rotate-45" : ""
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? "text-[#00C9B8]" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-[15px] leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0c1018] to-[#0D1117]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFD93D] text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Questions & Answers
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Everything you need to know about iAura
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
