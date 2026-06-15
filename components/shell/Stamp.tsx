"use client";

import { useId } from "react";
import Star from "./Star";

/**
 * Rotating circular stamp — curved text on a ring + a 4-point star at center.
 * Spin disabled under reduced-motion (CSS).
 */
export default function Stamp({
  text,
  size = 124,
  className = "",
}: {
  text: string;
  size?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const pathId = `stamp-${id}`;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="stamp-rotate absolute inset-0"
      >
        <defs>
          <path
            id={pathId}
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            fill="none"
          />
        </defs>
        <text
          fontSize="8.4"
          letterSpacing="2.4"
          fill="currentColor"
          style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        >
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[color:var(--accent)]">
        <Star size={size * 0.16} />
      </span>
    </div>
  );
}
