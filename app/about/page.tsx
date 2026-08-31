import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CORBEAUTY Miami",
};

const pillars = [
  {
    title: "Our approach",
    body: "We start with you. Each treatment plan is custom-designed to fit your unique features, goals, lifestyle, and preferences — thoughtful from consultation to follow-up.",
  },
  {
    title: "Your experience",
    body: "A serene, thoughtfully designed space in Miami. Your comfort, safety, and clarity come first — never rushed, never second-hand.",
  },
  {
    title: "Our promise",
    body: "Authentic beauty, because nothing looks better than confidence in your own skin. We listen, recommend, and collaborate with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Dark header */}
      <section className="bg-noir text-cream py-20 md:py-24 text-center">
        <p className="label text-blush">Who we are</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mt-4 px-6">
          Soft glamour. <em className="gradient-text">Thoughtful</em> detail.
        </h1>
      </section>

      {/* Framed portrait + story */}
      <section className="mx-auto max-w-6xl px-6 pt-24 grid gap-14 md:grid-cols-2 md:items-center">
        <div className="border border-blush/60 p-3 max-w-md w-full justify-self-center md:justify-self-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/23_IMG_1762.jpg"
              alt="Founder of Corbeauty Miami"
              fill
              priority
              className="object-cover object-[18%_0%]"
              sizes="(min-width: 768px) 28rem, 100vw"
            />
          </div>
        </div>
        <div>
          <p className="label text-rose mb-6">The studio</p>
          <p className="font-display text-3xl md:text-4xl text-ink leading-snug">
            Boutique-level aesthetics in a welcoming, sophisticated space.
          </p>
          <p className="mt-8 text-ink-soft leading-relaxed">
            Corbeauty Miami was founded with a clear purpose: staying at the
            leading edge of cosmetic advancements while delivering both visible
            results and an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Pillars in three columns */}
      <section className="mx-auto max-w-6xl px-6 pt-28 grid gap-12 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="border-t border-rose/40 pt-8">
            <p className="label text-rose mb-4">{p.title}</p>
            <p className="text-ink-soft leading-relaxed text-sm">{p.body}</p>
          </div>
        ))}
      </section>

      {/* Studio strip */}
      <section className="mx-auto max-w-6xl px-6 pt-28 grid grid-cols-3 gap-4">
        {[
          "/images/07_image-asset.jpeg",
          "/images/14_image-asset.jpeg",
          "/images/09_image-asset.jpeg",
        ].map((src) => (
          <div key={src} className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={src}
              alt="Inside the Corbeauty studio"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-28 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-ink">
          Come see for yourself.
        </h2>
        <Link
          href="/book"
          className="label btn-pill gradient-brand text-white px-10 py-4 mt-10 inline-block"
        >
          Book Your Appointment
        </Link>
      </section>
    </>
  );
}
