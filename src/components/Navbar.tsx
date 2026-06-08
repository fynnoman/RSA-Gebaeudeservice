"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled || open
          ? "bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] backdrop-blur-md border-b border-hairline/60"
          : "bg-transparent")
      }
    >
      <div className="container-thin flex items-center justify-between py-3.5 lg:py-4">
        <Link href="/" className="-my-1" onClick={() => setOpen(false)}>
          <Logo size={40} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[0.82rem] text-ink-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-hairline">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4968310000000"
            className="hidden md:inline-flex items-center gap-2 text-[0.72rem] tracking-[0.16em] uppercase font-medium text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-azur pulse-dot" />
            +49 6831 · ___
          </a>
          <Link href="/kontakt" className="hidden lg:inline-flex btn-ink">
            <span>Angebot</span>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M3 7h8m-3-3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink rounded-lg hover:bg-paper-deep/60 transition-colors"
            aria-label="Menü"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.4" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.4" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline/50 bg-paper">
          <div className="container-thin py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-1 text-base text-ink border-b border-hairline/40 last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 btn-ink w-full"
            >
              Kostenloses Angebot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
