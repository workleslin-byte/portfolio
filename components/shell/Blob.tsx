import type { CSSProperties } from "react";

/**
 * Holographic blob — decorative, capped at TWO instances site-wide.
 * Always heavily blurred; grain sits over it. Slow drift, off under
 * reduced-motion (handled in CSS).
 */
export default function Blob({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <div className={`blob ${className}`} style={style} aria-hidden="true" />;
}
