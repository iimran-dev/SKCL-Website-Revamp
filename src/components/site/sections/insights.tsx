"use client";

import Image from "next/image";
import { Container, SectionLabel, Reveal, StaggerGroup, StaggerItem } from "../ui/primitives";
import { SKCL_INSIGHTS } from "@/lib/data/site";

export function Insights() {
  const [featured, ...rest] = SKCL_INSIGHTS;

  return (
    <section id="insights" className="relative w-full bg-soft-white py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Insights &amp; Developments</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 skcl-editorial text-4xl text-navy md:text-5xl lg:text-6xl">
                The SKCL newsroom.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#insights"
              className="group inline-flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.22em] text-navy"
            >
              All stories
              <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Featured — 60% */}
          <Reveal className="lg:col-span-7">
            <a href="#insights" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute left-6 top-6 skcl-label text-gold">
                  {featured.category}
                </span>
              </div>
              <div className="mt-6">
                <span className="font-display text-[0.6rem] uppercase tracking-[0.28em] text-steel">
                  {featured.date}
                </span>
                <h3 className="mt-3 skcl-editorial text-3xl text-navy md:text-4xl lg:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  Read story
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                    <path
                      d="M1 6h10M7 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>

          {/* Asymmetric rest — 40% */}
          <div className="lg:col-span-5">
            <StaggerGroup className="flex flex-col gap-8">
              {rest.map((story, i) => (
                <StaggerItem key={story.title}>
                  <a href="#insights" className="group grid grid-cols-12 gap-5">
                    <div className="col-span-5 relative aspect-square overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="20vw"
                        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      />
                    </div>
                    <div className="col-span-7 flex flex-col">
                      <span className="font-display text-[0.55rem] uppercase tracking-[0.28em] text-gold">
                        {story.category}
                      </span>
                      <h4 className="mt-2 skcl-editorial text-lg leading-tight text-navy md:text-xl">
                        {story.title}
                      </h4>
                      <span className="mt-auto pt-3 font-display text-[0.55rem] uppercase tracking-[0.24em] text-steel">
                        {story.date}
                      </span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
