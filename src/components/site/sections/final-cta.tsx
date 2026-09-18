"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "../ui/primitives";
import { LuxuryButton } from "../ui/luxury-button";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.7, 0.55]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-navy"
    >
      {/* Cinematic sunrise skyline background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/generated/final-cta.jpg"
          alt="Sunrise over the SKCL skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy/90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center text-soft-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="skcl-label text-gold">Partner with SKCL</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 skcl-editorial text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]"
          >
            Let&apos;s build
            <br />
            what&apos;s next.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-soft-white/70 md:text-lg"
          >
            Partner with a team that develops more than buildings. We create
            long-term business value — for enterprises, for landowners, and for
            the city of Chennai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <LuxuryButton href="#contact" variant="gold" withArrow>
              Schedule Meeting
            </LuxuryButton>
            <LuxuryButton href="#profile" variant="outline-light">
              Download Corporate Profile
            </LuxuryButton>
            <LuxuryButton href="mailto:contact@skcl.com" variant="link-light" withArrow>
              Contact Us
            </LuxuryButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
