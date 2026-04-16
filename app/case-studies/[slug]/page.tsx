import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GrainOverlay from "@/components/grain-overlay";
import { CaseStudyClient } from "@/app/case-studies/[slug]/case-study-client";
import { projects, projectsBySlug } from "@/lib/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all case studies.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = projectsBySlug[slug];

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} - Case Study`,
    description: study.concept,
    openGraph: {
      title: `${study.title} - Case Study | Julius Raagas`,
      description: study.concept,
      url: `https://julius-raagas.vercel.app/case-studies/${slug}`,
      type: "article",
      images: study.coverImage ? [{ url: study.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} - Case Study`,
      description: study.concept,
      images: study.coverImage ? [study.coverImage] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = projectsBySlug[slug];
  if (!study) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.concept,
    author: {
      "@type": "Person",
      name: "Julius Caesar Raagas",
      url: "https://julius-raagas.vercel.app",
    },
    datePublished: study.publishedDate,
    publisher: {
      "@type": "Person",
      name: "Julius Caesar Raagas",
    },
  };
  const structuredDataJson = JSON.stringify(structuredData).replace(
    /</g,
    "\\u003c",
  );

  return (
    <main className="min-h-screen bg-[var(--wabi-bg)] text-[var(--wabi-text)] selection:bg-[var(--wabi-blue)]/20">
      <GrainOverlay />

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-[var(--wabi-bg)]/90 px-6 py-6 backdrop-blur-sm md:px-8">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-widest text-[var(--wabi-text)] transition-colors hover:text-[var(--wabi-blue)] md:text-xs"
        >
          &larr; Back to Portfolio
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />

      <section className="px-6 pb-20 pt-24 sm:pt-32 md:px-16 md:pt-40 lg:px-24">
        <div className="max-w-5xl">
          <CaseStudyClient study={study} />

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div>
                <h2 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                  The Concept
                </h2>
                <p className="font-serif text-2xl leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.concept}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                  The Challenge
                </h2>
                <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.challenge}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                  The Solution
                </h2>
                <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.solution}
                </p>
              </div>

              {study.results.length > 0 && (
                <div className="mt-12 border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] p-8">
                  <h2 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-blue)]">
                    Impact & Results
                  </h2>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-serif text-base text-[var(--wabi-text-secondary)]"
                      >
                        <span className="mt-1 text-[var(--wabi-blue)]">&bull;</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-16 space-y-16">
                {study.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="mb-4 font-serif text-3xl font-light text-[var(--wabi-text)]">
                      {section.title}
                    </h3>
                    <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {study.images.length > 0 && (
                <div className="mt-20">
                  <h2 className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {study.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video overflow-hidden border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]"
                      >
                        <Image
                          src={image}
                          alt={`${study.title} screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          priority={idx === 0}
                          quality={85}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(study.liveDemo || study.github || study.githubBackend) && (
                <div className="mt-16 flex flex-wrap gap-4">
                  {study.liveDemo && (
                    <a
                      href={study.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[var(--wabi-blue)] px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-all duration-500 hover:bg-[var(--wabi-blue-hover)]"
                    >
                      View Live Demo -&gt;
                    </a>
                  )}
                  {study.github && (
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-[var(--wabi-blue)] px-8 py-4 font-mono text-xs uppercase tracking-widest text-[var(--wabi-blue)] transition-all duration-500 hover:bg-[var(--wabi-blue)] hover:text-white"
                    >
                      View on GitHub -&gt;
                    </a>
                  )}
                  {study.githubBackend && (
                    <a
                      href={study.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-[var(--wabi-blue)] px-8 py-4 font-mono text-xs uppercase tracking-widest text-[var(--wabi-blue)] transition-all duration-500 hover:bg-[var(--wabi-blue)] hover:text-white"
                    >
                      View on GitHub (Backend) -&gt;
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-12 md:col-span-4">
              <div>
                <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                  Role
                </h2>
                <p className="font-serif text-lg text-[var(--wabi-text)]">
                  {study.role}
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)]">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)] px-3 py-1 font-mono text-[10px] tracking-wide text-[var(--wabi-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--wabi-border)] bg-[var(--wabi-bg)] px-8 py-20 text-center">
        <Link
          href="/"
          className="font-serif text-xl italic text-[var(--wabi-text)] transition-colors hover:text-[var(--wabi-blue)]"
        >
          Next: Back to Home
        </Link>
      </footer>
    </main>
  );
}
