import type { CSSProperties } from "react";

/**
 * A soft, heavily-blurred candy wash that sits *behind the section title* — not
 * a parked disc. The silhouette is an organic, lobed blob (see `.glow` in
 * globals.css) and the fill is two or three overlapping radial lobes of colour,
 * so it reads as a living gradient flowing with the word rather than a circle.
 * Position via `style` insets; pass `inset: 0, margin: auto` to centre it behind
 * a centred title. Decorative; the grain layer sits over it.
 */
export default function Glow({
  from,
  to,
  via,
  className = "",
  style,
}: {
  from: string;
  to: string;
  via?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const layers = [
    `radial-gradient(58% 68% at 32% 30%, ${from} 0%, transparent 70%)`,
    `radial-gradient(62% 58% at 70% 72%, ${to} 0%, transparent 72%)`,
  ];
  if (via) {
    layers.splice(
      1,
      0,
      `radial-gradient(50% 54% at 64% 34%, ${via} 0%, transparent 66%)`,
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`glow ${className}`}
      style={{ backgroundImage: layers.join(", "), ...style }}
    />
  );
}
