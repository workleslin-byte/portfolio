"use client";

import Link from "next/link";
import MaskReveal from "@/lib/motion/MaskReveal";
import MagneticButton from "@/lib/motion/MagneticButton";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const sizeClass = "text-[clamp(2.2rem,6vw,5.5rem)]";
  const lineClass =
    `font-display font-extrabold tracking-tight leading-[1.04] text-paper ${sizeClass}`;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-[6vw] pt-28 pb-24 md:pb-28">
      {/* Ambient gradient orbs — breathe slowly behind content */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-12%",
          left: "-8%",
          width: "65vw",
          height: "65vw",
          maxWidth: "780px",
          maxHeight: "780px",
          background: "radial-gradient(ellipse at center, rgba(31,79,224,0.13) 0%, transparent 68%)",
          filter: "blur(32px)",
          animation: "orb-drift 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "8%",
          right: "-4%",
          width: "42vw",
          height: "42vw",
          maxWidth: "480px",
          maxHeight: "480px",
          background: "radial-gradient(ellipse at center, rgba(31,79,224,0.07) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "orb-drift 22s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Category line — lets a recruiter place him in two seconds */}
        <p
          className={`mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-paper/50 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          Growth operator <span className="text-accent">+</span> AI systems builder
        </p>

        {/* Headline — what he does, stated plainly */}
        <MaskReveal
          as="h1"
          play={ready}
          stagger={0.1}
          lineClassName={lineClass}
          className={`max-w-[16ch] ${sizeClass}`}
          lines={[
            "I run the growth,",
            <>
              and I{" "}
              <span className="italic gradient-text-accent">build the AI</span>
            </>,
            "that runs it.",
          ]}
        />

        {/* Proof line — the two hardest facts, immediately */}
        <p
          className={`mt-8 max-w-xl font-sans leading-relaxed text-paper/70 transition-opacity duration-700 delay-200 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontSize: "1.0625rem" }}
        >
          ₹16.8 Cr in attributed revenue over seven years — and a clinical RAG
          system I architected end to end. One person, both layers.
        </p>

        {/* Locator */}
        <p
          className={`mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-mute-dark transition-opacity duration-700 delay-300 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          Kerala, India · Remote &amp; relocation
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <MagneticButton>
            <Link
              href="/work"
              className="inline-flex items-center bg-paper px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
            >
              See the work →
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.25}>
            <Link
              href="#contact"
              className="inline-flex items-center border border-paper/25 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 transition-colors duration-200 hover:border-paper/60 hover:text-paper active:scale-[0.98]"
            >
              Get in touch
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom-right verification note */}
      <p className="absolute bottom-6 right-6 text-right font-mono text-[10px] tracking-[0.12em] text-paper/25">
        FY 2024–25 · GA4 · SEMrush · Klaviyo · CleverTap
      </p>
    </section>
  );
}
