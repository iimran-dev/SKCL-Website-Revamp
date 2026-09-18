"use client";

import { motion } from "framer-motion";
import { Container, SectionLabel, Reveal, StaggerGroup, StaggerItem } from "../ui/primitives";
import { SKCL_FACILITY_STATS } from "@/lib/data/site";
import { useCountUp } from "@/hooks/use-skcl-motion";

function FacStat({
  stat,
}: {
  stat: (typeof SKCL_FACILITY_STATS)[number];
}) {
  const { ref, display } = useCountUp(stat.value, {
    suffix: stat.suffix,
    decimals: stat.decimals ?? 0,
    duration: 2,
  });
  return (
    <div className="flex flex-col gap-2 border-t border-white/10 pt-5">
      <span
        ref={ref}
        className="skcl-editorial text-3xl text-soft-white md:text-4xl"
      >
        {display}
      </span>
      <span className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-soft-white/45">
        {stat.label}
      </span>
    </div>
  );
}

export function FacilityManagement() {
  return (
    <section id="facility" className="relative w-full overflow-hidden bg-charcoal py-24 text-soft-white md:py-32">
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — operations dashboard mock */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="skcl-glass relative overflow-hidden p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gold skcl-shimmer" />
                    <span className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-soft-white/70">
                      Live Operations · Portfolio
                    </span>
                  </div>
                  <span className="font-display text-[0.55rem] uppercase tracking-[0.24em] text-soft-white/40">
                    Updated 02:14 IST
                  </span>
                </div>

                {/* animated bars row */}
                <div className="mb-8 flex h-24 items-end gap-2">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="flex-1 bg-gradient-to-t from-gold/40 to-gold/80"
                      initial={{ height: "20%" }}
                      whileInView={{
                        height: `${30 + Math.abs(Math.sin(i * 0.7)) * 65}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: i * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  ))}
                </div>

                {/* coverage map mini */}
                <div className="mb-8 grid grid-cols-3 gap-4">
                  {["OMR", "Guindy", "T. Nagar"].map((zone) => (
                    <div
                      key={zone}
                      className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-navy/40"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(59,130,246,0.18),transparent_70%)]" />
                      <span className="absolute left-2 top-2 font-display text-[0.5rem] uppercase tracking-[0.2em] text-soft-white/55">
                        {zone}
                      </span>
                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-gold skcl-pulse-glow" />
                    </div>
                  ))}
                </div>

                <StaggerGroup className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {SKCL_FACILITY_STATS.map((s) => (
                    <StaggerItem key={s.label}>
                      <FacStat stat={s} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          </div>

          {/* Right — editorial copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>Facility Management</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 skcl-editorial text-4xl text-soft-white md:text-5xl lg:text-6xl">
                Operational excellence, sustained over decades.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-soft-white/65">
                Integrated facility management across the entire SKCL portfolio —
                engineering, soft services, security, sustainability and tenant
                experience, delivered by a single accountable team.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-8 space-y-4">
                {[
                  "Single operations desk across every asset",
                  "Sensor-led predictive maintenance",
                  "Tenant experience team on-site, full-time",
                  "Quarterly ESG and performance reporting",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-soft-white/75">
                    <span className="mt-2 h-1 w-3 bg-gold" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
