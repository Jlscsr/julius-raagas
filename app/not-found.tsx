import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto min-h-[80svh] max-w-5xl px-6 pb-20 pt-36 md:px-12 md:pt-44">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">This page isn’t here.</h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed text-[var(--wabi-text-secondary)]">
        The link may be outdated. You can find my projects and contact details on the homepage.
      </p>
      <Link href="/#works" className="button-primary mt-8">Explore selected work →</Link>
    </main>
  );
}
