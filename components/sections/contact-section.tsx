export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]/50">
      <div className="section-shell">
        <p className="eyebrow">Let’s connect</p>
        <h2 id="contact-heading" className="section-heading">Have a role or a project in mind?</h2>
        <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-[var(--wabi-text-secondary)]">
          Open to full-stack development opportunities and selected freelance
          projects. Tell me about the team or product you’re building.
        </p>
        <a href="mailto:raagasjuliuscaesar@gmail.com" className="mt-8 inline-flex min-h-11 items-center break-all font-serif text-xl text-[var(--wabi-blue)] underline underline-offset-8 sm:text-3xl">
          raagasjuliuscaesar@gmail.com
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs">
          <a href="https://github.com/Jlscsr" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/julius-caesar-raagas-93b794276/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">LinkedIn ↗</a>
          <a href="/raagas-julius-caesar-resume.pdf" download className="inline-flex min-h-11 items-center underline underline-offset-4">Download resume (PDF)</a>
          <a href="tel:+639770878614" className="inline-flex min-h-11 items-center underline underline-offset-4">+63 977 087 8614</a>
        </div>
      </div>
    </section>
  );
}
