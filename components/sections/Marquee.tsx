"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

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

// Duplicate for seamless CSS loop
const ITEMS = [...STATS, ...STATS];

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden border-y border-white/5 bg-obsidian py-5 cursor-default"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
              className="whitespace-nowrap px-8 font-display font-bold uppercase leading-none text-white/70"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
            >
              {stat}
            </span>
            <span
              className="select-none leading-none text-linen/15"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
