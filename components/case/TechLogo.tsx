/**
 * A real brand logo (Simple Icons SVG in /public/logos) inside the same badge
 * shape as ChannelGlyph, so real logos and fallback glyphs read as one system.
 */
export default function TechLogo({
  slug,
  name,
  tint = "rgba(20, 17, 15, 0.04)",
}: {
  slug: string;
  name: string;
  tint?: string;
}) {
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line"
      style={{ backgroundColor: tint }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${slug}.svg`}
        alt={`${name} logo`}
        width={20}
        height={20}
        className="opacity-90"
        loading="lazy"
      />
    </span>
  );
}
