"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: "01",
    company: "Freelance",
    role: "AI-Native Full-Stack Developer",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Building product-focused web applications with AI-assisted workflows, fast iteration loops, and an increasing emphasis on architecture, reliability, and user experience.",
    achievements: [
      "Building Heartopia Draft, a metric-first planning tool with deterministic canvas editing and project persistence",
      "Built an e-commerce platform in 72 hours using AI-assisted workflows",
      "Designing product architectures with Next.js, MongoDB, and autosave-driven workflows",
      "Working with LLM integration, prompt engineering, and AI-augmented development techniques",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
      "Vue.js",
      "AI-Assisted Dev",
    ],
  },
  {
    id: "02",
    company: "Macrologic",
    role: "Web Developer",
    period: "Apr 2023 - Aug 2023",
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
    period: "Jan 2022 - Dec 2022",
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
    period: "Jul 2021 - Jan 2022",
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
      className="min-h-screen bg-[var(--wabi-bg-secondary)]/30 px-6 py-20 md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--wabi-blue)]">
            Journey
          </span>
          <h2 className="mt-4 font-serif text-3xl font-light text-[var(--wabi-text)] md:text-4xl lg:text-5xl">
            Experience
          </h2>
          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-[var(--wabi-text-secondary)] md:text-lg">
            From foundational full-stack development to AI-assisted product
            engineering, with each step pushing deeper into architecture,
            systems thinking, and practical execution.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[var(--wabi-blue)] via-[var(--wabi-border)] to-transparent md:left-8" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                variants={itemVariants}
                className="group relative pl-8 md:pl-24"
              >
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[var(--wabi-blue)] transition-transform duration-500 group-hover:scale-150 md:left-[28px]" />

                <div className="space-y-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-light text-[var(--wabi-text)] transition-colors duration-500 group-hover:text-[var(--wabi-blue)] md:text-2xl lg:text-3xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--wabi-text-muted)] md:text-sm">
                        {exp.company} - {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--wabi-text-muted)] md:text-right">
                      {exp.period}
                    </span>
                  </div>

                  <p className="max-w-3xl font-serif text-base leading-relaxed text-[var(--wabi-text-secondary)] md:text-lg">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-1.5 text-xs text-[var(--wabi-blue)]">
                          -&gt;
                        </span>
                        <p className="font-serif text-base text-[var(--wabi-text-secondary)]">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[var(--wabi-bg-secondary)] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[var(--wabi-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="mt-12 h-px max-w-md bg-gradient-to-r from-[var(--wabi-border)] to-transparent" />
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
