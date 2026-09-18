"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ============ Section Label (thin uppercase gold) ============ */
export function SectionLabel({
  children,
  className,
  align = "left",
  tone = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "gold" | "muted" | "blue";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          tone === "gold" && "bg-gold",
          tone === "blue" && "bg-accent-blue",
          tone === "muted" && "bg-steel/40"
        )}
      />
      <span
        className={cn(
          "skcl-label",
          tone === "gold" && "text-gold",
          tone === "blue" && "text-accent-blue",
          tone === "muted" && "text-steel"
        )}
      >
        {children}
      </span>
    </div>
  );
}

/* ============ Editorial Heading (serif, large) ============ */
export function EditorialHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "skcl-editorial text-foreground text-balance",
        Tag === "h1" && "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]",
        Tag === "h2" && "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
        Tag === "h3" && "text-3xl sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ============ Display Heading (architectural sans) ============ */
export function DisplayHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "skcl-display text-balance",
        Tag === "h1" && "text-5xl sm:text-6xl md:text-7xl lg:text-[6rem]",
        Tag === "h2" && "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
        Tag === "h3" && "text-3xl sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ============ Reveal-on-scroll wrapper (framer motion) ============ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ============ Stagger container + item ============ */
export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ============ Architectural Hairline Divider ============ */
export function SectionDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div
      className={cn(
        "w-full h-px",
        tone === "light"
          ? "bg-foreground/10"
          : "bg-white/10"
      )}
    />
  );
}

/* ============ Section wrapper with consistent rhythm ============ */
export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        tone === "light" && "bg-soft-white text-navy",
        tone === "dark" && "bg-navy text-soft-white",
        tone === "navy" && "skcl-navy-gradient text-soft-white",
        className
      )}
    >
      {children}
    </section>
  );
}

/* ============ Container — 1440px max with breathing room ============ */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-10 lg:px-16",
        size === "default" && "max-w-[1440px]",
        size === "wide" && "max-w-[1600px]",
        size === "narrow" && "max-w-[1100px]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ============ Blueprint / coordinate caption ============ */
export function BlueprintCaption({
  label,
  value,
  className,
  tone = "light",
}: {
  label: string;
  value: string;
  className?: string;
  tone?: "light" | "onDark";
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "skcl-label text-[0.6rem]",
          tone === "light" ? "text-steel" : "text-soft-white/60"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "font-display text-sm tracking-tight",
          tone === "light" ? "text-foreground" : "text-soft-white"
        )}
      >
        {value}
      </span>
    </div>
  );
}

