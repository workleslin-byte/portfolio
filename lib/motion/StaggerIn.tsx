"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface StaggerInProps {
  children: React.ReactNode;
  className?: string;
  /** CSS selector for the items to stagger (defaults to direct children). */
  selector?: string;
  start?: string;
  stagger?: number;
  y?: number;
  as?: "div" | "ul" | "section";
}

export default function StaggerIn({
  children,
  className = "",
  selector = ":scope > *",
  start = "top 85%",
  stagger = 0.08,
  y = 40,
  as: Tag = "div",
}: StaggerInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(items, { y, opacity: 0 });
    const st = ScrollTrigger.create({
      trigger: root,
      start,
      once: true,
      onEnter: () =>
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger,
        }),
    });
    return () => st.kill();
  }, [selector, start, stagger, y]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
