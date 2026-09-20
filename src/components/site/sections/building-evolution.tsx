"use client";

import { useState, useRef, TouchEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

// Hand-drawn architectural vector illustrations with progressive heights
const VECTOR_BUILDINGS = [
  { Component: Building2003, heightClass: "h-[105px] lg:h-[125px] xl:h-[140px]" },
  { Component: Building2007, heightClass: "h-[130px] lg:h-[155px] xl:h-[175px]" },
  { Component: Building2012, heightClass: "h-[160px] lg:h-[190px] xl:h-[215px]" },
  { Component: Building2017, heightClass: "h-[195px] lg:h-[230px] xl:h-[260px]" },
  { Component: Building2021, heightClass: "h-[230px] lg:h-[270px] xl:h-[305px]" },
  { Component: Building2026, heightClass: "h-[270px] lg:h-[315px] xl:h-[355px]" },
];

export function BuildingEvolution() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(5); // default to latest milestone (2026)

  // Touch swipe handling for mobile view
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next milestone
      setActiveIndex((prev) => Math.min(prev + 1, SKCL_TIMELINE_MILESTONES.length - 1));
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> previous milestone
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeMobileMilestone = SKCL_TIMELINE_MILESTONES[activeIndex];
  const ActiveMobileComponent = VECTOR_BUILDINGS[activeIndex].Component;

  return (
    <section
      id="evolution"
      className="relative w-full overflow-hidden border-y border-navy/10"
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
          className="absolute bottom-28 inset-x-0 w-full h-44 text-navy/10"
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
            HEADER BAR (Title Left, Journey Button Right)
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
            </div>
          </Reveal>
        </div>

        {/* =========================================================================
            DESKTOP PANORAMA (md and up) — BUILDINGS SIT DIRECTLY ON GROUND BASELINE
            ========================================================================= */}
        <div className="hidden md:block mt-12 lg:mt-16">
          {/* Row of 6 hand-drawn architectural vector buildings, aligned items-end */}
          <div className="grid grid-cols-6 items-end gap-3 lg:gap-5 w-full">
            {SKCL_TIMELINE_MILESTONES.map((milestone, index) => {
              const { Component, heightClass } = VECTOR_BUILDINGS[index];
              const isHovered = hoveredIndex === index;
              const isActive = activeIndex === index;

              return (
                <div
                  key={milestone.year}
                  className="group relative flex flex-col items-center justify-end cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Floating specification tooltip on hover */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-12 z-30 transition-all duration-200",
                      isHovered || isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="rounded-md bg-navy px-2.5 py-1 text-center text-white shadow-xl border border-white/10 whitespace-nowrap">
                      <div className="font-display text-[0.65rem] font-bold tracking-wider text-gold uppercase">
                        {milestone.typology}
                      </div>
                      <div className="font-mono text-[0.6rem] text-white/80">
                        {milestone.sqft}
                      </div>
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 border-4 border-transparent border-t-navy" />
                    </div>
                  </div>

                  {/* Building Artwork: Flush at bottom edge with 0 gap */}
                  <div
                    className={cn(
                      "w-full flex items-end justify-center transition-transform duration-200",
                      isHovered ? "-translate-y-1 scale-[1.02]" : "translate-y-0 scale-100"
                    )}
                  >
                    <div className={cn("w-full flex items-end justify-center", heightClass)}>
                      <Component
                        isHovered={isHovered || isActive}
                        className="h-full w-auto max-w-full drop-shadow-[0_4px_12px_rgba(7,21,37,0.06)]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continuous Ground Baseline with Nodes (Directly beneath the buildings) */}
          <div className="relative w-full">
            {/* The single continuous horizontal ground line */}
            <div className="absolute inset-x-0 top-0 h-px bg-navy/25 z-0" />

            {/* Nodes and Labels directly on the baseline */}
            <div className="grid grid-cols-6 gap-3 lg:gap-5 w-full relative z-10">
              {SKCL_TIMELINE_MILESTONES.map((milestone, index) => {
                const isHovered = hoveredIndex === index;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={milestone.year}
                    className="flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Circle node centered exactly on the ground line (h-3 w-3 with -mt-1.5) */}
                    <div
                      className={cn(
                        "h-3 w-3 -mt-1.5 rounded-full border-2 transition-all duration-200 bg-white",
                        isHovered || isActive
                          ? "border-gold bg-navy scale-125 shadow-xs"
                          : "border-navy/40 group-hover:border-navy"
                      )}
                    />

                    {/* Year & Title directly below node */}
                    <div className="mt-3 text-center transition-colors">
                      <span
                        className={cn(
                          "block font-display text-lg lg:text-2xl font-bold tracking-tight transition-colors",
                          isHovered || isActive ? "text-navy" : "text-navy/85"
                        )}
                      >
                        {milestone.year}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block text-xs lg:text-sm font-medium transition-colors line-clamp-1",
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
        </div>

        {/* =========================================================================
            MOBILE VIEWPORT OPTIMIZATION (Screens < 768px)
            ========================================================================= */}
        <div className="block md:hidden mt-8">
          {/* Quick Year Pill Segmented Bar */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar rounded-xl bg-white/70 backdrop-blur-xs p-1.5 border border-navy/10 shadow-2xs">
            {SKCL_TIMELINE_MILESTONES.map((m, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex-1 py-1.5 px-2 rounded-lg text-xs font-display font-semibold transition-all text-center",
                    isSelected
                      ? "bg-navy text-gold shadow-xs"
                      : "text-navy/70 hover:text-navy hover:bg-navy/5"
                  )}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Mobile Featured Building Stage (Supports Touch Swipe) */}
          <div
            className="relative mt-6 rounded-2xl bg-white/50 backdrop-blur-xs border border-navy/10 p-5 shadow-2xs select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Step indicator and quick navigation arrows */}
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-mono text-steel uppercase tracking-wider">
                Milestone {activeIndex + 1} of {SKCL_TIMELINE_MILESTONES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={activeIndex === 0}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-navy/15 bg-white text-navy disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Previous milestone"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((prev) =>
                      Math.min(prev + 1, SKCL_TIMELINE_MILESTONES.length - 1)
                    )
                  }
                  disabled={activeIndex === SKCL_TIMELINE_MILESTONES.length - 1}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-navy/15 bg-white text-navy disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Next milestone"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Building Artwork Stage - Generous, beautiful scale on mobile */}
            <div className="relative mt-3 flex h-[210px] w-full items-end justify-center">
              <ActiveMobileComponent
                isHovered={true}
                className="h-full w-auto max-w-[85%] drop-shadow-[0_6px_16px_rgba(7,21,37,0.08)]"
              />
            </div>

            {/* Continuous Ground Line on Mobile Stage */}
            <div className="relative w-full mt-0">
              <div className="h-px w-full bg-navy/25" />
              <div className="flex justify-center -mt-1.5">
                <div className="h-3 w-3 rounded-full border-2 border-gold bg-navy shadow-xs" />
              </div>
            </div>

            {/* Milestone Info */}
            <div className="mt-4 text-center">
              <div className="font-display text-3xl font-bold text-navy tracking-tight">
                {activeMobileMilestone.year}
              </div>
              <div className="mt-0.5 font-display text-sm font-semibold text-gold uppercase tracking-wider">
                {activeMobileMilestone.title}
              </div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy border border-navy/10">
                <span>{activeMobileMilestone.typology}</span>
                <span className="text-navy/30">·</span>
                <span className="font-mono text-gold font-semibold">
                  {activeMobileMilestone.sqft}
                </span>
              </div>
              <p className="mt-2.5 text-xs text-steel leading-relaxed max-w-sm mx-auto">
                {activeMobileMilestone.note}
              </p>
            </div>

            {/* Swipe hint */}
            <div className="mt-4 text-center">
              <span className="text-[0.65rem] text-steel/60 uppercase tracking-widest">
                Swipe left / right to navigate years
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
