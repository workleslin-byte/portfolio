"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";

/**
 * Generic on-scroll reveal for non-display elements (rows, columns, captions).
 * Slides up + fades in once. Reduced-motion handled in CSS.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
