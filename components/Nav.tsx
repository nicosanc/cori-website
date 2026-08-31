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
    <header className="sticky top-0 z-50 bg-noir text-cream border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between">
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
                pathname === l.href ? "text-blush" : "text-cream/70 hover:text-blush"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="label btn-pill border border-blush/60 text-blush px-6 py-3 hover:bg-blush hover:text-noir transition-colors"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden text-cream/80 label"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-noir px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`label ${pathname === l.href ? "text-blush" : "text-cream/70"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="label btn-pill border border-blush/60 text-blush px-6 py-3 text-center"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
