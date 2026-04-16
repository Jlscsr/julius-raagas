import WabiSabiPortfolio from "@/components/wabi-sabi-portfolio";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julius Caesar Raagas",
    url: "https://julius-raagas.vercel.app",
    jobTitle: "Full-Stack Developer & AI-Native Engineer",
    description:
      "Full-stack developer focused on AI-assisted product engineering, interactive planning tools, and modern web applications.",
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
      "AI-Assisted Development",
      "System Design",
      "Interactive Product Engineering",
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
    ],
  };
  const structuredDataJson = JSON.stringify(structuredData).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <WabiSabiPortfolio />
    </>
  );
}
