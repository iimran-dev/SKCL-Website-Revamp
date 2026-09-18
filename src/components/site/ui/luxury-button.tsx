"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "ghost-light" | "ghost-dark" | "gold" | "outline-light" | "outline-dark" | "link-light" | "link-dark";

const base =
  "group relative inline-flex items-center justify-center gap-3 font-display text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-soft-white px-8 py-4 hover:bg-charcoal",
  "ghost-light":
    "text-soft-white/80 hover:text-soft-white px-2 py-2",
  "ghost-dark":
    "text-navy/80 hover:text-navy px-2 py-2",
  gold:
    "bg-gold text-navy px-8 py-4 hover:bg-[#9a753d] hover:shadow-[0_8px_30px_-8px_rgba(182,139,76,0.6)]",
  "outline-light":
    "border border-soft-white/30 text-soft-white px-8 py-4 hover:bg-soft-white/5 hover:border-soft-white/60",
  "outline-dark":
    "border border-navy/20 text-navy px-8 py-4 hover:bg-navy/5 hover:border-navy/40",
  "link-light":
    "text-soft-white px-0 py-2",
  "link-dark":
    "text-navy px-0 py-2",
};

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  withArrow?: boolean;
}

export const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = "primary", href, withArrow, children, ...props }, ref) => {
    const content = (
      <>
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <svg
            className="relative z-10 h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 6h10M7 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="square"
            />
          </svg>
        )}
        {/* underline sweep for link variants */}
        {(variant === "link-light" || variant === "link-dark") && (
          <span
            className={cn(
              "absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100",
              variant === "link-light" ? "bg-soft-white/60" : "bg-navy/60"
            )}
          />
        )}
      </>
    );

    const classes = cn(base, variants[variant], className);

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            "group inline-flex items-center",
            base,
            variants[variant],
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);
LuxuryButton.displayName = "LuxuryButton";
