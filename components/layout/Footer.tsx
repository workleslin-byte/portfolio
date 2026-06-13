export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/10 py-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
          © 2025 Leslin K Seemon
        </span>

        <span className="font-sans text-xs text-mute text-center">
          Kerala, India · Open to remote and relocation
        </span>

        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.1em] text-mute">
          <a
            href="mailto:leslin@pocketnotes.in"
            className="hover:text-ink transition-colors duration-200"
          >
            leslin@pocketnotes.in
          </a>
          <a
            href="https://www.linkedin.com/in/leslin-k-seemon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
