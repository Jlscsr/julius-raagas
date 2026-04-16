export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  subtitle: string;
  timeline: string;
  publishedDate: string;
  description: string;
  concept: string;
  challenge: string;
  solution: string;
  results: string[];
  sections: ProjectSection[];
  tech: string[];
  liveDemo: string | null;
  github: string | null;
  githubBackend: string | null;
  coverImage: string | null;
  images: string[];
}

export const projects: ProjectStudy[] = [
  {
    id: "01",
    slug: "heartopia-draft",
    title: "Heartopia Draft",
    category: "Interactive Systems Design (2026)",
    year: "2026",
    role: "Product Engineer & Full-Stack Developer",
    subtitle: "Metric-First Spatial Planning Tool",
    timeline: "2026 - Present",
    publishedDate: "2026-01-01",
    description:
      "A canvas-based planning tool for Heartopia players with multi-grid snapping, reliable wall and opening logic, furniture placement, demo mode, and authenticated project autosave.",
    concept:
      "A fan-made planning tool for Heartopia players that helps validate room scale, openings, and object spacing before spending in-game resources.",
    challenge:
      "Heartopia building rewards creativity, but layout trial-and-error can be expensive and hard to reason about while you are placing structures live. The challenge was to turn that planning problem into a tool with predictable metric rules, clean editing workflows, and enough persistence to support real iteration instead of one-off experiments.",
    solution:
      "I built Heartopia Draft as a metric-first editor on top of Next.js and React, using a three-level grid model for deterministic placement, a canvas workflow for direct manipulation, and authenticated project persistence with autosave, validation, and route protection. The result is a planning workspace that feels practical for real build decisions rather than a static mockup.",
    results: [
      "Implemented a three-tier grid model with 1.0 m, 0.5 m, and 0.25 m precision levels.",
      "Shipped editing tools for walls, floors, doors, windows, fences, crop tiles, and furniture.",
      "Added signed-in project persistence with autosave, payload validation, and protected routes.",
      "Delivered responsive editor behavior across mobile, tablet, and desktop form factors.",
      "Released marquee multi-select and grouped furniture movement in the current editor workflow.",
      "Backed the core editor with Jest tests covering autosave, wall logic, and interaction edge cases.",
    ],
    sections: [
      {
        title: "The Planning Problem",
        content:
          "The product started from a simple friction point: in-game trial-and-error wastes time and resources. Room proportions are difficult to judge in the middle of building, openings are easy to misalign, and late changes become expensive once furniture is already placed. Heartopia Draft exists to move that uncertainty earlier into a controlled planning phase.",
      },
      {
        title: "Deterministic Grid Model",
        content:
          "The core of the app is a metric-first grid system with three levels of precision. Structural elements live on a 1.0 meter tile grid, openings snap at 0.5 meter placement units, and furniture can be positioned on a 0.25 meter fine grid. That separation lets the editor stay predictable while still supporting detailed layout work.",
      },
      {
        title: "Editing Workflows",
        content:
          "The editor supports pan, zoom, touch gestures, shared-edge wall logic, opening chains, safety-margin validation, eight-direction furniture rotation, single-object drag, and marquee-based group movement. The point was not just feature breadth, but making sure each interaction behaves consistently enough that users can trust the tool while iterating quickly.",
      },
      {
        title: "Persistence and Guardrails",
        content:
          "Signed-in users can save projects automatically while demo users can test the full editing workflow without committing data. Under the hood, I added route protection, centralized project payload validation, rate limiting for sensitive writes, hydration-aware autosave behavior, and MongoDB persistence so the planner is stable enough for repeat use.",
      },
      {
        title: "Shipping Quality",
        content:
          "I treated this like a real product, not just a prototype. The repo includes Jest and Testing Library coverage, dependency-cycle checks, explicit MongoDB index bootstrapping, and release notes for shipped UX and interaction improvements. That discipline mattered because spatial editors become fragile quickly when the rules are not enforced at both the UI and domain layers.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project pushed me further into product thinking and systems design. Spatial tooling is mostly about reliability: users need the editor to behave the same way every time, especially when multiple grid levels and interaction modes overlap. Building Heartopia Draft reinforced how important domain rules, UI clarity, and persistence safeguards are when turning a clever tool into something people can actually depend on.",
      },
    ],
    tech: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Jest",
      "Testing Library",
    ],
    liveDemo: null,
    github: "https://github.com/Jlscsr/heartopia-house-layout-visualizer",
    githubBackend: null,
    coverImage: "/projects/heartopia-draft/heartopia-draft-07.png",
    images: [
      "/projects/heartopia-draft/heartopia-draft-01.png",
      "/projects/heartopia-draft/heartopia-draft-02.png",
      "/projects/heartopia-draft/heartopia-draft-03.png",
      "/projects/heartopia-draft/heartopia-draft-04.png",
      "/projects/heartopia-draft/heartopia-draft-05.png",
      "/projects/heartopia-draft/heartopia-draft-06.png",
      "/projects/heartopia-draft/heartopia-draft-07.png",
    ],
  },
  {
    id: "02",
    slug: "stillness-ecommerce",
    title: "Stillness E-commerce",
    category: "AI-Native High-Velocity (2024)",
    year: "2024",
    role: "AI-Native Full-Stack Developer",
    subtitle: "AI-Native High-Velocity Development",
    timeline: "2024",
    publishedDate: "2024-01-01",
    description:
      "A minimalist e-commerce platform engineered and shipped in 72 hours to demonstrate AI-assisted delivery speed without sacrificing UX or maintainability.",
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
          "Traditional e-commerce development involves significant time investment in boilerplate code, component setup, and styling. The goal was to demonstrate how AI-augmented workflows could dramatically accelerate development while maintaining professional standards. This was not about cutting corners. It was about using AI well enough to remove friction from the build process.",
      },
      {
        title: "AI-Native Workflow",
        content:
          "I engineered and deployed the platform in a 72-hour window by using AI for component scaffolding, repetitive logic, and layout acceleration while keeping architecture and business logic decisions intentional. The workflow was iterative: generate, evaluate, refine, and keep only what met the quality bar.",
      },
      {
        title: "Technical Architecture",
        content:
          "The application uses Vue.js and Nuxt.js for frontend structure and performance, Pinia for state management, and a design system built with SCSS and Tailwind CSS. The architecture was organized around fast assembly without turning into an unmaintainable mess once the deadline pressure hit.",
      },
      {
        title: "Development Efficiency",
        content:
          "AI-assisted workflows handled a large share of the repetitive build surface: component boilerplate, state modules, validation scaffolding, and responsive patterns. That compressed the time spent on setup and made more room for performance tuning, user flow decisions, and production cleanup.",
      },
      {
        title: "Key Features",
        content:
          "Product catalog with advanced filtering, shopping cart updates, secure checkout flow, user authentication, order history, admin tooling, inventory workflows, payment integration, and mobile-first responsiveness.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project validated that AI can accelerate implementation aggressively when paired with strong review and architectural judgment. The biggest lesson was that speed is only useful if the resulting system is still understandable, testable, and worth maintaining after launch.",
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
    coverImage: "/projects/stillness/stllness_img_1.png",
    images: [
      "/projects/stillness/stllness_img_1.png",
      "/projects/stillness/stllness_img_2.png",
      "/projects/stillness/stllness_img_3.png",
      "/projects/stillness/stllness_img_4.png",
      "/projects/stillness/stllness_img_5.png",
      "/projects/stillness/stllness_img_6.png",
    ],
  },
  {
    id: "03",
    slug: "whats-your-ulam",
    title: "What's Your Ulam?",
    category: "Core Full-Stack Foundation (2020)",
    year: "2020",
    role: "Full-Stack Developer",
    subtitle: "Core Full-Stack Foundation",
    timeline: "2020",
    publishedDate: "2020-01-01",
    description:
      "A community-driven recipe and social platform that established my backend, API, and full-stack fundamentals early in my development journey.",
    concept:
      "A demonstration project showcasing my early full-stack development skills by building a complete social platform from authentication to deployment.",
    challenge:
      "As my first major full-stack project, the challenge was to build a complete social application from scratch. That included backend architecture, frontend UX, secure authentication, media uploads, and a production deployment path.",
    solution:
      "Built a full-stack social media platform using Vue.js and Node.js, with JWT-based authentication, a RESTful API architecture, media upload handling, and a responsive frontend. It proved that I could connect frontend and backend concerns into one coherent product.",
    results: [
      "Successfully built and deployed a complete full-stack application",
      "Implemented secure JWT authentication",
      "Designed RESTful API with 6+ endpoints for social interactions",
      "Built responsive frontend using Vue.js and Quasar Framework",
      "Implemented media upload system with image compression",
      "Created reusable components for posts, comments, and interactions",
    ],
    sections: [
      {
        title: "The Challenge",
        content:
          "Creating a social platform from scratch requires careful consideration of architecture, security, and scalability. The platform needed to support user accounts, media uploads, content interactions, and a mobile-friendly experience. As an early project, it was also a practical test of whether I could own both sides of the stack at once.",
      },
      {
        title: "Full-Stack Engineering",
        content:
          "I built a social ecosystem with JWT-based authentication, CRUD flows for recipes and posts, bookmarking, user profiles, follower relationships, and interaction features. The project forced me to think beyond isolated pages and design how the entire system should fit together.",
      },
      {
        title: "Backend Architecture",
        content:
          "The backend was built with Node.js and Express.js around a modular route structure, authentication middleware, validation, and database design tuned for social interactions. It was my first serious pass at turning backend ideas into something structured and reusable.",
      },
      {
        title: "Frontend and API Integration",
        content:
          "On the frontend, I used Vue.js and Quasar Framework to deliver a responsive UI and handle state around authentication, content feeds, and media. A lot of the work was about the handshake between frontend and backend: getting data flow, upload handling, and user feedback loops right.",
      },
      {
        title: "Key Features",
        content:
          "User authentication and profiles, recipe posting with images, comments and replies, likes, bookmarks, following, discovery, categories and tags, responsive layouts, image upload, and notification-ready interaction patterns.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project gave me my first real full-stack foundation. I learned how API design, database structure, frontend state, and deployment decisions all affect each other. More importantly, it showed me I could take a product from idea to working system without staying confined to one layer of the stack.",
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
    coverImage: "/projects/wyu/wyu_img_1.jpg",
    images: [
      "/projects/wyu/wyu_img_1.jpg",
      "/projects/wyu/wyu_img_2.jpg",
      "/projects/wyu/wyu_img_3.jpg",
      "/projects/wyu/wyu_img_4.jpg",
      "/projects/wyu/wyu_img_5.jpg",
      "/projects/wyu/wyu_img_6.jpg",
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, ProjectStudy>;
