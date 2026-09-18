"use client";

import Image from "next/image";
import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_LEADERSHIP } from "@/lib/data/site";

export function Leadership() {
  return (
    <section id="leadership" className="relative w-full bg-soft-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/generated/leadership.jpg"
                  alt="SKCL leadership portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-navy/10" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/85">
                    {SKCL_LEADERSHIP.name}
                  </span>
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/60">
                    SKCL
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — quote + bio */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <SectionLabel>Leadership Perspective</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-8">
                <p className="skcl-editorial text-2xl leading-[1.3] text-navy md:text-4xl lg:text-[2.6rem]">
                  &ldquo;{SKCL_LEADERSHIP.quote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 max-w-md">
                <div className="h-px w-12 bg-gold" />
                <p className="mt-6 text-sm leading-relaxed text-steel">
                  {SKCL_LEADERSHIP.bio}
                </p>
                <p className="mt-4 font-display text-[0.7rem] uppercase tracking-[0.24em] text-navy">
                  {SKCL_LEADERSHIP.name}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
