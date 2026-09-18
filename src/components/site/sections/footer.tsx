"use client";

import { Container, SectionLabel, Reveal } from "../ui/primitives";
import { SKCL_FOOTER_LINKS } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="relative w-full bg-navy text-soft-white">
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <Container className="relative">
        {/* Top — brand + CTA row */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:py-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold tracking-[0.16em]">
                  SKCL
                </span>
                <span className="h-5 w-px bg-soft-white/30" />
                <span className="font-display text-[0.62rem] uppercase tracking-[0.28em] text-soft-white/55">
                  Since 2003
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-soft-white/55">
                Grade A commercial real estate developer headquartered in
                Chennai. Building the infrastructure of Indian enterprise — for
                the next generation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/45">
                  Chennai · India
                </span>
                <span className="h-3 w-px bg-white/15" />
                <span className="font-display text-[0.55rem] uppercase tracking-[0.3em] text-soft-white/45">
                  est. 2003
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:pl-16">
            <Reveal delay={0.15}>
              <SectionLabel>Get in Touch</SectionLabel>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="mailto:contact@skcl.com"
                className="group mt-6 inline-block skcl-editorial text-3xl text-soft-white md:text-4xl"
              >
                <span className="bg-gradient-to-r from-soft-white to-soft-white bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[length:100%_1px]">
                  contact@skcl.com
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-sm leading-relaxed text-soft-white/55">
                Leasing, joint ventures and corporate enquiries are welcomed
                directly.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Middle — link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 md:grid-cols-3 lg:grid-cols-6 lg:py-20">
          {Object.entries(SKCL_FOOTER_LINKS).map(([group, items]) => (
            <Reveal key={group}>
              <div className="flex flex-col gap-4">
                <span className="font-display text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {group}
                </span>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group inline-flex items-center text-sm text-soft-white/65 transition-colors duration-300 hover:text-soft-white"
                      >
                        <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-3 group-hover:mr-2" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom — legal */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 md:flex-row md:items-center">
          <p className="font-display text-[0.6rem] uppercase tracking-[0.24em] text-soft-white/40">
            © {new Date().getFullYear()} SKCL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram", "Privacy", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-display text-[0.6rem] uppercase tracking-[0.24em] text-soft-white/40 transition-colors hover:text-soft-white"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
