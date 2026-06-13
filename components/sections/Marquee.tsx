"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  "₹16.8Cr email revenue",
  "804K LinkedIn impressions",
  "2.2× blog growth",
  "97.7% deliverability",
  "1,70,000+ reads",
  "988 ranking keywords",
  "9% engagement rate",
  "₹39.33L push revenue",
  "321 email campaigns",
  "20.2K organic traffic",
];

const ITEMS = [...STATS, ...STATS];

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const skewRef = useRef<HTMLDivElement>(null);

  // Scroll-velocity skew — the band leans into the scroll direction
  useEffect(() => {
    const el = skewRef.current;
    if (!el || prefersReducedMotion()) return;

    const skewSetter = gsap.quickTo(el, "skewX", {
      duration: 0.5,
      ease: "power3.out",
    });

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-12, 12, self.getVelocity() / -180);
        skewSetter(v);
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div
      className="overflow-hidden border-y border-paper/10 bg-ink/40 backdrop-blur-sm py-5 cursor-default"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={skewRef}>
        <div
          className={cn(
            "flex w-max items-center",
            "[animation:marquee_40s_linear_infinite]",
            "[will-change:transform]",
            paused && "[animation-play-state:paused]"
          )}
        >
          {ITEMS.map((stat, i) => (
            <span key={i} className="flex items-center">
              <span
                className="whitespace-nowrap px-8 font-display font-bold uppercase leading-none text-paper/70"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
              >
                {stat}
              </span>
              <span
                className="select-none leading-none text-accent/50"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
