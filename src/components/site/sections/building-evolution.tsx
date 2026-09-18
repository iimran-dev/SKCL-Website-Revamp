"use client";

import { useRef } from "react";
import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_TIMELINE_MILESTONES } from "@/lib/data/site";
import { gsap, ScrollTrigger, useLenisScrollTrigger } from "@/hooks/use-gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

export function BuildingEvolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useLenisScrollTrigger();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const svg = svgRef.current;
    if (!section || !svg) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ isDesktop: "(min-width: 768px)" }, () => {
        const layers = svg.querySelectorAll<SVGElement>("[data-layer]");
        layers.forEach((layer) => {
          const final = Number(layer.dataset.final ?? "1");
          const isBase = layer.dataset.layer === "1";
          // Wireframe (layer 1) is visible from the start so the stage never looks empty;
          // subsequent layers scrub in as the user scrolls.
          gsap.set(layer, { opacity: isBase ? final : 0 });
          if (layer.tagName === "path" || layer.tagName === "line" || layer.tagName === "rect") {
            const el = layer as unknown as SVGGeometryElement;
            if (typeof el.getTotalLength === "function") {
              const length = el.getTotalLength();
              gsap.set(layer, {
                strokeDasharray: length,
                strokeDashoffset: isBase ? 0 : length,
              });
            }
          }
          if (isBase) return; // base layer is static — no scrub needed
          gsap.to(layer, {
            opacity: final,
            strokeDashoffset: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          });
        });
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="evolution"
      className="relative w-full overflow-hidden bg-soft-white"
      style={{ height: "200vh" }}
    >
      {/* Sticky stage — stays fixed while you scroll through the section */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-soft-white">
        <div className="skcl-grid-bg-dark pointer-events-none absolute inset-0 opacity-50" />

        {/* Header */}
        <Container className="absolute inset-x-0 top-0 z-20 pt-28">
          <Reveal>
            <SectionLabel>Building Evolution</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl skcl-editorial text-4xl text-navy md:text-5xl lg:text-6xl">
              From wireframe to landmark — two decades of disciplined assembly.
            </h2>
          </Reveal>
        </Container>

        {/* SVG stage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 600 700"
            className="h-[80vh] w-auto"
            fill="none"
            aria-label="Building assembly animation"
          >
            {/* Ground line */}
            <line
              x1="40" y1="620" x2="560" y2="620"
              stroke="#071525" strokeOpacity="0.25" strokeWidth="1"
            />

            {/* LAYER 1 — Wireframe outline */}
            <g data-layer="1" data-final="0.9" stroke="#5e6470" strokeWidth="1.5">
              <rect x="180" y="160" width="240" height="460" />
              <line x1="180" y1="280" x2="420" y2="280" />
              <line x1="180" y1="400" x2="420" y2="400" />
              <line x1="180" y1="520" x2="420" y2="520" />
            </g>

            {/* LAYER 2 — Steel structure */}
            <g data-layer="2" data-final="0.85" stroke="#071525" strokeWidth="2.5">
              <line x1="180" y1="160" x2="180" y2="620" />
              <line x1="240" y1="160" x2="240" y2="620" />
              <line x1="300" y1="160" x2="300" y2="620" />
              <line x1="360" y1="160" x2="360" y2="620" />
              <line x1="420" y1="160" x2="420" y2="620" />
              <line x1="180" y1="220" x2="420" y2="220" />
              <line x1="180" y1="340" x2="420" y2="340" />
              <line x1="180" y1="460" x2="420" y2="460" />
              <line x1="180" y1="580" x2="420" y2="580" />
            </g>

            {/* LAYER 3 — Glass facade */}
            <g data-layer="3" data-final="0.55" fill="#3b82f6" fillOpacity="0.08">
              <rect x="184" y="224" width="52" height="112" />
              <rect x="244" y="224" width="52" height="112" />
              <rect x="304" y="224" width="52" height="112" />
              <rect x="364" y="224" width="52" height="112" />
              <rect x="184" y="344" width="52" height="112" />
              <rect x="244" y="344" width="52" height="112" />
              <rect x="304" y="344" width="52" height="112" />
              <rect x="364" y="344" width="52" height="112" />
              <rect x="184" y="464" width="52" height="112" />
              <rect x="244" y="464" width="52" height="112" />
              <rect x="304" y="464" width="52" height="112" />
              <rect x="364" y="464" width="52" height="112" />
            </g>

            {/* LAYER 4 — Landscape */}
            <g data-layer="4" data-final="0.9">
              <path
                d="M120 620 Q150 580 180 620 Q210 585 240 620 Q270 590 300 620"
                stroke="#5e6470" strokeWidth="1.5" fill="none"
              />
              <path
                d="M320 620 Q360 580 400 620 Q440 585 480 620"
                stroke="#5e6470" strokeWidth="1.5" fill="none"
              />
              <circle cx="130" cy="610" r="8" fill="#5e6470" fillOpacity="0.4" />
              <circle cx="470" cy="610" r="8" fill="#5e6470" fillOpacity="0.4" />
            </g>

            {/* LAYER 5 — Lighting (window glow) */}
            <g data-layer="5" data-final="1" fill="#b68b4c">
              <rect x="190" y="230" width="40" height="100" fillOpacity="0.6" />
              <rect x="250" y="350" width="40" height="100" fillOpacity="0.5" />
              <rect x="310" y="230" width="40" height="100" fillOpacity="0.7" />
              <rect x="370" y="470" width="40" height="90" fillOpacity="0.6" />
              <rect x="190" y="470" width="40" height="90" fillOpacity="0.5" />
              <rect x="310" y="470" width="40" height="90" fillOpacity="0.7" />
            </g>

            {/* Annotation marks */}
            <g stroke="#b68b4c" strokeOpacity="0.5" strokeWidth="0.75">
              <line x1="420" y1="220" x2="470" y2="220" />
              <line x1="470" y1="218" x2="470" y2="222" />
              <line x1="420" y1="460" x2="470" y2="460" />
              <line x1="470" y1="458" x2="470" y2="462" />
            </g>
          </svg>
        </div>

        {/* caption */}
        <div className="absolute bottom-10 left-6 z-20 md:left-10 lg:left-16">
          <span className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-steel">
            Assembly Sequence · 2003 → 2026
          </span>
        </div>
      </div>

      {/* Timeline — appears after the sticky assembly, in normal flow */}
      <Container className="relative z-10 -mt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-navy/15" />
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-6">
            {SKCL_TIMELINE_MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="flex flex-col">
                  <span className="skcl-editorial text-2xl text-navy md:text-3xl">
                    {m.year}
                  </span>
                  <span className="mt-2 font-display text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                    {m.title}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-steel">
                    {m.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
