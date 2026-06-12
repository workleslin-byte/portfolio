export default function Footer() {
  return (
    <footer className="bg-[#140D1F] border-t border-white/5 py-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          © 2025 Leslin K Seemon
        </span>

        <span className="font-sans text-xs text-muted text-center">
          Kerala, India · Open to remote and relocation
        </span>

        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.1em] text-muted">
          <a
            href="mailto:leslin@pocketnotes.in"
            className="hover:text-white transition-colors duration-200"
          >
            leslin@pocketnotes.in
          </a>
          <a
            href="https://www.linkedin.com/in/leslin-k-seemon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
