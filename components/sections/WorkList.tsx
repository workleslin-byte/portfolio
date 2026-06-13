"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { WorkItem } from "@/types";
import CountUp from "@/lib/motion/CountUp";

const CATEGORY_LABELS: Record<string, string> = {
  "blog-growth": "Blog Growth",
  seo: "SEO",
  "email-marketing": "Email Marketing",
  "push-notifications": "Push Notifications",
  linkedin: "LinkedIn",
  "long-form-writing": "Long-Form Writing",
  "pocket-notes": "Independent Product",
};

interface Props {
  items: WorkItem[];
}

export default function WorkList({ items }: Props) {
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

  if (!items.length) {
    return (
      <p className="py-16 font-mono text-[11px] uppercase tracking-[0.25em] text-mute-dark">
        No work items yet — check back soon
      </p>
    );
  }

  return (
    <>
      {items.map((item, i) => {
        const signature = item.stats?.[0];
        return (
          <div
            key={item._id}
            ref={(el) => {
              rowsRef.current[i] = el;
            }}
            className="opacity-0 border-b border-paper/10"
          >
            <Link
              href={`/work/${item.slug.current}`}
              className="group flex flex-col gap-3 py-8 transition-colors duration-200 hover:bg-paper/[0.03] md:flex-row md:items-center md:gap-8 md:py-9"
            >
              {/* Index + category */}
              <div className="flex items-center gap-4 md:w-44 md:shrink-0">
                <span className="font-mono text-[11px] tabular-nums text-mute-dark">
                  {String(item.order ?? i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute-dark">
                  {CATEGORY_LABELS[item.category ?? ""] ?? item.category}
                </span>
              </div>

              {/* Idea line — the headline */}
              <span
                className="flex-1 font-display font-bold leading-[1.2] text-paper transition-colors group-hover:text-accent"
                style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)" }}
              >
                {item.headline ?? item.title}
              </span>

              {/* Signature number */}
              {signature && (
                <span
                  className="font-display font-extrabold leading-none text-accent md:w-40 md:shrink-0 md:text-right"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
                >
                  <CountUp value={signature.value} />
                </span>
              )}

              {/* Arrow */}
              <span className="hidden font-mono text-sm text-paper/40 opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent md:block md:w-6 md:shrink-0 md:text-right">
                →
              </span>
            </Link>
          </div>
        );
      })}
    </>
  );
}
