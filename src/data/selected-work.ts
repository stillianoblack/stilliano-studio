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
  /** Visible case-study link label when `href` is set (e.g. View Case Study). */
  caseStudyCta?: string;
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
    slug: "montagecms",
    kicker: "ZERO-TO-ONE STREAMING PLATFORM",
    campaignTitle: "MontageCMS / Cutclass",
    headline:
      "Designing the creative and technical system for an independent streaming ecosystem.",
    description:
      "I conceived and built MontageCMS as a zero-to-one platform for independent filmmakers, creators, and entertainment brands. Translating creative ambition into a scalable product system, I connected content management, audience engagement, monetization, and branded viewing experiences across web, mobile, and connected TV.",
    metrics: [
      "CREATIVE TECHNOLOGY",
      "PRODUCT STRATEGY",
      "EXPERIENCE DESIGN",
      "PLATFORM ARCHITECTURE",
      "STREAMING SYSTEMS",
      "ZERO-TO-ONE",
    ],
    href: "/work/montagecms",
    caseStudyCta: "View Case Study",
    media: [
      {
        label: "Platform design — MontageCMS streaming framework",
        caption: {
          category: "Platform design",
          detail: "INDEPENDENT STREAMING ECOSYSTEM",
          year: "2020",
        },
        image:
          "/images/Selected%20Works/MontageCMS/montageCMS_portfolio_cover%40caiden.webp",
        wide: true,
        aspectRatio: "3021 / 1317",
        objectPosition: "center 42%",
      },
      {
        label: "Creator platform — content management and onboarding",
        caption: {
          category: "Creator platform",
          detail: "CONTENT & CHANNEL WORKFLOWS",
          year: "2020",
        },
        image: "/images/Selected%20Works/MontageCMS/montagecms-creator-workspace.webp",
        aspectRatio: "853 / 878",
        objectFit: "cover",
        objectPosition: "center center",
      },
      {
        label: "Viewer experience — branded streaming interface",
        caption: {
          category: "Viewer experience",
          detail: "DISCOVERY & STREAMING UI",
          year: "2020",
        },
        video: "/videos/montage-overview-end-credits.mp4",
        aspectRatio: "853 / 878",
        objectFit: "cover",
        objectPosition: "center center",
      },
    ],
  },
  {
    slug: "caidens-courage",
    kicker: "BUILDING A KID'S UNIVERSE",
    campaignTitle: "Caiden's Courage",
    headline: "Building an original IP as a connected product ecosystem.",
    description:
      "I'm designing and shipping the technology behind an original children's franchise—connecting interactive storytelling, AI-assisted experiences, games, publishing, and educator tools into one working platform. From product architecture and UX to rapid prototyping, data systems, and GTM, Caiden's Courage is where I explore how story, technology, and real-world audience behavior can shape a product from zero to one.",
    metrics: [
      "REACT + TYPESCRIPT",
      "SUPABASE + SQL",
      "AI-ASSISTED PROTOTYPING",
      "INTERACTIVE GAMES",
      "PRODUCT ARCHITECTURE",
      "ANIMATION + STORY SYSTEMS",
      "LIVE SCHOOL PILOTS",
    ],
    href: "/work/caidens-courage",
    media: [
      {
        label: "Brand System",
        image:
          "/images/Selected%20Works/caidencourage/images/Asset%201%40caiden.webp",
        wide: true,
        aspectRatio: "3021 / 1317",
        objectFit: "cover",
        objectPosition: "center 50%",
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
    slug: "genius-sports",
    kicker: "SPORTS TECHNOLOGY & PLATFORM STRATEGY",
    campaignTitle: "Genius Sports",
    headline: "Building a connected platform for modern fan engagement.",
    description:
      "As Principal Product Design & Growth Strategist, I led audience engagement and growth strategy across Genius Sports' fan-engagement platform — including Genius Reels, configurable B2B engagement widgets, and partner-facing product experiences — translating fan behavior insights into scalable growth outcomes. Partnering across Product, Engineering, and Marketing, this work increased fan engagement 50% and improved partner adoption 20%. I also created a Lean Design Framework that brought customers directly into discovery, validation, and beta development.",
    metrics: [
      "PRINCIPAL PRODUCT DESIGN",
      "CREATIVE TECHNOLOGIST",
      "AI PROTOTYPING",
      "PLATFORM STRATEGY",
      "FAN ENGAGEMENT",
      "EXPERIMENTATION",
    ],
    href: "/work/genius-sports",
    caseStudyCta: "View Case Study",
    media: [
      {
        label: "Fan Engagement OS — connected platform",
        caption: {
          category: "Platform strategy",
          detail: "FAN ENGAGEMENT OS",
          year: "2025",
        },
        image:
          "/images/Selected%20Works/GeniusSports/Geniussports_cover_portfolio%40caiden.webp",
        wide: true,
        aspectRatio: "16 / 10",
        objectFit: "cover",
        objectPosition: "54% 14%",
        cardBackground: "#1e1e1e",
      },
      {
        label: "Lean Design Framework — partner-led development",
        caption: {
          category: "Process innovation",
          detail: "LEAN DESIGN FRAMEWORK",
          year: "2025",
        },
        image: "/images/Selected%20Works/GeniusSports/genius-sports-lean-design-framework.webp",
        aspectRatio: "853 / 878",
        objectFit: "contain",
        cardBackground: "#f4f4f2",
        centerMedia: true,
      },
      {
        label: "Genius Reels — content creation",
        caption: {
          category: "Genius Reels",
          detail: "CONTENT CREATION WORKFLOWS",
          year: "2025",
        },
        image: "/images/Selected%20Works/GeniusSports/genius-sports-reels.webp",
        aspectRatio: "853 / 878",
        objectFit: "cover",
        objectPosition: "center center",
        cardBackground: "#E9EEF0",
      },
    ],
  },
];

export const entertainmentMediaProjects: CompactWorkProject[] = [
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
];

export const interactiveMediaProjects: CompactWorkProject[] = [
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

/** @deprecated Use entertainmentMediaProjects or interactiveMediaProjects */
export const compactWorkProjects: CompactWorkProject[] = [
  ...entertainmentMediaProjects,
  ...interactiveMediaProjects,
];
