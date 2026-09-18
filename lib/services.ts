// All booking happens on the client's Square Appointments site.
export const BOOKING_URL = "https://corbeautymiami.square.site/";

export type Service = {
  slug: string;
  name: string;
  category: "beauty" | "training";
  blurb: string;
  duration: string;
  image: string;
  /** Optional alternate image for the home page cards */
  homeImage?: string;
};

export const services: Service[] = [
  {
    slug: "lash-lift",
    name: "The Cor Lash Lift & Tint",
    category: "beauty",
    blurb:
      "Say goodbye to the lash curler and harmful strong-hold mascaras! Using a pure cysteamine-based formula or hybrid (cysteamine + TGA), Cori creates a customized technique for each client’s lash type and eye shape, giving the maximum lifted result for every client. For the finishing touch, add TINT to coat the lashes with pigment and shine from base to tip, giving your lashes as much length as possible. Results typically last 6–8 weeks.",
    duration: "60 min",
    image: "/images/lash-lift-closeup-01.jpg",
    homeImage: "/images/lash-lift-home-01.jpg",
  },
  {
    slug: "brow-lamination",
    name: "Brow Lamination + Design",
    category: "beauty",
    blurb:
      "Transform unruly or uneven brows into a fuller, smoother, and more defined shape. Brow lamination gently redirects the hairs to create symmetry, improve fullness, and give your brows a soft, lifted appearance. The service includes professional shaping tailored to your facial features. ADD BROW TINT for a custom color and enhanced definition. Tinting helps emphasize lighter or finer hairs, giving your brows a fuller, more polished result. The shade is carefully selected to complement your natural coloring and desired results.",
    duration: "60 min",
    image: "/images/brow-lamination-01.jpg",
    homeImage: "/images/brow-lamination-home-01.jpg",
  },
  {
    slug: "powder-brows",
    name: "Powder Brows",
    category: "beauty",
    blurb:
      "Powder Brows is a semi-permanent cosmetic tattoo designed to create soft, symmetrical, and beautifully defined brows. Using a gentle shading technique, pigment is gradually built throughout the brow for a polished, powder-filled finish that can range from natural to more defined. Each shape and color is fully customized to complement your facial features, skin tone, and personal style. Once healed, results typically last 1–3 years before a touch-up may be needed.",
    duration: "2.5 hrs",
    image: "/images/powder-brows-01.jpg",
    homeImage: "/images/powder-brows-home-01.jpg",
  },
  {
    slug: "lash-brow-package",
    name: "Lash & Brow Lift Package",
    category: "beauty",
    blurb:
      "The ultimate eye-enhancing duo! This package combines The Cor Lash Lift & Tint with our Brow Lamination + Design to create a beautifully lifted, polished, and effortless look. Each service is fully customized to your natural lashes, brows, eye shape, and facial features for the most flattering results. Complete your transformation by adding BROW TINT for enhanced color, fullness, and definition. Perfect for anyone wanting low-maintenance lashes and brows that look naturally put together from the moment you wake up.",
    duration: "1.5 hrs",
    image: "/images/lash-brow-package-01.jpg",
  },
  {
    slug: "lip-blush",
    name: "Lip Blush",
    category: "beauty",
    blurb:
      "Lip Blush is a semi-permanent cosmetic tattoo that enhances the color, shape, and symmetry of your lips. A customized pigment is softly layered into the lips to create a more even, defined, and youthful appearance while still looking like your natural lips. Cori works with each client to fully customize the lip color in consideration of their skin tone and desired result. Once healed, the result is a soft yet noticeable color that can last approximately 2–3 years before a refresh may be desired.",
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
