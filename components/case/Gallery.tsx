"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  num?: string;
};

/**
 * A set of image tiles that open in a full-screen lightbox on click, with
 * prev/next and keyboard control. `strip` lays them in a horizontal scroll
 * rail; `grid` in a responsive grid.
 */
export default function Gallery({
  items,
  layout = "grid",
}: {
  items: GalleryItem[];
  layout?: "grid" | "strip";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  const wrap =
    layout === "strip"
      ? "deck-rail"
      : "grid grid-cols-2 gap-4 sm:grid-cols-3";

  return (
    <>
      <div className={wrap}>
        {items.map((it, i) => (
          <figure
            key={it.src}
            className={layout === "strip" ? "w-[280px] shrink-0 sm:w-[340px]" : ""}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${it.alt}`}
              className="group block w-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-paper-2/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-ink/30 group-hover:shadow-[0_10px_30px_-12px_rgba(20,17,15,0.3)]">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 340px"
                  className="object-contain p-2"
                />
                {it.num ? (
                  <span className="absolute left-2 top-2 rounded bg-ink/75 px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-paper">
                    {it.num}
                  </span>
                ) : null}
              </div>
            </button>
            {it.caption ? (
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                {it.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--ink)]/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 font-mono text-lg text-paper transition-colors hover:bg-paper/10"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 text-2xl text-paper transition-colors hover:bg-paper/10 sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 text-2xl text-paper transition-colors hover:bg-paper/10 sm:right-6"
          >
            ›
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[open].src}
              alt={items[open].alt}
              className="max-h-[82vh] w-auto rounded-lg shadow-2xl"
            />
            <figcaption className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-paper/75">
              {items[open].num ? `${items[open].num} · ` : ""}
              {items[open].caption ?? items[open].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
