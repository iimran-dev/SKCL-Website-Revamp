"use client";

import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Building2, Sparkles, Layers } from "lucide-react";
import { Container, Reveal } from "../ui/primitives";
import { SKCL_TIMELINE_MILESTONES } from "@/lib/data/site";
import {
  Building2003,
  Building2007,
  Building2012,
  Building2017,
  Building2021,
  Building2026,
} from "./building-vectors";
import { cn } from "@/lib/utils";

// Map each milestone year to its vector hand-drawn architectural illustration
const VECTOR_BUILDINGS = [
  { Component: Building2003, heightClass: "h-[115px] sm:h-[135px] md:h-[155px] lg:h-[165px]" },
  { Component: Building2007, heightClass: "h-[140px] sm:h-[165px] md:h-[185px] lg:h-[200px]" },
  { Component: Building2012, heightClass: "h-[168px] sm:h-[195px] md:h-[220px] lg:h-[240px]" },
  { Component: Building2017, heightClass: "h-[198px] sm:h-[230px] md:h-[260px] lg:h-[285px]" },
  { Component: Building2021, heightClass: "h-[228px] sm:h-[265px] md:h-[300px] lg:h-[330px]" },
  { Component: Building2026, heightClass: "h-[258px] sm:h-[300px] md:h-[345px] lg:h-[380px]" },
];

export function BuildingEvolution() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(5); // default to 2026 flagship
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const activeMilestone = SKCL_TIMELINE_MILESTONES[hoveredIndex ?? activeIndex];

  return (
    <section
      id="evolution"
      className="relative w-full ov erflow-hidden border-y border-navy/10"
      style={{
        background:
          "linear-gradient(180deg, #d3e7f8 0%, #dff0fa 25%, #ecf5fb 50%, #f7fafd 80%, #ffffff 100%)",
      }}
    >
      {/* =========================================================================
          ATMOSPHERIC SKYLINE BACKDROP & DISTANT MISTY CITY SILHOUETTES
          ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Soft atmospheric cloud wisps */}
        <div
          className="absolute inset-x-0 top-0 h-96 opacity-45"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)",
          }}
        />

        {/* Distant panoramic city skyline silhouette */}
        <svg
          className="absolute bottom-28 inset-x-0 w-full h-44 text-navy/10 preserve-3d"
          viewBox="0 0 1600 180"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Faint distant layer */}
          <path
            opacity="0.5"
            d="M0 180 L0 140 L35 140 L35 110 L55 110 L55 140 L90 140 L90 95 L115 95 L115 140 L160 140 L160 120 L195 120 L195 140 L250 140 L250 75 L280 75 L280 140 L340 140 L340 105 L370 105 L370 140 L430 140 L430 85 L465 85 L465 140 L530 140 L530 65 L555 65 L555 140 L620 140 L620 100 L650 100 L650 140 L720 140 L720 70 L750 70 L750 140 L820 140 L820 115 L850 115 L850 140 L910 140 L910 80 L945 80 L945 140 L1010 140 L1010 60 L1040 60 L1040 140 L1110 140 L1110 95 L1140 95 L1140 140 L1210 140 L1210 85 L1245 85 L1245 140 L1310 140 L1310 70 L1345 70 L1345 140 L1410 140 L1410 105 L1440 105 L1440 140 L1500 140 L1500 90 L1530 90 L1530 140 L1600 140 L1600 180 Z"
          />
          {/* Mid-distance layer with architectural spires */}
          <path
            opacity="0.8"
            d="M0 180 L0 155 L45 155 L45 130 L70 130 L70 155 L130 155 L130 115 L140 90 L150 115 L160 115 L160 155 L210 155 L210 125 L245 125 L245 155 L310 155 L310 100 L340 100 L340 155 L400 155 L400 135 L435 135 L435 155 L490 155 L490 110 L520 110 L520 155 L580 155 L580 125 L615 125 L615 155 L680 155 L680 90 L695 65 L710 90 L715 155 L770 155 L770 130 L805 130 L805 155 L870 155 L870 105 L900 105 L900 155 L960 155 L960 120 L995 120 L995 155 L1060 155 L1060 85 L1075 55 L1090 85 L1100 155 L1160 155 L1160 125 L1190 125 L1190 155 L1260 155 L1260 100 L1295 100 L1295 155 L1360 155 L1360 130 L1390 130 L1390 155 L1450 155 L1450 115 L1480 115 L1480 155 L1540 155 L1540 130 L1570 130 L1570 155 L1600 155 L1600 180 Z"
          />
        </svg>

        {/* Faint architectural coordinate grid */}
        <div className="skcl-grid-bg-dark absolute inset-0 opacity-25" />
      </div>

      <Container className="relative z-10 pt-16 md:pt-20 lg:pt-24 pb-14 md:pb-16">
        {/* =========================================================================
            HEADER BAR (Matches exact reference design: Title Left, Button Right)
            ========================================================================= */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-display text-[0.72rem] uppercase tracking-[0.32em] text-steel font-semibold">
                  OUR SKCL JOURNEY
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 skcl-editorial text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] tracking-tight">
                A Stronger Tomorrow,<br />
                Built Over Time
              </h2>
            </Reveal>
          </div>

          {/* Top Right Journey CTA Pill Button */}
          <Reveal delay={0.16}>
            <div className="flex items-center gap-4">
              <a
                href="#developments"
                className="group inline-flex items-center gap-3.5 rounded-full bg-white/80 hover:bg-navy hover:text-white px-5 py-2.5 transition-all duration-300 border border-navy/15 text-navy shadow-xs backdrop-blur-xs"
                aria-label="Explore our journey"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/20 group-hover:border-white/40 group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <span className="font-display text-sm font-semibold tracking-wide">
                  Our journey
                </span>
              </a>

              {/* Mobile Scroll Controls */}
              <div className="flex md:hidden items-center gap-1.5">
                <button
                  onClick={() => scroll("left")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy hover:bg-navy hover:text-white transition-colors"
                  aria-label="Previous building"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy hover:bg-navy hover:text-white transition-colors"
                  aria-label="Next building"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>


        {/*
            THE 6 VECTOR HAND-DRAWN BUILDINGS ALONG HORIZONTAL BASELINE */}
        <div className="relative mt-8 md:mt-12 lg:mt-16">
          {/* Scrollable container for mobile/tablets; fluid flex layout on desktop */}
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex overflow-x-auto pb-6 pt-4 snap-x snap-mandatory md:overflow-x-visible md:pb-0"
          >
            <div className="relative flex min-w-[920px] w-full items-end justify-between px-2 md:px-0">
              {SKCL_TIMELINE_MILESTONES.map((milestone, index) => {
                const { Component, heightClass } = VECTOR_BUILDINGS[index];
                const isHovered = hoveredIndex === index;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={milestone.year}
                    className="group relative flex flex-1 flex-col items-center justify-end px-1 sm:px-2 md:px-3 snap-center cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Hover Floating Specification Tooltip */}
                    <div
                      className={cn(
                        "pointer-events-none absolute -top-14 z-30 transition-all duration-300",
                        isHovered || isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="rounded-md bg-navy px-3 py-1.5 text-center text-white shadow-xl border border-white/10 whitespace-nowrap">
                        <div className="font-display text-[0.68rem] font-bold tracking-wider text-gold uppercase">
                          {milestone.typology}
                        </div>
                        <div className="font-mono text-[0.62rem] text-white/80">
                          {milestone.sqft}
                        </div>
                        {/* Triangle arrow */}
                        <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 border-4 border-transparent border-t-navy" />
                      </div>
                    </div>

                    {/* Vector Hand-Drawn Building Artwork */}
                    <div
                      className={cn(
                        "relative flex w-full items-end justify-center transition-transform duration-300",
                        isHovered ? "-translate-y-1.5 scale-[1.02]" : "translate-y-0 scale-100"
                      )}
                    >
                      <div className={cn("w-full flex items-end justify-center", heightClass)}>
                        <Component
                          isHovered={isHovered || isActive}
                          className="h-full w-auto max-w-full drop-shadow-[0_4px_12px_rgba(7,21,37,0.06)]"
                        />
                      </div>
                    </div>

                    {/* Milestone Timeline Anchor Node */}
                    <div className="relative mt-3 flex items-center justify-center">
                      <div
                        className={cn(
                          "h-2.5 w-2.5 rounded-full border-2 transition-all duration-300",
                          isHovered || isActive
                            ? "border-gold bg-navy scale-125 shadow-xs"
                            : "border-navy/30 bg-white"
                        )}
                      />
                    </div>

                    {/* Milestone Year and Subtitle (Directly under each building) */}
                    <div className="mt-2.5 text-center transition-colors duration-200">
                      <span
                        className={cn(
                          "block font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors",
                          isHovered || isActive ? "text-navy" : "text-navy/85"
                        )}
                      >
                        {milestone.year}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block text-[0.72rem] sm:text-xs md:text-sm font-medium transition-colors line-clamp-1",
                          isHovered || isActive ? "text-gold font-semibold" : "text-steel"
                        )}
                      >
                        {milestone.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Continuous Ground Baseline (Runs behind all 6 nodes) */}
          <div className="pointer-events-none absolute bottom-[68px] sm:bottom-[72px] md:bottom-[76px] inset-x-0 h-px bg-navy/20" />
        </div>
      </Container>
    </section>
  );
}
