"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * THE SIGNATURE.
 * A high-contrast Fraunces display word that arrives blurred + offset and
 * settles sharp when it enters view (or on load, for the hero). The italic
 * portion smears harder. Readable at rest; reduced-motion = instant + sharp.
 *
 * Wrap the italic part of the phrase in <em>. Set `ghost` for divider words to
 * keep a faint blurred duplicate behind the sharp copy (the print smear at rest).
 */
export default function Smear({
  as,
  children,
  className = "",
  ghost = false,
  eager = false,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  ghost?: boolean;
  eager?: boolean;
}) {
  const Tag = (as ?? "h2") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (eager) {
      const raf = requestAnimationFrame(() => el.classList.add("in"));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <Tag
      ref={ref}
      className={`smear font-display ${ghost ? "relative inline-block" : ""} ${className}`}
    >
      {ghost ? (
        <span className="ghost font-display" aria-hidden="true">
          {children}
        </span>
      ) : null}
      {children}
    </Tag>
  );
}
