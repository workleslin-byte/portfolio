import Image from "next/image";

export type Slide = { src: string; alt: string; caption: string };

/**
 * A horizontal scroll-snap rail of real deck slides. Each slide is contained
 * (never cropped) in a consistent card, with a mono caption underneath.
 */
export default function SlideDeck({ slides }: { slides: Slide[] }) {
  return (
    <div className="deck-rail">
      {slides.map((s) => (
        <figure key={s.src} className="w-[300px] shrink-0 sm:w-[400px]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-paper-2/40">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 640px) 300px, 400px"
              className="object-contain p-2.5"
            />
          </div>
          <figcaption className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
            {s.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
