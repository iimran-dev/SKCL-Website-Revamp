"use client";

import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_CLIENTS } from "@/lib/data/site";

function ClientMarquee() {
  // duplicate list for seamless loop
  const list = [...SKCL_CLIENTS, ...SKCL_CLIENTS];
  return (
    <div className="relative flex overflow-hidden py-8">
      <div className="skcl-marquee flex shrink-0 items-center gap-16 pr-16">
        {list.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="skcl-editorial text-3xl text-soft-white/40 transition-colors duration-500 hover:text-soft-white md:text-4xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ClientTrust() {
  return (
    <section id="clients" className="relative w-full overflow-hidden bg-navy py-24 text-soft-white md:py-32">
      {/* spotlight gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(182,139,76,0.08),transparent_65%)]" />

      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Client Trust</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl skcl-editorial text-4xl text-soft-white md:text-5xl lg:text-6xl">
                Trusted by the enterprises that anchor Chennai.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-soft-white/50">
              Representative tenant relationships across the SKCL portfolio.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy to-transparent" />
        <ClientMarquee />
      </div>
    </section>
  );
}
