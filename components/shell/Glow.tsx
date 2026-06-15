import type { CSSProperties } from "react";

/**
 * A soft, heavily-blurred candy orb that sits behind a section title — the
 * background gradient circle. Vivid two-colour fill, low opacity (ambient
 * wash). Position via `style` (top/left/right/bottom inset only — the drift
 * animation owns `transform`). Decorative; the grain layer sits over it.
 */
export default function Glow({
  from,
  to,
  className = "",
  style,
}: {
  from: string;
  to: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`glow ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 35% 35%, ${from} 0%, ${to} 46%, transparent 72%)`,
        ...style,
      }}
    />
  );
}
