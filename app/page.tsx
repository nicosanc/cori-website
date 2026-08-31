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
      {/* Typographic hero on noir with framed video */}
      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="label text-blush">Lash &amp; Brow Studio — Miami</p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.02] mt-8">
              Beauty,
              <br />
              <em className="gradient-text">refined.</em>
            </h1>
            <p className="mt-8 text-cream/70 max-w-md leading-relaxed">
              Lifted lashes, refined brows, and whisper-soft permanent makeup —
              intentional, gentle, never overdone.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/book"
                className="label btn-pill gradient-brand text-white px-8 py-4"
              >
                Book Your Appointment
              </Link>
              <Link
                href="/services"
                className="label text-cream/70 border-b border-blush pb-1 hover:text-blush transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="border border-blush/50 p-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AmbientVideo src="/video/corbeauty-loop.mp4" />
              </div>
            </div>
            <p className="label text-cream/50 mt-4 text-center">
              Inside the studio
            </p>
          </div>
        </div>
      </section>

      {/* Numbered service index */}
      <section className="mx-auto max-w-5xl px-6 pt-28">
        <p className="label text-rose">What we&apos;re known for</p>
        <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink">
          The services, at a glance.
        </h2>
        <div className="mt-14">
          {beautyServices.map((s, i) => (
            <Link
              key={s.slug}
              href={`/book?service=${s.slug}`}
              className="group relative flex items-baseline gap-6 md:gap-10 border-t border-hairline py-8 last:border-b hover:bg-blushmist/30 transition-colors px-2 md:px-4"
            >
              <span className="label text-rose w-8 shrink-0">
                0{i + 1}
              </span>
              <span className="font-display text-3xl md:text-4xl text-ink group-hover:text-rose transition-colors">
                {s.name}
              </span>
              <span className="ml-auto label text-ink-soft shrink-0">
                {s.duration} — {s.price}
              </span>
              <span className="pointer-events-none hidden lg:block absolute right-40 top-1/2 -translate-y-1/2 w-40 aspect-[3/4] rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-hidden shadow-xl">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover"
                  sizes="10rem"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Training promo band */}
      <section className="bg-blushmist/50 mt-28 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="label text-rose">Professional training</p>
          <h2 className="font-display text-4xl md:text-6xl mt-6 text-ink">
            Learn the craft from <em className="gradient-text">Cori</em>.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Small classes, hands-on practice, and certification you can build a
            business on.
          </p>
          <Link
            href="/services#training"
            className="label btn-pill border border-rose/60 text-rose px-8 py-4 mt-10 inline-block hover:bg-rose hover:text-cream transition-colors"
          >
            Explore Trainings
          </Link>
        </div>
      </section>

      {/* Horizontal snap gallery */}
      <section className="pt-28">
        <div className="mx-auto max-w-6xl px-6 flex items-baseline justify-between">
          <p className="label text-rose">A glimpse into Corbeauty</p>
          <p className="label text-ink-soft/60 hidden md:block">Scroll →</p>
        </div>
        <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {galleryImages.map((src, i) => (
            <figure key={src} className="snap-start shrink-0">
              <div className="relative w-64 md:w-80 aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt="Corbeauty client result"
                  fill
                  className="object-cover"
                  sizes="20rem"
                />
              </div>
              <figcaption className="label text-ink-soft/60 mt-3">
                0{i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <div className="border border-hairline px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Ready when you are.
            </h2>
            <p className="mt-4 text-ink-soft max-w-md">
              Every appointment is intentional, gentle, and curated.
            </p>
          </div>
          <Link
            href="/book"
            className="label btn-pill gradient-brand text-white px-8 py-4 shrink-0 self-start md:self-auto"
          >
            Schedule Your Experience
          </Link>
        </div>
      </section>
    </>
  );
}
