"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Glow from "@/components/shell/Glow";

/**
 * Profile — the fast filter a founder reads before the cases. Three scannable
 * blocks: who this is for (and isn't), the roles + availability, and how I
 * work. No paragraphs; every line is a chunk. Framer Motion staggers each block
 * into view. Sits between the Index and the Capabilities matrix.
 */

const RIGHT_FIT = [
  "Founder-stage operator role, not a support function",
  "One person holding strategy and execution — no handoff",
  "Content, growth, and the AI layer in one head",
];

const WRONG_FIT = [
  "You need a pure single-channel specialist",
  "Strategy is locked; you only need hands on execution",
  "You're scaling a built machine, not building one",
];

const ROLES = [
  "Founder's Office",
  "Head of Growth",
  "GTM Lead",
  "Chief of Staff · Growth",
  "Head of Marketing",
  "AI Growth Lead",
  "Content Strategy Lead",
  "Head of Content & Growth",
  "Growth PM",
  "Fractional CMO",
  "Marketing Lead · Seed–Series A",
];

const PRINCIPLES = [
  {
    n: "01",
    head: "Deep before wide.",
    body: "I understand the whole before I ship any part of it.",
  },
  {
    n: "02",
    head: "I close my own loops.",
    body: "The plan and the thing the plan describes come from the same person.",
  },
  {
    n: "03",
    head: "Where the layers meet.",
    body: "Brand strategy and technical build in one head — fewest handoffs, most surface area.",
  },
];

export default function Profile() {
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
      id="profile"
      data-section="Profile"
      data-folio="P/04"
      className="relative w-full scroll-mt-24 overflow-hidden px-[var(--gutter)] py-14 md:py-20"
    >
      <Glow
        from="#6E8BFF"
        via="#A87CFF"
        to="#5FD98C"
        style={{ top: "0%", right: "-14%", opacity: 0.34 }}
      />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft sm:mb-12">
          Who this is for
        </p>

        {/* Block A — fit filter */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <motion.div variants={item} className="panel p-6 sm:p-7 md:p-8">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Right fit
            </p>
            <ul className="space-y-3">
              {RIGHT_FIT.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 font-sans text-[14px] leading-snug text-ink/85"
                >
                  <span aria-hidden="true" className="text-[color:var(--accent)]">
                    —
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="panel p-6 sm:p-7 md:p-8">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Less useful if
            </p>
            <ul className="space-y-3">
              {WRONG_FIT.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 font-sans text-[14px] leading-snug text-ink/70"
                >
                  <span aria-hidden="true" className="text-ink-soft">
                    —
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Block B — roles + availability */}
        <div className="mt-12 sm:mt-16">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Looking for
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-2.5"
          >
            {ROLES.map((r) => (
              <motion.span key={r} variants={item} className="pill">
                {r}
              </motion.span>
            ))}
          </motion.div>
          <p className="mt-6 font-mono text-[12px] tracking-wide text-ink-soft">
            Kochi, Kerala · Remote · Open to relocation · Available now
          </p>
        </div>

        {/* Block C — how I work */}
        <div className="mt-12 sm:mt-16">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            How I work
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {PRINCIPLES.map((p) => (
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
      </div>
    </section>
  );
}
