"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Glow from "@/components/shell/Glow";

type School = {
  slug: string;
  ext: "jpg" | "png";
  name: string;
  degree: string;
  years: string;
};

const SCHOOLS: School[] = [
  {
    slug: "stoa",
    ext: "jpg",
    name: "Stoa",
    degree: "General Management · Marketing",
    years: "2022–23",
  },
  {
    slug: "jain",
    ext: "jpg",
    name: "Jain University",
    degree: "MA — Communication & Journalism",
    years: "2018–20",
  },
  {
    slug: "scet",
    ext: "png",
    name: "Sarvajanik University",
    degree: "BE — Electronics & Communications",
    years: "2014–18",
  },
  {
    slug: "ambani",
    ext: "jpg",
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
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-line px-[var(--gutter)] py-16 sm:py-20 md:py-32"
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
              className="flex items-center gap-4 border-b border-line py-5 sm:gap-5 sm:py-6"
            >
              {/* logo — frosted glass tile */}
              <span
                aria-hidden="true"
                className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-[52px] sm:w-[52px]"
                style={{
                  background: "rgba(255,255,255,0.28)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.55)",
                  boxShadow:
                    "0 2px 8px -2px rgba(20,17,15,0.10), inset 0 1px 0 rgba(255,255,255,0.35)",
                }}
              >
                <Image
                  src={`/logos/edu/${s.slug}.${s.ext}`}
                  alt={s.name}
                  fill
                  sizes="52px"
                  className="object-contain p-1.5"
                  style={{ filter: "saturate(0.72) contrast(0.92)" }}
                />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[16px] font-semibold leading-tight text-ink sm:text-[18px]">
                    {s.name}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/70 sm:text-[11px]">
                    {s.years}
                  </span>
                </div>
                <span className="mt-1 block font-sans text-[13px] leading-snug text-ink-soft sm:text-[13.5px]">
                  {s.degree}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
