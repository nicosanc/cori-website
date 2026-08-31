import Image from "next/image";
import Link from "next/link";
import AmbientVideo from "@/components/AmbientVideo";
import { beautyServices } from "@/lib/services";

const galleryImages = [
  "/images/19_Facetune_07-10-2025-17-50-16.jpg",
  "/images/12_image-asset.jpeg",
  "/images/16_image-asset.jpeg",
  "/images/18_image-asset.jpeg",
  "/images/10_image-asset.jpeg",
  "/images/07_image-asset.jpeg",
  "/images/24_IMG_1460.png",
  "/images/14_image-asset.jpeg",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="label text-rose mb-6">Lash &amp; Brow Studio — Miami</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
            Soft, natural beauty. <em className="gradient-text">Curated</em> just
            for you.
          </h1>
          <p className="mt-8 text-ink-soft max-w-md leading-relaxed">
            Lifted lashes, refined brows, and whisper-soft permanent makeup that
            complements your natural features — intentional, gentle, never
            overdone.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/book"
              className="label gradient-brand text-white px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="label text-ink-soft border-b border-rose pb-1 hover:text-rose transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center md:justify-self-end">
          <Image
            src="/images/06_Facetune_06-08-2025-12-41-39.jpg"
            alt="Client with lifted lashes and laminated brows"
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 768px) 28rem, 100vw"
          />
        </div>
      </section>

      {/* Ambient video opener */}
      <section className="relative overflow-hidden">
        <AmbientVideo src="/video/corbeauty-loop.mp4" />
        <div className="absolute inset-0 bg-rosewood/60" />
        <div className="h-[45vh] md:h-[60vh]" />
      </section>

      {/* Known for */}
      <section className="border-y border-hairline bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="label text-rose">What we&apos;re known for</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink max-w-xl">
            Subtle detail, visible results.
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {beautyServices.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/book?service=${s.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-b border-hairline pb-4">
                  <h3 className="font-display text-2xl text-ink">{s.name}</h3>
                  <span className="label text-rose opacity-0 group-hover:opacity-100 transition-opacity">
                    Book →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery slideshow */}
      <section className="pt-24 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="label text-rose mb-8">A glimpse into Corbeauty</p>
        </div>
        <div className="mx-auto max-w-6xl px-6 overflow-hidden">
          <div className="marquee-track gap-3">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative w-56 md:w-72 aspect-[3/4] shrink-0 overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Corbeauty client result"
                  fill
                  className="object-cover"
                  sizes="18rem"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <div className="border border-hairline px-8 py-16 md:px-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Ready when you are.
          </h2>
          <p className="mt-4 text-ink-soft max-w-md mx-auto">
            Every appointment is intentional, gentle, and curated — so you leave
            feeling polished.
          </p>
          <Link
            href="/book"
            className="label gradient-brand text-white px-8 py-4 mt-10 inline-block hover:opacity-90 transition-opacity"
          >
            Schedule Your Experience
          </Link>
        </div>
      </section>
    </>
  );
}
