import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { beautyServices, trainingServices, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | CORBEAUTY Miami",
};

function MenuRow({ service }: { service: Service }) {
  return (
    <Link href={`/book?service=${service.slug}`} className="group block py-7">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-rose transition-colors shrink-0">
          {service.name}
        </span>
        <span className="flex-1 border-b border-dotted border-taupe mb-1.5" />
        <span className="label text-ink-soft shrink-0">{service.price}</span>
      </div>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-xl">
        {service.blurb}
      </p>
      <div className="mt-2 flex items-center gap-6">
        <span className="label text-ink-soft/60">{service.duration}</span>
        <span className="label text-rose opacity-0 group-hover:opacity-100 transition-opacity">
          Request Appointment →
        </span>
      </div>
    </Link>
  );
}

function MenuSection({
  id,
  title,
  items,
  images,
}: {
  id: string;
  title: string;
  items: Service[];
  images: string[];
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pt-24 grid md:grid-cols-[1.8fr_1fr] gap-14">
      <div>
        <h2 className="font-display text-4xl md:text-5xl text-ink border-b border-rose/40 pb-6">
          {title}
        </h2>
        <div className="divide-y divide-hairline">
          {items.map((s) => (
            <MenuRow key={s.slug} service={s} />
          ))}
        </div>
      </div>
      <div className="hidden md:block md:sticky md:top-32 md:self-start space-y-5">
        {images.map((src) => (
          <div key={src} className="relative aspect-[4/5] overflow-hidden">
            <Image src={src} alt={title} fill className="object-cover" sizes="24rem" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Dark header */}
      <section className="bg-noir text-cream py-20 md:py-24 text-center">
        <p className="label text-blush">Our services</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mt-4 px-6">
          Expertise in <em className="gradient-text">everything</em> we do.
        </h1>
        <p className="mt-6 text-cream/70 max-w-md mx-auto px-6">
          Select a service to request an appointment — we&rsquo;ll confirm your
          time personally.
        </p>
      </section>

      <MenuSection
        id="beauty"
        title="Beauty Services"
        items={beautyServices}
        images={["/images/03_IMG_1452.png", "/images/21_powder_brows_b.png"]}
      />

      <MenuSection
        id="training"
        title="Professional Training"
        items={trainingServices}
        images={["/images/11_image-asset.jpeg"]}
      />
    </>
  );
}
