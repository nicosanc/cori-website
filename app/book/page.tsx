import { redirect } from "next/navigation";
import { BOOKING_URL } from "@/lib/services";

// Booking now lives on the client's Square site; keep /book working for old links.
export default function BookPage() {
  redirect(BOOKING_URL);
}
