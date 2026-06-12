"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ready || !heroRef.current) return;

    const elements = heroRef.current.querySelectorAll("[data-animate]");

    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
        clearProps: "transform",
      }
    );
  }, [ready]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian pb-20 md:pb-28"
    >
      {/* Main content */}
      <div className="relative z-10 w-full px-[5vw] md:px-[6vw]">
        {/* Eyebrow label — demoted */}
        <p
          data-animate
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-linen/40 opacity-0"
        >
          AI-Enabled Growth Consultant
        </p>

        {/* Display headline — line 1 */}
        <h1
          data-animate
          className="font-display font-extrabold uppercase leading-[0.88] text-white opacity-0"
          style={{ fontSize: "clamp(4.5rem, 13vw, 14rem)" }}
        >
          Systems
        </h1>

        {/* Display headline — line 2 */}
        <h1
          data-animate
          className="font-display font-extrabold uppercase leading-[0.88] text-white opacity-0"
          style={{ fontSize: "clamp(4.5rem, 13vw, 14rem)" }}
        >
          that <span className="text-gold">grow</span>
        </h1>

        {/* Display headline — line 3 */}
        <h1
          data-animate
          className="font-display font-extrabold uppercase leading-[0.88] text-white opacity-0"
          style={{ fontSize: "clamp(4.5rem, 13vw, 14rem)" }}
        >
          things.
        </h1>

        {/* Secondary descriptor */}
        <p
          data-animate
          className="mt-10 max-w-lg font-sans text-sm leading-[1.9] tracking-[0.04em] text-linen/45 opacity-0"
        >
          Content strategy · Growth architecture · AI systems · Kerala →
          Anywhere
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="mt-10 flex flex-wrap items-center gap-4 opacity-0"
        >
          <Link
            href="/work"
            className="inline-flex items-center bg-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-obsidian transition-opacity duration-200 hover:opacity-85"
          >
            See the work →
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center border border-linen/20 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-linen/60 transition-all duration-200 hover:border-linen/50 hover:text-linen"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Bottom-right data note */}
      <p className="absolute bottom-6 right-6 text-right font-mono text-[10px] tracking-[0.12em] text-linen/25">
        FY 2024–25 · All data verified · GA4 · SEMrush · Klaviyo · CleverTap
      </p>
    </section>
  );
}
