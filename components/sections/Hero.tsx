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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-obsidian"
    >
      {/* Subtle top-right radial gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 88% 12%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-[8vw] py-28 md:py-32">
        {/* Label */}
        <p
          data-animate
          className="mb-7 font-mono text-[11px] uppercase tracking-[0.35em] text-gold opacity-0"
        >
          ( AI-ENABLED GROWTH CONSULTANT )
        </p>

        {/* Display headline — line 1 */}
        <h1
          data-animate
          className="font-serif italic leading-[0.92] text-linen opacity-0"
          style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
        >
          Systems that
        </h1>

        {/* Display headline — line 2 */}
        <h1
          data-animate
          className="font-serif font-bold leading-[0.92] text-gold opacity-0"
          style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
        >
          grow things.
        </h1>

        {/* Secondary descriptor */}
        <p
          data-animate
          className="mt-8 max-w-xl font-sans text-sm tracking-[0.08em] text-muted opacity-0"
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
            className="inline-flex items-center border border-gold px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-200 hover:bg-gold hover:text-obsidian"
          >
            See the work →
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center bg-gold px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-obsidian transition-all duration-200 hover:bg-gold/85"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Bottom-right data note */}
      <p className="absolute bottom-6 right-6 text-right font-mono text-[10px] tracking-[0.12em] text-muted/50">
        ( FY 2024–25 · All data verified · GA4 · SEMrush · Klaviyo · CleverTap
        )
      </p>
    </section>
  );
}
