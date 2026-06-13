"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Index", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > prevScrollY.current;

      setScrolled(y > 80);

      if (y > 200 && scrollingDown) {
        setHidden(true);
      } else if (!scrollingDown) {
        setHidden(false);
      }

      prevScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent",
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className={cn(
              "font-display font-bold text-[13px] uppercase tracking-[0.18em] transition-colors duration-200",
              scrolled ? "text-ink" : "text-paper"
            )}
          >
            LESLIN K SEEMON
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200",
                    scrolled
                      ? pathname === href
                        ? "text-accent"
                        : "text-ink/50 hover:text-ink"
                      : pathname === href
                        ? "text-accent"
                        : "text-paper/60 hover:text-paper"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-px w-6 origin-center transition-transform duration-300",
                scrolled ? "bg-ink" : "bg-paper",
                menuOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 transition-opacity duration-300",
                scrolled ? "bg-ink" : "bg-paper",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 origin-center transition-transform duration-300",
                scrolled ? "bg-ink" : "bg-paper",
                menuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink flex flex-col justify-center px-8 md:hidden",
          "transition-all duration-500 ease-in-out",
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        )}
      >
        <ul className="flex flex-col gap-6 pt-16">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li
              key={href}
              className={cn(
                "transition-all duration-500",
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : "0ms" }}
            >
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "font-display font-extrabold text-5xl leading-none transition-colors duration-200",
                  pathname === href ? "text-accent" : "text-paper hover:text-accent"
                )}
              >
                {label}
              </Link>
              <span className="font-mono text-[11px] text-mute-dark tracking-[0.2em] uppercase ml-1">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
