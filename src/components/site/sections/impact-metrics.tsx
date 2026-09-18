"use client";

import { Container } from "../ui/primitives";
import { SKCL_METRICS } from "@/lib/data/site";
import { useCountUp } from "@/hooks/use-skcl-motion";

function Metric({
  metric,
}: {
  metric: (typeof SKCL_METRICS)[number];
}) {
  const isYear = "isYear" in metric && metric.isYear;
  const { ref, display } = useCountUp(metric.value, {
    duration: 2.4,
    suffix: metric.suffix,
    decimals: 0,
  });

  return (
    <div className="group flex flex-1 flex-col items-center px-6 py-2 text-center md:items-start md:text-left">
      <span
        ref={ref}
        className="skcl-editorial text-5xl text-soft-white transition-colors duration-500 group-hover:text-gold md:text-6xl"
      >
        {display}
      </span>
      <span className="mt-3 font-display text-[0.62rem] uppercase tracking-[0.32em] text-soft-white/45">
        {metric.label}
      </span>
      {isYear && (
        <span className="mt-1 h-px w-8 bg-gold/60" />
      )}
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-soft-white md:py-28">
      {/* faint grid */}
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <Container>
        <div className="mb-12 flex items-center justify-between">
          <span className="skcl-label text-gold">By the Numbers</span>
          <span className="font-display text-[0.62rem] uppercase tracking-[0.28em] text-soft-white/35">
            Cumulative · Since Inception
          </span>
        </div>
        <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
          {SKCL_METRICS.map((m) => (
            <Metric key={m.label} metric={m} />
          ))}
        </div>
      </Container>
    </section>
  );
}
