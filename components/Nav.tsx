"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKING_URL } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: BOOKING_URL, label: "Book Now", external: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-hairline">
      {/* Desktop: two-tier centered */}
      <div className="hidden md:block">
        <div className="flex justify-center pt-6 pb-4">
          <Link href="/">
            <span className="gradient-text font-body text-2xl tracking-[0.4em] font-normal">
              CORBEAUTY
            </span>
          </Link>
        </div>
        <nav className="flex justify-center gap-12 pb-5">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-ink-soft hover:text-rose transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`label transition-colors ${
                  pathname === l.href ? "text-rose" : "text-ink-soft hover:text-rose"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile: single row + dropdown */}
      <div className="md:hidden flex items-center justify-between px-6 h-16">
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="gradient-text font-body text-lg tracking-[0.35em] font-normal">
            CORBEAUTY
          </span>
        </Link>
        <button
          className="text-ink-soft label"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-hairline bg-cream px-6 py-6 flex flex-col items-center gap-5">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="label text-ink-soft"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`label ${pathname === l.href ? "text-rose" : "text-ink-soft"}`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
