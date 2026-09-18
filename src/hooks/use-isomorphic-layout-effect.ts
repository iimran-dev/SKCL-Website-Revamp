import { useEffect } from "react";

/**
 * useIsomorphicLayoutEffect — runs useLayoutEffect on the client,
 * useEffect during SSR. Avoids hydration warnings for GSAP / DOM reads.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useEffect : useEffect;
