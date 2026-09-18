"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

// Register once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Syncs GSAP ScrollTrigger with the global Lenis instance created by SmoothScrollProvider */
export function useLenisScrollTrigger() {
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = (window as unknown as { lenis?: { on: (e: string, cb: () => void) => void; emit?: () => void } }).lenis;
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    // Proxy: drive GSAP ticker through Lenis raf
    const tickerCb = (time: number) => {
      if ((lenis as unknown as { raf: (t: number) => void }).raf) {
        (lenis as unknown as { raf: (t: number) => void }).raf(time * 1000);
      }
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Force a refresh after images/fonts settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      gsap.ticker.remove(tickerCb);
      clearTimeout(t);
    };
  }, []);
}

export { gsap, ScrollTrigger };
