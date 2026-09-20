"use client";

import Image from "next/image";
import { useRef } from "react";
import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { LuxuryButton } from "../ui/luxury-button";
import { SKCL_DEVELOPMENTS } from "@/lib/data/site";
import { gsap, ScrollTrigger, useLenisScrollTrigger } from "@/hooks/use-gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

export function Developments() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useLenisScrollTrigger();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
        },
        () => {
          const totalScroll = track.scrollWidth - window.innerWidth;
          if (totalScroll <= 0) return;

          const tween = gsap.to(track, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${totalScroll}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => {
            tween.kill();
          };
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="developments"
      className="relative w-full overflow-hidden bg-navy text-soft-white lg:h-[100svh] pb-10 lg:pb-0"
    >
      {/* Header */}
      <Container className="w-full lg:absolute lg:inset-x-0 lg:top-12 xl:top-14 lg:z-20">
        <div className="py-16 lg:py-0 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <Reveal>
              <SectionLabel>Signature Developments</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-2.5 max-w-xl skcl-editorial text-3xl text-soft-white sm:text-4xl lg:text-[1.85rem] xl:text-[2.25rem] leading-tight">
                A portfolio of Grade A office environments.
              </h2>
            </Reveal>
          </div>

          {/* Progress indicator (desktop) */}
          <div className="hidden lg:flex items-center gap-3 pt-2">
            <span className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-soft-white/45">
              Portfolio
            </span>
            <span className="h-px w-20 bg-white/15">
              <span className="block h-px w-1/3 bg-gold" />
            </span>
          </div>
        </div>
      </Container>

      {/* Track — vertical on mobile, horizontal (GSAP-pinned) on desktop */}
      <div
        ref={trackRef}
        className="flex flex-col gap-8 px-6 pb-20 md:px-10 lg:absolute lg:bottom-0 lg:left-0 lg:flex-row lg:items-end lg:gap-6 lg:px-16 lg:pb-6 xl:pb-8"
      >
        {SKCL_DEVELOPMENTS.map((d, i) => (
          <DevelopmentCard key={d.name} dev={d} index={i} />
        ))}

        {/* Trailing CTA panel */}
        <div className="flex min-h-[320px] flex-col items-start justify-center border border-white/10 p-8 lg:h-[48vh] lg:min-h-[300px] lg:max-h-[440px] lg:w-[30vw] xl:w-[26vw] lg:border-0 lg:px-0">
          <SectionLabel>Portfolio Overview</SectionLabel>
          <p className="mt-4 skcl-editorial text-xl text-soft-white md:text-2xl lg:pr-4">
            Nine developments. Over one million square feet delivered.
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-soft-white/60">
            A portfolio engineered for the next decade of Indian enterprise.
          </p>
          <div className="mt-6">
            <LuxuryButton href="#contact" variant="outline-light" withArrow>
              Request Portfolio Deck
            </LuxuryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentCard({
  dev,
  index,
}: {
  dev: (typeof SKCL_DEVELOPMENTS)[number];
  index: number;
}) {
  return (
    <article className="group relative h-[60vh] min-h-[420px] w-full shrink-0 overflow-hidden bg-charcoal lg:h-[48vh] lg:min-h-[300px] lg:max-h-[440px] lg:w-[36vw] xl:w-[32vw]">
      <Image
        src={dev.image}
        alt={dev.name}
        fill
        sizes="(max-width: 1024px) 92vw, 42vw"
        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />

      {/* index + status top */}
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
        <span className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-soft-white/55">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(SKCL_DEVELOPMENTS.length).padStart(2, "0")}
        </span>
        <span className="skcl-label text-gold">{dev.status}</span>
      </div>

      {/* metadata bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-soft-white/55">
          {dev.location}
        </p>
        <h3 className="mt-2 skcl-editorial text-3xl text-soft-white md:text-4xl lg:text-5xl">
          {dev.name}
        </h3>
        <div className="mt-4 max-w-md overflow-hidden">
          <p className="max-h-0 translate-y-2 text-sm leading-relaxed text-soft-white/70 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-32 group-hover:translate-y-0 group-hover:opacity-100">
            {dev.description}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-6 border-t border-white/10 pt-5">
          <div className="flex flex-col">
            <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/45">
              Area
            </span>
            <span className="font-display text-sm text-soft-white">
              {dev.sqft} sq.ft
            </span>
          </div>
          <span className="h-6 w-px bg-white/15" />
          <div className="flex flex-col">
            <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/45">
              Completion
            </span>
            <span className="font-display text-sm text-soft-white">
              {dev.year}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
