import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment | CORBEAUTY Miami",
};

export default async function BookPage({
  searchParams,
}: PageProps<"/book">) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 grid md:grid-cols-[2fr_3fr] gap-16 items-start">
      <div className="hidden md:block md:sticky md:top-40">
        <div className="arch relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/06_Facetune_06-08-2025-12-41-39.jpg"
            alt="Corbeauty client"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <p className="font-display italic text-2xl text-ink-soft text-center mt-8">
          We can&rsquo;t wait to meet you.
        </p>
      </div>
      <div>
        <p className="label text-rose mb-6">Book an appointment</p>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
          Let&rsquo;s find your <em className="gradient-text">time</em>.
        </h1>
        <p className="mt-8 text-ink-soft leading-relaxed">
          Tell us what you&rsquo;d like and when works for you — we&rsquo;ll
          confirm your appointment personally.
        </p>
        <BookingForm initialService={service} />
      </div>
    </div>
  );
}
