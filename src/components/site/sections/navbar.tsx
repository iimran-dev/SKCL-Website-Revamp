"use client";

import { cn } from "@/lib/utils";
import { SKCL_NAV } from "@/lib/data/site";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuxuryButton } from "../ui/luxury-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = SKCL_NAV.map((item) => item.href.replace("#", ""));

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Linear scrollspy to highlight current section
      const scrollPos = window.scrollY + 240;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

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
            ? "border-b border-white/8 bg-navy/85 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12 xl:px-16">
          {/* Logo */}
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-3"
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

          {/* Center nav — linear sequence from page.tsx */}
          <ul className="hidden items-center gap-3 lg:flex xl:gap-5 2xl:gap-6">
            {SKCL_NAV.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "group relative whitespace-nowrap font-display text-[0.64rem] uppercase tracking-[0.14em] transition-colors duration-300 xl:text-[0.7rem] xl:tracking-[0.16em] 2xl:text-[0.74rem]",
                      isActive
                        ? "font-medium text-gold"
                        : "text-soft-white/70 hover:text-soft-white"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right CTA */}
          <div className="hidden shrink-0 lg:block">
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

              {/* Scrollable linear nav links */}
              <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-y-auto px-6 py-2 sm:px-10">
                {SKCL_NAV.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.04 + i * 0.03,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        "group flex items-center justify-between border-b border-white/8 py-2.5 transition-colors sm:py-3",
                        isActive ? "text-gold" : "text-soft-white"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        )}
                        <span className="skcl-editorial text-xl transition-colors group-hover:text-gold sm:text-2xl md:text-3xl">
                          {item.label}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "font-display text-[0.62rem] uppercase tracking-[0.24em]",
                          isActive ? "text-gold font-semibold" : "text-gold/70"
                        )}
                      >
                        0{i + 1}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer footer */}
              <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:px-10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center bg-gold px-6 py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy transition-transform active:scale-[0.98]"
                >
                  Get in Touch
                </a>
                <div className="flex items-center justify-between font-display text-[0.58rem] uppercase tracking-[0.22em] text-soft-white/45">
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

