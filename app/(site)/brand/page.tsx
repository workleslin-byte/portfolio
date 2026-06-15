import type { Metadata } from "next";
import Image from "next/image";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, Subhead, P, Callout } from "@/components/case/Editorial";
import SlideDeck, { type Slide } from "@/components/case/SlideDeck";

export const metadata: Metadata = {
  title: "Brand — a full identity for an agro company",
  description:
    "Grwth × Nilambur Farms, 2024. From the busy old Pepper Valley mark to a clean, recallable identity — naming, symbol exploration, palette, type, and the jar on the shelf.",
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

// Real slides from the Grwth × Nilambur Farms branding deck.
const DECK_SLIDES: Slide[] = [
  {
    src: "/brand/mockup-honey.png",
    alt: "Natural Honey jar carrying the Nilambur Farms label",
    caption: "Product mockup — Natural Honey",
  },
  {
    src: "/brand/guidelines.png",
    alt: "Nilambur Farms brand guidelines cover",
    caption: "Brand guidelines — visual identity v1",
  },
  {
    src: "/brand/client-brief.png",
    alt: "Client brief — core identity pillars",
    caption: "Client brief — core identity",
  },
  {
    src: "/brand/moodboard.png",
    alt: "Moodboard — colours, fonts, and forest references",
    caption: "Moodboard — palette & type direction",
  },
  {
    src: "/brand/cover.png",
    alt: "Branding deck cover — branding for an agro company",
    caption: "The deck — branding for an agro company",
  },
];

function Plate({
  src,
  alt,
  w,
  h,
  caption,
  green = false,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption?: string;
  green?: boolean;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-paper-2/30">
        <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full" />
      </div>
      {caption ? (
        <figcaption
          className={`mt-3 font-mono text-[10px] uppercase tracking-[0.14em] ${
            green ? "" : "text-ink-soft"
          }`}
          style={green ? { color: GREEN } : undefined}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function BrandPage() {
  return (
    <article>
      <CaseHeader id="brand" />

      <div className="px-[var(--gutter)] py-20 md:py-28">
        {/* Before → after */}
        <div className="mx-auto max-w-dossier">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            Before → after
          </p>
          <Plate
            src="/brand/before-after.png"
            alt="The old, busy Pepper Valley Farm illustration beside the clean new Nilambur Farms mark"
            w={1728}
            h={1117}
            caption="From the busy Pepper Valley Farm illustration to a clean, recallable Nilambur Farms mark."
          />
        </div>

        {/* The judgment beat + symbol exploration */}
        <div className="mt-20">
          <Column>
            <Callout label="The decision that mattered">
              I tested palm, coconut, and teak as the symbol and rejected each
              with a reason — palm and coconut lacked impact, teak was too
              complex — before landing on a leaf, then a mountain, as the most
              relatable cue for the audience.
            </Callout>
          </Column>
          <div className="mx-auto mt-10 max-w-dossier">
            <Plate
              src="/brand/symbol-hill.png"
              alt="Symbol exploration converging on a hill / mountain mark"
              w={1728}
              h={1117}
              caption="Symbol exploration — converging on the hill."
            />
          </div>
          <div className="mx-auto mt-6 max-w-dossier">
            <Plate
              src="/brand/logo-reveal.png"
              alt="The final Nilambur Farms logo with the 60/40 name-to-symbol balance"
              w={1728}
              h={1117}
              caption="The mark — 60 / 40 name-to-symbol balance, tuned for recall."
            />
          </div>
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
            <div className="rounded-xl border border-line p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Primary font
              </p>
              <p className="font-sans text-3xl font-semibold text-ink">Chillax</p>
              <p className="mt-1 font-mono text-[11px] text-ink-soft">
                Light · Regular · Medium · SemiBold
              </p>
            </div>
            <div className="rounded-xl border border-line p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Secondary font
              </p>
              <p className="font-sans text-3xl font-semibold text-ink">Syne</p>
              <p className="mt-1 font-mono text-[11px] text-ink-soft">
                Regular · Medium · SemiBold · Bold
              </p>
            </div>
          </div>

          {/* Safe space + usage */}
          <div className="mx-auto mt-8 grid max-w-dossier gap-5 md:grid-cols-2">
            <Plate
              src="/brand/logo-safespace.png"
              alt="Logo safe-space and clear-space construction"
              w={1728}
              h={972}
              caption="Clear space — built on the x-height of the mark."
            />
            <Plate
              src="/brand/logo-usage.png"
              alt="Logo usage across light, dark, and photographic backgrounds"
              w={1728}
              h={972}
              caption="Usage — across light, dark, and photographic grounds."
            />
          </div>
        </div>

        {/* Payoff — the deck */}
        <div className="mx-auto mt-20 max-w-dossier">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            The payoff — the brand deck
          </p>
          <SlideDeck slides={DECK_SLIDES} />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            Scroll → real slides from the Grwth × Nilambur Farms branding deck.
          </p>
        </div>

        {/* Other work — the Grwth shop */}
        <div className="mx-auto mt-24 max-w-dossier border-t border-line pt-16">
          <Kicker>Other work</Kicker>
          <Subhead>Grwth — my brand &amp; growth shop.</Subhead>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-ink/80">
            Alongside client work I run a small brand and growth shop — content
            strategy, design, and full-funnel growth for clients who want work
            that doesn&apos;t look like everyone else&apos;s. Logo and case
            studies available on request.
          </p>
          <div className="mt-8">
            <Plate
              src="/brand/grwth-cover.png"
              alt="Grwth — nurture potential, accelerate growth"
              w={1728}
              h={1117}
            />
          </div>
        </div>
      </div>

      <CasePager id="brand" />
    </article>
  );
}
