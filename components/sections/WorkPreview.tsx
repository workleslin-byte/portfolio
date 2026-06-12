"use client";

// TODO: replace WORK_ITEMS with Sanity fetch once data is seeded
// import { sanityFetch } from "@/lib/sanity"
// import { getFeaturedWorkItems } from "@/lib/queries"

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORK_ITEMS = [
  {
    number: "01",
    category: "Email Marketing",
    headline: "₹16.8 Crore in Revenue",
    subheadline: "321 campaigns · 97.7% deliverability · 2.91M delivered",
    slug: "email-marketing",
  },
  {
    number: "02",
    category: "Blog Growth",
    headline: "2.2× Traffic in 12 Months",
    subheadline: "31,464 sessions · 161% of annual target · organic-first",
    slug: "blog-growth",
  },
  {
    number: "03",
    category: "SEO",
    headline: "20.2K Organic Traffic",
    subheadline: "988 ranking keywords · $831 traffic cost equivalent · +97% YoY",
    slug: "seo",
  },
  {
    number: "04",
    category: "LinkedIn",
    headline: "804K Impressions",
    subheadline: "9% engagement rate · 323 posts · 56,835 clicks",
    slug: "linkedin",
  },
];

export default function WorkPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((c): c is HTMLDivElement => !!c);
      if (!cards.length) return;

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
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-obsidian px-6 py-24 md:px-12 md:py-36"
    >
      {/* Section label */}
      <p className="mb-12 font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
        ( SELECTED WORK )
      </p>

      {/* 2×2 grid — gap-px on obsidian bg creates hairline gold dividers */}
      <div className="grid grid-cols-1 gap-px bg-gold/10 md:grid-cols-2">
        {WORK_ITEMS.map((item, i) => (
          <div
            key={item.slug}
            ref={(el) => { cardsRef.current[i] = el; }}
          >
            <Link
              href={`/work/${item.slug}`}
              className="group relative flex flex-col bg-obsidian px-8 py-10 transition-colors duration-300 hover:bg-linen/[0.03]"
            >
              {/* Number */}
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                ( {item.number} )
              </p>

              {/* Category */}
              <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
                {item.category}
              </p>

              {/* Headline */}
              <h3 className="mb-3 font-serif text-[2rem] font-bold leading-tight text-linen">
                {item.headline}
              </h3>

              {/* Subheadline */}
              <p className="font-sans text-xs leading-relaxed text-muted">
                {item.subheadline}
              </p>

              {/* Bottom gold line — animates on hover */}
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-[width] duration-500 ease-out group-hover:w-full"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/work"
          className="inline-flex items-center border border-gold px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-200 hover:bg-gold hover:text-obsidian"
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}
