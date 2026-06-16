const GOLD = "#A8842E"; // Pocket Notes' aged gold
const OBSIDIAN = "#161310"; // the cover stock
const CREAM = "#EFEDE8"; // page

/**
 * Stands in for a screenshot of the on-site interactive writing widget. Drawn
 * in code in Pocket Notes' own obsidian/aged-gold — a tiny editor with the
 * thesis half-typed and a live caret, over faint notebook rules. The one tile
 * on the page that keeps the product's palette instead of the dossier's paper.
 */
export default function WritingWidgetTile() {
  return (
    <div
      className="flex flex-col p-5"
      style={{
        aspectRatio: "1 / 1",
        background: OBSIDIAN,
        border: `1px solid ${GOLD}33`,
      }}
      role="img"
      aria-label="A mock of the Pocket Notes writing widget: the line 'write badly, write fast' half-typed with a blinking caret, in the brand's obsidian and aged-gold."
    >
      <p
        className="font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: GOLD }}
      >
        ✦ the writing widget
      </p>

      <div className="mt-auto">
        <p
          className="font-display text-[22px] font-medium leading-snug"
          style={{ color: CREAM }}
        >
          write badly,
          <br />
          write fast
          <span
            className="caret ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.12em]"
            style={{ background: GOLD }}
            aria-hidden="true"
          />
        </p>

        {/* faint baseline rules */}
        <div className="mt-4 space-y-2.5" aria-hidden="true">
          <span className="block h-px" style={{ background: `${CREAM}1f` }} />
          <span className="block h-px" style={{ background: `${CREAM}1f` }} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 font-mono text-[10px] tracking-wide"
            style={{ border: `1px solid ${GOLD}55`, color: GOLD }}
          >
            new note
          </span>
          <span className="font-mono text-[11px]" style={{ color: `${GOLD}aa` }}>
            ↵ save
          </span>
        </div>
      </div>
    </div>
  );
}
