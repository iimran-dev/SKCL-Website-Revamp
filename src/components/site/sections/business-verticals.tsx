"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SKCL_VERTICALS } from "@/lib/data/site";
import { SectionLabel, Reveal } from "../ui/primitives";

export function BusinessVerticals() {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="verticals" className="relative w-full bg-soft-white py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Business Verticals</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl skcl-editorial text-4xl text-navy md:text-5xl lg:text-6xl">
                Three disciplines. One standard of execution.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-steel">
              Hover to explore each vertical. Each is a long-term practice — not
              a service line.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Panels */}
      <div
        className="flex h-[70vh] min-h-[480px] w-full flex-col gap-2 px-6 md:px-10 lg:flex-row lg:px-16"
        onMouseLeave={() => setActive(0)}
      >
        {SKCL_VERTICALS.map((v, i) => {
          const isActive = active === i;
          return (
            <button
              key={v.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group relative h-full overflow-hidden bg-charcoal text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "lg:flex-1",
                isActive && "lg:flex-[2]"
              )}
            >
              <Image
                src={v.image}
                alt={v.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  "bg-gradient-to-t from-navy via-navy/40 to-transparent",
                  isActive ? "opacity-90" : "opacity-70"
                )}
              />
              {/* index */}
              <span className="absolute left-6 top-6 font-display text-[0.6rem] uppercase tracking-[0.3em] text-soft-white/60">
                0{i + 1}
              </span>

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="skcl-editorial text-3xl text-soft-white md:text-4xl lg:text-5xl">
                  {v.title}
                </h3>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "mt-4 max-h-40 opacity-100"
                      : "mt-0 max-h-0 opacity-0 lg:max-h-0"
                  )}
                >
                  <p className="max-w-md text-sm leading-relaxed text-soft-white/75">
                    {v.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                    Explore vertical
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path
                        d="M1 6h10M7 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
