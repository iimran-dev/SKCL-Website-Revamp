"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Reveal } from "../ui/primitives";
import { getAssetPath } from "@/lib/utils";

const CHENNAI_PIN_NODES = [
  {
    id: "ambattur",
    name: "Ambattur",
    x: 53.5,
    y: 26.5,
    labelPos: "right" as const,
    tag: "West Industrial & Tech Hub",
    title: "Fast-Track Enterprise Corridor",
    desc: "Robust manufacturing, logistics, and built-to-suit technology infrastructure.",
  },
  {
    id: "guindy",
    name: "Guindy",
    x: 67.5,
    y: 49.5,
    labelPos: "bottom" as const,
    tag: "Central CBD & Transit Node",
    title: "SKCL Horizon & Transit Spine",
    desc: "Multi-modal connectivity intersecting metro, airport, and institutional centers.",
  },
  {
    id: "kotturpuram",
    name: "Kotturpuram",
    x: 78.5,
    y: 46.5,
    labelPos: "right" as const,
    tag: "Prestige Riverfront Corridor",
    title: "SKCL Square & Premium Offices",
    desc: "Prime address along the Adyar riverfront near academic and commercial landmarks.",
  },
  {
    id: "taramani",
    name: "Taramani",
    x: 70.0,
    y: 75.5,
    labelPos: "right" as const,
    tag: "OMR IT Gateway Corridor",
    title: "SKCL One & Technology Parks",
    desc: "Epicenter of Chennai's technology highway, housing global Fortune 500 enterprises.",
  },
];

export function ChennaiFootprint() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section
      id="footprint"
      className="relative flex min-h-[400px] sm:min-h-[430px] md:min-h-[460px] w-full items-center overflow-hidden bg-navy py-10 sm:py-12 md:py-14 text-soft-white"
    >
      {/* Background Satellite Night Map - full width from left=0 to right=0 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-0 w-full h-full select-none overflow-hidden">
        <Image
          src={getAssetPath("/chennai-map.svg")}
          alt="Chennai Satellite Map at Night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center opacity-90"
        />
      </div>


      {/* Right Editorial Accent (matching mockup) */}
      <div className="pointer-events-none absolute right-8 lg:right-14 top-1/2 -translate-y-1/2 z-10 hidden xl:block select-none text-right">
        <p className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-soft-white/35 leading-[1.85]">
          More than<br />buildings<br />A stronger<br />Chennai
        </p>
      </div>

      {/* Foreground Content Container */}
      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Copy & Explore CTA */}
          <div className="max-w-md lg:col-span-5">
            <Reveal>
              <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                OUR FOOTPRINT
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="skcl-editorial mt-3 text-2xl font-normal leading-[1.12] tracking-tight text-soft-white sm:text-3xl lg:text-[2.65rem]">
                Strategically
                <br />
                across Chennai
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-3.5 max-w-sm font-sans text-xs leading-[1.65] text-soft-white/70 sm:text-sm">
                Prime locations. Greater possibilities.
                <br className="hidden sm:inline" />
                {" "}Our developments are positioned
                <br className="hidden sm:inline" />
                {" "}where business and people thrive.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-5">
                <a
                  href="#developments"
                  className="group inline-flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wide text-soft-white transition-colors duration-300 hover:text-gold"
                >
                  <span>Explore on Map</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-gold/10">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

