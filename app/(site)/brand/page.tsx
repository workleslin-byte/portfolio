import type { Metadata } from "next";
import Image from "next/image";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, Subhead, P, Callout } from "@/components/case/Editorial";
import Gallery, { type GalleryItem } from "@/components/case/Gallery";

export const metadata: Metadata = {
  title: "Brand — a full identity for an agro company",
  description:
    "Grwth × Nilambur Farms, 2024. From the busy old Pepper Valley mark to a clean, recallable identity — moodboard, symbol exploration, wordmark, and the jar on the shelf.",
};

const GREEN = "#1F944D";

// The real Nilambur Farms ramp, lifted from the brand book.
const PALETTE = [
  { hex: "#CAEFD4", name: "10%" },
  { hex: "#77CE92", name: "30%" },
  { hex: "#33B763", name: "50%" },
  { hex: "#1F944D", name: "70% · Primary" },
  { hex: "#118441", name: "80%" },
  { hex: "#046530", name: "90%" },
  { hex: "#04150B", name: "Black" },
];

// The logo journey — moodboard references → symbol exploration → wordmark →
// landing on the mountain → the final mark.
const BUILD: GalleryItem[] = [
  { src: "/brand/build/01.png", caption: "Nilambur — from where you are", alt: "The Nilambur hills, the brand's home" },
  { src: "/brand/build/02.png", caption: "Reference — mandala geometry", alt: "Crown-chakra mandala references" },
  { src: "/brand/build/03.png", caption: "Reference — tree-in-circle marks", alt: "Treeline reference logo on a mountain photo" },
  { src: "/brand/build/04.png", caption: "Reference — palm badge lockups", alt: "Palm badge reference logo" },
  { src: "/brand/build/05.png", caption: "Symbols — field & forest", alt: "Early field and forest symbol concepts" },
  { src: "/brand/build/06.png", caption: "Symbols — palm & leaf", alt: "Palm and leaf symbol explorations" },
  { src: "/brand/build/07.png", caption: "Symbols — palm, coconut, leaf", alt: "Palm, coconut and leaf symbol sheet" },
  { src: "/brand/build/08.png", caption: "Symbols — mandala geometry", alt: "Mandala symbol explorations" },
  { src: "/brand/build/09.png", caption: "Wordmark — font journey", alt: "Palm mark with wordmark font tests" },
  { src: "/brand/build/10.png", caption: "Wordmark — script refinements", alt: "Script wordmark refinements" },
  { src: "/brand/build/11.png", caption: "Lockups — directions explored", alt: "Logo lockup explorations" },
  { src: "/brand/build/12.png", caption: "Landing on the mountain", alt: "Mountain-in-circle badge versions" },
  { src: "/brand/logo-reveal.png", caption: "The final mark", alt: "The final Nilambur Farms mountain logo" },
];

// The core branding deck, in presentation order.
const DECK: GalleryItem[] = [
  { src: "/brand/cover.png", num: "—", caption: "The deck", alt: "Branding deck cover — branding for an agro company" },
  { src: "/brand/before-after.png", num: "01", caption: "Old → new mark", alt: "Old Pepper Valley mark vs the new Nilambur mark" },
  { src: "/brand/client-brief.png", num: "02", caption: "Client brief", alt: "Client brief — core identity pillars" },
  { src: "/brand/moodboard.png", num: "03", caption: "Moodboard", alt: "Moodboard — colour, type, and references" },
  { src: "/brand/name.png", num: "04", caption: "Brand name", alt: "Brand name — Nilambur Farms" },
  { src: "/brand/symbols.png", num: "05", caption: "Symbol exploration", alt: "Symbol exploration — palm, coconut, teak, leaf, mountain" },
  { src: "/brand/fonts-hand.png", num: "06", caption: "Type — handwritten", alt: "Font choices — handwritten journey" },
  { src: "/brand/fonts-block.png", num: "07", caption: "Type — the outcome", alt: "Font choices — the Chillax outcome" },
  { src: "/brand/symbol-hill.png", num: "09", caption: "Final visual cue — hill", alt: "Final visual cue — the hill" },
  { src: "/brand/logo-reveal.png", num: "10", caption: "Logo & balance", alt: "Logo and brand name — 60/40 balance" },
  { src: "/brand/mockup-honey.png", num: "11", caption: "Mockups — honey", alt: "Product mockup — Natural Honey" },
  { src: "/brand/mockup-ghee.png", num: "12", caption: "Mockups — ghee & coffee", alt: "Product mockups — ghee and coffee" },
  { src: "/brand/mockup-manjal.png", num: "13", caption: "Mockups — manjal & jackfruit", alt: "Product mockups — manjal and jackfruit" },
];

export default function BrandPage() {
  return (
    <article>
      <CaseHeader id="brand" />

      <div className="px-[var(--gutter)] py-20 md:py-28">
        {/* The brief — the problem before the pictures */}
        <div className="mb-20">
          <Column>
            <Kicker>The brief</Kicker>
            <P>
              Pepper Valley was a working agro business with a logo that fought
              itself — a busy illustration that didn&apos;t reduce, didn&apos;t
              recall, and didn&apos;t read on a jar. The brief: a clean,
              recallable identity that could carry a growing product range from
              the shelf to the screen. It started, as rebrands do, with deciding
              what to throw away.
            </P>
          </Column>
        </div>

        {/* Before → after */}
        <div className="mx-auto max-w-dossier">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            Before → after
          </p>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-line bg-paper-2/30">
              <Image
                src="/brand/before-after.png"
                alt="The old, busy Pepper Valley Farm illustration beside the clean new Nilambur Farms mark"
                width={1728}
                height={1117}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
              From the busy Pepper Valley Farm illustration to a clean,
              recallable Nilambur Farms mark.
            </figcaption>
          </figure>
        </div>

        {/* The judgment beat */}
        <div className="mt-20">
          <Column>
            <Callout label="The decision that mattered">
              I tested palm, coconut, and teak as the symbol and rejected each
              with a reason — palm and coconut lacked impact, teak was too
              complex — before landing on a leaf, then a mountain, as the most
              relatable cue for the audience.
            </Callout>
          </Column>
        </div>

        {/* How the mark was built */}
        <div className="mx-auto mt-16 max-w-dossier">
          <Kicker>The logo journey</Kicker>
          <Subhead>How the mark was built.</Subhead>
          <p className="mb-8 mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-ink/80">
            From the hills of Nilambur and a wall of references, through symbol
            and wordmark exploration, to the mountain the brand finally stood on.
            Tap any tile to enlarge.
          </p>
          <Gallery items={BUILD} layout="grid" />
        </div>

        {/* The system */}
        <div className="mt-20">
          <Column>
            <Kicker>The system</Kicker>
            <Subhead>Naming, proportion, palette, type.</Subhead>
            <P>
              The name reaches for nature&apos;s abode — products nestled in the
              lush green hills of Nilambur — for local affinity with global
              appeal. The lockup is tuned to a 60/40 balance, brand name to
              symbol, for optimal recall. Fewer elements, single symbols, quick
              recognition.
            </P>
          </Column>

          {/* Palette — real swatches */}
          <div className="mx-auto mt-12 max-w-dossier">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Palette
            </p>
            <div className="flex flex-wrap gap-3">
              {PALETTE.map((c) => (
                <div key={c.hex} className="flex flex-col gap-2">
                  <span
                    className="block h-16 w-16 rounded-lg border border-line"
                    style={{ background: c.hex }}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-wide text-ink-soft">
                    {c.name}
                  </span>
                  <span className="font-mono text-[9px] text-ink-soft/70">
                    {c.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Type spec */}
          <div className="mx-auto mt-12 grid max-w-dossier grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="panel p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Primary font
              </p>
              <p className="font-sans text-3xl font-semibold text-ink">Chillax</p>
              <p className="mt-1 font-mono text-[11px] text-ink-soft">
                Light · Regular · Medium · SemiBold
              </p>
            </div>
            <div className="panel p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Secondary font
              </p>
              <p className="font-sans text-3xl font-semibold text-ink">Syne</p>
              <p className="mt-1 font-mono text-[11px] text-ink-soft">
                Regular · Medium · SemiBold · Bold
              </p>
            </div>
          </div>
        </div>

        {/* The deck, in order */}
        <div className="mx-auto mt-20 max-w-dossier">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            The branding deck — in order
          </p>
          <Gallery items={DECK} layout="grid" />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            Tap any slide to open it full-size · the Grwth × Nilambur Farms deck.
          </p>
        </div>
      </div>

      <CasePager id="brand" />
    </article>
  );
}
