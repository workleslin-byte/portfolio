import type { Metadata } from "next";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, Subhead, P, Callout, Masonry } from "@/components/case/Editorial";
import AssetSlot from "@/components/shell/AssetSlot";

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

        {/* Payoff — packaging */}
        <div className="mt-20">
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            The payoff — on the shelf
          </p>
          <Masonry>
            <AssetSlot label="Natural Honey" file="/brand-mockup-honey.jpg" ratio="1 / 1" />
            <AssetSlot label="Vechur Cow Ghee" file="/brand-mockup-ghee.jpg" ratio="3 / 4" />
            <AssetSlot label="Coffee Beans" file="/brand-mockup-coffee.jpg" ratio="4 / 3" />
            <AssetSlot
              label="Kasthuri Manjal Powder"
              file="/brand-mockup-manjal.jpg"
              ratio="3 / 4"
            />
            <AssetSlot
              label="Dried Jackfruit"
              file="/brand-mockup-jackfruit.jpg"
              ratio="1 / 1"
            />
          </Masonry>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            Production assets (logo SVGs, hi-res mockups, tokens) to be exported
            from Figma.
          </p>
        </div>
      </div>

      <CasePager id="brand" />
    </article>
  );
}
