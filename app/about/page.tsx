import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CORBEAUTY Miami",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[3/4] w-full max-w-md">
          <Image
            src="/images/23_IMG_1762.jpg"
            alt="Founder of Corbeauty Miami"
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 768px) 28rem, 100vw"
          />
        </div>
        <div>
          <p className="label text-rose mb-6">Who we are</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
            Soft glamour. <em className="gradient-text">Thoughtful</em> detail.
          </h1>
          <p className="mt-8 text-ink-soft leading-relaxed">
            Corbeauty Miami was founded with a clear purpose: to bring
            boutique-level aesthetics into a welcoming, sophisticated space.
            Staying at the leading edge of cosmetic advancements, we&rsquo;re
            committed to delivering both visible results and an unforgettable
            experience.
          </p>
          <p className="mt-5 text-ink-soft leading-relaxed">
            We believe in authentic beauty — because nothing looks better than
            confidence in your own skin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 grid gap-16 md:grid-cols-2">
        <div className="border-t border-rose/40 pt-8">
          <p className="label text-rose mb-4">Our approach</p>
          <p className="text-ink-soft leading-relaxed">
            We start with you. Each treatment plan is custom-designed to fit
            your unique features, goals, lifestyle, and preferences — ensuring
            every step, from consultation to follow-up, feels thoughtful,
            comfortable, and effective.
          </p>
        </div>
        <div className="border-t border-rose/40 pt-8">
          <p className="label text-rose mb-4">Your experience</p>
          <p className="text-ink-soft leading-relaxed">
            From the moment you arrive, you&rsquo;ll be welcomed into a serene,
            thoughtfully designed space in Miami. Your comfort, safety, and
            clarity come first — your treatment is never rushed, and your
            results are never second-hand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid grid-cols-3 gap-3">
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
          className="label gradient-brand text-white px-8 py-4 mt-10 inline-block hover:opacity-90 transition-opacity"
        >
          Book Your Appointment
        </Link>
      </section>
    </>
  );
}
