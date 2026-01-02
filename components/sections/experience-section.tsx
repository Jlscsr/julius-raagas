"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: "01",
    company: "Freelance",
    role: "AI-Native Full-Stack Developer",
    period: "2024 – Present",
    location: "Remote",
    description:
      "Exploring AI-augmented development workflows and full-stack solutions. Building projects that combine AI capabilities with user experiences, seeking professional opportunities to grow these skills.",
    achievements: [
      "Developing Precision Boxing app with pose detection using MediaPipe and TensorFlow",
      "Built e-commerce platform in 72 hours using AI-augmented workflows",
      "Learning prompt engineering and AI-assisted development techniques",
      "Working with LLM integration, model fine-tuning, and neural networks",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "MediaPipe",
      "TensorFlow",
      "Vue.js",
      "Next.js",
      "AI/ML",
    ],
  },
  {
    id: "02",
    company: "Macrologic",
    role: "Web Developer",
    period: "Apr 2023 – Aug 2023",
    location: "Philippines",
    description:
      "Focused on performance optimization and code quality. Worked on legacy codebases and improved system efficiency through refactoring and modern development practices.",
    achievements: [
      "Optimized legacy PHP codebase, improving page load times by 40%",
      "Refactored monolithic architecture into modular, maintainable components",
      "Implemented best practices for code quality and performance monitoring",
      "Collaborated with cross-functional teams on high-traffic web applications",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Performance Optimization"],
  },
  {
    id: "03",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    role: "Junior Software Engineer (Internship)",
    period: "Jan 2022 – Dec 2022",
    location: "Philippines",
    description:
      "Gained hands-on experience building production applications while learning from senior developers. Developed full-stack skills across modern web technologies and agile workflows.",
    achievements: [
      "Assisted in mentoring junior developers in web development practices",
      "Built and maintained client projects using Vue.js and Laravel",
      "Implemented RESTful APIs and database schemas",
      "Participated in all phases of SDLC from planning to deployment",
    ],
    tech: ["Vue.js", "Laravel", "MySQL", "RESTful APIs", "Git", "Agile"],
  },
  {
    id: "04",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    role: "Junior Web Developer (Internship)",
    period: "Jul 2021 – Jan 2022",
    location: "Philippines",
    description:
      "Foundation-building internship where I transitioned from academic learning to professional software development. Gained practical experience in full-stack web development and team collaboration.",
    achievements: [
      "Developed responsive web applications using Vue.js and Quasar Framework",
      "Built RESTful APIs with Node.js and Express for social media platform",
      "Learned agile development methodologies and Git workflow",
      "Successfully transitioned from intern to junior engineer",
    ],
    tech: ["Vue.js", "Quasar", "Node.js", "Express.js", "MySQL", "Git"],
  },
];

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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as any,
    },
  },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="min-h-screen py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[var(--wabi-bg-secondary)]/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
            Journey
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--wabi-text)]">
            Experience
          </h2>
          <p className="mt-6 max-w-xl font-serif text-base md:text-lg text-[var(--wabi-text-secondary)] leading-relaxed">
            From foundational full-stack development to AI-native engineering—a
            progression marked by continuous learning and technical evolution.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--wabi-blue)] via-[var(--wabi-border)] to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                variants={itemVariants}
                className="relative pl-8 md:pl-24 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-[var(--wabi-blue)] group-hover:scale-150 transition-transform duration-500" />

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-[var(--wabi-text)] group-hover:text-[var(--wabi-blue)] transition-colors duration-500">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-[var(--wabi-text-muted)] mt-1">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--wabi-text-muted)] md:text-right">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-serif text-base md:text-lg text-[var(--wabi-text-secondary)] leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>

                  <div className="pt-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-[var(--wabi-blue)] text-xs mt-1.5">
                          ▹
                        </span>
                        <p className="font-serif text-base text-[var(--wabi-text-secondary)]">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-[var(--wabi-border)] to-transparent max-w-md" />
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
