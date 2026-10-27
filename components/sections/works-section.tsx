import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WorksSection() {
  return (
    <section id="works" aria-labelledby="works-heading" className="section-shell border-t border-[var(--wabi-border)]">
      <div className="max-w-2xl">
        <p className="eyebrow">Selected work</p>
        <h2 id="works-heading" className="section-heading">From an idea to a working product.</h2>
        <p className="mt-6 font-serif text-xl leading-relaxed text-[var(--wabi-text-secondary)]">
          Three projects, with the problems, implementation decisions, and lessons behind them.
        </p>
      </div>
      <div className="mt-12 space-y-16 md:space-y-24">
        {projects.map((work) => {
          const cover = work.images[0];
          return (
            <article key={work.slug} className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
              <Link href={`/case-studies/${work.slug}`} aria-label={`Read the ${work.title} case study`} className="group block overflow-hidden border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]">
                {cover && (
                  <div className="relative aspect-[16/10]">
                    <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw" quality={85} className="object-contain p-3 transition-transform duration-300 motion-safe:group-hover:scale-[1.02]" />
                  </div>
                )}
              </Link>
              <div className="min-w-0">
                <p className="eyebrow">{work.category} · {work.year}</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                  <Link href={`/case-studies/${work.slug}`} className="hover:text-[var(--wabi-blue)]">{work.title}</Link>
                </h3>
                <p className="mt-3 font-mono text-xs text-[var(--wabi-text-muted)]">{work.status}</p>
                <p className="mt-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{work.description}</p>
                <ul aria-label={work.title + " technologies"} className="mt-5 flex flex-wrap gap-2">
                  {work.tech.slice(0, 4).map((tech) => <li key={tech} className="tech-tag">{tech}</li>)}
                </ul>
                <Link href={`/case-studies/${work.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-3 font-mono text-xs text-[var(--wabi-blue)] underline underline-offset-4">
                  Read case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
