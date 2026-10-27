import type React from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import GrainOverlay from "@/components/grain-overlay";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julius-raagas.vercel.app"),
  title: {
    default: "Julius Raagas | Full-Stack Developer",
    template: "%s | Julius Raagas",
  },
  description: "Full-stack developer in the Philippines building interactive tools and web applications. Explore projects, engineering decisions, and experience.",
  authors: [{ name: "Julius Caesar Raagas" }],
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: "Julius Raagas Portfolio",
    title: "Julius Raagas | Full-Stack Developer",
    description: "Interactive tools, useful web products, and thoughtful engineering.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Julius Raagas — Full-stack developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Raagas | Full-Stack Developer",
    description: "Interactive tools, useful web products, and thoughtful engineering.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1816" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jetbrains.variable} font-serif antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-[var(--wabi-bg)] focus:px-6 focus:py-3 focus:text-[var(--wabi-text)]">
            Skip to content
          </a>
          <GrainOverlay />
          <Navigation />
          {children}
          <footer className="border-t border-[var(--wabi-border)] px-6 py-10 md:px-12">
            <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 font-mono text-xs leading-relaxed text-[var(--wabi-text-muted)]">
              <p>© {new Date().getFullYear()} Julius Raagas</p>
              <p>Building with intention.</p>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
