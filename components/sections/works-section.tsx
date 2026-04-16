"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

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
      className="min-h-screen bg-[var(--wabi-bg)] px-6 py-20 md:px-16 md:py-32 lg:px-24"
    >
      <div className="ml-auto mr-0 max-w-6xl md:mr-[5%] lg:mr-[8%]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--wabi-blue)]">
            The Evolution
          </span>
          <h2 className="mt-4 font-serif text-3xl font-light text-[var(--wabi-text)] md:text-4xl lg:text-5xl">
            Selected Works
          </h2>
          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-[var(--wabi-text-secondary)] md:text-lg">
            A progression from early full-stack foundations to AI-assisted
            shipping and interactive product engineering.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 md:space-y-24"
        >
          {projects.map((work, index) => {
            const previewImage = work.coverImage ?? work.images[0] ?? null;

            return (
              <motion.article
                key={work.id}
                variants={itemVariants}
                className={`group ${
                  index % 2 === 0 ? "md:pr-[20%]" : "md:pl-[20%]"
                }`}
              >
                <Link
                  href={`/case-studies/${work.slug}`}
                  className="block cursor-pointer"
                >
                  <div className="rounded-lg border border-transparent p-6 transition-all duration-500 hover:border-[var(--wabi-border)] hover:bg-[var(--wabi-bg-secondary)] hover:shadow-lg active:scale-[0.99] -mx-6">
                    <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-center xl:gap-8">
                      <div className="flex items-start gap-6 md:gap-12">
                        <span className="mt-2 font-mono text-xs text-[var(--wabi-text-muted)] transition-colors duration-500 group-hover:text-[var(--wabi-blue)]">
                          {work.id}
                        </span>

                        <div className="flex-1">
                          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif text-3xl font-light text-[var(--wabi-text)] transition-colors duration-500 group-hover:text-[var(--wabi-blue)] md:text-4xl">
                                {work.title}
                              </h3>
                              <svg
                                className="h-5 w-5 text-[var(--wabi-blue)] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--wabi-text-muted)]">
                              {work.category}
                            </span>
                          </div>

                          <p className="mb-4 font-serif text-lg text-[var(--wabi-text-secondary)]">
                            {work.description}
                          </p>

                          <div className="mb-4 flex flex-wrap gap-2">
                            {work.tech.map((tech) => (
                              <span
                                key={tech}
                                className="bg-[var(--wabi-bg-secondary)] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[var(--wabi-text-muted)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="h-px origin-left bg-[var(--wabi-border)] transition-all duration-700 group-hover:scale-x-105 group-hover:bg-[var(--wabi-blue)]" />

                          <div className="mt-4 flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-widest text-[var(--wabi-text-muted)]">
                              {work.year} - {work.role}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--wabi-blue)] transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                              View Study -&gt;
                            </span>
                          </div>
                        </div>
                      </div>

                      {previewImage && (
                        <div className="relative aspect-[16/10] overflow-hidden border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]">
                          <Image
                            src={previewImage}
                            alt={`${work.title} preview`}
                            fill
                            sizes="(max-width: 1279px) 100vw, 288px"
                            quality={85}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
