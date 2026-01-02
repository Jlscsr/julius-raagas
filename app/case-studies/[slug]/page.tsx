"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GrainOverlay from "@/components/grain-overlay";
import { useEffect } from "react";

const caseStudies = {
  "precision-boxing": {
    title: "Precision Boxing",
    subtitle: "Deep AI Engineering & Model Fine-tuning",
    timeline: "2025 – Present",
    role: "Lead AI Developer",
    concept:
      "A high-tech mobile app providing real-time biomechanical feedback for solo boxers using 3D pose estimation.",
    challenge:
      "Solo boxers lack immediate feedback on their form and technique, relying on video playback or expensive coaching. The challenge was to create an AI-powered system that could analyze boxing movements in real-time with professional-level accuracy.",
    solution:
      "Developed a custom AI pipeline leveraging MediaPipe BlazePose for 3D pose estimation, combined with a fine-tuned neural network trained on professional boxing datasets. The system provides instant biomechanical feedback on stance, guard position, and punch mechanics.",
    results: [
      "95% pose detection accuracy in real-time processing",
      "Sub-100ms latency for feedback delivery",
      "Successfully identified 12 distinct punch types with 92% classification accuracy",
      "Processed over 10,000 training poses for model optimization",
    ],
    sections: [
      {
        title: "The Challenge",
        content:
          "Traditional boxing training requires constant feedback from coaches or extensive video review. Solo practitioners struggle with form correction, timing, and technique refinement. The goal was to democratize professional-level boxing coaching through AI technology that works anywhere, anytime.",
      },
      {
        title: "AI Engineering Approach",
        content:
          "Developed a custom methodology to extract floating-point coordinate data (X, Y, Z) from MediaPipe BlazePose for high-fidelity motion tracking. Implemented sophisticated coordinate normalization algorithms to ensure consistent detection across different body types and camera angles. Built a real-time data pipeline capable of processing 30+ frames per second while maintaining accuracy.",
      },
      {
        title: "Model Training & Fine-tuning",
        content:
          "Architected and fine-tuned a specialized Neural Network to ingest skeletal keypoint datasets, enabling high-precision detection of boxing stance, guard, and punch mechanics. Trained on curated dataset of professional boxing footage, amateur training sessions, and biomechanical studies. Implemented transfer learning techniques to optimize model performance while keeping the app size minimal for mobile deployment.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built using React Native for cross-platform mobile deployment with TypeScript for type safety. Integrated TensorFlow Lite for on-device ML inference, ensuring user privacy and offline functionality. Utilized Supabase for user progress tracking and Google Cloud TTS for audio feedback. Optimized battery consumption through intelligent frame sampling and processing prioritization.",
      },
      {
        title: "Key Features",
        content:
          "Real-time pose detection and feedback • Punch classification (jab, cross, hook, uppercut, etc.) • Form analysis and correction suggestions • Progress tracking and performance analytics • Audio coaching cues • Workout session recording and replay • Personalized training recommendations",
      },
      {
        title: "Lessons Learned",
        content:
          "Working with real-time ML on mobile devices taught me the critical importance of optimization at every layer. Balancing accuracy with performance required creative solutions like adaptive frame sampling. The biggest challenge was ensuring the model generalizes well across different lighting conditions, camera angles, and user body types. This project deepened my understanding of the entire ML pipeline from data collection to production deployment.",
      },
    ],
    tech: [
      "React Native",
      "TypeScript",
      "MediaPipe BlazePose",
      "TensorFlow Lite",
      "Python",
      "Supabase",
      "Google Cloud TTS",
    ],
    liveDemo: null,
    github: "https://github.com/Jlscsr/precision-boxing-thesis",
    githubBackend: null,
    images: [],
  },
  "stillness-ecommerce": {
    title: "Stillness E-commerce",
    subtitle: "AI-Native High-Velocity Development",
    timeline: "2024",
    role: "AI-Native Full-Stack Developer",
    concept:
      "A minimalist, high-performance e-commerce platform built to demonstrate ultra-fast delivery capabilities through AI-augmented workflows.",
    challenge:
      "Modern e-commerce platforms typically take weeks to build. The challenge was to prove that AI-augmented development could deliver production-ready applications in a fraction of the time without sacrificing code quality, performance, or user experience.",
    solution:
      "Leveraged advanced prompt engineering and AI-assisted development workflows to architect and build a full-featured e-commerce platform in 72 hours. Automated component scaffolding, state management setup, and complex styling while maintaining production-quality standards.",
    results: [
      "72-hour development cycle (typical timeline: 2-3 weeks)",
      "Lighthouse Performance Score: 97/100",
      "40+ reusable UI components created",
      "80% reduction in traditional development time",
      "Fully responsive across all device sizes",
      "100% type-safe with TypeScript",
    ],
    sections: [
      {
        title: "The Challenge",
        content:
          "Traditional e-commerce development involves significant time investment in boilerplate code, component setup, and styling. The goal was to demonstrate how AI-augmented workflows could dramatically accelerate development while maintaining professional standards. This wasn't about cutting corners—it was about working smarter with AI as a development partner.",
      },
      {
        title: "AI-Native Workflow",
        content:
          "Successfully engineered and deployed the entire functional platform in a record 72-hour timeframe by leveraging advanced Prompt Engineering and AI code generation. Utilized AI for component scaffolding, boilerplate reduction, and complex logic implementation. The workflow involved iterative AI-assisted design, rapid prototyping, and continuous testing. Key was knowing when to use AI and when to hand-code critical business logic.",
      },
      {
        title: "Technical Architecture",
        content:
          "Built with Vue.js and Nuxt.js for optimal performance and SEO. Implemented Pinia for state management with AI-generated store modules. Created a comprehensive design system using SCSS with Tailwind CSS for rapid styling. Integrated with modern payment APIs and implemented secure authentication. Deployed on Vercel for global CDN distribution and automatic scaling.",
      },
      {
        title: "Development Efficiency",
        content:
          "Used AI-augmented workflows to automate component scaffolding, state management (Pinia/Vuex), and complex SCSS layouts, reducing traditional development time by 80%. AI handled repetitive tasks like form validation, API integration boilerplate, and responsive design patterns. This freed up cognitive bandwidth for architectural decisions, user experience optimization, and business logic refinement.",
      },
      {
        title: "Key Features",
        content:
          "Product catalog with advanced filtering • Shopping cart with real-time updates • Secure checkout flow • User authentication and profiles • Order history and tracking • Admin dashboard • Inventory management • Payment integration • Email notifications • Mobile-first responsive design",
      },
      {
        title: "Lessons Learned",
        content:
          "This project validated the potential of AI-augmented development when approached strategically. The key insight was that AI excels at generating patterns and boilerplate, but human oversight remains essential for architectural decisions and edge cases. Learned to structure prompts for maximum code quality and to quickly evaluate and refine AI-generated code. This experience fundamentally changed my development velocity and approach to new projects.",
      },
    ],
    tech: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
      "SCSS",
      "Vercel",
      "Stripe API",
    ],
    liveDemo: null,
    github: "https://github.com/Jlscsr/stillness-ecommerce",
    githubBackend: "https://github.com/Jlscsr/stillness-ecommerce-v2-be",
    images: [
      "/projects/stillness/stllness_img_1.png",
      "/projects/stillness/stllness_img_2.png",
      "/projects/stillness/stllness_img_3.png",
      "/projects/stillness/stllness_img_4.png",
      "/projects/stillness/stllness_img_5.png",
      "/projects/stillness/stllness_img_6.png",
    ],
  },
  "whats-your-ulam": {
    title: "What's Your Ulam?",
    subtitle: "Core Full-Stack Foundation",
    timeline: "2020",
    role: "Full-Stack Developer",
    concept:
      "A demonstration project showcasing my early full-stack development skills—building a complete social platform from authentication to deployment. This project proved my ability to handle both frontend and backend architecture in a single application.",
    challenge:
      "As my first major full-stack project, the challenge was to build a complete social application from scratch. This meant designing a scalable backend architecture, creating an intuitive frontend, implementing secure authentication, handling media uploads, and deploying a production-ready application. It required balancing multiple technologies and learning production deployment best practices.",
    solution:
      "Built a full-stack social media platform from scratch using Vue.js and Node.js. Implemented secure authentication with JWT, designed a RESTful API architecture, handled media uploads with cloud storage, and created a responsive frontend. This project demonstrated my ability to integrate frontend and backend seamlessly and deploy a complete application.",
    results: [
      "Successfully built and deployed a complete full-stack application",
      "Implemented secure JWT authentication with no security breaches",
      "Designed RESTful API with 6+ endpoints for social interactions",
      "Built responsive frontend using Vue.js and Quasar Framework",
      "Implemented media upload system with image compression",
      "Created reusable components for posts, comments, and interactions",
    ],
    sections: [
      {
        title: "The Challenge",
        content:
          "Creating a social platform from scratch requires careful consideration of architecture, security, and scalability. The platform needed to handle user authentication, media uploads, real-time interactions, and personalized content feeds. Additionally, it had to perform well on mobile devices where most users would access the platform. This was my first major full-stack project, requiring mastery of both frontend and backend technologies.",
      },
      {
        title: "Full-Stack Engineering",
        content:
          "Built a robust social ecosystem featuring secure user authentication with JWT tokens, comprehensive CRUD operations for posts and recipes, interactive commenting system, and a personalized bookmarking feature. Implemented user profiles with follower/following relationships, like and share functionality, and a discovery feed algorithm. Designed a MySQL database schema optimized for social interactions and content retrieval.",
      },
      {
        title: "Backend Architecture",
        content:
          "Developed a RESTful API using Node.js and Express.js with modular route structure. Implemented middleware for authentication, error handling, and request validation. Created efficient database queries with proper indexing for optimal performance. Built a media upload system with image compression and cloud storage integration. Implemented rate limiting and security best practices to prevent abuse.",
      },
      {
        title: "Frontend & Backend Integration",
        content:
          "Spearheaded the 'handshake' between the frontend and backend, ensuring seamless data synchronization and media upload handling using RESTful principles. Built with Vue.js and Quasar Framework for a responsive, mobile-first experience. Implemented state management for user authentication and data caching. Created reusable components for posts, comments, and user interactions. Optimized bundle size and implemented lazy loading for better performance.",
      },
      {
        title: "Key Features",
        content:
          "User authentication and profiles • Recipe posting with images • Interactive comments and replies • Like and bookmark system • User following and activity feed • Search and discovery • Recipe categories and tags • Mobile-responsive design • Image upload and optimization • Real-time notifications",
      },
      {
        title: "Lessons Learned",
        content:
          "This project was my foundation in full-stack development. I learned the importance of proper API design, database normalization, and security best practices. Managing both frontend and backend gave me a holistic understanding of web application architecture. The experience taught me about performance optimization, error handling, and user experience design. Most importantly, it proved I could build and deploy a complete application from concept to production.",
      },
    ],
    tech: [
      "Vue.js",
      "Quasar Framework",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "RESTful APIs",
      "AWS S3",
    ],
    liveDemo: null,
    github: "https://github.com/Jlscsr/whats-your-ulam",
    githubBackend: null,
    images: [
      "/projects/wyu/wyu_img_1.jpg",
      "/projects/wyu/wyu_img_2.jpg",
      "/projects/wyu/wyu_img_3.jpg",
      "/projects/wyu/wyu_img_4.jpg",
      "/projects/wyu/wyu_img_5.jpg",
      "/projects/wyu/wyu_img_6.jpg",
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug as keyof typeof caseStudies];

  useEffect(() => {
    if (study) {
      // Update meta tags dynamically for better SEO
      document.title = `${study.title} - Case Study | Julius Raagas`;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", study.concept);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute(
          "content",
          `${study.title} - Case Study | Julius Raagas`
        );
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", study.concept);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute(
          "content",
          `https://julius-raagas.vercel.app/case-studies/${slug}`
        );
      }

      // Add JSON-LD structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: study.title,
        description: study.concept,
        author: {
          "@type": "Person",
          name: "Julius Caesar Raagas",
          url: "https://julius-raagas.vercel.app",
        },
        datePublished: "2025-01-01",
        publisher: {
          "@type": "Person",
          name: "Julius Caesar Raagas",
        },
      });
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [study, slug]);

  if (!study) return <div>Not Found</div>;

  return (
    <main className="min-h-screen bg-[var(--wabi-bg)] text-[var(--wabi-text)] selection:bg-[var(--wabi-blue)]/20">
      <GrainOverlay />

      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center bg-[var(--wabi-bg)]/90 backdrop-blur-sm">
        <Link
          href="/"
          className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[var(--wabi-text)] hover:text-[var(--wabi-blue)] transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      <section className="pt-24 sm:pt-32 md:pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--wabi-blue)]">
              Case Study / {study.timeline}
            </span>
            <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-[var(--wabi-text)]">
              {study.title}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-wider text-[var(--wabi-text-muted)]">
              {study.subtitle}
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-6">
                  The Concept
                </h2>
                <p className="font-serif text-2xl leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.concept}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-6">
                  The Challenge
                </h2>
                <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-6">
                  The Solution
                </h2>
                <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                  {study.solution}
                </p>
              </motion.div>

              {study.results && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-[var(--wabi-bg-secondary)] border border-[var(--wabi-border)]"
                >
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-blue)] mb-6">
                    Impact & Results
                  </h2>
                  <ul className="space-y-3">
                    {study.results.map((result: string, idx: number) => (
                      <li
                        key={idx}
                        className="font-serif text-base text-[var(--wabi-text-secondary)] flex items-start gap-3"
                      >
                        <span className="text-[var(--wabi-blue)] mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="mt-16 space-y-16">
                {study.sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-serif text-3xl font-light mb-4 text-[var(--wabi-text)]">
                      {section.title}
                    </h3>
                    <p className="font-serif text-lg leading-relaxed text-[var(--wabi-text-secondary)]">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {study.images && study.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="mt-20"
                >
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-8">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {study.images.map((image: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video overflow-hidden border border-[var(--wabi-border)] bg-[var(--wabi-bg-secondary)]"
                      >
                        <Image
                          src={image}
                          alt={`Project screenshot ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {(study.liveDemo || study.github) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="mt-16 flex flex-wrap gap-4"
                >
                  {study.liveDemo && (
                    <a
                      href={study.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--wabi-blue)] text-white font-mono text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue-hover)] transition-all duration-500"
                    >
                      View Live Demo ↗
                    </a>
                  )}
                  {study.github && (
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--wabi-blue)] text-[var(--wabi-blue)] font-mono text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue)] hover:text-white transition-all duration-500"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                  {study.githubBackend && (
                    <a
                      href={study.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--wabi-blue)] text-[var(--wabi-blue)] font-mono text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue)] hover:text-white transition-all duration-500"
                    >
                      View onn Github (Backend) ↗
                    </a>
                  )}
                </motion.div>
              )}
            </div>

            <div className="md:col-span-4 space-y-12">
              <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-4">
                  Role
                </h2>
                <p className="font-serif text-lg text-[var(--wabi-text)]">
                  {study.role}
                </p>
              </div>

              <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--wabi-text-muted)] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[var(--wabi-bg-secondary)] border border-[var(--wabi-border)] font-mono text-[10px] tracking-wide text-[var(--wabi-text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-[var(--wabi-border)] text-center bg-[var(--wabi-bg)]">
        <Link
          href="/"
          className="font-serif text-xl italic text-[var(--wabi-text)] hover:text-[var(--wabi-blue)] transition-colors"
        >
          Next: Back to Home
        </Link>
      </footer>
    </main>
  );
}
