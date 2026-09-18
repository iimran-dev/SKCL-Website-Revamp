"use client";

import { cn } from "@/lib/utils";
import { SKCL_NAV } from "@/lib/data/site";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuxuryButton } from "../ui/luxury-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-navy/80 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="SKCL home"
          >
            <span className="flex h-9 items-center font-display text-xl font-semibold tracking-[0.18em] text-soft-white">
              SKCL
            </span>
            <span className="hidden h-4 w-px bg-soft-white/30 sm:block" />
            <span className="hidden font-display text-[0.62rem] uppercase tracking-[0.28em] text-soft-white/55 sm:block">
              Since 2003
            </span>
          </a>

          {/* Center nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {SKCL_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-display text-[0.72rem] uppercase tracking-[0.18em] text-soft-white/75 transition-colors duration-300 hover:text-soft-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <LuxuryButton href="#contact" variant="outline-light" withArrow>
              Get in Touch
            </LuxuryButton>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label="Open menu"
          >
            <span className="block h-px w-7 bg-soft-white transition-all" />
            <span className="block h-px w-7 bg-soft-white transition-all" />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-navy text-soft-white lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-xl font-semibold tracking-[0.18em]">
                  SKCL
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M5 5l14 14M19 5L5 19"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-1 px-8">
                {SKCL_NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.12 + i * 0.07,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-baseline justify-between border-b border-white/8 py-5"
                  >
                    <span className="skcl-editorial text-4xl text-soft-white">
                      {item.label}
                    </span>
                    <span className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-6 px-8 py-10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center bg-gold px-8 py-4 font-display text-[0.72rem] uppercase tracking-[0.22em] text-navy"
                >
                  Get in Touch
                </a>
                <div className="flex items-center justify-between font-display text-[0.62rem] uppercase tracking-[0.24em] text-soft-white/45">
                  <span>Chennai · India</span>
                  <span>est. 2003</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
