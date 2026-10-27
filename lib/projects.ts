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
  timeline: string;
  status: string;
  statusNote: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  sections: ProjectSection[];
  tech: string[];
  liveDemo: string | null;
  github: string | null;
  images: { src: string; alt: string }[];
}

export const projects: ProjectStudy[] = [
  {
    "id": "01",
    "slug": "heartopia-draft",
    "title": "Heartopia Draft",
    "category": "Interactive planning",
    "year": "2026",
    "role": "Product Engineer & Full-Stack Developer",
    "timeline": "2026 – Present",
    "status": "In development",
    "statusNote": "Source code is private. This case study presents the editor, its domain rules, and the persistence workflow.",
    "description": "Plan Heartopia layouts before building in-game. A browser-based editor with three grid precision levels, furniture placement, and project autosave.",
    "challenge": "Room proportions, openings, and furniture spacing are difficult to judge while building in-game. I wanted a separate workspace where players could explore a layout before committing resources.",
    "solution": "I built a canvas editor using Next.js and React, separating structural, opening, and furniture placement rules. MongoDB stores signed-in projects, while demo mode lets players explore the editor without saving an account-bound project.",
    "results": [
      "A three-tier grid: 1.0 m for structures, 0.5 m for openings, and 0.25 m for furniture.",
      "Tools for walls, floors, doors, windows, fences, crops, and furniture.",
      "Multi-select and grouped furniture movement.",
      "Authenticated project persistence, autosave, and payload validation."
    ],
    "sections": [
      {
        "title": "Why three grids?",
        "content": "A single coarse grid makes furniture placement restrictive; a uniformly fine grid makes structural alignment harder to enforce. Separate precision levels let each tool use the rules appropriate to its objects. The editor combines shared-edge wall logic, opening placement, and safety-margin checks so changes stay consistent across tools."
      },
      {
        "title": "Persistence and recovery",
        "content": "Autosave needs to distinguish a project that is loading from one the user has changed. The implementation includes hydration-aware saving, centralized project payload validation, protected routes, and rate limiting for sensitive writes. Demo editing stays separate from authenticated persistence."
      },
      {
        "title": "Checking the editor rules",
        "content": "The project uses Jest and Testing Library for autosave behavior, wall logic, and interaction edge cases. Dependency-cycle checks and database index setup support the application around the editor. The lesson has been to make the domain rules explicit before adding more interaction modes."
      }
    ],
    "tech": [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
      "Testing Library"
    ],
    "liveDemo": null,
    "github": null,
    "images": [
      {
        "src": "/projects/heartopia-draft/heartopia-draft-05.png",
        "alt": "Heartopia editor with a furniture picker, metric grid, and a room layout."
      },
      {
        "src": "/projects/heartopia-draft/heartopia-draft-04.png",
        "alt": "Canvas workspace with structural tools and floor settings alongside the planning grid."
      },
      {
        "src": "/projects/heartopia-draft/heartopia-draft-01.png",
        "alt": "Heartopia introduction with entry points for demo editing and account creation."
      }
    ]
  },
  {
    "id": "02",
    "slug": "stillness-ecommerce",
    "title": "Stillness E-commerce",
    "category": "E-commerce interface",
    "year": "2024",
    "role": "Full-Stack Developer",
    "timeline": "2024",
    "status": "Demonstration project",
    "statusNote": "A portfolio demonstration of an e-commerce application. The linked source currently uses Vue and Vite.",
    "description": "An e-commerce application with a quiet visual identity, product browsing, collection pages, and filtering. Built with Vue, TypeScript, and Pinia.",
    "challenge": "Create a consistent shopping interface across product discovery, collection pages, and supporting content while iterating quickly on the visual design.",
    "solution": "I used Vue components and TypeScript, Vue Router for page navigation, and Pinia for shared state. Vite provides the build tooling, with Tailwind CSS and Vuetify supporting the interface.",
    "results": [
      "A product catalogue with category and price filters.",
      "Collection pages and product cards that share a consistent visual style.",
      "Vue components, routed pages, and shared application state.",
      "A deployed demonstration with publicly available source code."
    ],
    "sections": [
      {
        "title": "Structure around the shopping flow",
        "content": "The interface separates product discovery, collections, and supporting content into routed pages. Reusable components keep the presentation consistent as visitors move between them, while Pinia provides a shared place for application state."
      },
      {
        "title": "AI-assisted iteration",
        "content": "I used AI-assisted workflows for component scaffolding and layout iteration. This project helped me explore how to shorten repetitive implementation work while keeping the architecture and interface decisions deliberate."
      },
      {
        "title": "Scope and lessons",
        "content": "The demo and screenshots show the interface and browsing experience. They are not evidence of production payment processing, order fulfilment, or real customer usage. The useful takeaway is the importance of defining the finished scope clearly and checking the result beyond how quickly an interface can be assembled."
      }
    ],
    "tech": [
      "Vue",
      "TypeScript",
      "Pinia",
      "Vite",
      "Vue Router",
      "Tailwind CSS",
      "Vuetify"
    ],
    "liveDemo": "https://stillness-ecommerce.vercel.app/",
    "github": "https://github.com/Jlscsr/stillness-ecommerce",
    "images": [
      {
        "src": "/projects/stillness/stllness_img_6.png",
        "alt": "Stillness product catalogue with category navigation, price filtering, and product cards."
      },
      {
        "src": "/projects/stillness/stllness_img_1.png",
        "alt": "Stillness landing page introducing the collection through a calm, minimal visual style."
      },
      {
        "src": "/projects/stillness/stllness_img_2.png",
        "alt": "Stillness collection page featuring a tea ceremony product range."
      }
    ]
  },
  {
    "id": "03",
    "slug": "whats-your-ulam",
    "title": "What's Your Ulam?",
    "category": "Recipe-sharing platform",
    "year": "2020",
    "role": "Full-Stack Developer",
    "timeline": "2020",
    "status": "Archived project",
    "statusNote": "An early full-stack project documented through screenshots. A public repository and live demo are not currently available.",
    "description": "A recipe-sharing platform connecting a Vue interface to a Node.js API, with user profiles, recipe posts, comments, and image uploads.",
    "challenge": "Build a complete social application that connects authentication, content, and media rather than treating each screen as an isolated exercise.",
    "solution": "I built the interface with Vue and Quasar, backed by Node.js, Express, and MySQL. JWT-based authentication and REST endpoints connected user accounts to recipes, profiles, and social interactions.",
    "results": [
      "Recipe posts, comments, likes, bookmarks, and user profiles.",
      "A REST API and database structure for social interactions.",
      "JWT-based authentication and media upload handling.",
      "Reusable interface components for posts and comments."
    ],
    "sections": [
      {
        "title": "Connecting the frontend and API",
        "content": "Vue and Quasar provide the interface for authentication, content feeds, and recipes. Express routes and authentication middleware handle requests on the backend. Building both sides made the boundaries between frontend state, API responses, and stored data much clearer."
      },
      {
        "title": "Working with content and media",
        "content": "Recipe posts combine structured text, user identity, and uploaded images. The project included upload handling and image compression alongside the post and comment flows. That work introduced the practical coordination needed between a form, an API, and file storage."
      },
      {
        "title": "What I took forward",
        "content": "This project established my full-stack foundation. The main lesson was that API design, data structure, and frontend feedback affect one another. I now bring that perspective to more interactive products, including Heartopia Draft."
      }
    ],
    "tech": [
      "Vue",
      "Node.js",
      "Express",
      "MySQL",
      "Quasar",
      "JWT",
      "AWS S3"
    ],
    "liveDemo": null,
    "github": null,
    "images": [
      {
        "src": "/projects/wyu/wyu_img_5.jpg",
        "alt": "What's Your Ulam home feed featuring a recipe and recent community posts."
      },
      {
        "src": "/projects/wyu/wyu_img_2.jpg",
        "alt": "Recipe detail page showing Beef Kaldereta, its description, and ingredients."
      },
      {
        "src": "/projects/wyu/wyu_img_4.jpg",
        "alt": "User profile with a recipe collection and a grid of food photographs."
      }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
