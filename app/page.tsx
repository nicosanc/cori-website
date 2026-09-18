import Image from "next/image";
import Link from "next/link";
import AmbientVideo from "@/components/AmbientVideo";
import Reveal from "@/components/Reveal";
import { beautyServices, trainingServices, BOOKING_URL } from "@/lib/services";

const tickerItems = [
  "Lash Lift",
  "Brow Lamination",
  "Powder Brows",
  "Lip Blush",
  "Professional Training",
];

const powderPairs = [
  { before: "/images/gallery-powder-before-01.jpg", after: "/images/gallery-powder-after-01.jpg" },
  { before: "/images/gallery-powder-before-02.jpg", after: "/images/gallery-powder-after-02.jpg" },
];

const resultGroups = [
  { name: "Lash Lift & Tint", images: ["/images/gallery-lash-01.jpg", "/images/gallery-lash-02.jpg"] },
  { name: "Brow Lamination", images: ["/images/gallery-lamination-01.jpg", "/images/gallery-lamination-02.jpg"] },
  { name: "Lash & Brow Package", images: ["/images/gallery-package-01.jpg", "/images/gallery-package-02.jpg"] },
];

export default function Home() {
  return (
    <>
      {/* Full-screen video hero */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-[calc(100svh-8rem)]">
        <AmbientVideo src="/video/corbeauty-loop.mp4" />
        <div className="absolute inset-0 bg-rosewood/60" />
        <div className="relative px-6 py-32 text-center">
          <p className="label text-blushmist">Lash &amp; Brow Studio — Miami</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mt-6">
            Soft, natural beauty.
            <br />
            <em className="text-blushmist">Curated just for you.</em>
          </h1>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label btn-pill bg-cream text-rosewood px-10 py-4"
            >
              Book Your Appointment
            </a>
            <Link
              href="/services"
              className="label text-white border-b border-blushmist pb-1 hover:text-blushmist transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Italic text ticker */}
      <section className="border-b border-hairline py-8 overflow-hidden">
        <div className="marquee-track items-baseline">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center shrink-0">
              <span className="font-display italic text-3xl md:text-4xl text-rose/70 px-8">
                {t}
              </span>
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-taupe" />
            </span>
          ))}
        </div>
      </section>

      {/* Arch trio */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-36">
        <Reveal className="text-center">
          <p className="label text-rose">What we&apos;re known for</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink">
            Subtle detail, visible results.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-14 sm:grid-cols-3 sm:gap-8">
          {beautyServices.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center block"
            >
              <div className="relative aspect-[3/4] overflow-hidden glow-rose">
                <Image
                  src={s.homeImage ?? s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-ink mt-6 group-hover:text-rose transition-colors">
                {s.name}
              </h3>
              <span className="label text-rose mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                Book →
              </span>
            </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Overlapping about teaser */}
      <section className="bg-blushmist/60 py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 items-center">
          <Reveal className="cameo relative aspect-[3/4] max-w-md w-full justify-self-center md:justify-self-start overflow-hidden">
            <Image
              src="/images/23_IMG_1762.jpg"
              alt="Founder of Corbeauty Miami"
              fill
              className="object-cover object-[18%_0%]"
              sizes="(min-width: 768px) 28rem, 100vw"
            />
          </Reveal>
          <Reveal delay={150} className="relative bg-cream border border-hairline p-10 md:p-14 md:-ml-24 mt-[-3rem] md:mt-0">
            <p className="label text-rose">Who we are</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink leading-tight">
              Soft glamour.
              <br />
              Thoughtful detail.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Boutique-level aesthetics in a welcoming, sophisticated space —
              committed to visible results and an unforgettable experience.
            </p>
            <Link
              href="/about"
              className="label text-rose border-b border-rose pb-1 mt-8 inline-block hover:text-rosewood transition-colors"
            >
              Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* In-person trainings */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <Reveal className="text-center">
          <p className="label text-rose">Learn from Cori</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink">
            In-person <em className="gradient-text">training</em>.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-xl mx-auto">
            Small classes, hands-on practice, and certification you can build
            a business on — taught personally by Cori in Miami.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {trainingServices.map((t, i) => (
            <Reveal
              key={t.slug}
              delay={i * 120}
              className="border border-hairline bg-cream p-8 text-center"
            >
              <p className="label text-ink-soft">{t.duration}</p>
              <h3 className="font-display text-2xl md:text-3xl text-ink mt-3">
                {t.name}
              </h3>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {t.blurb}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-14">
          <Link
            href="/services#training"
            className="label btn-pill gradient-brand text-white px-10 py-4 inline-block"
          >
            View Upcoming Trainings
          </Link>
        </Reveal>
      </section>

      {/* Gallery: powder before/after + results by service */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <Reveal className="text-center">
          <h2 className="font-display text-5xl md:text-7xl text-ink">
            A glimpse into <em className="gradient-text">Corbeauty</em>.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-16">
          {powderPairs.map((pair, i) => (
            <Reveal key={pair.before} delay={i * 150} className="grid grid-cols-2 gap-4">
              {(["before", "after"] as const).map((k) => (
                <div key={k}>
                  <div className="glow-rose relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={pair[k]}
                      alt={`Powder brows, ${k}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </div>
                  <p className="label text-rose text-center mt-4 capitalize !text-sm">{k}</p>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="label text-ink-soft text-center mt-6 !text-sm">Powder Brows</p>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {resultGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 120}>
              <div className="grid grid-cols-2 gap-4">
                {g.images.map((src) => (
                  <div key={src} className="glow-rose relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={src}
                      alt={`${g.name} result`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(min-width: 768px) 16vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              <p className="label text-ink-soft text-center mt-5 !text-sm">{g.name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gradient CTA band */}
      <section className="gradient-brand mt-36 py-28 text-center">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl md:text-6xl text-white">
            Ready when you are.
          </h2>
          <p className="mt-6 text-blushmist leading-relaxed">
            Every appointment is intentional, gentle, and curated — so you
            leave feeling polished.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label btn-pill bg-cream text-rosewood px-10 py-4 mt-10 inline-block"
          >
            Schedule Your Experience
          </a>
        </Reveal>
      </section>
    </>
  );
}
