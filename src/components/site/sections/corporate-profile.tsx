"use client";

import Image from "next/image";
import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { LuxuryButton } from "../ui/luxury-button";
import { UNSPLASH_IMAGES } from "@/lib/constants/images";

export function CorporateProfile() {
  return (
    <section id="profile" className="relative w-full bg-navy py-24 text-soft-white md:py-32">
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — stacked glass brochure */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
            {/* stacked back pages */}
            <div className="absolute right-6 top-6 h-full w-full border border-white/10 bg-charcoal/60" />
            <div className="absolute right-3 top-3 h-full w-full border border-white/15 bg-charcoal/80" />
            {/* front page */}
            <div className="skcl-glass relative h-full w-full overflow-hidden p-8">
              <Image
                src={UNSPLASH_IMAGES.corporateProfile.url}
                alt={UNSPLASH_IMAGES.corporateProfile.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/30" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="skcl-label text-gold">Corporate Profile</span>
                  <p className="mt-3 font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/60">
                    Edition 2025
                  </p>
                </div>
                <div>
                  <p className="skcl-editorial text-4xl text-soft-white">SKCL</p>
                  <p className="mt-1 font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/55">
                    Building Chennai&apos;s Business Landscape
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy + CTAs */}
          <div>
            <Reveal>
              <SectionLabel>Corporate Profile</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 skcl-editorial text-4xl text-soft-white md:text-5xl lg:text-6xl">
                The SKCL executive brief.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-soft-white/65">
                A complete document covering the portfolio, the joint venture
                practice, facility management operations and the sustainability
                framework — prepared for institutional audiences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LuxuryButton href="#contact" variant="gold" withArrow>
                  Download Corporate Profile
                </LuxuryButton>
                <LuxuryButton href="#contact" variant="link-light" withArrow>
                  View Annual Report
                </LuxuryButton>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6">
                <div className="flex flex-col">
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.28em] text-soft-white/45">
                    Format
                  </span>
                  <span className="font-display text-sm text-soft-white">PDF · 48 pages</span>
                </div>
                <span className="h-8 w-px bg-white/15" />
                <div className="flex flex-col">
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.28em] text-soft-white/45">
                    Updated
                  </span>
                  <span className="font-display text-sm text-soft-white">2025</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
