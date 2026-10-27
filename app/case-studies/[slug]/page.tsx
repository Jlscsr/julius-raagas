import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/lib/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectBySlug(slug);
  if (!study) notFound();
  const cover = study.images[0];
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | Julius Raagas`,
      description: study.description,
      url: `/case-studies/${study.slug}`,
      type: "article",
      images: cover ? [{ url: cover.src, alt: cover.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: cover ? [cover.src] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getProjectBySlug(slug);
  if (!study) notFound();
  const cover = study.images[0];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    url: `https://julius-raagas.vercel.app/case-studies/${study.slug}`,
    author: { "@type": "Person", name: "Julius Caesar Raagas", url: "https://julius-raagas.vercel.app" },
    image: cover ? `https://julius-raagas.vercel.app${cover.src}` : undefined,
  };

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:px-12 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Link href="/#works" className="inline-flex min-h-11 items-center font-mono text-xs text-[var(--wabi-text-muted)] underline underline-offset-4">← Selected work</Link>
      <header className="mt-8">
        <p className="eyebrow">{study.category} · {study.timeline}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">{study.title}</h1>
        <p className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-[var(--wabi-text-secondary)]">{study.description}</p>
        <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
          <div><dt className="eyebrow">Role</dt><dd className="mt-2 text-lg">{study.role}</dd></div>
          <div><dt className="eyebrow">Status</dt><dd className="mt-2 text-lg">{study.status}</dd></div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          {study.liveDemo && <a href={study.liveDemo} target="_blank" rel="noopener noreferrer" className="button-primary">Open demo ↗</a>}
          {study.github && <a href={study.github} target="_blank" rel="noopener noreferrer" className="button-secondary">View source ↗</a>}
        </div>
        <p className="mt-4 max-w-3xl font-serif text-base leading-relaxed text-[var(--wabi-text-secondary)]">{study.statusNote}</p>
      </header>

      {cover && (
        <figure className="mt-8">
          <a href={cover.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${cover.alt}`} className="block border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] p-2 sm:p-4">
            <div className="relative aspect-[2/1]">
              <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1152px) 1056px, 100vw" quality={85} preload className="object-contain" />
            </div>
          </a>
          <figcaption className="mt-3 font-serif text-base text-[var(--wabi-text-muted)]">{cover.alt} Select the image to view it full size.</figcaption>
        </figure>
      )}

      <div className="mt-12 flex flex-wrap gap-2" aria-label="Technologies">
        {study.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <section aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="font-serif text-3xl">The problem</h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{study.challenge}</p>
        </section>
        <section aria-labelledby="solution-heading">
          <h2 id="solution-heading" className="font-serif text-3xl">The implementation</h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{study.solution}</p>
        </section>
      </div>
      <section aria-labelledby="built-heading" className="mt-12 border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] p-6 md:p-8">
        <h2 id="built-heading" className="font-serif text-3xl">What I built</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
          {study.results.map((result) => <li key={result}>{result}</li>)}
        </ul>
      </section>
      <section aria-label="Engineering decisions and lessons" className="mt-16 max-w-3xl space-y-12">
        {study.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif text-3xl">{section.title}</h2>
            <p className="mt-5 font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">{section.content}</p>
          </div>
        ))}
      </section>
      {study.images.length > 1 && (
        <section aria-labelledby="gallery-heading" className="mt-16">
          <h2 id="gallery-heading" className="font-serif text-3xl">A closer look</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {study.images.slice(1).map((image) => (
              <figure key={image.src}>
                <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`} className="block border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] p-2">
                  <div className="relative aspect-video">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1152px) 512px, (min-width: 768px) 50vw, 100vw" quality={85} className="object-contain" />
                  </div>
                </a>
                <figcaption className="mt-3 font-serif text-base leading-relaxed text-[var(--wabi-text-muted)]">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <div className="mt-16 flex flex-wrap gap-4 border-t border-[var(--wabi-border)] pt-8">
        <Link href="/#works" className="button-secondary">← More selected work</Link>
        <Link href="/#contact" className="button-primary">Talk about a project →</Link>
      </div>
    </main>
  );
}
