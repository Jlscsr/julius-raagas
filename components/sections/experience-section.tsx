const experiences = [
  {
    company: "Freelance & independent projects",
    role: "Full-Stack Developer",
    period: "2024 – Present",
    description: "Developing web applications and personal tools, with a focus on interactive interfaces and persistent application state.",
    achievements: [
      "Building Heartopia Draft with canvas editing, metric grid rules, and project autosave.",
      "Built Stillness, an e-commerce demonstration using Vue, TypeScript, and Pinia.",
      "Using AI-assisted workflows for implementation and iteration.",
    ],
    tech: ["Next.js", "Vue", "TypeScript", "MongoDB"],
  },
  {
    company: "Macrologic",
    role: "Web Developer",
    period: "Apr 2023 – Aug 2023",
    description: "Worked on existing PHP applications, performance improvements, and code maintenance.",
    achievements: [
      "Refactored legacy PHP code into more modular components.",
      "Worked on page-load performance and application maintenance with the development team.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    role: "Junior Software Engineer · Internship",
    period: "Jan 2022 – Dec 2022",
    description: "Worked with senior developers on client applications and full-stack development.",
    achievements: [
      "Built and maintained features using Vue and Laravel.",
      "Implemented REST APIs and database schemas.",
      "Participated in project planning, implementation, and deployment.",
    ],
    tech: ["Vue", "Laravel", "MySQL", "Git"],
  },
  {
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    role: "Junior Web Developer · Internship",
    period: "Jul 2021 – Jan 2022",
    description: "Applied classroom and independent learning to team-based web development.",
    achievements: [
      "Developed responsive interfaces using Vue and Quasar.",
      "Built REST APIs with Node.js and Express.",
    ],
    tech: ["Vue", "Quasar", "Node.js", "Express"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-y border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]/40">
      <div className="section-shell">
        <p className="eyebrow">Professional background</p>
        <h2 id="experience-heading" className="section-heading">Experience</h2>
        <div className="mt-12 space-y-10 md:space-y-14">
          {experiences.map((experience) => (
            <article key={experience.company + experience.period} className="grid gap-5 border-l border-[var(--wabi-border)] pl-6 md:grid-cols-[1fr_2fr] md:gap-12 md:pl-8">
              <div>
                <p className="font-mono text-xs leading-relaxed text-[var(--wabi-text-muted)]">{experience.period}</p>
                <p className="mt-3 max-w-xs font-serif text-lg leading-relaxed">{experience.company}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl leading-snug md:text-3xl">{experience.role}</h3>
                <p className="mt-3 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{experience.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                  {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
                <ul aria-label={experience.role + " technologies"} className="mt-5 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => <li key={tech} className="tech-tag">{tech}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
