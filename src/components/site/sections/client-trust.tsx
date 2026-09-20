"use client";

import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_CLIENTS } from "@/lib/data/site";

function ClientMarquee() {
  // duplicate list for seamless loop
  const list = [...SKCL_CLIENTS, ...SKCL_CLIENTS];
  return (
    <div className="relative flex overflow-hidden py-3 sm:py-5 md:py-7">
      <div className="skcl-marquee flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10 md:gap-14 md:pr-14">
        {list.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-6 sm:gap-10 md:gap-14"
          >
            <span className="skcl-editorial text-base tracking-wide text-soft-white/45 transition-colors duration-300 hover:text-soft-white sm:text-lg md:text-xl lg:text-2xl">
              {name}
            </span>
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-gold/30"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientTrust() {
  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden border-t border-white/[0.08] bg-navy pt-6 pb-12 text-soft-white sm:pt-10 sm:pb-16 md:py-20 lg:py-28"
    >
      {/* spotlight gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(182,139,76,0.08),transparent_65%)]" />

      <Container>
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:mb-8 sm:gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Client Trust</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-2xl skcl-editorial text-2xl leading-[1.15] text-soft-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Trusted by the enterprises that anchor Chennai.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="flex flex-col items-start gap-1 md:items-end">
              <span className="inline-flex items-center gap-1.5 font-display text-[0.65rem] uppercase tracking-[0.2em] text-gold sm:text-[0.7rem]">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Fortune 500 & Global Anchors
              </span>
              <p className="max-w-xs text-xs leading-relaxed text-soft-white/50 sm:text-sm md:text-right">
                Representative tenant relationships across the SKCL portfolio.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Marquee with mobile-safe gradient fade masks */}
      <div className="relative border-y border-white/[0.06] bg-charcoal/20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-navy to-transparent sm:w-16 md:w-28 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-navy to-transparent sm:w-16 md:w-28 lg:w-36" />
        <ClientMarquee />
      </div>
    </section>
  );
}

