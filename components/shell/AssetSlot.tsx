/**
 * A disciplined placeholder for a real binary asset (photo / video / mockup /
 * logo) the user will drop in. Marked clearly, on-brand, and labeled with the
 * exact file it expects so the drop-in list writes itself.
 */
export default function AssetSlot({
  label,
  file,
  ratio = "4 / 3",
  className = "",
}: {
  label: string;
  file?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative grid w-full place-items-center overflow-hidden rounded-[14px] border border-dashed border-line bg-paper-2/60 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="px-5 text-center">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          className="mx-auto mb-3 text-ink-soft/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
          {label}
        </p>
        {file ? (
          <p className="mt-1.5 font-mono text-[10px] tracking-wide text-ink-soft/70">
            {file}
          </p>
        ) : null}
      </div>
    </div>
  );
}
