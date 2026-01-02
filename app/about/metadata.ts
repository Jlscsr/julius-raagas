import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Julius Raagas | AI & Full-Stack Developer",
  description:
    "Learn about Julius Caesar Raagas, an aspiring AI developer passionate about machine learning, computer vision, and full-stack development. Based in the Philippines with experience in AI engineering, web development, and software architecture.",
  openGraph: {
    title: "About Julius Raagas | AI & Full-Stack Developer",
    description:
      "Learn about Julius Caesar Raagas, an aspiring AI developer passionate about machine learning and web development.",
    url: "https://julius-raagas.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Julius Raagas",
      },
    ],
  },
  alternates: {
    canonical: "https://julius-raagas.vercel.app/about",
  },
};
