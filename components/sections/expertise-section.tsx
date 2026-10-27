import Link from "next/link";

const expertiseAreas = [
  {
    title: "Interfaces & interaction",
    description: "Building component-based interfaces, editor interactions, and responsive layouts.",
    skills: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
    project: "See the Heartopia editor",
    href: "/case-studies/heartopia-draft",
  },
  {
    title: "Backend & persistence",
    description: "Connecting interfaces to APIs, authentication, and stored data.",
    skills: ["Node.js", "Express", "Laravel", "MySQL", "MongoDB"],
    project: "Explore the Ulam case study",
    href: "/case-studies/whats-your-ulam",
  },
  {
    title: "Product delivery",
    description: "Using AI-assisted workflows and automated checks to support iterative development.",
    skills: ["Git", "Vercel", "Jest", "Testing Library", "AI-assisted development"],
    project: "View Stillness",
    href: "/case-studies/stillness-ecommerce",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="section-shell">
      <p className="eyebrow">Skills in context</p>
      <h2 id="expertise-heading" className="section-heading">What I work with</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {expertiseAreas.map((area) => (
          <article key={area.title} className="border-t border-[var(--wabi-border)] pt-6">
            <h3 className="font-serif text-2xl">{area.title}</h3>
            <p className="mt-4 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{area.description}</p>
            <ul aria-label={area.title + " technologies"} className="mt-5 flex flex-wrap gap-2">
              {area.skills.map((skill) => <li key={skill} className="tech-tag">{skill}</li>)}
            </ul>
            <Link href={area.href} className="mt-5 inline-flex min-h-11 items-center font-mono text-xs text-[var(--wabi-blue)] underline underline-offset-4">
              {area.project} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
