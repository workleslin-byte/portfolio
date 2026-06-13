"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface MaskRevealProps {
  /** Each entry becomes its own clipped line, revealed in sequence. */
  lines: React.ReactNode[];
  /** Class applied to every line element (font, size, color). */
  lineClassName?: string;
  className?: string;
  /**
   * Playback control.
   * - omit → reveal on scroll into view
   * - boolean → reveal when it flips to true (e.g. gated on a preloader)
   */
  play?: boolean;
  start?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}

export default function MaskReveal({
  lines,
  lineClassName = "",
  className = "",
  play,
  start = "top 85%",
  stagger = 0.12,
  duration = 0.9,
  delay = 0,
  as: Tag = "div",
}: MaskRevealProps) {
  const rootRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const inners = root.querySelectorAll<HTMLElement>("[data-line-inner]");
    if (!inners.length) return;

    if (prefersReducedMotion()) {
      gsap.set(inners, { yPercent: 0, opacity: 1 });
      return;
    }

    gsap.set(inners, { yPercent: 110, opacity: 0 });

    const animate = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;
      gsap.to(inners, {
        yPercent: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger,
        delay,
      });
    };

    // Controlled mode (gated on a boolean such as preloader `ready`)
    if (typeof play === "boolean") {
      if (play) animate();
      return;
    }

    // Scroll mode
    const st = ScrollTrigger.create({
      trigger: root,
      start,
      once: true,
      onEnter: animate,
    });
    return () => st.kill();
  }, [play, start, stagger, duration, delay]);

  return (
    <Tag ref={rootRef as never} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <span data-line-inner className={`block ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
