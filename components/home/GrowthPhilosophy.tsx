"use client";

import { motion, useReducedMotion } from "framer-motion";
import Glow from "@/components/shell/Glow";

/**
 * How I think about growth — the one place on the page that shows how the mind
 * works on a growth problem before any work is shown. A single flowing
 * statement, no bullets, no sub-heads: the belief that makes a founder think
 * "this person thinks like I do" before they reach the cases.
 */
export default function GrowthPhilosophy() {
  const reduce = useReducedMotion();

  return (
    <section
      id="philosophy"
      data-section="Philosophy"
      data-folio="P/06"
      className="relative w-full overflow-hidden border-t border-line px-[var(--gutter)] py-16 sm:py-20 md:py-28"
    >
      <Glow
        from="#FF8A4D"
        via="#FF5D8F"
        to="#9C7BFF"
        style={{ position: "absolute", top: "-18%", right: "-14%", opacity: 0.18 }}
      />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          How I think about growth
        </p>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-pretty font-sans text-[clamp(1.1rem,1.8vw,1.45rem)] font-normal leading-[1.6] text-ink/90"
        >
          Most early-stage growth fails the same way: teams chase channel volume
          before they&apos;ve earned channel discipline — more posts, more spend,
          more automation, and nothing instrumented to learn from. I work the
          other way around. Find the one channel where the audience already is,
          build a system that compounds instead of resetting every week, and
          only widen once the narrow thing is working. The AI layer
          earns its place when it clears a bottleneck in that loop — faster
          research, tighter iteration, sharper instrumentation — never as the
          headline. Growth that holds isn&apos;t louder. It&apos;s better aimed.
        </motion.p>
      </div>
    </section>
  );
}
