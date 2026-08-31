import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment | CORBEAUTY Miami",
};

const expectations = [
  "We confirm every request personally, usually within a day.",
  "First visit? Arrive 10 minutes early — we'll walk you through everything.",
  "Need to reschedule? Just reply to your confirmation.",
];

export default async function BookPage({
  searchParams,
}: PageProps<"/book">) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
      <aside className="bg-noir text-cream p-10 md:p-12 md:sticky md:top-32">
        <p className="label text-blush">Book an appointment</p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mt-4">
          Let&rsquo;s find your <em className="gradient-text">time</em>.
        </h1>
        <ul className="mt-10 space-y-6">
          {expectations.map((e) => (
            <li key={e} className="flex gap-4 text-sm text-cream/70 leading-relaxed">
              <span className="text-blush">—</span>
              {e}
            </li>
          ))}
        </ul>
        <p className="label text-cream/40 mt-12">@corbeautymiami</p>
      </aside>
      <div>
        <BookingForm initialService={service} />
      </div>
    </div>
  );
}
