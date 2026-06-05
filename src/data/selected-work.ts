/** Optional three-line gallery caption (category / detail / year). Replaces chip-style `label` on-card when set. */
export type ProjectMediaCaption = {
  category: string;
  detail: string;
  year: string;
};

export type ProjectMediaItem = {
  label: string;
  caption?: ProjectMediaCaption;
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
    kicker: "STREAMING / SPORTS / CULTURE",
    campaignTitle: "HBCUgo",
    headline: "Building the digital home for Black college sports.",
    description:
      "Led the platform transformation across OTT, mobile, web, and connected TV — aligning live sports, cultural programming, audience engagement, and monetization into one scalable streaming ecosystem.",
    metrics: ["29% YOY GROWTH", "OTT + MOBILE + CTV", "FAN ENGAGEMENT SYSTEMS"],
    href: "/work/hbcugo",
    media: [
      {
        label: "Platform design — HBCUgo OTT experience, 2023",
        caption: {
          category: "Platform design",
          detail: "HBCUGO / OTT EXPERIENCE",
          year: "2023",
        },
        image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_grid_stilliano.webp",
        wide: true,
        aspectRatio: "1850 / 806",
        /** Slight zoom reads as a tighter editorial crop on the hero still. */
        mediaScale: 1.04,
      },
      {
        label: "Motion system — streaming interface demo, 2023",
        caption: {
          category: "Motion system",
          detail: "STREAMING INTERFACE DEMO",
          year: "2023",
        },
        video: "/videos/HBCUgomaster.mp4",
        aspectRatio: "853 / 878",
        cardBackground: "#1B1F27",
        centerMedia: true,
        objectFit: "contain",
        objectPosition: "center",
      },
      {
        label: "CTV experience — connected TV and live sports, 2023",
        caption: {
          category: "CTV experience",
          detail: "CONNECTED TV + LIVE SPORTS",
          year: "2023",
        },
        image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_Panel_smallgrid.webp",
        aspectRatio: "853 / 878",
        objectFit: "contain",
      },
    ],
  },
  {
    slug: "amira-learning",
    kicker: "AI LEARNING / GAMIFIED EDUCATION",
    campaignTitle: "Amira AI Learning",
    headline: "What if reading felt more like a game?",
    description:
      "Led product and experience design for an adaptive literacy experience combining AI coaching, character-led storytelling, gameplay loops, classroom use, and behavioral engagement to help students build confidence and return consistently.",
    metrics: [
      "4M+ STUDENTS REACHED",
      "GAMIFIED LEARNING ECOSYSTEM",
      "MOBILE + CLASSROOM PLATFORM",
    ],
    href: "/work/amira-learning",
    media: [
      {
        label: "Platform design — Amira literacy gameplay experience",
        caption: {
          category: "Platform design",
          detail: "AI LITERACY EXPERIENCE",
          year: "2024",
        },
        image: "/images/Selected%20Works/Amira/AmiraLearning_DarkPanel.webp",
        wide: true,
        aspectRatio: "2014 / 878",
        mediaScale: 1.04,
      },
      {
        label: "Motion system — Amira learning platform demo",
        caption: {
          category: "Motion system",
          detail: "GAMEPLAY ENGAGEMENT LOOP",
          year: "2024",
        },
        video: "/videos/AmiraLearning.mp4",
        aspectRatio: "853 / 878",
        cardBackground: "#12161f",
        centerMedia: true,
        objectFit: "contain",
        objectPosition: "center",
      },
      {
        label: "Gameplay atmosphere — emotional participation",
        caption: {
          category: "Gameplay atmosphere",
          detail: "STUDENT ENGAGEMENT SYSTEMS",
          year: "2024",
        },
        image: "/images/Selected%20Works/Amira/Ipad_Amira_smallcard.webp",
        aspectRatio: "853 / 878",
        objectFit: "contain",
      },
    ],
  },
  {
    slug: "caidens-courage",
    kicker: "STORY IP / INTERACTIVE / YOUTH",
    campaignTitle: "The Focus Flame™",
    headline: "A story world built for kids who think differently.",
    description:
      "Created an original story-powered universe blending comics, SEL tools, interactive missions, classroom experiences, and emotional storytelling to help neurodivergent kids see focus as power.",
    metrics: ["ORIGINAL IP", "INTERACTIVE SEL EXPERIENCE", "BOOK + DIGITAL PLATFORM"],
    href: "/work/caidens-courage",
    media: [
      {
        label: "Brand System",
        image:
          "/images/Portfolio%20Cards/Caidenscourage/caidencourage_top_portfoliocard.webp",
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
    slug: "music-video",
    title: "DaBaby x Sexyy Red",
    description: "Producer • Creative Development",
    image: "/images/Selected%20Works/2x2selected_works/musicvideo_1.webp",
  },
  {
    slug: "tripping-the-fantastic",
    title: "Tripping the Fantastic",
    description: "Producer • Story Development",
    image: "/images/Selected%20Works/2x2selected_works/trippingthefantasic.webp",
  },
  {
    slug: "narrative-film",
    title: "Independent Feature Film",
    description: "Producer • Creative Development",
    image: "/images/Selected%20Works/2x2selected_works/narrative-film.webp",
  },
  {
    slug: "pbs-kids",
    title: "PBS Kids",
    description: "Interactive Creative Director",
    image: "/images/Selected%20Works/2x2selected_works/PBSkids.webp",
  },
  {
    slug: "cartoon-network-allstar-dunk",
    title: "Cartoon Network x Allstar Dunk",
    description: "Interactive + Creative Experience Producer",
    image: "/images/Selected%20Works/2x2selected_works/cartoon_network_allstardunk.webp",
  },
  {
    slug: "dc-comics-fandom",
    title: "DC Comics Fandom",
    description: "Creative Direction • Fan Engagement Platform",
    image: "/images/Portfolio%20Cards/Kids-Fandome.webp",
  },
];
