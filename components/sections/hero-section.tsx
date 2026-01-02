"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion, type MotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import FloatingStone from "../three/floating-stone";

interface HeroSectionProps {
  scrollOpacity: MotionValue<number>;
}

export default function HeroSection({ scrollOpacity }: HeroSectionProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <section className="relative h-screen flex items-center bg-[var(--wabi-bg)]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={isDark ? 0.3 : 0.4} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={isDark ? 0.4 : 0.6}
              color="#ffffff"
            />
            <directionalLight
              position={[-5, -5, -5]}
              intensity={isDark ? 0.3 : 0.2}
              color={isDark ? "#7ba4c2" : "#4a7c9e"}
            />
            <FloatingStone />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>

      {/* Content - Asymmetric layout */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="relative z-10 px-8 md:px-16 lg:px-24 w-full"
      >
        <div className="max-w-4xl ml-0 md:ml-[5%] lg:ml-[10%]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--wabi-text-muted)] mb-6"
          >
            Full-Stack Developer & CS Student | AI-Native Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-[var(--wabi-text)] text-balance"
          >
            Julius Raagas
            <br />
            <span className="text-[var(--wabi-blue)]">
              from coder to architect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="mt-12 max-w-md font-serif text-lg text-[var(--wabi-text-secondary)] leading-relaxed"
          >
            Building systems where AI isn't just a tool—it's part of the core.
            Transitioning from writing code to engineering architecture. Based
            in the Philippines, learning in public.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6"
          >
            <a
              href="/raagas-julius-caesar-resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[var(--wabi-blue)] text-white font-mono text-[10px] md:text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue-hover)] transition-all duration-500 group"
            >
              Download Resume
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 border border-[var(--wabi-blue)] text-[var(--wabi-blue)] font-mono text-[10px] md:text-xs tracking-widest uppercase hover:bg-[var(--wabi-blue)] hover:text-white transition-all duration-500"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - off-center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-12 md:right-24"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--wabi-text-muted)] rotate-90 origin-center">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-px h-12 bg-[var(--wabi-border)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
