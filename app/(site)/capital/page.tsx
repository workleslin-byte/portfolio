import type { Metadata } from "next";
import Image from "next/image";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import {
  Column,
  Kicker,
  Subhead,
  P,
  Stats,
  Callout,
  Aside,
} from "@/components/case/Editorial";
import ProgrammeBars from "@/components/viz/ProgrammeBars";

export const metadata: Metadata = {
  title: "Capital — ₹16.8 Cr of social investment, moved through comms",
  description:
    "Rang De, 2024–25. The email and lifecycle programmes that mobilized ₹16.8 crore of social investment — not revenue — under RBI rules that forbid hype and guaranteed returns.",
};

const PROGRAMME_BARS = [
  { label: "Transaction-day", value: 1.0, display: "₹6.65 Cr", highlight: true },
  { label: "Weekly newsletter", value: 0.74, display: "₹4.93 Cr" },
  { label: "Active-investor nudges", value: 0.4, display: "₹2.63 Cr" },
  { label: "Onboarding (2 emails)", value: 0.062, display: "₹40.98 L" },
  { label: "Reactivation", value: 0.038, display: "₹25.58 L" },
];

export default function CapitalPage() {
  return (
    <article>
      <CaseHeader id="capital" />

      <div className="mx-auto max-w-dossier px-[var(--gutter)] pt-12">
        <div className="flex items-center gap-4 border-t border-line pt-6">
          <Image
            src="/rangde-logo.png"
            alt="Rang De"
            width={120}
            height={96}
            className="h-11 w-auto object-contain"
          />
          <p className="max-w-xs font-mono text-[11px] uppercase leading-snug tracking-[0.12em] text-ink-soft">
            Rang De — peer-to-peer social investment platform for rural India
          </p>
        </div>
      </div>

      <div className="px-[var(--gutter)] py-20 md:py-28">
        <Column>
          <Kicker>Why it&apos;s hard</Kicker>
          <P>
            Selling a product is easy next to persuading someone to{" "}
            <em>invest</em> — nothing in hand, an uncertain return, half of the
            motive altruistic. And the platform is regulated: RBI rules forbid
            hype, urgency tricks, and any promise of a guaranteed number. The
            only tool left is clarity. Every rupee below was moved with it.
          </P>

          <Stats
            items={[
              { value: "₹16.8 Cr", label: "Social investment mobilized", accent: true },
              { value: "2.91M", label: "Emails delivered" },
              { value: "97.73%", label: "Deliverability" },
              { value: "321", label: "Campaigns shipped" },
            ]}
          />
        </Column>

        <div className="mx-auto mt-16 max-w-3xl">
          <ProgrammeBars
            title="Revenue by programme — where the capital actually came from (₹ Cr)"
            bars={PROGRAMME_BARS}
          />
        </div>

        <div className="mt-16">
          <Column>
            <Callout>
              Everyone optimizes subject lines. The revenue was hiding in
              send-timing, so I rebuilt the programmes around transaction
              windows, first-investment moments, and re-engagement triggers
              instead.
            </Callout>

            <Subhead>The honest signal isn&apos;t the open rate.</Subhead>
            <P>
              Financial-services email runs roughly 21–25% open, 2.4–3.1%
              click-through, and ~95% deliverability as a sector baseline. The
              eye-catching &ldquo;40%+ open rate&rdquo; you see quoted elsewhere
              is largely an Apple Mail Privacy measurement artifact, not
              performance. So I lead with the two numbers that can&apos;t be
              inflated: capital moved, and deliverability — and 97.73% sits above
              the sector bar.
            </P>
            <P>
              For scale: Rang De has mobilized about $20.4M to 90,800+ borrowers
              since 2008 — on the order of ₹170 crore over ~17 years. One
              financial year of comms-driven mobilization at ₹16.8 crore is a
              meaningful share of the platform&apos;s lifetime movement.
            </P>

            <Aside label="Push — the channel that lives or dies on restraint">
              <span className="font-mono text-ink">
                ₹39.33 L via CleverTap · 217 campaigns · 95.6% deliverability.
              </span>{" "}
              Notifications reward timing and silence, not volume. Used with
              discipline, push returned roughly ₹31.5K for every 1,000 delivered.
            </Aside>

            <P>
              Email ran on{" "}
              <span className="font-semibold text-ink">WebEngage</span>{" "}
              (journeys, broadcasts, the weekly newsletter); push ran on{" "}
              <span className="font-semibold text-ink">CleverTap</span>. Two
              channels, one editorial standard: say the true thing clearly, and
              let the timing do the rest.
            </P>
          </Column>
        </div>
      </div>

      <CasePager id="capital" />
    </article>
  );
}
