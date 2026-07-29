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
    slug: "caidens-courage",
    title: "Caiden's Courage",
    desc: "Building an original children's franchise that unifies publishing, interactive learning, AI, games, and education into one connected product ecosystem.",
    image: "/images/Heros/Caidencourage_Hero.webp",
    href: "/work/caidens-courage",
  },
  {
    slug: "hbcugo",
    title: "HBCUgo.tv",
    desc: "Streaming strategy, CTV experience design, and fan engagement systems for HBCU sports and culture.",
    image: "/images/Portfolio%20Cards/HBCUgoCOmputer_stilliano.webp",
    href: "/work/hbcugo",
  },
  {
    slug: "amira-learning",
    title: "Amira Learning",
    desc: "Game UX and educational product experiences designed to support literacy and engagement.",
    image: "/images/Portfolio%20Cards/amiramock-up_stilliano.webp",
    href: "/work/amira-learning",
  },
  {
    slug: "montagecms",
    title: "MontageCMS",
    desc: "Zero-to-one product strategy and creative direction for an independent streaming platform connecting creator tools, viewer experiences, and monetization.",
    image: "/images/Portfolio%20Cards/montagecms_card_stilliano.webp",
    href: "/work/montagecms",
  },
  {
    slug: "genius-sports",
    title: "Genius Sports",
    desc: "Principal Product Designer shaping the Fan Engagement OS—Genius Reels, B2B widgets, partner research, and a Lean Design Framework for customer-led beta development.",
    image: "/images/Selected%20Works/GeniusSports/genius-sports-hero.webp",
    href: "/work/genius-sports",
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
];
