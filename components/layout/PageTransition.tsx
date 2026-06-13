"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion/useReducedMotion";

/**
 * Curtain wipe on route change: a cobalt panel snaps over the screen,
 * then wipes upward to reveal the new page. Skips the initial load
 * (the preloader covers that) and respects reduced-motion.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || prefersReducedMotion()) return;
    if (first.current) {
      first.current = false;
      return;
    }
    gsap.set(panel, { scaleY: 1, transformOrigin: "bottom center" });
    gsap.to(panel, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.05,
    });
  }, [pathname]);

  return (
    <div
      ref={panelRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] bg-accent"
      style={{ transform: "scaleY(0)" }}
    />
  );
}
