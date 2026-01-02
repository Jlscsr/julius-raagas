"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    id: "01",
    title: "AI-Native Developer",
    kanji: "智",
    description:
      "Developing skills in LLM integration, model training, and prompt engineering. Building intelligent systems with neural networks and AI/ML pipeline deployment.",
    skills: [
      "LLM Integration",
      "Model Training",
      "Neural Networks",
      "Prompt Engineering",
    ],
  },
  {
    id: "02",
    title: "Full-Stack Developer",
    kanji: "全",
    description:
      "Proficient in modern JavaScript frameworks including React, Vue, Next.js, and Nuxt.js. Building scalable applications with Node.js, Express, Laravel, and both SQL and NoSQL databases.",
    skills: [
      "React & Next.js",
      "Vue.js & Nuxt.js",
      "Node.js & Express",
      "MySQL & MongoDB",
    ],
  },
  {
    id: "03",
    title: "System Architecture",
    kanji: "構",
    description:
      "Learning cloud-native architectures on AWS and Vercel. Working with CI/CD pipelines, Docker containerization, and RESTful API systems with focus on performance and scalability.",
    skills: ["AWS & Cloud", "CI/CD & Docker", "RESTful APIs", "System Design"],
  },
  {
    id: "04",
    title: "UI/UX Designer",
    kanji: "美",
    description:
      "Creating intuitive interfaces with Figma, implementing responsive designs with modern CSS frameworks. Focused on user-centered design principles and seamless experiences.",
    skills: [
      "Figma Design",
      "Responsive UI",
      "SCSS & Tailwind",
      "User Research",
    ],
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

export default function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      className="min-h-screen py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[var(--wabi-bg-secondary)]/30"
    >
      <div className="max-w-6xl ml-0 md:ml-[5%] lg:ml-[8%]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
            Core Disciplines
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--wabi-text)]">
            Expertise
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 md:gap-20"
        >
          {expertiseAreas.map((area, index) => (
            <motion.article
              key={area.id}
              variants={itemVariants}
              className={`group relative ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <span className="absolute -top-4 -left-4 font-serif text-[8rem] text-[var(--wabi-border)] leading-none select-none pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700">
                {area.kanji}
              </span>

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-xs text-[var(--wabi-text-muted)] mt-1">
                    {area.id}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-[var(--wabi-text)] group-hover:text-[var(--wabi-blue)] transition-colors duration-500">
                    {area.title}
                  </h3>
                </div>

                <p className="font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed mb-6 ml-8">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-3 ml-8">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] tracking-widest uppercase text-[var(--wabi-text-muted)] px-3 py-1 border border-[var(--wabi-border)] hover:border-[var(--wabi-blue)] hover:text-[var(--wabi-blue)] transition-colors duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 ml-8 h-px bg-[var(--wabi-border)] group-hover:bg-[var(--wabi-blue)]/50 transition-colors duration-700 max-w-xs" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
