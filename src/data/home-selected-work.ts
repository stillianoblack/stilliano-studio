import type { FeaturedWorkProject } from "./selected-work";

export type HomeSelectedWorkItem = {
  title: string;
  category: string;
  image: string;
  href: string;
  imageAlt: string;
  objectPosition?: string;
};

/** Homepage Selected Work order — maps to featuredWorkProjects + film. */
export const homeSelectedWorkSlugs = [
  "hbcugo",
  "local-now",
  "caidens-courage",
  "montagecms",
  "amira-learning",
] as const;

/** Homepage-only projects (not shown on archived WorkShowcase). */
export const homeOnlyWorkProjects: FeaturedWorkProject[] = [
  {
    slug: "local-now",
    kicker: "STREAMING / FREE TV",
    campaignTitle: "Local Now",
    headline: "Free local TV across news, weather, channels, and movies.",
    description:
      "Streaming product experience for free local TV spanning live guide, discovery, and multi-device viewing.",
    metrics: ["FREE TV", "LIVE GUIDE", "MULTI-DEVICE"],
    href: "https://localnow.com/",
    media: [
      {
        label: "Local Now live guide experience",
        image: "/images/Selected%20Works/LocalNow/localnow-guide.webp",
        wide: true,
        aspectRatio: "16 / 9",
        objectFit: "cover",
        objectPosition: "center center",
      },
      {
        label: "Local Now free TV brand system",
        image: "/images/Selected%20Works/LocalNow/localnow-free-tv.webp",
        aspectRatio: "16 / 10",
        objectFit: "cover",
        objectPosition: "center center",
      },
      {
        label: "Local Now multi-device experience",
        image: "/images/Selected%20Works/LocalNow/localnow-devices.jpg",
        aspectRatio: "16 / 10",
        objectFit: "cover",
        objectPosition: "center center",
        cardBackground: "#E8EEF0",
      },
    ],
  },
];

/** Editorial homepage Selected Work — title + image, minimal meta. */
export const homeSelectedWork: HomeSelectedWorkItem[] = [
  {
    title: "HBCU GO",
    category: "Head of Product",
    image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_grid_stilliano.webp",
    href: "/work/hbcugo",
    imageAlt: "HBCU GO streaming platform",
    objectPosition: "center center",
  },
  {
    title: "Local Now",
    category: "Product Manager",
    image: "/images/Selected%20Works/LocalNow/localnow-guide.webp",
    href: "https://localnow.com/",
    imageAlt: "Local Now free TV streaming experience",
    objectPosition: "center center",
  },
  {
    title: "Caiden's Courage",
    category: "Founder",
    image: "/images/Heros/Caidencourage_Hero.webp",
    href: "/work/caidens-courage",
    imageAlt: "Caiden's Courage — original children's story world",
    objectPosition: "center 40%",
  },
  {
    title: "MontageCMS / Cutclass",
    category: "Head of Product, Design, and Content",
    image:
      "/images/Selected%20Works/MontageCMS/montageCMS_portfolio_cover%40caiden.webp",
    href: "/work/montagecms",
    imageAlt: "MontageCMS / Cutclass streaming platform",
    objectPosition: "center 42%",
  },
  {
    title: "Amira",
    category: "Interactive Product Manager",
    image: "/images/Heros/Amira_Hero.webp",
    href: "/work/amira-learning",
    imageAlt: "Amira learning experience",
    objectPosition: "center 35%",
  },
  {
    title: "Film / Production",
    category: "Head of Content and Programming",
    image: "/images/Selected%20Works/2x2selected_works/narrative-film.webp",
    href: "/film",
    imageAlt: "Film and production work",
    objectPosition: "center center",
  },
];
