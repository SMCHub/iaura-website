"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117]" />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00C9B8]/10 to-[#0085FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#FF6B6B]/5 to-[#7C3AED]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Discover
            <br />
            <span className="gradient-text">Your Aura?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join thousands who have already uncovered their unique aura.
            Download iAura today and start your journey of self-discovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#00C9B8] to-[#0085FF] text-white font-semibold text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#00C9B8]/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                Download on the App Store
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0085FF] to-[#00C9B8] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <p className="text-gray-600 text-sm mt-6">
            Free to download. 3 credits included. No subscription required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
