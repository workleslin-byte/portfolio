import Image from "next/image";

/**
 * Framed image. When `grade` is on, it's pushed toward the warm paper tone
 * (desaturate + sepia + a soft paper wash + a whisper of oxblood) so photographs
 * sit inside the dossier instead of fighting it. Product shots pass grade={false}
 * to keep their own obsidian/aged-gold.
 */
export default function GradedImage({
  src,
  alt,
  ratio = "4 / 5",
  className = "",
  sizes = "(max-width: 768px) 100vw, 42vw",
  priority = false,
  grade = true,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  grade?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border border-line ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={
          grade
            ? "object-cover [filter:grayscale(0.16)_sepia(0.26)_contrast(1.04)_brightness(1.02)]"
            : "object-cover"
        }
      />
      {grade ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[var(--paper)] opacity-40 mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 bg-[var(--accent)] opacity-[0.05] mix-blend-color" />
        </>
      ) : null}
    </div>
  );
}
