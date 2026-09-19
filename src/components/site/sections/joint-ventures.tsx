"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Container, SectionLabel, Reveal, StaggerGroup, StaggerItem } from "../ui/primitives";
import { cn } from "@/lib/utils";
import { UNSPLASH_IMAGES } from "@/lib/constants/images";

export function JointVentures() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  return (
    <section
      id="joint-ventures"
      className="relative w-full overflow-hidden bg-navy py-24 text-soft-white md:py-32"
    >
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Joint Ventures</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl skcl-editorial text-4xl text-soft-white md:text-5xl lg:text-6xl">
                From land parcel to Grade A campus.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-soft-white/55">
              Drag the handle to see how a partnership with SKCL transforms a
              land asset into institutional-grade commercial infrastructure.
            </p>
          </Reveal>
        </div>

        {/* Before/After slider */}
        <Reveal>
          <div
            ref={wrapRef}
            className="relative aspect-[16/9] w-full select-none overflow-hidden border border-white/10"
            onMouseDown={(e) => {
              dragging.current = true;
              updateFromClientX(e.clientX);
            }}
            onMouseMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
            onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          >
            {/* After (full) */}
            <Image
              src={UNSPLASH_IMAGES.jointVentures.afterCampus.url}
              alt={UNSPLASH_IMAGES.jointVentures.afterCampus.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              draggable={false}
            />
            {/* Before (clipped to left portion) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <Image
                src={UNSPLASH_IMAGES.jointVentures.beforeLand.url}
                alt={UNSPLASH_IMAGES.jointVentures.beforeLand.alt}
                fill
                sizes="80vw"
                className="object-cover grayscale"
                draggable={false}
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>

            {/* Labels */}
            <span className="absolute left-4 top-4 font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/70">
              Before · Land Parcel
            </span>
            <span className="absolute right-4 top-4 font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/70">
              After · Grade A Campus
            </span>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 flex w-px items-center justify-center bg-gold"
              style={{ left: `${pos}%` }}
            >
              <span className="flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-navy/60 backdrop-blur-md">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none">
                  <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Transformation metrics */}
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {[
            { v: "36", l: "Months to handover" },
            { v: "1M+", l: "Sq.ft created" },
            { v: "4", l: "Landowner partners" },
            { v: "100%", l: "Institutional grade" },
          ].map((m) => (
            <StaggerItem key={m.l}>
              <div className="flex flex-col">
                <span className="skcl-editorial text-3xl text-soft-white md:text-4xl">
                  {m.v}
                </span>
                <span className="mt-2 font-display text-[0.6rem] uppercase tracking-[0.26em] text-soft-white/45">
                  {m.l}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
