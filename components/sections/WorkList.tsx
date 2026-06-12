"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { WorkItem } from "@/types";

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
      <p className="py-16 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        ( No work items yet — check back soon )
      </p>
    );
  }

  return (
    <>
      {items.map((item, i) => (
        <div
          key={item._id}
          ref={(el) => {
            rowsRef.current[i] = el;
          }}
          className="opacity-0 border-b border-linen/10"
        >
          <Link
            href={`/work/${item.slug.current}`}
            className="group flex flex-col gap-2 py-7 transition-colors duration-200 hover:bg-linen/[0.02] md:flex-row md:items-center md:gap-0 md:py-8"
          >
            {/* Number */}
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold md:w-20 md:shrink-0">
              ( {String(item.order ?? i + 1).padStart(2, "0")} )
            </span>

            {/* Category — hidden on mobile */}
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:block md:w-36 md:shrink-0">
              {CATEGORY_LABELS[item.category ?? ""] ?? item.category}
            </span>

            {/* Headline */}
            <span
              className="flex-1 font-serif font-bold leading-tight text-linen group-hover:text-linen/90"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
            >
              {item.title}
            </span>

            {/* Stat callout */}
            <span
              className="font-serif italic text-gold md:w-44 md:shrink-0 md:text-right"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
            >
              {item.headline}
            </span>

            {/* Arrow — slides in on hover */}
            <span className="hidden font-mono text-sm text-gold opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 md:block md:w-8 md:shrink-0 md:text-right">
              →
            </span>
          </Link>
        </div>
      ))}
    </>
  );
}
