import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="eyebrow">The person behind the work</p>
          <h2 id="about-heading" className="section-heading">About</h2>
        </div>
        <div className="max-w-2xl space-y-6 font-serif text-xl leading-relaxed text-[var(--wabi-text-secondary)]">
          <p>
            I started coding in 2020 and have worked across internships, freelance
            projects, and personal products. I enjoy the point where interface
            details meet the rules and data that make a product work.
          </p>
          <p>
            My current focus is interactive tooling, maintainable full-stack
            applications, and understanding the tradeoffs behind each design.
            Heartopia Draft brings those interests together.
          </p>
          <p>
            The quiet palette and natural textures here reflect my interest in
            Wabi-Sabi: simplicity, useful detail, and room to keep improving.
          </p>
          <Link href="/about" className="inline-flex min-h-11 items-center gap-3 font-mono text-xs uppercase tracking-wider text-[var(--wabi-blue)] underline underline-offset-4">
            More about me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
