"use client";

import { useState } from "react";
import { Container, SectionLabel, Reveal, BlueprintCaption } from "../ui/primitives";
import { SKCL_CHENNAI_LOCATIONS } from "@/lib/data/site";

export function ChennaiFootprint() {
  const [active, setActive] = useState<number | null>(0);
  const current = active !== null ? SKCL_CHENNAI_LOCATIONS[active] : null;

  return (
    <section
      id="footprint"
      className="relative overflow-hidden bg-navy py-24 text-soft-white md:py-32"
    >
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>Chennai Footprint</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 skcl-editorial text-4xl text-soft-white md:text-5xl">
                A command center view of the SKCL network.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-soft-white/60">
                Developments positioned along Chennai&apos;s principal
                commercial corridors — OMR, Guindy, Porur and T. Nagar — connected
                to the city&apos;s transit and talent infrastructure.
              </p>
            </Reveal>

            {/* Active location detail */}
            <Reveal delay={0.3}>
              <div className="mt-10 border-t border-white/10 pt-6">
                {current ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold skcl-shimmer" />
                      <span className="skcl-label text-gold">Active Node</span>
                    </div>
                    <p className="skcl-editorial text-2xl text-soft-white">
                      {current.name}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <BlueprintCaption label="Area" value={current.area} tone="onDark" />
                      <BlueprintCaption label="Status" value={current.status} tone="onDark" />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-soft-white/50">
                    Hover a location to inspect.
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-navy">
              {/* radial vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

              {/* network route lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 75"
                preserveAspectRatio="none"
                aria-hidden
              >
                <g stroke="#b68b4c" strokeOpacity="0.25" strokeWidth="0.15" strokeDasharray="0.6 0.6">
                  <line x1="78" y1="56" x2="44" y2="64" />
                  <line x1="78" y1="56" x2="56" y2="70" />
                  <line x1="56" y1="70" x2="28" y2="60" />
                  <line x1="78" y1="56" x2="84" y2="68" />
                  <line x1="44" y1="64" x2="56" y2="70" />
                </g>
              </svg>

              {/* Chennai coastline suggestion */}
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 100 75"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M82 0 Q78 18 84 36 Q88 52 82 75"
                  stroke="#3b82f6"
                  strokeWidth="0.3"
                  fill="none"
                />
              </svg>

              {/* coordinate ticks */}
              <div className="absolute left-3 top-3 font-display text-[0.5rem] uppercase tracking-[0.2em] text-soft-white/30">
                13.04°N · 80.25°E
              </div>
              <div className="absolute right-3 top-3 font-display text-[0.5rem] uppercase tracking-[0.2em] text-soft-white/30">
                CHN · GRID 04
              </div>

              {/* location nodes */}
              {SKCL_CHENNAI_LOCATIONS.map((loc, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={loc.name}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${loc.x}%`, top: `${(loc.y / 75) * 100}%` }}
                    aria-label={`${loc.name} in ${loc.area}`}
                  >
                    {/* pulse */}
                    <span
                      className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ${
                        isActive ? "skcl-pulse-glow" : ""
                      }`}
                    />
                    {/* core dot */}
                    <span
                      className={`relative block h-2 w-2 rounded-full transition-all duration-500 ${
                        isActive
                          ? "scale-150 bg-gold"
                          : "bg-soft-white/60 group-hover:bg-gold"
                      }`}
                    />
                    {/* label */}
                    <span
                      className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[0.55rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                        isActive
                          ? "text-soft-white opacity-100"
                          : "text-soft-white/40 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {loc.name}
                    </span>
                  </button>
                );
              })}

              {/* legend */}
              <div className="absolute bottom-3 left-3 flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-display text-[0.5rem] uppercase tracking-[0.2em] text-soft-white/50">
                    Operational
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-soft-white/40" />
                  <span className="font-display text-[0.5rem] uppercase tracking-[0.2em] text-soft-white/50">
                    Underway
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
