import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-36 md:px-12 md:pb-24 md:pt-44 lg:min-h-[min(850px,100svh)] lg:grid-cols-[1.4fr_1fr]">
      <div className="min-w-0">
        <p className="eyebrow">Full-stack developer · Philippines</p>
        <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[var(--wabi-text)] sm:text-6xl lg:text-7xl">
          Julius Raagas
          <span className="mt-4 block text-[var(--wabi-blue)]">Useful products.<br />Thoughtful engineering.</span>
        </h1>
        <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-[var(--wabi-text-secondary)]">
          I’m Julius, a full-stack developer based in the Philippines. I enjoy
          solving problems, learning new things, and building software that’s
          simple and easy to use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#works" className="button-primary">View selected work <span aria-hidden="true">↘</span></Link>
          <a href="/raagas-julius-caesar-resume.pdf" className="button-secondary">View resume <span className="font-mono text-xs">(PDF)</span></a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--wabi-text-muted)]">
          <a className="inline-flex min-h-11 items-center underline decoration-[var(--wabi-border)] underline-offset-4 hover:text-[var(--wabi-blue)]" href="https://github.com/Jlscsr" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <Link className="inline-flex min-h-11 items-center underline decoration-[var(--wabi-border)] underline-offset-4 hover:text-[var(--wabi-blue)]" href="#contact">Get in touch</Link>
        </div>
      </div>
      <div aria-hidden="true" className="hidden lg:block">
        <svg viewBox="0 0 420 440" fill="none" className="mx-auto w-full max-w-md">
          <ellipse cx="213" cy="404" rx="118" ry="10" fill="var(--wabi-text)" opacity=".06" />
          <path d="M110 65 237 35 343 105 388 231 332 341 205 377 84 313 36 181Z" fill="#96b6c9" />
          <path d="M110 65 237 35 199 153 36 181Z" fill="#bdd3df" />
          <path d="M237 35 343 105 199 153Z" fill="#a8c5d6" />
          <path d="M343 105 388 231 281 235 199 153Z" fill="#89adc4" />
          <path d="M36 181 199 153 131 266 84 313Z" fill="#759cb5" />
          <path d="M199 153 281 235 131 266Z" fill="#a2bfce" />
          <path d="M388 231 332 341 281 235Z" fill="#6c91a9" />
          <path d="M131 266 281 235 205 377 84 313Z" fill="#527b98" />
          <path d="M281 235 332 341 205 377Z" fill="#83a6bc" />
        </svg>
        <p className="mt-4 text-center font-mono text-xs tracking-[0.2em] text-[var(--wabi-text-muted)]">Simplicity. Structure. Intention.</p>
      </div>
    </section>
  );
}
