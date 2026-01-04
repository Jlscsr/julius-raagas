"use client";

import { motion } from "framer-motion";

interface Study {
  title: string;
  subtitle: string;
  timeline: string;
}

export function CaseStudyClient({ study }: { study: Study }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
        Case Study / {study.timeline}
      </span>
      <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-[var(--wabi-text)]">
        {study.title}
      </h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-wider text-[var(--wabi-text-muted)]">
        {study.subtitle}
      </p>
    </motion.div>
  );
}
