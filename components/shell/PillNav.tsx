"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Star from "./Star";
import SendGlyph from "./SendGlyph";

type Item = { label: string; href: string; id?: string };

const ITEMS: Item[] = [
  { label: "Storyteller", href: "/storyteller", id: "storyteller" },
  { label: "Systems", href: "/systems", id: "systems" },
  { label: "Product", href: "/product", id: "product" },
  { label: "Brand", href: "/brand", id: "brand" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function PillNav({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  // Scroll-spy only on the home page, where the anchors exist.
  useEffect(() => {
    if (!home) return;
    const targets = ITEMS.map((i) => i.id && document.getElementById(i.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [home]);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex max-w-dossier items-center justify-between gap-4 px-[var(--gutter)] py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-display text-[19px] font-semibold tracking-tight text-ink"
        >
          <span className="text-[color:var(--accent)]">
            <Star size={12} />
          </span>
          <span>Leslin K Seemon</span>
        </Link>

        <nav className="hidden items-center gap-1.5 sm:flex" aria-label="Sections">
          {ITEMS.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className="pill"
              data-active={active === it.id ? "true" : "false"}
            >
              <SendGlyph />
              {it.label}
            </Link>
          ))}
        </nav>

        {/* Compact: single contact pill on small screens */}
        <Link href="/#contact" className="pill sm:hidden">
          <SendGlyph />
          Contact
        </Link>
      </div>
    </header>
  );
}
