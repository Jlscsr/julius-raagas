"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader,
  SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Work", href: "/#works" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--wabi-border)] bg-[var(--wabi-bg)]/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12">
        <Link href="/" className="inline-flex min-h-11 items-center font-serif text-xl text-[var(--wabi-text)]">
          Julius Raagas
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-wider text-[var(--wabi-text-muted)] transition-colors hover:text-[var(--wabi-blue)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button type="button" aria-label="Open navigation menu" className="inline-flex size-11 items-center justify-center">
                <Menu className="size-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-sm overflow-y-auto px-6 py-8">
              <SheetHeader className="px-0">
                <SheetTitle className="font-serif text-2xl font-normal">Explore</SheetTitle>
                <SheetDescription className="sr-only">Portfolio navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link href={item.href} className="block py-3 font-serif text-3xl hover:text-[var(--wabi-blue)]">
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-auto pt-8 font-mono text-xs tracking-wider text-[var(--wabi-text-muted)]">
                Building with intention.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
