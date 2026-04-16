"use client";

import { useRef } from "react";
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

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-x-hidden overflow-y-auto"
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

      <footer className="bg-[var(--wabi-bg)] px-8 py-16 md:px-16 lg:px-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--wabi-text-muted)]">
            Copyright 2026 Julius Raagas - Crafting with intention
          </p>
          <p className="font-mono text-xs text-[var(--wabi-text-muted)]">
            Wabi-Sabi
          </p>
        </div>
      </footer>
    </div>
  );
}
