"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./sections/hero-section";
import ExpertiseSection from "./sections/expertise-section";
import WorksSection from "./sections/works-section";
import ExperienceSection from "./sections/experience-section";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import Navigation from "./navigation";
import GrainOverlay from "./grain-overlay";

export default function WabiSabiPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);

  useEffect(() => {
    // Add JSON-LD structured data for the homepage
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Julius Caesar Raagas",
      url: "https://julius-raagas.vercel.app",
      jobTitle: "AI Developer & Full-Stack Engineer",
      description:
        "Aspiring AI Developer specializing in machine learning, computer vision, and full-stack web development",
      email: "raagasjuliuscaesar@gmail.com",
      telephone: "+63-977-087-8614",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Philippines",
      },
      sameAs: [
        "https://github.com/Jlscsr",
        "https://www.linkedin.com/in/julius-caesar-raagas-93b794276/",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Informatics College Northgate",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Full-Stack Development",
        "React",
        "TypeScript",
        "Python",
        "TensorFlow",
        "PyTorch",
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden"
    >
      <GrainOverlay />
      <Navigation />

      <main>
        <HeroSection scrollOpacity={opacity} />
        <ExpertiseSection />
        <WorksSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="py-16 px-8 md:px-16 lg:px-24 bg-[var(--wabi-bg)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="font-mono text-xs tracking-widest text-[var(--wabi-text-muted)] uppercase">
            © 2026 Julius Raagas — Crafting with intention
          </p>
          <p className="font-mono text-xs text-[var(--wabi-text-muted)]">
            侘寂
          </p>
        </div>
      </footer>
    </div>
  );
}
