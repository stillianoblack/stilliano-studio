export type ProjectMediaItem = {
  label: string;
  image?: string;
  video?: string;
  poster?: string;
  wide?: boolean;
  /** Native aspect ratio (e.g. "1850 / 1092") so cards size to artwork without cropping. */
  aspectRatio?: string;
  /** Match sibling row height in the grid; media uses contain (no side crop). */
  fillRowHeight?: boolean;
  /** object-position for cover framing (e.g. "center 25%"). */
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  /** Extra scale on media (1 = no zoom). Overrides default card zoom when set. */
  mediaScale?: number;
  /** Card background (e.g. behind centered video). */
  cardBackground?: string;
  /** Flex-center media inside the card (for video panels). */
  centerMedia?: boolean;
};

export type FeaturedWorkProject = {
  slug: string;
  kicker: string;
  campaignTitle: string;
  headline: string;
  description: string;
  metrics: string[];
  href?: string;
  media: ProjectMediaItem[];
};

export type CompactWorkProject = {
  slug: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

export const featuredWorkProjects: FeaturedWorkProject[] = [
  {
    slug: "hbcugo",
    kicker: "Streaming / CTV / Culture",
    campaignTitle: "The Culture Rebuild™",
    headline: "Modernizing HBCUgo’s streaming ecosystem behind 29% YoY growth.",
    description:
      "Led the redesign and platform transformation of HBCUgo across OTT, mobile, and connected TV — aligning product experience, audience engagement, and monetization systems for scale.",
    metrics: ["29% YoY Growth", "OTT + Mobile + CTV", "Fan Engagement Systems"],
    href: "/work/hbcugo",
    media: [
      {
        label: "Platform Design",
        image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_grid_stilliano.webp",
        wide: true,
        aspectRatio: "1850 / 806",
      },
      {
        label: "Motion Demo",
        video: "/videos/HBCUgomaster.mp4",
        aspectRatio: "853 / 878",
        cardBackground: "#1B1F27",
        centerMedia: true,
        objectFit: "contain",
        objectPosition: "center",
      },
      {
        label: "CTV Experience",
        image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_Panel_smallgrid.webp",
        aspectRatio: "853 / 878",
        objectFit: "contain",
      },
    ],
  },
  {
    slug: "caidens-courage",
    kicker: "Story IP / Interactive / Youth",
    campaignTitle: "The Focus Flame™",
    headline: "Building a story-driven world for focus, emotion, and self-belief.",
    description:
      "A narrative IP blending visual storytelling, emotional interaction, and product thinking to help neurodivergent youth see focus as power.",
    metrics: ["Original IP", "Interactive SEL Experience", "Book + Digital Platform"],
    href: "https://caidenvale.com/",
    media: [
      {
        label: "Brand System",
        image:
          "/images/Portfolio%20Cards/Caidenscourage/Caiden%27sCourageFlame_Page1.webp",
        wide: true,
        aspectRatio: "3021 / 1317",
      },
      {
        label: "Live UI",
        video:
          "/images/Portfolio%20Cards/Caidenscourage/Caiden%27sCourageInteractive%20Game_2.mov",
        aspectRatio: "853 / 878",
        cardBackground: "#1B1F27",
        centerMedia: true,
        objectFit: "contain",
        objectPosition: "center",
      },
      {
        label: "Platform Design",
        image:
          "/images/Portfolio%20Cards/Caidenscourage/caidenscourage_card_stilliano.webp",
        aspectRatio: "853 / 878",
      },
    ],
  },
];

export const compactWorkProjects: CompactWorkProject[] = [
  {
    slug: "cutclass",
    title: "Cutclass.io",
    description:
      "Product systems and platform strategy for creator-driven learning experiences.",
    image: "/images/Portfolio%20Cards/cutclass_card_stilliano.webp",
  },
  {
    slug: "sprite",
    title: "Sprite",
    description:
      "Creative direction and visual storytelling concepts for culture-driven brand experiences.",
    image: "/images/Portfolio%20Cards/Kids-Fandome.webp",
  },
  {
    slug: "amira-learning",
    title: "Amira Learning",
    description:
      "Game UX and educational product experiences designed to support literacy and engagement.",
    image: "/images/Portfolio%20Cards/amiramock-up_stilliano.webp",
  },
];
