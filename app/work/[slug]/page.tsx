import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getAdjacentCaseStudies,
  CASE_STUDY_ORDER,
} from "@/lib/caseStudies";

// ── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return CASE_STUDY_ORDER.map((slug) => ({ slug }));
}

// ── Page ─────────────────────────────────────────────────────────────────────

interface Props {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const { prev, next } = getAdjacentCaseStudies(params.slug);

  return (
    <>
      {/* ── Hero (dark) ─────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pt-32 pb-16 md:px-12 md:pt-[8rem] md:pb-20">
        <div className="mx-auto max-w-5xl">
          {/* Number + Category row */}
          <div className="mb-6 flex items-center gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              ( {cs.number} )
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              {cs.category}
            </span>
          </div>

          {/* Content headline */}
          <h1
            className="font-serif font-bold leading-[1.0] text-linen"
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
          >
            {cs.headline}
          </h1>

          {/* Impact / stat headline */}
          <p
            className="mt-6 font-serif italic leading-[1.0] text-gold"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 5.5rem)" }}
          >
            {cs.statHeadline}
          </p>
        </div>
      </section>

      {/* ── Stats grid (dark) ───────────────────────────────────────── */}
      {cs.stats.length > 0 && (
        <section className="w-full border-y border-linen/10 bg-obsidian px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {cs.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-serif font-bold leading-none text-gold"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-xs text-muted">{stat.label}</p>
                {stat.delta && (
                  <p className="mt-1 font-mono text-[10px] tracking-wide text-emerald-400/80">
                    {stat.delta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Body (light) ────────────────────────────────────────────── */}
      <section className="w-full bg-linen px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          {/* Summary */}
          <p
            className="font-sans font-medium leading-[1.7] text-ink"
            style={{ fontSize: "1.125rem" }}
          >
            {cs.summary}
          </p>

          {/* Body paragraphs */}
          {cs.bodyParagraphs && cs.bodyParagraphs.length > 0 && (
            <div className="mt-8 space-y-5 font-sans leading-[1.8] text-ink/80"
              style={{ fontSize: "1.0625rem" }}>
              {cs.bodyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* Email programmes table */}
          {cs.programmes && cs.programmes.length > 0 && (
            <div className="mt-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Programme Breakdown )
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-ink/15">
                      <th className="pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Programme</th>
                      <th className="pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Campaigns</th>
                      <th className="pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Open Rate</th>
                      <th className="pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted text-right">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.programmes.map((p) => (
                      <tr key={p.name} className="border-b border-ink/10">
                        <td className="py-3 font-sans text-sm text-ink">{p.name}</td>
                        <td className="py-3 font-mono text-sm text-ink/70">{p.campaigns}</td>
                        <td className="py-3 font-mono text-sm text-ink/70">{p.openRate}</td>
                        <td className="py-3 font-serif font-bold text-right text-ink"
                          style={{ fontSize: "1rem" }}>{p.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Best single send */}
          {cs.bestSend && (
            <div className="mt-10 rounded-lg border border-gold/20 bg-obsidian px-7 py-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                ( Best Single Send )
              </p>
              <p className="font-sans text-sm leading-relaxed text-linen/80">
                {cs.bestSend.date} — {cs.bestSend.delivered.toLocaleString()} delivered ·{" "}
                {cs.bestSend.openRate} open rate ·{" "}
                <span className="font-serif font-bold text-gold">
                  {cs.bestSend.revenue}
                </span>{" "}
                from one campaign.
              </p>
            </div>
          )}

          {/* Articles list */}
          {cs.articles && cs.articles.length > 0 && (
            <div className="mt-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Articles )
              </p>
              <ol className="space-y-3">
                {cs.articles.map((a, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                    <span className="font-sans text-sm text-ink">{a.title}</span>
                    <span className="shrink-0 font-serif font-bold text-ink/70">{a.views}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* SEO keywords */}
          {cs.keywords && cs.keywords.length > 0 && (
            <div className="mt-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Top Ranking Keywords )
              </p>
              <div className="space-y-2">
                {cs.keywords.map((kw) => (
                  <div key={kw.keyword} className="flex items-center justify-between border-b border-ink/10 py-2.5">
                    <span className="font-sans text-sm text-ink">{kw.keyword}</span>
                    <div className="flex items-center gap-4">
                      {kw.volume && (
                        <span className="font-mono text-[10px] text-muted">{kw.volume} vol</span>
                      )}
                      <span className="font-mono text-[11px] font-bold text-gold">{kw.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backlinks */}
          {cs.backlinks && (
            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Backlink Profile )
              </p>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { label: "Total Backlinks", value: cs.backlinks.total },
                  { label: "Referring Domains", value: cs.backlinks.domains },
                  { label: "Authority Score", value: cs.backlinks.authority },
                  { label: "Text Links", value: cs.backlinks.textLinks },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-serif font-bold text-gold" style={{ fontSize: "1.5rem" }}>
                      {item.value}
                    </p>
                    <p className="mt-1 font-sans text-xs text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LinkedIn format breakdown */}
          {cs.linkedInFormats && cs.linkedInFormats.length > 0 && (
            <div className="mt-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Format Breakdown )
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {cs.linkedInFormats.map((f) => (
                  <div key={f.type} className="rounded-lg border border-ink/15 bg-ink/[0.03] px-5 py-4">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {f.type} · {f.posts} posts
                    </p>
                    <p className="font-sans text-sm text-ink">
                      {f.ctr} CTR · {f.engagement} engagement
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LinkedIn best months */}
          {cs.linkedInBestMonths && cs.linkedInBestMonths.length > 0 && (
            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                ( Best Months )
              </p>
              <div className="space-y-3">
                {cs.linkedInBestMonths.map((m) => (
                  <div key={m.month} className="border-b border-ink/10 pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
                      {m.month}
                    </span>
                    <span className="ml-4 font-sans text-sm text-ink/70">{m.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Body note */}
          {cs.bodyNote && (
            <div className="mt-10 border-l-2 border-ink/20 pl-5">
              <p className="font-sans text-sm leading-[1.8] text-ink/70">{cs.bodyNote}</p>
            </div>
          )}

          {/* Quote */}
          {cs.quote && (
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p
                className="font-serif italic leading-relaxed text-ink"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
              >
                &ldquo;{cs.quote}&rdquo;
              </p>
            </blockquote>
          )}
        </div>
      </section>

      {/* ── Prev / Next navigation ───────────────────────────────────── */}
      <nav className="w-full border-t border-linen/10 bg-obsidian px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-gold">
                ← Previous
              </span>
              <span className="font-serif text-sm font-bold text-linen/70 transition-colors group-hover:text-linen">
                {prev.headline}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end gap-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-gold">
                Next →
              </span>
              <span className="font-serif text-sm font-bold text-linen/70 transition-colors group-hover:text-linen text-right">
                {next.headline}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </>
  );
}
