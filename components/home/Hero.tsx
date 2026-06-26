"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Smear from "@/components/motion/Smear";
import Glow from "@/components/shell/Glow";

/** Headline proof — the strongest case, surfaced in the first screen. */
const PROOF = [
  { value: "₹16.8 Cr", label: "investor capital, via email" },
  { value: "804K", label: "reached on LinkedIn" },
  { value: "2 L+", label: "long-form reads" },
] as const;

/**
 * Hero — the dossier cover, centred. The portrait sits at the top inside a
 * frosted-glass lens with a slow multi-colour halo rotating behind it, then the
 * smeared name and the claim stack beneath. Framer Motion springs the disc in
 * and staggers the type; the name keeps its own eager CSS smear. Reduced-motion
 * collapses everything to a clean static state.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Subtle parallax: the avatar drifts up as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -56]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
    },
  };
  const disc: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.82 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 72, damping: 16, mass: 0.9 },
    },
  };

  return (
    <section
      ref={heroRef}
      id="intro"
      data-section="Intro"
      data-folio="P/01"
      className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden border-b border-line px-[var(--gutter)] py-16 text-center md:py-20"
    >
      {/* soft colour wash behind the whole cover */}
      <Glow
        from="#FF8A4D"
        via="#FF5D8F"
        to="#9C7BFF"
        style={{ position: "absolute", inset: 0, margin: "auto", opacity: 0.34 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full flex-col items-center"
      >
        {/* portrait — glass lens with rotating halo */}
        <motion.div
          variants={disc}
          style={reduce ? undefined : { y: avatarY }}
          className="relative mx-auto h-[14.25rem] w-[14.25rem] md:h-[18.25rem] md:w-[18.25rem]"
        >
          <span aria-hidden="true" className="avatar-halo" />
          <div className="avatar-disc h-full w-full p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/leslin-casual.jpg"
                alt="Leslin K Seemon."
                fill
                priority
                sizes="(max-width: 768px) 228px, 292px"
                className="object-cover object-[50%_52%]"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-9 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft"
        >
          Content &amp; Growth Lead · Editorial Systems · Kerala, India
        </motion.p>

        <Smear
          as="h1"
          eager
          className="mt-4 text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[0.9]"
        >
          Leslin <em>K&nbsp;Seemon</em>
        </Smear>

        {/* proof strip — the evidence, surfaced in the first screen */}
        <motion.div
          variants={item}
          className="mt-7 flex items-stretch justify-center divide-x divide-line"
        >
          {PROOF.map((m) => (
            <div key={m.label} className="px-4 text-center sm:px-7">
              <div className="font-display text-[clamp(1.45rem,3vw,2.1rem)] font-semibold leading-none text-[color:var(--accent)]">
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[8.5px] uppercase leading-tight tracking-[0.14em] text-ink-soft">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft"
        >
          Rang De · 0–1 startup fintech · 6 years as Digital Storyteller
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-md text-pretty font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-ink/80"
        >
          I find the growth problem, build the system that solves it, and write
          the thing that sells it.
        </motion.p>

        <motion.div variants={item} className="mt-7">
          <Link
            href="/storyteller"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/40 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            See how it was built
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
