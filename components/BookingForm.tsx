"use client";

import { useState } from "react";
import { services } from "@/lib/services";

const inputClass =
  "w-full bg-transparent border-b border-hairline focus:border-rose outline-none py-3 text-ink placeholder:text-ink-soft/50 transition-colors";

export default function BookingForm({
  initialService,
}: {
  initialService: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  // Design-only for now: submission wiring (email/notification) comes later.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-16 border border-hairline px-8 py-16 text-center">
        <p className="font-display text-3xl text-ink">Request received.</p>
        <p className="mt-4 text-ink-soft">
          We&rsquo;ll reach out shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-16 space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label text-rose block mb-2">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="label text-rose block mb-2">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="(305) 555-0100" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="label text-rose block mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="service" className="label text-rose block mb-2">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={initialService}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select a service
          </option>
          <optgroup label="Beauty Services">
            {services.filter((s) => s.category === "beauty").map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — {s.price}
              </option>
            ))}
          </optgroup>
          <optgroup label="Professional Training">
            {services.filter((s) => s.category === "training").map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — {s.price}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="label text-rose block mb-2">
            Preferred date
          </label>
          <input id="date" name="date" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className="label text-rose block mb-2">
            Preferred time
          </label>
          <select id="time" name="time" defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
            <option value="" disabled>
              Any time
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="label text-rose block mb-2">
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="First visit, allergies, inspiration photos to bring…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="label btn-pill gradient-brand text-white px-10 py-4 cursor-pointer"
      >
        Request Appointment
      </button>
    </form>
  );
}
