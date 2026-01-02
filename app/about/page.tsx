"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import GrainOverlay from "@/components/grain-overlay";

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
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as any,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--wabi-bg)] text-[var(--wabi-text)]">
      <GrainOverlay />

      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center bg-[var(--wabi-bg)]/90 backdrop-blur-sm">
        <Link
          href="/"
          className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[var(--wabi-text)] hover:text-[var(--wabi-blue)] transition-colors"
        >
          ← Portfolio
        </Link>
        <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[var(--wabi-text-muted)] opacity-40">
          About
        </span>
      </nav>

      <section className="pt-24 sm:pt-32 md:pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-none mb-6 md:mb-8 text-[var(--wabi-text)]">
              About Me<span className="text-[var(--wabi-blue)]">.</span>
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-[var(--wabi-text-muted)]">
              The Journey, Philosophy & Vision
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 md:mt-20 space-y-16 md:space-y-24"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
                Introduction
              </h2>
              <div className="space-y-6 font-serif text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--wabi-text)]">
                <p>
                  I'm{" "}
                  <span className="text-[var(--wabi-blue)]">
                    Julius Caesar F. Raagas
                  </span>
                  , a Full-Stack Developer and CS Student transitioning from
                  coder to architect. I build systems where AI isn't an
                  afterthought—it's part of the foundation.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[var(--wabi-text-secondary)]">
                  Started coding in 2020. Went through tutorial hell,
                  internships, and freelance chaos. Learned to adapt fast, build
                  under pressure, and tackle tech I'd never seen before. Now I'm
                  shifting from writing syntax to engineering{" "}
                  <span className="text-[var(--wabi-blue)]">
                    system architecture
                  </span>
                  ,{" "}
                  <span className="text-[var(--wabi-blue)]">
                    design patterns
                  </span>
                  , and making decisions that matter at scale.
                </p>
              </div>
            </motion.div>

            {/* Background */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)] mb-6">
                  The Journey
                </h2>
                <div className="space-y-4 font-serif text-lg text-[var(--wabi-text-secondary)] leading-relaxed">
                  <p>
                    Started coding in 2020. Tutorial hell? Check. Doom-scrolling
                    GitHub, Stack Overflow, Reddit for random syntax fixes?
                    Absolutely. I barely knew what I was doing, but I wanted to
                    see things work.
                  </p>
                  <p>
                    Internships threw me into production chaos. Freelancing was
                    wild—taking on IoT projects mid-learning, picking up mobile
                    development while building the app. Did I crash? Yes. Did I
                    lose sleep debugging my own mess? 100%. But I gained the
                    ability to adapt, learn on the fly, and solve problems I'd
                    never seen before.
                  </p>
                  <p>
                    Then AI changed the game. I realized: AI can write code
                    faster and sometimes better than me. So I shifted to
                    AI-Native Development—building systems where AI is core, not
                    an add-on. Now I focus on architecture, system design, and
                    the "why" behind decisions while AI handles the "how."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)] mb-6">
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-[var(--wabi-bg-secondary)] border border-[var(--wabi-border)]">
                    <h3 className="font-serif text-xl font-light mb-2 text-[var(--wabi-text)]">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="font-mono text-sm text-[var(--wabi-text-muted)] uppercase tracking-wider mb-4">
                      Cavite State University - Bacoor Campus
                    </p>
                    <p className="font-serif text-base text-[var(--wabi-text-secondary)]">
                      Expected 2026. Foundation in algorithms, data structures,
                      and software engineering. Using my CS background to write
                      better prompts and understand system architecture at a
                      deeper level.
                    </p>
                  </div>
                </div>

                <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)] mb-6 mt-12">
                  Location & Availability
                </h2>
                <div className="space-y-3 font-serif text-base text-[var(--wabi-text-secondary)]">
                  <p>
                    <span className="text-[var(--wabi-text-muted)]">
                      Based in:
                    </span>{" "}
                    Philippines
                  </p>
                  <p>
                    <span className="text-[var(--wabi-text-muted)]">
                      Working:
                    </span>{" "}
                    Globally (Remote)
                  </p>
                  <p>
                    <span className="text-[var(--wabi-text-muted)]">
                      Status:
                    </span>{" "}
                    <span className="text-[var(--wabi-blue)]">
                      Open to opportunities
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
                Philosophy — Wabi-Sabi (侘寂)
              </h2>
              <div className="space-y-6 font-serif text-lg text-[var(--wabi-text-secondary)] leading-relaxed">
                <p>
                  My approach to development is inspired by the Japanese
                  philosophy of{" "}
                  <span className="text-[var(--wabi-text)] font-medium">
                    Wabi-Sabi
                  </span>
                  —finding beauty in imperfection, simplicity, and the natural.
                  This manifests in my work through:
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="space-y-3">
                    <div className="text-6xl text-[var(--wabi-border)] font-serif">
                      智
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--wabi-blue)]">
                      Chi — Intelligence
                    </h3>
                    <p className="text-base">
                      Leveraging AI and machine learning not for novelty, but to
                      solve genuine human problems with wisdom and intention.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-6xl text-[var(--wabi-border)] font-serif">
                      形
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--wabi-blue)]">
                      Katachi — Form & Structure
                    </h3>
                    <p className="text-base">
                      Clean architecture and minimalist design that serves
                      function. Every element has purpose; nothing is
                      ornamental.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-6xl text-[var(--wabi-border)] font-serif">
                      心
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--wabi-blue)]">
                      Kokoro — Heart & Intent
                    </h3>
                    <p className="text-base">
                      Building with empathy and consideration for the user's
                      experience, context, and genuine needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Expertise */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
                Technical Expertise
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[var(--wabi-text)]">
                    AI & Machine Learning
                  </h3>
                  <p className="font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed">
                    Learning LLM integration, model fine-tuning, neural network
                    optimization, and prompt engineering. Gaining experience
                    with MediaPipe, TensorFlow, and real-time ML inference on
                    mobile devices.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "TensorFlow",
                      "MediaPipe",
                      "Neural Networks",
                      "LLM Integration",
                      "Model Fine-tuning",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[var(--wabi-text)]">
                    Frontend Development
                  </h3>
                  <p className="font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed">
                    Proficient in modern JavaScript frameworks with focus on
                    React, Next.js, Vue.js, and Nuxt.js. Working with
                    TypeScript, Three.js for 3D experiences, and modern styling
                    solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "React",
                      "Next.js",
                      "Vue.js",
                      "TypeScript",
                      "Three.js",
                      "Tailwind CSS",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[var(--wabi-text)]">
                    Backend & APIs
                  </h3>
                  <p className="font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed">
                    Building server-side applications with Node.js, Express, and
                    Laravel. Developing skills in RESTful API design, database
                    optimization, and cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Node.js",
                      "Express",
                      "Laravel",
                      "RESTful APIs",
                      "MySQL",
                      "MongoDB",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[var(--wabi-text)]">
                    DevOps & Cloud
                  </h3>
                  <p className="font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed">
                    Cloud-native architecture on AWS and Vercel. Implementing
                    CI/CD pipelines, Docker containerization, and infrastructure
                    optimization for performance and scalability.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "AWS",
                      "Vercel",
                      "Docker",
                      "CI/CD",
                      "Git",
                      "Performance Optimization",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[var(--wabi-bg-secondary)] text-[var(--wabi-text-muted)] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What I'm Working On */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-[var(--wabi-bg-secondary)] border border-[var(--wabi-border)]"
            >
              <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)] mb-6">
                Current Focus (2026)
              </h2>
              <div className="space-y-4 font-serif text-lg text-[var(--wabi-text-secondary)] leading-relaxed">
                <p>
                  Leveling up my developer brain. Less time on syntax, more time
                  on{" "}
                  <span className="text-[var(--wabi-text)]">
                    System Design, Architecture, Trade-offs, and Design Patterns
                  </span>
                  . I'm learning how to build systems that scale, not just apps
                  that work.
                </p>
                <p>
                  Building{" "}
                  <span className="text-[var(--wabi-text)]">
                    Precision Boxing
                  </span>{" "}
                  (AI-powered training app),{" "}
                  <span className="text-[var(--wabi-text)]">Project Slime</span>{" "}
                  (desktop companion with AI integration), and experimenting
                  with translation models for local dialects. Using these to
                  test architectural theories in practice.
                </p>
                <p className="text-base">
                  Looking for opportunities where I can build in a week what
                  usually takes months. I embrace chaos, AI-augmented workflows,
                  and the thrill of learning while doing.
                </p>
              </div>
            </motion.div>

            {/* Interests & Values */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
                  Philosophy
                </h2>
                <div className="space-y-4 font-serif text-base text-[var(--wabi-text-secondary)] leading-relaxed">
                  <p>
                    AI isn't just a tool anymore—it's a co-pilot, a teammate. I
                    accept that AI can write code faster and cleaner. So I focus
                    on what it can't do: the vision, the architecture, the "why"
                    behind the system.
                  </p>
                  <p>
                    I don't just want software to work. I want it designed well
                    enough that I can explain <em>why</em> it works. That means
                    understanding monoliths vs microservices, design patterns
                    beyond if-else logic, and trade-offs that matter at scale.
                  </p>
                  <p>
                    Life's too short for boring code. I embrace chaos, learn
                    while building, burn out, and come back stronger. Comfort
                    zones are overrated.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
                  What I'm Looking For
                </h2>
                <div className="space-y-3 font-serif text-base text-[var(--wabi-text-secondary)]">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--wabi-blue)] mt-1">▹</span>
                    <p>Teams that value velocity and AI-augmented workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--wabi-blue)] mt-1">▹</span>
                    <p>
                      Roles where I can learn system architecture and design at
                      scale
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--wabi-blue)] mt-1">▹</span>
                    <p>
                      Projects involving AI-native development and intelligent
                      systems
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--wabi-blue)] mt-1">▹</span>
                    <p>
                      Opportunities to build software that works, scales, and
                      helps people
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--wabi-blue)] mt-1">▹</span>
                    <p>
                      Fast-paced environments that embrace learning by doing
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--wabi-blue)] text-white font-mono text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue-hover)] transition-all duration-500"
                  >
                    Let's Connect →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div
              variants={itemVariants}
              className="pt-12 border-t border-[var(--wabi-border)]"
            >
              <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-[var(--wabi-text)] italic">
                "I'm here to build software that works, scales, and actually
                helps people. I embrace chaos, I embrace AI, and I love the
                thrill of learning while doing. Life is too short for boring
                code."
              </p>
              <p className="font-mono text-sm tracking-wider text-[var(--wabi-text-muted)] mt-6">
                — Julius Caesar F. Raagas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-[var(--wabi-border)]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="font-mono text-xs tracking-widest text-[var(--wabi-text-muted)] uppercase">
            © 2026 Julius Raagas — Crafting with intention
          </p>
          <p className="font-mono text-xs text-[var(--wabi-text-muted)]">
            侘寂
          </p>
        </div>
      </footer>
    </main>
  );
}
