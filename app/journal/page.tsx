"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GrainOverlay from "@/components/grain-overlay";

const entries = [
  {
    date: "2025.01",
    title: "Designing Spatial Planning Tools",
    excerpt:
      "Building reliable planning software is mostly about deterministic rules, clean interactions, and knowing where precision actually matters.",
    tag: "Intelligence",
  },
  {
    date: "2024.08",
    title: "High-Velocity Shipping",
    excerpt:
      "Building an entire e-commerce engine in 72 hours was not about typing faster. It was about architecting with AI in mind.",
    tag: "Process",
  },
  {
    date: "2024.03",
    title: "Wabi-Sabi in Code",
    excerpt:
      "Embracing the beauty of incomplete systems. How asymmetry leads to more organic user experiences.",
    tag: "Design",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#1a1a1a]">
      <GrainOverlay />

      <nav className="mix-blend-difference fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#4a7c9e]"
        >
          &larr; Portfolio
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest opacity-40">
          Journal
        </span>
      </nav>

      <section className="px-8 pb-20 pt-40 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-20 font-serif text-6xl font-light italic leading-none md:text-8xl">
              Reflections<span className="text-[#4a7c9e]">.</span>
            </h1>
          </motion.div>

          <div className="space-y-24">
            {entries.map((entry, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative grid grid-cols-1 items-start gap-8 md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-[#a3a3a3]">
                    {entry.date}
                  </span>
                </div>

                <div className="md:col-span-10">
                  <span className="mb-4 inline-block bg-[#4a7c9e]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#4a7c9e]">
                    {entry.tag}
                  </span>
                  <h2 className="mb-6 font-serif text-3xl font-light transition-colors duration-500 group-hover:text-[#4a7c9e] md:text-4xl">
                    {entry.title}
                  </h2>
                  <p className="mb-8 max-w-2xl font-serif text-lg leading-relaxed text-[#525252]">
                    {entry.excerpt}
                  </p>
                  <div className="h-px w-12 bg-[#e5e5e5] transition-all duration-700 group-hover:w-24 group-hover:bg-[#4a7c9e]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
