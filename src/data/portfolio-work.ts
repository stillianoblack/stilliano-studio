export type PortfolioWorkItem = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  /** When set, card navigates instead of opening the coming-soon modal. */
  href?: string;
};

export const portfolioWorkItems: PortfolioWorkItem[] = [
  {
    slug: "hbcugo",
    title: "HBCUgo.tv",
    desc: "Streaming strategy, CTV experience design, and fan engagement systems for HBCU sports and culture.",
    image: "/images/Portfolio%20Cards/HBCUgoCOmputer_stilliano.webp",
    href: "/work/hbcugo",
  },
  {
    slug: "caidens-courage",
    title: "Caiden's Courage",
    desc: "Story-driven IP blending narrative, interactive experiences, and emotional product design for neurodivergent youth.",
    image: "/images/Portfolio%20Cards/Caidenscourage/caidenscourage_card_stilliano.webp",
    href: "https://caidenvale.com/",
  },
  {
    slug: "cutclass",
    title: "Cutclass.io",
    desc: "Product systems and digital platform strategy for creator-driven learning experiences.",
    image: "/images/Portfolio%20Cards/cutclass_card_stilliano.webp",
  },
  {
    slug: "dc-comics",
    title: "DC Comics",
    desc: "Led every aspect of the creative process — from concept development and UX design to animation and sound design — transforming iconic IP into interactive, story-driven digital experiences.",
    image: "/images/Portfolio%20Cards/dccomics_card_stilliano.png",
  },
  {
    slug: "amira-learning",
    title: "Amira Learning",
    desc: "Game UX and educational product experiences designed to support literacy and engagement.",
    image: "/images/Portfolio%20Cards/amiramock-up_stilliano.webp",
  },
];
