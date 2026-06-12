"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getAllCaseStudies } from "@/lib/caseStudies";

const ITEMS = getAllCaseStudies();

export default function WorkPage() {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rows = rowsRef.current.filter((r): r is HTMLDivElement => !!r);
    if (!rows.length) return;

    gsap.fromTo(
      rows,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.3,
        clearProps: "transform",
      }
    );
  }, []);

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pt-32 pb-16 md:px-12 md:pt-[8rem]">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
          ( THE WORK )
        </p>

        <h1
          className="font-serif font-bold leading-[1.05] text-linen"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          Seven years of learning what actually makes content work —
        </h1>
        <h1
          className="font-serif italic leading-[1.05] text-gold"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          not in theory, but with real budgets and real targets.
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          All numbers verified from GA4, SEMrush India, LinkedIn, Klaviyo, and
          CleverTap. FY 2024–25.
        </p>
      </section>

      {/* ── Work list ───────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pb-24 md:px-12 md:pb-36">
        {ITEMS.map((item, i) => (
          <div
            key={item.slug}
            ref={(el) => { rowsRef.current[i] = el; }}
            className="opacity-0 border-b border-linen/10"
          >
            <Link
              href={`/work/${item.slug}`}
              className="group flex flex-col gap-2 py-7 transition-colors duration-200 hover:bg-linen/[0.02] md:flex-row md:items-center md:gap-0 md:py-8"
            >
              {/* Number */}
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold md:w-20 md:shrink-0">
                ( {item.number} )
              </span>

              {/* Category */}
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:w-36 md:shrink-0">
                {item.category}
              </span>

              {/* Headline */}
              <span
                className="flex-1 font-serif font-bold leading-tight text-linen group-hover:text-linen/90"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
              >
                {item.headline}
              </span>

              {/* Stat callout */}
              <span
                className="font-serif italic text-gold md:w-44 md:shrink-0 md:text-right"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
              >
                {item.listStat}
              </span>

              {/* Arrow — slides in from left on hover */}
              <span className="hidden font-mono text-sm text-gold opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 md:block md:w-8 md:shrink-0 md:text-right">
                →
              </span>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
