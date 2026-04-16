import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julius-raagas.vercel.app"),
  title: {
    default: "Julius Raagas | Full-Stack Developer & AI-Native Engineer",
    template: "%s | Julius Raagas",
  },
  description:
    "Portfolio of Julius Raagas - full-stack developer focused on AI-assisted product engineering, interactive planning tools, and modern web applications.",
  keywords: [
    "Julius Raagas",
    "Full-Stack Developer",
    "AI-Native Engineer",
    "AI-Assisted Development",
    "System Design",
    "Interactive Product Engineering",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "MongoDB",
    "Tailwind CSS",
    "Portfolio",
    "Philippines",
    "Web Developer",
  ],
  authors: [
    { name: "Julius Caesar Raagas", url: "https://julius-raagas.vercel.app" },
  ],
  creator: "Julius Caesar Raagas",
  publisher: "Julius Caesar Raagas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julius-raagas.vercel.app",
    siteName: "Julius Raagas Portfolio",
    title: "Julius Raagas | Full-Stack Developer & AI-Native Engineer",
    description:
      "Portfolio showcasing AI-assisted product engineering, interactive planning tools, and full-stack web applications by Julius Raagas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julius Raagas Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Raagas | Full-Stack Developer & AI-Native Engineer",
    description:
      "Portfolio showcasing AI-assisted product engineering, interactive planning tools, and full-stack web applications.",
    images: ["/og-image.jpg"],
    creator: "@juliusraagas",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://juliusraagas.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://juliusraagas.dev" />
      </head>
      <body
        className={`${cormorant.variable} ${jetbrains.variable} bg-[var(--wabi-bg)] font-serif antialiased text-[var(--wabi-text)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
