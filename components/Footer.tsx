import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir text-cream mt-32">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <p className="gradient-text font-display italic text-5xl md:text-7xl text-center">
          Beauty, refined.
        </p>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
          <span className="gradient-text font-body tracking-[0.35em] font-normal">
            CORBEAUTY
          </span>
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="/about" className="label text-cream/60 hover:text-blush transition-colors">
              About
            </Link>
            <Link href="/services" className="label text-cream/60 hover:text-blush transition-colors">
              Services
            </Link>
            <Link href="/book" className="label text-cream/60 hover:text-blush transition-colors">
              Book
            </Link>
            <a
              href="https://www.instagram.com/corbeautymiami"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-cream/60 hover:text-blush transition-colors"
            >
              Instagram
            </a>
          </nav>
          <p className="label text-cream/40">
            © {new Date().getFullYear()} Corbeauty Miami
          </p>
        </div>
      </div>
    </footer>
  );
}
