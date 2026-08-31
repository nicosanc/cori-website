"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="gradient-text font-body text-lg tracking-[0.35em] font-normal">
            CORBEAUTY
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`label transition-colors ${
                pathname === l.href ? "text-rose" : "text-ink-soft hover:text-rose"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="label gradient-brand text-white px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden text-ink-soft label"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-hairline bg-cream px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`label ${pathname === l.href ? "text-rose" : "text-ink-soft"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="label gradient-brand text-white px-6 py-3 text-center"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
