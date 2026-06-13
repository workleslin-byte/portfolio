"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export interface Bar {
  label: string;
  /** 0..1 fill proportion */
  value: number;
  display: string;
  highlight?: boolean;
}

interface Props {
  title?: string;
  bars: Bar[];
  tone?: "ink" | "paper";
  className?: string;
}

/**
 * Horizontal bars that grow on scroll. Pure data made kinetic — the
 * "presentation over information" move. transform-only, reduced-motion aware.
 */
export default function GrowthBars({ title, bars, tone = "ink", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const fg = tone === "ink" ? "text-paper" : "text-ink";
  const sub = tone === "ink" ? "text-mute-dark" : "text-mute";
  const track = tone === "ink" ? "bg-paper/10" : "bg-ink/10";

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const fills = root.querySelectorAll<HTMLElement>("[data-fill]");

    if (prefersReducedMotion()) {
      fills.forEach((f) => (f.style.transform = "scaleX(1)"));
      return;
    }

    gsap.set(fills, { scaleX: 0, transformOrigin: "left center" });
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top 80%",
      once: true,
      onEnter: () =>
        fills.forEach((f) => {
          const target = Number(f.dataset.fill || "1");
          gsap.to(f, {
            scaleX: target,
            duration: 1.1,
            ease: "power3.out",
            delay: Number(f.dataset.i || "0") * 0.1,
          });
        }),
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className={className}>
      {title && (
        <p className={`mb-6 font-mono text-[11px] uppercase tracking-[0.25em] ${sub}`}>
          {title}
        </p>
      )}
      <div className="flex flex-col gap-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className={`font-sans text-sm ${fg}/80`}>{bar.label}</span>
              <span
                className={`font-display font-bold tabular-nums ${
                  bar.highlight ? "text-accent" : fg
                }`}
              >
                {bar.display}
              </span>
            </div>
            <div className={`h-2 w-full ${track}`}>
              <div
                data-fill={bar.value}
                data-i={i}
                className={`h-full ${bar.highlight ? "bg-accent" : tone === "ink" ? "bg-paper/55" : "bg-ink/55"}`}
                style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
