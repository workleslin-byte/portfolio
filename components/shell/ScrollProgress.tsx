"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A thin reading-progress bar pinned to the very top of the viewport, filling
 * left-to-right as the page scrolls. Sits above the header, below the mobile
 * drawer. Disabled under reduced motion.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, background: "linear-gradient(to right, var(--grad-start), var(--grad-end))" }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}
