"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  /** e.g. "₹16.8 Cr", "20.2K", "2.2×", "804K", "Founder" */
  value: string;
  className?: string;
  start?: string;
  duration?: number;
  /** Play immediately instead of on scroll (e.g. case-study hero). */
  play?: boolean;
}

// Split "₹16.8 Cr" → { prefix:"₹", num:16.8, decimals:1, suffix:" Cr", grouped:false }
function parse(value: string) {
  const m = value.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
  if (!m) return null;
  const [, prefix, rawNum, suffix] = m;
  const grouped = rawNum.includes(",");
  const clean = rawNum.replace(/,/g, "");
  const dot = clean.indexOf(".");
  const decimals = dot === -1 ? 0 : clean.length - dot - 1;
  return { prefix, num: parseFloat(clean), decimals, suffix, grouped };
}

export default function CountUp({
  value,
  className = "",
  start = "top 85%",
  duration = 1.4,
  play,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parse(value);

    // Non-numeric value (e.g. "Founder") — render as-is, no count.
    if (!parsed) {
      el.textContent = value;
      return;
    }

    const { prefix, num, decimals, suffix, grouped } = parsed;
    const fmt = (n: number) => {
      const fixed = n.toFixed(decimals);
      const out = grouped
        ? Number(fixed).toLocaleString("en-IN", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
      return `${prefix}${out}${suffix}`;
    };

    if (prefersReducedMotion()) {
      el.textContent = fmt(num);
      return;
    }

    el.textContent = fmt(0);

    const run = () => {
      if (done.current) return;
      done.current = true;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: num,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = fmt(obj.v);
        },
      });
    };

    if (typeof play === "boolean") {
      if (play) run();
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: run,
    });
    return () => st.kill();
  }, [value, start, duration, play]);

  return <span ref={ref} className={`tabular-nums ${className}`}>{value}</span>;
}
