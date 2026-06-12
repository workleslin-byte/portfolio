"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WorkItem } from "@/types";

gsap.registerPlugin(ScrollTrigger);

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

export default function WorkPreviewGrid({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter((c): c is HTMLDivElement => !!c);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-px bg-gold/10 md:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={item._id}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
        >
          <Link
            href={`/work/${item.slug.current}`}
            className="group relative flex flex-col bg-obsidian px-8 py-10 transition-colors duration-300 hover:bg-linen/[0.03]"
          >
            {/* Number */}
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              ( {String(item.order ?? i + 1).padStart(2, "0")} )
            </p>

            {/* Category */}
            <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
              {CATEGORY_LABELS[item.category ?? ""] ?? item.category}
            </p>

            {/* Headline — the bold stat line */}
            <h3 className="mb-3 font-serif text-[2rem] font-bold leading-tight text-linen">
              {item.headline ?? item.title}
            </h3>

            {/* Subheadline */}
            {item.subheadline && (
              <p className="font-sans text-xs leading-relaxed text-muted">
                {item.subheadline}
              </p>
            )}

            {/* Bottom gold line — animates on hover */}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-[width] duration-500 ease-out group-hover:w-full"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
