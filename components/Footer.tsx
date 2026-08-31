import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="gradient-text font-body text-lg tracking-[0.35em] font-normal">
            CORBEAUTY
          </p>
          <p className="mt-3 text-sm text-ink-soft max-w-xs">
            Soft, natural beauty. Curated just for you, in Miami.
          </p>
        </div>
        <div>
          <p className="label text-rose mb-4">Explore</p>
          <ul className="space-y-3 text-sm text-ink-soft">
            <li><Link href="/about" className="hover:text-rose transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-rose transition-colors">Services</Link></li>
            <li><Link href="/book" className="hover:text-rose transition-colors">Book an appointment</Link></li>
          </ul>
        </div>
        <div>
          <p className="label text-rose mb-4">Follow</p>
          <a
            href="https://www.instagram.com/corbeautymiami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft hover:text-rose transition-colors"
          >
            @corbeautymiami
          </a>
        </div>
      </div>
      <div className="border-t border-hairline">
        <p className="mx-auto max-w-6xl px-6 py-6 label text-ink-soft/70">
          © {new Date().getFullYear()} Corbeauty Miami
        </p>
      </div>
    </footer>
  );
}
