import type { ReactNode } from "react";

type GlyphName = "leaf" | "mountain" | "jar" | "spark";

export type DeckTile = {
  /** Product or client name on the tile. */
  name: string;
  /** Small line under the name (variant, sku, sector…). */
  sub?: string;
  /** Tile background — a hex from the brand ramp. */
  hex: string;
  /** Mark drawn in the tile centre. */
  glyph?: GlyphName;
  /** Top wordmark; defaults to "Nilambur Farms". */
  wordmark?: string;
};

const GLYPHS: Record<GlyphName, ReactNode> = {
  leaf: (
    <>
      <path d="M12 3C7 6.5 5 11 5 14.5A7 7 0 0 0 19 14.5C19 11 17 6.5 12 3Z" />
      <path d="M12 8v10" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 18.5 9 8l3.5 5.5L15 9l6 9.5Z" />
      <path d="M7.5 13.5 9 11l1.4 2.2" />
    </>
  ),
  jar: (
    <>
      <rect x="6" y="8" width="12" height="12" rx="2.5" />
      <path d="M8.5 8V6.5A1.5 1.5 0 0 1 10 5h4a1.5 1.5 0 0 1 1.5 1.5V8" />
      <path d="M9.5 13h5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
};

/** Relative luminance → choose cream or near-black text for legibility. */
function isDark(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum < 0.55;
}

function Tile({ name, sub, hex, glyph = "leaf", wordmark = "Nilambur Farms" }: DeckTile) {
  const dark = isDark(hex);
  const fg = dark ? "#EFEDE8" : "#0A1A0F";
  return (
    <div
      className="relative aspect-[3/4] w-[220px] overflow-hidden rounded-2xl sm:w-[248px]"
      style={{ backgroundColor: hex, color: fg }}
    >
      {/* inner label frame */}
      <div
        className="absolute inset-3 rounded-xl border"
        style={{ borderColor: dark ? "rgba(239,237,232,0.28)" : "rgba(10,26,15,0.22)" }}
      />
      <div className="relative flex h-full flex-col items-center justify-between p-6 text-center">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] opacity-75">
          {wordmark}
        </span>

        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
          aria-hidden="true"
        >
          {GLYPHS[glyph]}
        </svg>

        <span className="w-full">
          <span className="block font-display text-lg font-semibold leading-tight tracking-tight">
            {name}
          </span>
          {sub ? (
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] opacity-75">
              {sub}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

/**
 * A horizontal scroll-snap deck of on-brand tiles. Used for the Nilambur
 * packaging system and the Grwth agency strip — finished-looking with the real
 * palette, no photographs required. Drop real label/mockup images in later by
 * swapping a tile for an <img>.
 */
export default function Deck({ tiles }: { tiles: DeckTile[] }) {
  return (
    <div className="deck-rail">
      {tiles.map((t) => (
        <Tile key={t.name} {...t} />
      ))}
    </div>
  );
}
