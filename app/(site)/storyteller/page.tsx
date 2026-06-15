import type { Metadata } from "next";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, P, Stats, Callout } from "@/components/case/Editorial";
import CountUp from "@/components/motion/CountUp";
import ChannelGlyph from "@/components/case/ChannelGlyph";
import ProgrammeBars from "@/components/viz/ProgrammeBars";

export const metadata: Metadata = {
  title:
    "Digital Storyteller — 804K impressions, ₹16.8 Cr revenue, 1.7L reads",
  description:
    "Rang De, 2024–25. LinkedIn consistency, a ₹16.8 Cr email programme, push discipline — across channels with one editorial standard. All figures verified from LinkedIn, Klaviyo, and CleverTap exports.",
};

/** Email revenue by programme — Klaviyo, Dec 2024–Dec 2025. Share of the
 *  largest line (Transaction-Day, ₹6.65 Cr) drives the bar width. */
const EMAIL_PROGRAMMES = [
  { label: "Transaction-day · 36 campaigns", value: 1, display: "₹6.65 Cr" },
  {
    label: "Weekly newsletter · 50 campaigns",
    value: 4.93 / 6.65,
    display: "₹4.93 Cr",
    highlight: true,
  },
  { label: "Active-investor nudges · 57", value: 2.63 / 6.65, display: "₹2.63 Cr" },
  { label: "Onboarding journey · 2", value: 0.4098 / 6.65, display: "₹40.98 L" },
  { label: "Reactivation (dormant) · 103", value: 0.2558 / 6.65, display: "₹25.58 L" },
];

export default function StorytellerPage() {
  return (
    <article>
      <CaseHeader id="storyteller" />

      <div className="px-[var(--gutter)] py-20 md:py-28">
        <Column>
          <Kicker>Every surface. One discipline.</Kicker>
          <P>
            Content marketing isn&apos;t viral moments or volume. It&apos;s
            showing up consistently with things worth reading — across every
            surface where the audience already is. One year at Rang De, the
            peer-to-peer social-investment platform for rural India: LinkedIn
            for reach, email for revenue, push for moments, and an organic
            engine underneath — a blog grown 2.2×, the SEO that fed it, and the
            long-form writing the search engines rewarded.
          </P>

          <Stats
            items={[
              { value: "804K", label: "LinkedIn impressions", accent: true },
              { value: "₹16.8 Cr", label: "Email revenue attributed" },
              { value: "₹39.33 L", label: "Push revenue" },
              { value: "1.7L+", label: "Long-form reads" },
            ]}
          />
        </Column>
      </div>

      {/* LinkedIn */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(31, 148, 77, 0.05) 0%, rgba(198, 56, 27, 0.02) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  LinkedIn
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  Consistent presence, not viral moments · LinkedIn Analytics
                </p>
              </div>
              <ChannelGlyph glyph="linkedin" tint="rgba(31, 148, 77, 0.10)" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Metric label="Impressions">
                <CountUp target={804} suffix="K" eagerLoad />
              </Metric>
              <Metric label="Engagement rate">
                <CountUp target={9.01} decimals={2} suffix="%" eagerLoad />
              </Metric>
              <Metric label="Posts shipped">
                <CountUp target={323} eagerLoad />
              </Metric>
              <Metric label="Total clicks">
                <CountUp target={56835} eagerLoad />
              </Metric>
            </div>

            <Callout>
              6.3 posts a week for 52 weeks — the kind of output that takes
              editorial discipline, content systems, and a clear platform voice.
              79% of all engagements were clicks: people doing something, not
              scrolling past. Engagement rate ran 9.01% against a 2–4% industry
              average.
            </Callout>

            <div className="mt-8">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Format strategy — chosen by objective, not habit
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-line/60 bg-paper/40 p-4">
                  <p className="text-sm font-semibold text-ink">
                    Non-video — drove intent
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-soft">
                    238 posts · 8.22% CTR · 10.29% engagement
                  </p>
                </div>
                <div className="rounded-lg border border-line/60 bg-paper/40 p-4">
                  <p className="text-sm font-semibold text-ink">
                    Video — built awareness
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-soft">
                    85 posts · 3.84% CTR · 5.49% engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(198, 56, 27, 0.05) 0%, rgba(31, 148, 77, 0.02) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Email
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  The weekly newsletter, inside a ₹16.8 Cr programme · Klaviyo
                </p>
              </div>
              <ChannelGlyph glyph="mail" tint="rgba(198, 56, 27, 0.08)" />
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Metric label="Revenue attributed" accent>
                <CountUp target={16.8} decimals={1} prefix="₹" suffix=" Cr" />
              </Metric>
              <Metric label="Emails delivered">
                <CountUp target={2.91} decimals={2} suffix="M" />
              </Metric>
              <Metric label="Deliverability">
                <CountUp target={97.73} decimals={2} suffix="%" />
              </Metric>
              <Metric label="Campaigns shipped">
                <CountUp target={321} />
              </Metric>
            </div>

            <ProgrammeBars
              title="Revenue by programme — where the ₹16.8 Cr came from"
              bars={EMAIL_PROGRAMMES}
            />

            <div className="mt-10">
              <Callout>
                Best single send: the 1 Nov 2025 transaction-day email — 9,099
                delivered, 20.2% open, ₹62.49 lakh from one campaign. The
                highest-performing programmes were built on behaviour, not
                urgency tricks: transaction windows, first-investment moments,
                re-engagement triggers. Knowing when to send beats knowing what
                to write.
              </Callout>
            </div>
          </div>
        </div>
      </div>

      {/* Push */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(198, 56, 27, 0.04) 0%, rgba(31, 148, 77, 0.03) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Push notifications
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  The hardest channel to get right · CleverTap
                </p>
              </div>
              <ChannelGlyph glyph="push" tint="rgba(31, 148, 77, 0.08)" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <Metric label="Revenue attributed" accent>
                <CountUp target={39.33} decimals={2} prefix="₹" suffix="L" />
              </Metric>
              <Metric label="Campaigns">
                <CountUp target={217} />
              </Metric>
              <Metric label="Deliverability">
                <CountUp target={95.6} decimals={1} suffix="%" />
              </Metric>
            </div>

            <Callout>
              Push lives or dies on timing, copy, and restraint. 124,870
              delivered of 130,607 sent (95.6%), returning ₹31.5K for every
              1,000 delivered — a channel used with discipline, not volume for
              its own sake.
            </Callout>
          </div>
        </div>
      </div>

      {/* Blog Growth */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(31, 148, 77, 0.05) 0%, rgba(198, 56, 27, 0.02) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Blog Growth
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  From side page to primary discovery channel · GA4
                </p>
              </div>
              <ChannelGlyph glyph="chart" tint="rgba(31, 148, 77, 0.10)" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Metric label="Sessions · FY25 (+120% YoY)" accent>
                <CountUp target={31464} />
              </Metric>
              <Metric label="Blog views (+98% YoY)">
                <CountUp target={39606} />
              </Metric>
              <Metric label="Users (+102% YoY)">
                <CountUp target={24035} />
              </Metric>
              <Metric label="FY24 goal attainment">
                <CountUp target={161} suffix="%" />
              </Metric>
            </div>

            <Callout>
              The blog had no editorial strategy and no performance tracking
              when I took it over. I built a publishing system around
              high-intent informational queries, a content calendar, and
              consistent measurement — it doubled its audience year on year
              (2.2×), with organic search as the primary driver, by design.
            </Callout>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(198, 56, 27, 0.05) 0%, rgba(31, 148, 77, 0.02) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  SEO
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  Organic visibility, no paid placements · SEMrush India
                </p>
              </div>
              <ChannelGlyph glyph="search" tint="rgba(198, 56, 27, 0.08)" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Metric label="Organic traffic (+97% YoY)" accent>
                <CountUp target={20.2} decimals={1} suffix="K" />
              </Metric>
              <Metric label="Top-100 keywords">
                <CountUp target={988} />
              </Metric>
              <Metric label="Referring domains">
                <CountUp target={698} />
              </Metric>
              <Metric label="Ad-equivalent value (+70%)">
                <CountUp target={831} prefix="$" />
              </Metric>
            </div>

            <div className="mb-8">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Top ranking wins
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["How poverty line is estimated in India", "#1"],
                  ["Describe how poverty line is estimated", "#3 · 9.9K vol"],
                  ["Lijjat papad story", "#3"],
                  ["Cocoa farming economics, India", "Top 5"],
                ].map(([kw, pos]) => (
                  <div
                    key={kw}
                    className="flex items-center justify-between gap-3 rounded-lg border border-line/60 bg-paper/40 p-3.5"
                  >
                    <span className="text-sm text-ink">{kw}</span>
                    <span className="shrink-0 font-mono text-xs font-semibold text-[color:var(--accent)]">
                      {pos}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Callout>
              Write the definitive piece on topics where the audience is already
              searching, link it to conversion-relevant pages, measure, repeat.
              77.8% of organic traffic is informational — deliberately
              top-of-funnel, so product and signup pages catch the intent
              downstream.
            </Callout>
          </div>
        </div>
      </div>

      {/* Long-Form Writing */}
      <div className="border-t border-line px-[var(--gutter)] py-16 md:py-24">
        <div className="mx-auto max-w-dossier">
          <div
            className="rounded-2xl border border-line p-8 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(31, 148, 77, 0.04) 0%, rgba(198, 56, 27, 0.03) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Long-Form Writing
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  1.7L+ reads on rural India · FY24–25
                </p>
              </div>
              <ChannelGlyph glyph="article" tint="rgba(31, 148, 77, 0.08)" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Metric label="Reads · top 9 articles" accent>
                <CountUp target={1.7} decimals={1} suffix="L+" />
              </Metric>
              <Metric label="Articles published">
                <CountUp target={9} />
              </Metric>
              <Metric label="Average read time">
                <CountUp target={8} prefix="~" suffix=" min" />
              </Metric>
              <Metric label="Subjects covered">
                <CountUp target={6} />
              </Metric>
            </div>

            <div className="mb-8">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Most-read pieces
              </p>
              <ul className="divide-y divide-line border-y border-line">
                {[
                  ["What Is the Poverty Line in India?", "Development data", "29,109"],
                  ["How Self-Help Groups (SHGs) Work", "Community finance", "18,176"],
                  ["Economics of Cocoa Farming in India", "Agriculture", "18,112"],
                  ["The Lijjat Papad Story", "Co-operative enterprise", "15,892"],
                  ["The Waterman of India: Rajendra Singh", "Environment", "12,533"],
                ].map(([title, subject, views]) => (
                  <li
                    key={title}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="min-w-0">
                      <span className="text-sm text-ink">{title}</span>
                      <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                        {subject}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-sm tabular-nums text-ink">
                      {views}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Callout>
              These weren&apos;t SEO-first articles dressed up as journalism.
              Each was a genuine attempt to explain something real — how India
              calculates who is poor, what a women&apos;s cooperative actually
              runs on, how a cocoa farmer&apos;s year works financially. The
              search traffic followed because the depth was real.
            </Callout>
          </div>
        </div>
      </div>

      <CasePager id="storyteller" />
    </article>
  );
}

/** A single channel metric: large accent/ink number over a mono label. */
function Metric({
  label,
  accent = false,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold leading-none tracking-tight ${
          accent ? "text-[color:var(--accent)]" : "text-ink"
        }`}
      >
        {children}
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">
        {label}
      </p>
    </div>
  );
}
