import type { Metadata } from "next";
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
    <div className="mx-auto max-w-2xl px-6 pt-16 md:pt-24">
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
  );
}
