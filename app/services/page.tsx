import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { beautyServices, trainingServices, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | CORBEAUTY Miami",
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/book?service=${service.slug}`} className="group text-center">
      <div className="arch relative aspect-[3/4] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 640px) 33vw, 100vw"
        />
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-ink mt-6 group-hover:text-rose transition-colors">
        {service.name}
      </h3>
      <p className="label text-ink-soft mt-2">
        {service.duration} — {service.price}
      </p>
      <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
        {service.blurb}
      </p>
      <span className="label text-rose mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
        Request Appointment →
      </span>
    </Link>
  );
}

function CategorySection({
  id,
  title,
  intro,
  items,
}: {
  id: string;
  title: string;
  intro: string;
  items: Service[];
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pt-24 grid md:grid-cols-[1fr_2.2fr] gap-12">
      <div className="md:sticky md:top-40 md:self-start">
        <p className="label text-rose">Our services</p>
        <h2 className="font-display text-4xl md:text-5xl mt-4 text-ink leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-ink-soft leading-relaxed max-w-xs">{intro}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
        {items.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 text-center">
        <p className="label text-rose">Our services</p>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink mt-4">
          Expertise in <em className="gradient-text">everything</em> we do.
        </h1>
        <p className="mt-8 text-ink-soft leading-relaxed">
          Select a service to request an appointment — we&rsquo;ll confirm your
          time personally.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="#beauty" className="label text-rose border-b border-rose pb-1">
            Beauty
          </a>
          <a href="#training" className="label text-rose border-b border-rose pb-1">
            Training
          </a>
        </div>
      </div>

      <CategorySection
        id="beauty"
        title="Beauty Services"
        intro="Lifted lashes, refined brows, and whisper-soft permanent makeup — every treatment custom-designed to fit your features."
        items={beautyServices}
      />

      <CategorySection
        id="training"
        title="Professional Training"
        intro="Learn the craft directly from Cori — small classes, hands-on practice, and certification you can build a business on."
        items={trainingServices}
      />
    </>
  );
}
