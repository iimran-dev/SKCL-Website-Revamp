"use client";

import Image from "next/image";
import { Container, EditorialHeading, SectionLabel, Reveal } from "../ui/primitives";
import { Section } from "../ui/primitives";

export function LegacyStatement() {
  return (
    <Section id="company" tone="light" className="py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — massive statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Legacy Statement</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <EditorialHeading className="mt-8">
                Spaces that empower
                <br />
                businesses for
                <br />
                <span className="skcl-gold-text">generations.</span>
              </EditorialHeading>
            </Reveal>
          </div>

          {/* Right — blueprint sketch + annotation + supporting paragraph */}
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/generated/legacy.jpg"
                  alt="Architectural elevation study"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/20" />
                {/* Annotation overlay */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="h-1 w-1 bg-gold" />
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/80">
                    Elevation Study · 2014
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/80">
                    Floor 24
                  </div>
                  <div className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/80">
                    +142m
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-10 text-lg leading-relaxed text-navy/70">
                Since 2003, SKCL has developed commercial environments engineered
                for the long arc of an enterprise — not a single lease cycle. We
                build the infrastructure of Indian business, and we maintain it
                for the decades that follow.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
