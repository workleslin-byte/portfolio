"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Smear from "@/components/motion/Smear";
import Glow from "@/components/shell/Glow";

/**
 * Working with AI — the differentiator the rest of the page only implies. Not a
 * tool list (that's Capabilities) but the judgment: where I let the model lead,
 * where I don't, and how I keep its output honest. Three concrete practices,
 * each pinned to real work rather than a platitude.
 */

const PRACTICES = [
  {
    n: "01",
    head: "I drive; the model accelerates.",
    body: "I own the architecture and the judgment calls. The model handles velocity — first drafts, boilerplate, the parts I already understand. I never ship code or copy I can't read and defend.",
  },
  {
    n: "02",
    head: "Eval before trust.",
    body: "Every AI-touched system gets instrumented — multi-model comparison, Langfuse traces, output analysis. Model output is a hypothesis to test, not an answer to accept.",
  },
  {
    n: "03",
    head: "A prompt is a spec.",
    body: "The system prompt is a product decision, written and versioned like code. On Preventify it's where refusal became the default and safety became a hard constraint — not a feature.",
  },
];

export default function AIWorkflow() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
    },
  };

  return (
    <section
      id="ai"
      data-section="Working with AI"
      data-folio="P/11"
      className="relative w-full overflow-hidden border-t border-line px-[var(--gutter)] py-16 sm:py-20 md:py-28"
    >
      <Glow
        from="#6E8BFF"
        via="#A87CFF"
        to="#4FD1E0"
        style={{ position: "absolute", top: "-16%", left: "-12%", opacity: 0.2 }}
      />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Working with AI
        </p>

        <Smear
          as="h2"
          className="max-w-3xl text-[clamp(1.6rem,3.4vw,2.75rem)] font-semibold leading-[1.1]"
        >
          I treat AI as <em>leverage</em>, not the headline.
        </Smear>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-6 max-w-3xl text-pretty font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.6] text-ink/90"
        >
          The interesting question isn&apos;t whether I use AI — everyone does.
          It&apos;s where I let it lead and where I don&apos;t. I went from no
          production web experience to a live full-stack product with agentic
          coding as the leverage — but the architecture, the judgment, and the
          safety calls stayed mine.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3"
        >
          {PRACTICES.map((p) => (
            <motion.div key={p.n} variants={item} className="panel p-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-soft">
                {p.n}
              </span>
              <h3 className="mt-3 font-display text-[20px] font-semibold leading-tight text-ink">
                {p.head}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-ink/75">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
