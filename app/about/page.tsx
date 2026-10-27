import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Julius Raagas, a full-stack developer in the Philippines interested in interactive tools, interface design, and practical engineering.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julius Raagas",
    description: "Full-stack development, interactive tools, and the thinking behind the work.",
    url: "/about",
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Julius Raagas",
    description: "Full-stack development, interactive tools, and the thinking behind the work.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-6 pb-20 pt-32 md:px-12 md:pt-40">
      <p className="eyebrow">Background & approach</p>
      <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">About me<span className="text-[var(--wabi-blue)]">.</span></h1>
      <p className="mt-8 max-w-3xl font-serif text-2xl leading-relaxed text-[var(--wabi-text-secondary)]">
        I’m Julius Caesar F. Raagas, a full-stack developer based in the
        Philippines. I enjoy turning an idea into something people can interact
        with, and understanding the rules that make it dependable.
      </p>
      <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
        <section aria-labelledby="background-heading" className="space-y-6">
          <h2 id="background-heading" className="font-serif text-3xl">Learning through building</h2>
          <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
            I started coding in 2020. Internships and freelance work introduced
            me to client applications, existing codebases, APIs, and team
            development. Personal projects give me space to explore interaction
            design and work through problems across the full stack.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
            My background includes Computer Science coursework at Cavite State
            University, Bacoor Campus. I continue learning through independent
            study and hands-on development.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
            These days I’m building Heartopia Draft, a layout planner that
            combines spatial rules, direct manipulation, and saved projects.
            It has made me more interested in how small interaction decisions
            affect the reliability of an entire product.
          </p>
          <Link href="/case-studies/heartopia-draft" className="inline-flex min-h-11 items-center font-mono text-xs text-[var(--wabi-blue)] underline underline-offset-4">Read the Heartopia case study →</Link>
        </section>
        <aside aria-label="Location and availability" className="h-fit border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] p-6">
          <h2 className="font-serif text-2xl">At a glance</h2>
          <dl className="mt-6 space-y-5">
            <div><dt className="eyebrow">Based in</dt><dd className="mt-2 text-lg">Philippines</dd></div>
            <div><dt className="eyebrow">Interested in</dt><dd className="mt-2 text-lg">Full-stack roles and freelance projects</dd></div>
            <div><dt className="eyebrow">Working with</dt><dd className="mt-2 text-lg">React, Vue, TypeScript, Node.js, and Laravel</dd></div>
          </dl>
        </aside>
      </div>
      <section aria-labelledby="approach-heading" className="mt-16 border-t border-[var(--wabi-border)] pt-12">
        <h2 id="approach-heading" className="font-serif text-3xl">How I approach the work</h2>
        <div className="mt-6 space-y-6 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
          <p>
            I use AI-assisted workflows for scaffolding and iteration. The
            engineering decisions, review, and testing remain my responsibility.
            I want to understand what I ship well enough to explain and maintain it.
          </p>
          <p>
            My current learning focus is system design, validation, and the
            tradeoffs between implementation speed and long-term maintenance.
            I’m also exploring LLM integration and evaluation as learning projects.
          </p>
          <p>
            Outside the implementation details, I care about quiet, readable
            interfaces. Wabi-Sabi is an influence on this portfolio: natural
            texture, simplicity, and improvement through use.
          </p>
        </div>
      </section>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/#contact" className="button-primary">Let’s connect →</Link>
        <a href="/raagas-julius-caesar-resume.pdf" className="button-secondary">View resume (PDF)</a>
      </div>
    </main>
  );
}
