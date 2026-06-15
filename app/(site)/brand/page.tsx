import type { Metadata } from "next";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, Subhead, P, Callout } from "@/components/case/Editorial";
import AssetSlot from "@/components/shell/AssetSlot";
import Deck, { type DeckTile } from "@/components/case/Deck";

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

// The packaging system, rendered in the live palette — drop hi-res photography
// into the same rail later.
const NILAMBUR_PRODUCTS: DeckTile[] = [
  { name: "Nilambur Farms", sub: "Leaf + mountain mark", hex: "#046530", glyph: "mountain", wordmark: "The identity" },
  { name: "Natural Honey", sub: "Raw · Wayanad", hex: "#1F944D", glyph: "jar" },
  { name: "Vechur Cow Ghee", sub: "A2 · small-batch", hex: "#118441", glyph: "jar" },
  { name: "Coffee Beans", sub: "Single origin", hex: "#04150B", glyph: "jar" },
  { name: "Kasthuri Manjal", sub: "Turmeric powder", hex: "#33B763", glyph: "leaf" },
  { name: "Dried Jackfruit", sub: "Sun-dried", hex: "#046530", glyph: "leaf" },
];

// Grwth — the side shop. Oxblood, the house accent.
const AGENCY_TILES: DeckTile[] = [
  { name: "Grwth", sub: "Brand & growth shop", hex: "#C2381B", glyph: "spark", wordmark: "Other work" },
  { name: "Brand identity", sub: "Naming → system", hex: "#9E2C14", glyph: "spark", wordmark: "Grwth" },
  { name: "Content strategy", sub: "Editorial → SEO", hex: "#7A2210", glyph: "spark", wordmark: "Grwth" },
  { name: "Full-funnel growth", sub: "Acquisition → retention", hex: "#56180C", glyph: "spark", wordmark: "Grwth" },
  { name: "Client work", sub: "Case studies on request", hex: "#2A0E08", glyph: "spark", wordmark: "Grwth" },
];

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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <AssetSlot
                label="Old mark — Pepper Valley Farm (busy, illustrative)"
                file="/brand-old-pepper-valley.png"
                ratio="4 / 3"
              />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                Before
              </p>
            </div>
            <div>
              <AssetSlot
                label="New identity — Nilambur Farms (clean, recallable)"
                file="/brand-new-nilambur.svg"
                ratio="4 / 3"
              />
              <p
                className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: GREEN }}
              >
                After
              </p>
            </div>
          </div>
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
            <AssetSlot
              label="Symbol exploration grid — palm · coconut · teak · leaf · mountain"
              file="/brand-symbol-exploration.png"
              ratio="16 / 7"
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

          {/* Palette — real swatches, no asset needed */}
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

          {/* Usage system */}
          <div className="mx-auto mt-6 max-w-dossier">
            <AssetSlot
              label="Logo system — safe space · mono · usage do's & don'ts"
              file="/brand-logo-system.png"
              ratio="16 / 9"
            />
          </div>
        </div>

        {/* Payoff — packaging system as a horizontal deck */}
        <div className="mx-auto mt-20 max-w-dossier">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            The payoff — the packaging system
          </p>
          <Deck tiles={NILAMBUR_PRODUCTS} />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            Label system shown in the live Nilambur ramp · scroll →
            hi-res product photography drops into the same rail.
          </p>
        </div>

        {/* Other work — the Grwth agency strip */}
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
            <Deck tiles={AGENCY_TILES} />
          </div>
        </div>
      </div>

      <CasePager id="brand" />
    </article>
  );
}
