"use client";

import { Container } from "../ui/primitives";
import { SKCL_METRICS } from "@/lib/data/site";
import { useCountUp } from "@/hooks/use-skcl-motion";
import { cn } from "@/lib/utils";

function Metric({
  metric,
  className,
}: {
  metric: (typeof SKCL_METRICS)[number];
  className?: string;
}) {
  const isYear = "isYear" in metric && metric.isYear;
  const { ref, display } = useCountUp(metric.value, {
    duration: 2.4,
    suffix: metric.suffix,
    decimals: 0,
  });

  return (
    <div
      className={cn(
        "group flex flex-col items-start border-l border-white/10 pl-3 py-1 text-left sm:border-l-0 sm:pl-0 sm:px-3 md:px-5 lg:px-7",
        className
      )}
    >
      <span
        ref={ref}
        className="skcl-editorial text-2xl font-light leading-none text-soft-white transition-colors duration-500 group-hover:text-gold sm:text-3xl md:text-4xl lg:text-[2.65rem]"
      >
        {display}
      </span>
      <span className="mt-1.5 font-display text-[0.56rem] uppercase tracking-[0.2em] text-soft-white/50 transition-colors duration-300 group-hover:text-soft-white/80 sm:mt-2 sm:text-[0.62rem] sm:tracking-[0.26em]">
        {metric.label}
      </span>
      {isYear && (
        <span className="mt-1 h-px w-6 bg-gold/60" />
      )}
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative overflow-hidden bg-navy py-6 text-soft-white sm:py-8 md:py-10">
      {/* faint grid */}
      <div className="skcl-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <Container>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6 md:mb-7">
          <span className="skcl-label text-[0.62rem] tracking-[0.22em] text-gold sm:text-[0.68rem] sm:tracking-[0.28em]">
            By the Numbers
          </span>
          <span className="font-display text-[0.55rem] uppercase tracking-[0.18em] text-soft-white/40 sm:text-[0.62rem] sm:tracking-[0.28em]">
            Cumulative · Since Inception
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-5 sm:gap-0 sm:divide-x sm:divide-white/10">
          {SKCL_METRICS.map((m, idx) => (
            <Metric
              key={m.label}
              metric={m}
              className={idx === SKCL_METRICS.length - 1 ? "col-span-2 sm:col-span-1" : ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

