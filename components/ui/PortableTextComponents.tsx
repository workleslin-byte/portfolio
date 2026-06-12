import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 font-sans text-[1.0625rem] leading-[1.85] text-ink/80">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className="mb-4 mt-10 font-serif font-bold leading-tight text-ink"
        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif font-bold text-[1.25rem] leading-tight text-ink">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-gold pl-6">
        <p
          className="font-serif italic leading-relaxed text-ink"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.45rem)" }}
        >
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="font-serif italic text-ink/90">{children}</em>
    ),
    code: ({ children }) => (
      <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.875em] text-ink">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-6 list-disc space-y-2 font-sans text-[1.0625rem] leading-[1.8] text-ink/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 ml-6 list-decimal space-y-2 font-sans text-[1.0625rem] leading-[1.8] text-ink/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};
