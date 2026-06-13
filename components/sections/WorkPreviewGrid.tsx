"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WorkItem } from "@/types";
import CountUp from "@/lib/motion/CountUp";

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
          scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-px bg-paper/10 md:grid-cols-2">
      {items.map((item, i) => {
        const signature = item.stats?.[0];
        return (
          <div
            key={item._id}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
          >
            <Link
              href={`/work/${item.slug.current}`}
              className="group relative flex h-full flex-col justify-between gap-10 bg-ink/80 backdrop-blur-md px-8 py-10 transition-colors duration-300 hover:bg-ink/60"
            >
              <div>
                {/* Category */}
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-dark">
                  {CATEGORY_LABELS[item.category ?? ""] ?? item.category}
                </p>

                {/* Idea line — the headline (layer 1) */}
                <h3
                  className="font-display font-bold leading-[1.15] text-paper"
                  style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                >
                  {item.headline ?? item.title}
                </h3>
              </div>

              {/* Signature number (layer 2) + flat proof sentence */}
              {signature && (
                <div>
                  <p
                    className="font-display font-extrabold leading-none text-accent"
                    style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
                  >
                    <CountUp value={signature.value} />
                  </p>
                  {item.subheadline && (
                    <p className="mt-3 font-sans text-sm leading-relaxed text-paper/55">
                      {item.subheadline}
                    </p>
                  )}
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
