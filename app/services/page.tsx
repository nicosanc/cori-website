import type { Metadata } from "next";
import Image from "next/image";
import {
  beautyServices,
  trainingServices,
  BOOKING_URL,
  type Service,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | CORBEAUTY Miami",
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-6 items-start border-b border-hairline pb-10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="9rem"
        />
      </div>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-rose transition-colors">
            {service.name}
          </h3>
          <p className="label text-ink-soft">{service.duration}</p>
        </div>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-lg">
          {service.blurb}
        </p>
        <span className="label text-rose mt-4 inline-block opacity-60 group-hover:opacity-100 transition-opacity">
          Book Service →
        </span>
      </div>
    </a>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 md:pt-24">
      <p className="label text-rose mb-6">Our services</p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
        Expertise in <em className="gradient-text">everything</em> we do.
      </h1>
      <p className="mt-8 text-ink-soft max-w-lg leading-relaxed">
        Select a service to book your appointment through our online
        scheduling.
      </p>

      <section className="mt-20">
        <h2 className="label text-rose border-b border-rose/40 pb-4">
          Beauty Services
        </h2>
        <div className="mt-10 space-y-10">
          {beautyServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section id="training" className="mt-24 scroll-mt-32">
        <h2 className="label text-rose border-b border-rose/40 pb-4">
          Professional Training
        </h2>
        <p className="mt-6 text-sm text-ink-soft max-w-lg leading-relaxed">
          Learn the craft directly from Cori — small classes, hands-on practice,
          and certification you can build a business on.
        </p>
        <div className="mt-10 space-y-10">
          {trainingServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
