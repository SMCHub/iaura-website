"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Creative Director",
    quote:
      "I was blown away by how accurately iAura captured my personality. The generated aura image is now my favorite piece of digital art. It feels deeply personal and uniquely mine.",
    avatar: "S",
    color: "#00C9B8",
  },
  {
    name: "James R.",
    role: "Software Engineer",
    quote:
      "As a skeptic, I didn't expect much. But the personality analysis was eerily accurate, and the aura visualization is stunning. I've shared it with everyone I know.",
    avatar: "J",
    color: "#0085FF",
  },
  {
    name: "Emily L.",
    role: "Yoga Instructor",
    quote:
      "iAura combines technology with self-discovery in a beautiful way. Each time I generate a new aura, I learn something new about myself. It's become part of my reflection practice.",
    avatar: "E",
    color: "#FF6B6B",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1117]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#7C3AED]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by Thousands
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            See what people are saying about their iAura experience
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#FFD93D]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed flex-1 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
