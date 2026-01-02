"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const works = [
  {
    id: "01",
    slug: "precision-boxing",
    title: "Precision Boxing",
    category: "AI Innovation (2025)",
    year: "2025",
    role: "Lead AI Developer",
    description:
      "Specializing in Deep AI Engineering and Model Fine-tuning. A high-tech system providing real-time biomechanical feedback using 3D pose estimation.",
    tech: ["MediaPipe BlazePose", "TensorFlow Lite", "Neural Networks"],
  },
  {
    id: "02",
    slug: "stillness-ecommerce",
    title: "Stillness E-commerce",
    category: "AI-Native High-Velocity (2024)",
    year: "2024",
    role: "AI-Native Full-Stack Developer",
    description:
      "Demonstrating AI-augmented efficiency. Engineered and deployed a minimalist platform in a record 72-hour timeframe using Prompt Engineering.",
    tech: ["Vue.js", "AI-augmented workflow", "Prompt Engineering"],
  },
  {
    id: "03",
    slug: "whats-your-ulam",
    title: "What's Your Ulam?",
    category: "Core Foundation (2020)",
    year: "2020",
    role: "Full-Stack Developer",
    description:
      "Solid Full-Stack fundamentals. A community-driven social ecosystem featuring secure authentication and robust CRUD operations.",
    tech: ["Node.js", "Express.js", "RESTful APIs"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as any,
    },
  },
};

export default function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="works"
      className="min-h-screen py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[var(--wabi-bg)]"
    >
      <div className="max-w-6xl mr-0 md:mr-[5%] lg:mr-[8%] ml-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
            The Evolution
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--wabi-text)]">
            Selected Works
          </h2>
          <p className="mt-6 max-w-xl font-serif text-base md:text-lg text-[var(--wabi-text-secondary)] leading-relaxed">
            A journey from core engineering fundamentals to high-velocity
            AI-native development and deep model optimization.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 md:space-y-24"
        >
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              variants={itemVariants}
              className={`group ${
                index % 2 === 0 ? "md:pr-[20%]" : "md:pl-[20%]"
              }`}
            >
              <Link href={`/case-studies/${work.slug}`} className="block">
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="font-mono text-xs text-[var(--wabi-text-muted)] mt-2">
                    {work.id}
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-8 mb-4">
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-[var(--wabi-text)] group-hover:text-[var(--wabi-blue)] transition-colors duration-500">
                        {work.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--wabi-text-muted)]">
                        {work.category}
                      </span>
                    </div>

                    <p className="font-serif text-lg text-[var(--wabi-text-secondary)] mb-4">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-[var(--wabi-border)] group-hover:bg-[var(--wabi-blue)] group-hover:scale-x-105 origin-left transition-all duration-700" />

                    <div className="flex justify-between items-center mt-4">
                      <span className="font-mono text-[10px] tracking-widest text-[var(--wabi-text-muted)]">
                        {work.year} — {work.role}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--wabi-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
