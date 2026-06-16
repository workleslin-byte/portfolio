"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Smear from "@/components/motion/Smear";
import Glow from "@/components/shell/Glow";

/**
 * Hero — the dossier cover, reworked as a 50/50 spread: a full-height portrait
 * on the left, the smeared name + claim on the right with an organic colour
 * wash sitting behind the type. Framer Motion drives the entrance (image in
 * from the left, text settling in from the right); the name keeps its own CSS
 * smear. Reduced-motion collapses all of it to a clean static state.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  const textContainer: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
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

  return (
    <section
      id="intro"
      data-section="Intro"
      data-folio="P/01"
      className="relative grid h-[58vh] min-h-0 grid-cols-1 overflow-hidden border-b border-line md:grid-cols-2"
      style={{ maxHeight: "680px" }}
    >
      {/* Left — portrait */}
      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : -48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 58, damping: 18, mass: 0.9 }}
        className="relative h-[38vh] border-line md:h-full md:border-r"
        style={{ maxHeight: "680px", background: "var(--paper-2)" }}
      >
        <Image
          src="/leslin-casual.jpg"
          alt="Leslin K Seemon."
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--paper-2)]/40"
        />
      </motion.div>

      {/* Right — name + claim */}
      <div className="relative flex items-center px-[var(--gutter)] py-8 md:py-0">
        <Glow
          from="#FF8A4D"
          via="#FF5D8F"
          to="#9C7BFF"
          style={{ position: "absolute", inset: 0, margin: "auto", opacity: 0.5 }}
        />

        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 flex w-full flex-col"
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft"
          >
            Growth Operator · AI Systems Builder · Kerala, India
          </motion.p>

          <Smear
            as="h1"
            eager
            className="text-[clamp(2.4rem,6.5vw,5.5rem)] font-semibold leading-[0.9]"
          >
            Leslin <em>K&nbsp;Seemon</em>
          </Smear>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-pretty font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-ink/80"
          >
            I find the growth problem, build the system that solves it, and write
            the thing that sells it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
