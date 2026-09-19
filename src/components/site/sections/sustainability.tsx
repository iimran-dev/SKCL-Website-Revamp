"use client";

import Image from "next/image";
import { Container, SectionLabel, Reveal, StaggerGroup, StaggerItem } from "../ui/primitives";
import { SKCL_SUSTAINABILITY } from "@/lib/data/site";
import { UNSPLASH_IMAGES } from "@/lib/constants/images";

export function Sustainability() {
  return (
    <section id="sustainability" className="relative w-full bg-soft-white">
      {/* Curved divider entering from previous (navy) section */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-full md:h-20"
          aria-hidden
        >
          <path d="M0,0 L0,40 C360,80 1080,80 1440,40 L1440,0 Z" fill="#fafaf8" />
        </svg>
      </div>

      {/* Hero image — architecture merging with landscape */}
      <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.sustainability.url}
          alt={UNSPLASH_IMAGES.sustainability.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-white via-soft-white/10 to-transparent" />
        <Container className="absolute inset-x-0 bottom-8">
          <Reveal>
            <SectionLabel>Sustainability</SectionLabel>
          </Reveal>
        </Container>
      </div>

      <Container className="py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-3xl skcl-editorial text-4xl text-navy md:text-5xl lg:text-6xl">
            Architecture shaped by responsibility — to people, planet and
            progress.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {SKCL_SUSTAINABILITY.map((p, i) => (
            <StaggerItem key={p.pillar}>
              <div className="flex flex-col">
                <span className="font-display text-[0.7rem] uppercase tracking-[0.28em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 skcl-editorial text-3xl text-navy md:text-4xl">
                  {p.pillar}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-steel">
                  {p.copy}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
