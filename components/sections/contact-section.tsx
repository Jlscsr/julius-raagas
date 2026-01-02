"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-8 md:px-16 lg:px-24 flex items-center relative overflow-hidden bg-[var(--wabi-bg)]"
    >
      <div className="max-w-4xl mr-0 md:mr-[10%] lg:mr-[15%] ml-auto w-full relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)] block"
          >
            Let's Connect
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-serif text-4xl md:text-5xl font-light text-[var(--wabi-text)] mb-16"
          >
            Contact
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-serif text-xl md:text-2xl leading-relaxed text-[var(--wabi-text)] max-w-xl mb-12"
          >
            Interested in building something intelligent together? I'm always
            open to discussing{" "}
            <span className="text-[var(--wabi-blue)]">AI applications</span>,
            system architecture, or thoughtful design challenges.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <a
                href="mailto:raagasjuliuscaesar@gmail.com"
                className="group inline-flex items-center gap-2 md:gap-4 block"
              >
                <span className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--wabi-text)] group-hover:text-[var(--wabi-blue)] transition-colors duration-500 break-all">
                  raagasjuliuscaesar@gmail.com
                </span>
                <span className="font-mono text-xs text-[var(--wabi-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  ↗
                </span>
              </a>

              <a
                href="tel:+639770878614"
                className="group inline-flex items-center gap-2 md:gap-4 block"
              >
                <span className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--wabi-text)] group-hover:text-[var(--wabi-blue)] transition-colors duration-500">
                  +63 977 087 8614
                </span>
                <span className="font-mono text-xs text-[var(--wabi-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  ↗
                </span>
              </a>
            </div>

            <motion.a
              variants={itemVariants}
              href="/raagas-julius-caesar-resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[var(--wabi-blue)] text-white font-mono text-[10px] md:text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue-hover)] transition-all duration-500 group mt-6 w-full sm:w-auto"
            >
              Download Resume
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                ↓
              </span>
            </motion.a>

            <div className="flex flex-wrap gap-6 md:gap-8 pt-8">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/julius-caesar-raagas-93b794276/",
                },
                { name: "GitHub", url: "https://github.com/Jlscsr" },
                {
                  name: "Portfolio",
                  url: "https://julius-raagas-yp.vercel.app/",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  variants={itemVariants}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[var(--wabi-text-muted)] hover:text-[var(--wabi-blue)] transition-colors duration-500"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 2, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute -right-8 md:right-0 bottom-0 font-serif text-[15rem] md:text-[20rem] text-[var(--wabi-text)] leading-none select-none pointer-events-none z-[-1]"
          >
            縁
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
