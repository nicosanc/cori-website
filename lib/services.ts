// All booking happens on the client's Square Appointments site.
export const BOOKING_URL = "https://corbeautymiami.square.site/";

export type Service = {
  slug: string;
  name: string;
  category: "beauty" | "training";
  blurb: string;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "lash-lift",
    name: "Lash Lift",
    category: "beauty",
    blurb:
      "A gentle curl and tint that lifts your natural lashes from the root — open, bright eyes with zero daily effort.",
    duration: "60 min",
    image: "/images/03_IMG_1452.png",
  },
  {
    slug: "brow-lamination",
    name: "Brow Lamination",
    category: "beauty",
    blurb:
      "Brushed-up, fuller-looking brows set in place for weeks. Shaped and tinted to complement your features.",
    duration: "60 min",
    image: "/images/02_IMG_1457.png",
  },
  {
    slug: "powder-brows",
    name: "Powder Brows",
    category: "beauty",
    blurb:
      "Whisper-soft permanent makeup for a powdered, filled-in finish that stays polished morning to night.",
    duration: "2.5 hrs",
    image: "/images/21_powder_brows_b.png",
  },
  {
    slug: "lash-brow-package",
    name: "Lash & Brow Lift Package",
    category: "beauty",
    blurb:
      "Our signature pairing — lash lift and brow lamination in one appointment for a completely refreshed look.",
    duration: "1.5 hrs",
    image: "/images/24_IMG_1460.png",
  },
  {
    slug: "lip-blush",
    name: "Lip Blush",
    category: "beauty",
    blurb:
      "A soft wash of custom-blended color that enhances your natural lip tone and definition.",
    duration: "2.5 hrs",
    image: "/images/05_Facetune_02-07-2025-17-56-19.jpg",
  },
  {
    slug: "brow-lamination-training",
    name: "Brow Lamination Training",
    category: "training",
    blurb:
      "A hands-on, one-day certification covering theory, product knowledge, and live model work.",
    duration: "1 day",
    image: "/images/11_image-asset.jpeg",
  },
  {
    slug: "lash-lift-training",
    name: "Lash Lift Training",
    category: "training",
    blurb:
      "Master lift, tint, and aftercare from consultation to finish — kit included, live model practice.",
    duration: "1 day",
    image: "/images/17_image-asset.jpeg",
  },
  {
    slug: "one-on-one-masterclass",
    name: "1:1 Masterclass",
    category: "training",
    blurb:
      "Private mentorship tailored to your level — refine technique, speed, and client experience with Cori.",
    duration: "Half day",
    image: "/images/08_image-asset.jpeg",
  },
];

export const beautyServices = services.filter((s) => s.category === "beauty");
export const trainingServices = services.filter((s) => s.category === "training");
