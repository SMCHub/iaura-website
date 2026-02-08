"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    credits: "3 Credits",
    description: "Try iAura risk-free",
    features: [
      "3 aura generations",
      "AI personality analysis",
      "Basic gallery",
      "Share your auras",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "",
  },
  {
    name: "Basic",
    price: "$4.99",
    period: "one-time",
    credits: "5 Credits",
    description: "For the curious explorer",
    features: [
      "5 aura generations",
      "AI personality analysis",
      "Full gallery access",
      "High-res downloads",
      "Share your auras",
    ],
    cta: "Get Basic",
    popular: false,
    gradient: "",
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "one-time",
    credits: "20 Credits",
    description: "Most popular choice",
    features: [
      "20 aura generations",
      "AI personality analysis",
      "Full gallery access",
      "High-res downloads",
      "Priority processing",
      "Share your auras",
    ],
    cta: "Get Premium",
    popular: true,
    gradient: "from-[#00C9B8] to-[#0085FF]",
  },
  {
    name: "Unlimited",
    price: "$19.99",
    period: "one-time",
    credits: "Unlimited",
    description: "For the true enthusiast",
    features: [
      "Unlimited generations",
      "AI personality analysis",
      "Full gallery access",
      "High-res downloads",
      "Priority processing",
      "Early access to new features",
      "Share your auras",
    ],
    cta: "Go Unlimited",
    popular: false,
    gradient: "",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0c1018] to-[#0D1117]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#FF6B6B] text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            No subscriptions. Buy credits once and use them whenever you want.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-px ${
                plan.popular
                  ? "bg-gradient-to-b from-[#00C9B8] to-[#0085FF]"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00C9B8] to-[#0085FF] text-xs font-semibold text-white z-10">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-7 flex flex-col ${
                  plan.popular
                    ? "bg-[#0D1117]"
                    : "glass-card border-white/5"
                }`}
              >
                {/* Plan name */}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 text-sm ml-2">
                      {plan.period}
                    </span>
                  )}
                  <div className="mt-1">
                    <span
                      className={`text-sm font-medium ${
                        plan.popular ? "text-[#00C9B8]" : "text-gray-400"
                      }`}
                    >
                      {plan.credits}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.popular ? "text-[#00C9B8]" : "text-gray-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#00C9B8] to-[#0085FF] text-white hover:opacity-90"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
