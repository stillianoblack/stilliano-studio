/**
 * Homepage discipline mosaic tiles.
 *
 * IMAGE REPLACEMENT:
 * Drop final photos into /public/images/home/ using these filenames
 * (webp or jpg — update the `image` path below to match):
 *   product-placeholder.webp  → product / streaming / presenting
 *   film-placeholder.webp     → on-set / production / camera
 *   stories-placeholder.webp  → Caiden / drawing / story world
 *   speaking-placeholder.webp → conference / panel / microphone
 *   education-placeholder.webp → child / book / classroom
 */

export type HomeDisciplineTile = {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
  /** Temporary stand-in path — replace with final photography. */
  image: string;
  imageAlt: string;
  /** Mosaic layout role */
  size: "portrait" | "landscape" | "medium" | "compact" | "wide";
};

export const homeDisciplineTiles: HomeDisciplineTile[] = [
  {
    id: "product",
    label: "Product",
    title: "Principal Product Leader",
    description: "Building platforms, products, and digital ecosystems.",
    href: "/product",
    image: "/images/home/product-placeholder.webp",
    imageAlt: "Product leadership and digital platform work",
    size: "portrait",
  },
  {
    id: "content",
    label: "Content Strategy",
    title: "Producer & Content Strategist",
    description:
      "Film, original IP, and story worlds — from concept to screen.",
    href: "/content-strategy",
    image: "/images/home/film-placeholder.webp",
    imageAlt: "Film, production, and content strategy",
    size: "landscape",
  },
  {
    id: "stories",
    label: "Stories + IP",
    title: "Illustrator • Author • World Builder",
    description: "Building original characters, books, and story worlds.",
    href: "/content-strategy#stories",
    image: "/images/home/stories-placeholder.webp",
    imageAlt: "Original story worlds and Caiden’s Courage",
    size: "medium",
  },
  {
    id: "speaking",
    label: "Speaking",
    title: "Creative Leadership",
    description: "Ideas on media, technology, storytelling, and culture.",
    href: "/about#speaking",
    image: "/images/home/speaking-placeholder.webp",
    imageAlt: "Speaking and creative leadership",
    size: "compact",
  },
  {
    id: "education",
    label: "Education",
    title: "Stories for the Next Generation",
    description: "Creative experiences connecting storytelling, learning, and confidence.",
    href: "/content-strategy#stories",
    image: "/images/home/education-placeholder.webp",
    imageAlt: "Education and next-generation storytelling",
    size: "wide",
  },
];
