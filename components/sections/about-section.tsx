"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const philosophies = [
  { kanji: "智", romaji: "Chi", meaning: "Intelligence & Wisdom" },
  { kanji: "形", romaji: "Katachi", meaning: "Form & Structure" },
  { kanji: "心", romaji: "Kokoro", meaning: "Heart & Intent" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-32 px-8 md:px-16 lg:px-24 bg-[var(--wabi-bg-secondary)]/30"
    >
      <div className="max-w-5xl ml-0 md:ml-[8%] lg:ml-[12%]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
            Philosophy
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light text-[var(--wabi-text)]">
            About
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-[var(--wabi-text)]">
              I'm Julius Caesar F. Raagas — a developer who started in 2020 with
              tutorial hell and Stack Overflow deep dives, now building systems
              where{" "}
              <span className="text-[var(--wabi-blue)]">
                AI is baked into the core
              </span>
              , not just bolted on.
            </p>

            <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
              From internships to freelancing, I learned to adapt fast—taking on
              IoT projects, mobile apps, and technologies I'd never touched
              before. The chaos taught me I can learn anything on the fly. Now
              I'm shifting focus from syntax to system design, architecture, and
              engineering decisions that matter at scale.
            </p>

            <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
              I embrace AI-native development (call it vibe coding if you want).
              AI handles the "how," I focus on the "why" and "where." Currently
              leveling up in system architecture, design patterns, and building
              software that doesn't just work—it's designed well enough to
              explain why it works.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12 md:mt-12">
            {philosophies.map((item) => (
              <motion.div
                key={item.romaji}
                variants={itemVariants}
                className="flex items-center gap-8"
              >
                <span className="font-serif text-6xl md:text-7xl text-[var(--wabi-border)] leading-none">
                  {item.kanji}
                </span>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-[var(--wabi-blue)]">
                    {item.romaji}
                  </p>
                  <p className="font-serif text-lg text-[var(--wabi-text-secondary)] mt-1">
                    {item.meaning}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Asymmetric decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-gradient-to-r from-[var(--wabi-blue)] via-[var(--wabi-border)] to-transparent origin-left max-w-md"
        />
      </div>
    </section>
  );
}
