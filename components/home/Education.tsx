"use client";

import { motion, useReducedMotion } from "framer-motion";
import Glow from "@/components/shell/Glow";

/**
 * Education — a ruled timeline, newest first. Each institution gets a
 * typographic monogram badge (kept in the dossier's own ink instead of a grid
 * of clashing colour logos); drop a real mark into /public/logos/edu/{slug}.png
 * and swap the badge for an <Image> if ever wanted. Rows draw in on scroll.
 */

type School = {
  slug: string;
  monogram: string;
  name: string;
  degree: string;
  years: string;
};

const SCHOOLS: School[] = [
  {
    slug: "stoa",
    monogram: "S",
    name: "Stoa",
    degree: "General Management · Marketing",
    years: "2022–23",
  },
  {
    slug: "jain",
    monogram: "JU",
    name: "Jain University",
    degree: "MA — Communication & Journalism",
    years: "2018–20",
  },
  {
    slug: "scet",
    monogram: "SC",
    name: "Sarvajanik College of Engineering & Technology",
    degree: "BE — Electronics & Communications",
    years: "2014–18",
  },
  {
    slug: "ambani",
    monogram: "JH",
    name: "J. H. Ambani Saraswati Vidyamandir",
    degree: "Secondary school",
    years: "2000–14",
  },
];

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section
      id="education"
      data-section="Education"
      data-folio="P/10"
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-line px-[var(--gutter)] py-24 md:py-32"
    >
      <Glow
        from="#5FD98C"
        via="#6E8BFF"
        to="#A87CFF"
        style={{ bottom: "-12%", left: "-12%", opacity: 0.3 }}
      />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Education
        </p>

        <ul className="mt-8 border-t border-line">
          {SCHOOLS.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, x: reduce ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.08,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line py-6"
            >
              {/* monogram badge */}
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line font-display text-[15px] font-semibold text-ink-soft"
              >
                {s.monogram}
              </span>

              <span className="font-display text-[18px] font-semibold leading-tight text-ink">
                {s.name}
              </span>

              <span className="font-sans text-[13.5px] leading-snug text-ink-soft">
                {s.degree}
              </span>

              <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">
                {s.years}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
