import Link from "next/link";
import { BOOKING_URL } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-28 text-center">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="gradient-text font-body text-xl tracking-[0.4em] font-normal">
          CORBEAUTY
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          Soft, natural beauty. Curated just for you, in Miami.
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-8">
          <Link href="/about" className="label text-ink-soft hover:text-rose transition-colors">
            About
          </Link>
          <Link href="/services" className="label text-ink-soft hover:text-rose transition-colors">
            Services
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-ink-soft hover:text-rose transition-colors"
          >
            Book
          </a>
          <a
            href="https://www.instagram.com/corbeautymiami"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-ink-soft hover:text-rose transition-colors"
          >
            Instagram
          </a>
        </nav>
        <p className="label text-ink-soft/60 mt-10">
          © {new Date().getFullYear()} Corbeauty Miami
        </p>
      </div>
    </footer>
  );
}
