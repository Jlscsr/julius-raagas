"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Works", href: "/#works" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--wabi-bg)]/95 backdrop-blur-sm border-b border-[var(--wabi-border)]/50"
      >
        <div className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-6 md:py-8">
          <Link
            href="/"
            className="font-serif text-base md:text-lg tracking-wide text-[var(--wabi-text)] relative z-50"
          >
            Julius Raagas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <ul className="flex gap-8 lg:gap-12">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--wabi-text-muted)] hover:text-[var(--wabi-blue)] transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-px bg-[var(--wabi-text)] block"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-px bg-[var(--wabi-text)] block"
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-px bg-[var(--wabi-text)] block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-[var(--wabi-bg)] z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 right-0 bottom-0 h-screen bg-[var(--wabi-bg)] pt-28 px-6 z-[45] overflow-y-auto"
            >
              <ul className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="font-serif text-3xl text-[var(--wabi-text)] hover:text-[var(--wabi-blue)] transition-colors duration-500 block"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Menu Footer */}
              <div className="mt-auto pt-12 pb-12">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--wabi-text-muted)]">
                  侘寂 — Wabi-Sabi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
