"use client";

import { Container, SectionLabel, StaggerGroup, StaggerItem, Reveal } from "../ui/primitives";
import { SKCL_WHY } from "@/lib/data/site";

export function WhyChooseSkcl() {
  return (
    <section id="why" className="relative w-full bg-navy py-24 text-soft-white md:py-32">
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — large statement */}
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel>Why Clients Choose SKCL</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 skcl-editorial text-4xl text-soft-white md:text-5xl lg:text-6xl">
                Confidence, engineered into every decision.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-soft-white/60">
                Enterprises that lease from SKCL are not buying space. They are
                buying certainty — in delivery, in operations, and in the
                partnership that maintains a building for the long arc of its
                life.
              </p>
            </Reveal>
          </div>

          {/* Right — progressive reveal list */}
          <div className="lg:col-span-6">
            <StaggerGroup className="divide-y divide-white/10">
              {SKCL_WHY.map((item, i) => (
                <StaggerItem key={item.title}>
                  <div className="group flex items-start gap-6 py-7">
                    <span className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.24em] text-gold">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="skcl-editorial text-2xl text-soft-white md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-soft-white/60">
                        {item.copy}
                      </p>
                    </div>
                    <span className="mt-2 h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
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
