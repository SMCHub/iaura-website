"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function AuraShowcase() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C9B8]/30 via-[#0085FF]/20 to-[#FF6B6B]/10 blur-3xl animate-pulse-glow" />

      {/* Rotating ring */}
      <div className="absolute inset-2 rounded-full border border-[#00C9B8]/20 animate-rotate-slow" />
      <div
        className="absolute inset-5 rounded-full border border-[#0085FF]/15 animate-rotate-slow"
        style={{ animationDirection: "reverse", animationDuration: "30s" }}
      />

      {/* Aura showcase image */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 rounded-full overflow-hidden shadow-2xl"
        style={{
          boxShadow:
            "0 0 80px rgba(0, 201, 184, 0.3), 0 0 160px rgba(0, 133, 255, 0.15)",
        }}
      >
        <Image
          src="/aura-showcase.jpg"
          alt="AI-generated aura portrait"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#00C9B8]/60"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-[#0a0f14]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#00C9B8]/8 via-[#0085FF]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C9B8]/20 bg-[#00C9B8]/5 text-[#00C9B8] text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B8] animate-pulse" />
          AI-Powered Personality Analysis
        </motion.div>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="animate-float"
        >
          <AuraShowcase />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          Discover Your{" "}
          <span className="gradient-text">Aura</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Transform your voice into a unique, AI-generated visual aura. Record
          a short clip, let our AI analyze your personality, and receive a
          stunning piece of art that represents who you are.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#00C9B8] to-[#0085FF] text-white font-semibold text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#00C9B8]/20"
          >
            <span className="relative z-10">Download on the App Store</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0085FF] to-[#00C9B8] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg hover:bg-white/5 transition-all"
          >
            Learn More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
    </section>
  );
}
