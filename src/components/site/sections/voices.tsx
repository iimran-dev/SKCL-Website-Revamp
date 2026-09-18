"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_VOICES } from "@/lib/data/site";

export function Voices() {
  const [index, setIndex] = useState(0);

  // auto-rotate
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SKCL_VOICES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const current = SKCL_VOICES[index];

  return (
    <section id="voices" className="relative w-full overflow-hidden bg-soft-white py-24 md:py-32">
      {/* background editorial photography */}
      <div className="absolute inset-0">
        <Image
          src="/generated/insight.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel align="center">Voices from Partnerships</SectionLabel>
            </div>
          </Reveal>

          <div className="relative mt-12 min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-8"
              >
                <p className="skcl-editorial text-2xl leading-[1.25] text-navy md:text-4xl lg:text-[2.7rem]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-[0.7rem] uppercase tracking-[0.24em] text-gold">
                    {current.author}
                  </span>
                  <span className="font-display text-[0.6rem] uppercase tracking-[0.28em] text-steel">
                    {current.org}
                  </span>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* dots */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {SKCL_VOICES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show voice ${i + 1}`}
                className={`h-px transition-all duration-500 ${
                  i === index ? "w-10 bg-gold" : "w-5 bg-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
