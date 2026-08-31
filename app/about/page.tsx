import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CORBEAUTY Miami",
};

const pillars = [
  {
    number: "01",
    title: "Our approach",
    body: "We start with you. Each treatment plan is custom-designed to fit your unique features, goals, lifestyle, and preferences — ensuring every step, from consultation to follow-up, feels thoughtful, comfortable, and effective.",
  },
  {
    number: "02",
    title: "Your experience",
    body: "From the moment you arrive, you'll be welcomed into a serene, thoughtfully designed space in Miami. Your comfort, safety, and clarity come first — your treatment is never rushed, and your results are never second-hand.",
  },
  {
    number: "03",
    title: "Our promise",
    body: "We believe in authentic beauty — because nothing looks better than confidence in your own skin. Subtle enhancements or transformative renewal, we listen, recommend, and collaborate with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Blushmist header with arch portrait overlapping out of it */}
      <section className="bg-blushmist/60 pt-20 md:pt-28 text-center">
        <p className="label text-rose">Who we are</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-ink mt-4 px-6">
          Soft glamour. <em className="gradient-text">Thoughtful</em> detail.
        </h1>
        <div className="cameo relative w-64 md:w-80 aspect-[3/4] mx-auto mt-14 translate-y-20 overflow-hidden">
          <Image
            src="/images/23_IMG_1762.jpg"
            alt="Founder of Corbeauty Miami"
            fill
            priority
            className="object-cover object-[18%_0%]"
            sizes="20rem"
          />
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pt-36 text-center">
        <p className="text-ink-soft leading-relaxed">
          Corbeauty Miami was founded with a clear purpose: to bring
          boutique-level aesthetics into a welcoming, sophisticated space.
          Staying at the leading edge of cosmetic advancements, we&rsquo;re
          committed to delivering both visible results and an unforgettable
          experience.
        </p>
      </section>

      {/* Numbered editorial pillars */}
      <section className="mx-auto max-w-4xl px-6 pt-28 space-y-20">
        {pillars.map((p, i) => (
          <div
            key={p.number}
            className={`grid md:grid-cols-[8rem_1fr] gap-6 items-start ${
              i % 2 === 1 ? "md:translate-x-16" : ""
            }`}
          >
            <span className="font-display italic text-6xl md:text-7xl gradient-text leading-none">
              {p.number}
            </span>
            <div className="border-t border-rose/40 pt-6">
              <p className="label text-rose mb-3">{p.title}</p>
              <p className="text-ink-soft leading-relaxed max-w-xl">{p.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Studio strip */}
      <section className="mx-auto max-w-6xl px-6 pt-28 grid grid-cols-3 gap-4">
        {[
          "/images/07_image-asset.jpeg",
          "/images/14_image-asset.jpeg",
          "/images/09_image-asset.jpeg",
        ].map((src, i) => (
          <div
            key={src}
            className={`relative aspect-[3/4] overflow-hidden ${
              i === 1 ? "translate-y-8" : ""
            }`}
          >
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

      <section className="mx-auto max-w-3xl px-6 pt-32 text-center">
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
