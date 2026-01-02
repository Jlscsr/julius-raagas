"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import GrainOverlay from "@/components/grain-overlay"

const entries = [
  {
    date: "2025.01",
    title: "The Shift to Deep AI",
    excerpt:
      "Transitioning from prompt-engineering to fine-tuning. Why coordinate data from MediaPipe is the new gold for biomechanical AI.",
    tag: "Intelligence",
  },
  {
    date: "2024.08",
    title: "High-Velocity Shipping",
    excerpt:
      "Building an entire e-commerce engine in 72 hours wasn't about typing faster—it was about architecting with AI in mind.",
    tag: "Process",
  },
  {
    date: "2024.03",
    title: "Wabi-Sabi in Code",
    excerpt: "Embracing the beauty of 'incomplete' systems. How asymmtery leads to more organic user experiences.",
    tag: "Design",
  },
]

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#1a1a1a]">
      <GrainOverlay />

      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="font-mono text-xs tracking-widest uppercase hover:text-[#4a7c9e] transition-colors">
          ← Portfolio
        </Link>
        <span className="font-mono text-xs tracking-widest uppercase opacity-40">Journal</span>
      </nav>

      <section className="pt-40 pb-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none mb-20">
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
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-[#a3a3a3]">{entry.date}</span>
                </div>

                <div className="md:col-span-10">
                  <span className="inline-block px-2 py-0.5 bg-[#4a7c9e]/10 text-[#4a7c9e] font-mono text-[9px] uppercase tracking-widest mb-4">
                    {entry.tag}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 group-hover:text-[#4a7c9e] transition-colors duration-500">
                    {entry.title}
                  </h2>
                  <p className="font-serif text-lg text-[#525252] leading-relaxed max-w-2xl mb-8">{entry.excerpt}</p>
                  <div className="w-12 h-px bg-[#e5e5e5] group-hover:w-24 group-hover:bg-[#4a7c9e] transition-all duration-700" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
