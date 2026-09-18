"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "../ui/primitives";
import { LuxuryButton } from "../ui/luxury-button";
import { BlueprintCaption } from "../ui/primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image drifts + scales, copy drifts up & fades
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const metaY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy"
    >
      {/* Background architectural render */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/generated/hero.jpg"
          alt="SKCL Grade A commercial development at blue hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-transparent" />

      {/* Blueprint grid overlay */}
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-60" />

      {/* Architectural line drawing — vertical accent on right */}
      <svg
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block"
        width="180"
        height="420"
        viewBox="0 0 180 420"
        fill="none"
        aria-hidden
      >
        <g stroke="#b68b4c" strokeWidth="0.75">
          <line x1="90" y1="0" x2="90" y2="420" />
          <line x1="0" y1="60" x2="180" y2="60" />
          <line x1="0" y1="160" x2="180" y2="160" />
          <line x1="0" y1="260" x2="180" y2="260" />
          <line x1="0" y1="360" x2="180" y2="360" />
          <circle cx="90" cy="60" r="3" />
          <circle cx="90" cy="160" r="3" />
          <circle cx="90" cy="260" r="3" />
          <circle cx="90" cy="360" r="3" />
        </g>
      </svg>

      {/* Content */}
      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative z-10 flex h-full items-center"
      >
        <Container>
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7"
            >
              <span className="skcl-label text-gold">Since 2003 · Chennai</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="skcl-editorial text-soft-white text-[2.7rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            >
              Building Chennai&apos;s
              <br />
              <span className="skcl-gold-text">Business Landscape</span>
              <br />
              Since 2003
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-soft-white/70 md:text-lg"
            >
              Grade A office developments. Facility management. Joint ventures.
              Long-term partnerships that engineer enduring commercial value.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <LuxuryButton href="#developments" variant="gold" withArrow>
                Explore Developments
              </LuxuryButton>
              <LuxuryButton href="#company" variant="outline-light">
                Corporate Profile
              </LuxuryButton>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Floating building metadata card */}
      <motion.div
        style={{ y: metaY }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 bottom-24 z-10 hidden w-72 skcl-glass p-6 lg:block"
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold skcl-shimmer" />
          <span className="skcl-label text-soft-white/60">Featured Project</span>
        </div>
        <p className="skcl-editorial text-2xl text-soft-white">SKCL Horizon</p>
        <p className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.18em] text-soft-white/55">
          Guindy · Chennai
        </p>
        <div className="my-5 h-px w-full bg-white/15" />
        <div className="grid grid-cols-2 gap-4">
          <BlueprintCaption label="Area" value="5.8 L sq.ft" tone="onDark" />
          <BlueprintCaption label="Completion" value="2025" tone="onDark" />
          <BlueprintCaption label="Status" value="Underway" tone="onDark" />
          <BlueprintCaption label="Anchor" value="Grade A" tone="onDark" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-display text-[0.6rem] uppercase tracking-[0.32em] text-soft-white/65">
          Scroll
        </span>
        <span className="relative flex h-10 w-px overflow-hidden bg-soft-white/25">
          <span className="absolute inset-x-0 top-0 h-4 bg-gold skcl-scroll-hint" />
        </span>
      </div>
    </section>
  );
}
