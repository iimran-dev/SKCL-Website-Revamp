"use client";

import { Container, SectionLabel, StaggerGroup, StaggerItem, Reveal } from "../ui/primitives";
import { SKCL_WHY } from "@/lib/data/site";

export function WhyChooseSkcl() {
  return (
    <section id="why" className="relative w-full bg-navy py-12 text-soft-white sm:py-16 md:py-24 lg:py-32">
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-25" />
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Left — large statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel>Why Clients Choose SKCL</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 skcl-editorial text-2xl leading-[1.12] text-soft-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Confidence, engineered into every decision.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-soft-white/65 sm:mt-5 sm:text-sm md:text-base">
                Enterprises that lease from SKCL are not buying space. They are
                buying certainty — in delivery, in operations, and in the
                partnership that maintains a building for the long arc of its
                life.
              </p>
            </Reveal>
          </div>

          {/* Right — progressive reveal list */}
          <div className="lg:col-span-7">
            <StaggerGroup className="divide-y divide-white/10 border-y border-white/10 lg:border-t-0">
              {SKCL_WHY.map((item, i) => (
                <StaggerItem key={item.title}>
                  <div className="group -mx-2 flex items-start gap-3.5 rounded-sm px-2 py-3.5 transition-colors hover:bg-white/[0.02] sm:mx-0 sm:gap-5 sm:px-0 sm:py-5 md:gap-6 md:py-6 lg:py-7">
                    <span className="mt-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[0.7rem] sm:tracking-[0.24em]">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="skcl-editorial text-lg font-medium text-soft-white transition-colors duration-300 group-hover:text-gold sm:text-xl md:text-2xl lg:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-soft-white/60 sm:mt-2 sm:text-sm">
                        {item.copy}
                      </p>
                    </div>
                    <span className="mt-2 hidden h-px w-0 shrink-0 bg-gold/70 transition-all duration-500 group-hover:w-8 sm:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}

