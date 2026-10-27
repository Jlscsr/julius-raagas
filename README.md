# Julius Raagas — Portfolio

A portfolio of interactive tools and full-stack web applications, with project
screenshots, engineering decisions, professional experience, and contact details.

Live site: https://julius-raagas.vercel.app

## Development

Use Node.js 22.18 or newer and npm. The npm lockfile is the source of truth.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run check
npm run build
npm start
```

`check` runs ESLint, TypeScript, and Node's built-in test runner. TypeScript errors
also fail production builds. Tests cover project lookup edge cases and public
asset integrity.

ESLint stays on version 9 until the Next.js lint plugins support version 10 in
their peer dependency ranges. npm currently prints a deprecation notice for it.

## Structure

- `app/`: routes, metadata, global styles, and the shared layout
- `components/sections/`: server-rendered portfolio sections
- `components/navigation.tsx`: navigation using the accessible Radix sheet
- `components/theme-provider.tsx`: next-themes provider
- `lib/projects.ts`: the project content used by cards, case studies, and sitemap
- `public/projects/`: project screenshots
- `tests/`: regression and content-integrity checks

## Content

- **Heartopia Draft:** interactive planning tool; source is private.
- **Stillness:** e-commerce demonstration built with Vue and Vite.
- **What's Your Ulam?:** archived recipe-sharing project, presented through screenshots.

Update project descriptions, links, status, and image captions in
`lib/projects.ts`. Add a metric only when there is a reproducible measurement
and enough context to explain it. Do not imply a demonstration processes real
payments or serves real customers.

The About page describes Computer Science coursework at Cavite State University;
it does not claim a completed degree.

The resume PDF is maintained separately at
`public/raagas-julius-caesar-resume.pdf`.

## Design and implementation

Warm neutral colors, blue accents, serif typography, and a static stone
illustration preserve the Wabi-Sabi influence. Content is visible without
animation or WebGL. CSS respects reduced-motion preferences, and both color
themes use shared contrast tokens.

The site uses Next.js, React, TypeScript, Tailwind CSS, Radix Dialog,
next-themes, and Vercel Analytics / Speed Insights. No database or credentials
are needed to run the portfolio.

## Deployment

Run the checks and production build before deployment. All canonical URLs,
structured data, and the sitemap use `https://julius-raagas.vercel.app`.
Set a new domain consistently before switching production hosting.

Screenshot URLs use the platform's default cache policy so replacing a file does
not leave clients with a year-long immutable cache.

## Contact

- GitHub: https://github.com/Jlscsr
- LinkedIn: https://www.linkedin.com/in/julius-caesar-raagas-93b794276/
- Email: raagasjuliuscaesar@gmail.com
