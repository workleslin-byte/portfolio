"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Smear from "@/components/motion/Smear";
import Glow from "@/components/shell/Glow";

/**
 * Hero — the dossier cover, centred. The portrait sits at the top inside a
 * frosted-glass lens with a slow multi-colour halo rotating behind it, then the
 * smeared name and the claim stack beneath. Framer Motion springs the disc in
 * and staggers the type; the name keeps its own eager CSS smear. Reduced-motion
 * collapses everything to a clean static state.
 */
export default function Hero() {
  const reduce = useReducedMotion();

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
          className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft"
        >
          Growth Operator · AI Systems Builder · Kerala, India
        </motion.p>

        <Smear
          as="h1"
          eager
          className="mt-5 text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[0.9]"
        >
          Leslin <em>K&nbsp;Seemon</em>
        </Smear>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-md text-pretty font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-ink/80"
        >
          I find the growth problem, build the system that solves it, and write
          the thing that sells it.
        </motion.p>
      </motion.div>
    </section>
  );
}
