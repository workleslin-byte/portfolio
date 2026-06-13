"use client";

import Link from "next/link";
import MaskReveal from "@/lib/motion/MaskReveal";
import MagneticButton from "@/lib/motion/MagneticButton";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const lineClass =
    "font-display font-extrabold tracking-tight leading-[0.98] text-paper text-[clamp(2.2rem,6vw,5.5rem)]";

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-[6vw] pt-28 pb-24 md:pb-28">
      <div className="relative z-10 w-full">
        {/* Attitude-led headline — who he is, before what he does */}
        <MaskReveal
          as="h1"
          play={ready}
          stagger={0.1}
          lineClassName={lineClass}
          className="max-w-[16ch]"
          lines={[
            "Most people read",
            "to feel something.",
            "I read to find out",
            <>
              how to{" "}
              <span className="italic text-accent">think.</span>
            </>,
          ]}
        />

        {/* Quiet role locator — carries the "what" */}
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-mute-dark">
          Content &amp; growth · Kerala · Seven years, all measured.
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
