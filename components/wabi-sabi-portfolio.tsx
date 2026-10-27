import HeroSection from "./sections/hero-section";
import ExpertiseSection from "./sections/expertise-section";
import WorksSection from "./sections/works-section";
import ExperienceSection from "./sections/experience-section";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";

export default function WabiSabiPortfolio() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <WorksSection />
      <ExperienceSection />
      <ExpertiseSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
