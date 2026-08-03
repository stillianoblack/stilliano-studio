export type SlateTabId = "original" | "branded" | "narrative";

export type SlateCard = {
  id: string;
  eyebrow: string;
  title: string;
  role?: string;
  description?: string;
  image: string;
  alt: string;
  href?: string;
};

export type SlateTab = {
  id: SlateTabId;
  label: string;
  intro: string;
  cards: SlateCard[];
};

export type StoriesRecognitionEntry = {
  id: string;
  title: string;
  detail: string;
  category: string;
};

const CC = "/images/Selected%20Works/caidencourage/images";
const BTS = "/images/Behind%20The%20Scenes";
const GRID = "/images/Selected%20Works/2x2selected_works";
const AMIRA = "/images/Selected%20Works/Amira";

export const slateTabs: SlateTab[] = [
  {
    id: "original",
    label: "Original Development",
    intro:
      "Original stories, characters, and worlds developed for publishing, animation, interactive media, and long-term franchise growth.",
    cards: [
      {
        id: "caidens-courage",
        eyebrow: "Original IP • Kids & Family",
        title: "Caiden's Courage",
        role: "Creator • Creative Director • Franchise Builder",
        image: `${BTS}/Caidens_frame_animation.webp`,
        alt: "Caiden's Courage frame animation development",
        href: "/work/caidens-courage",
      },
      {
        id: "storyboards",
        eyebrow: "Visual Development",
        title: "Storyboards",
        role: "Storyboard Artist • Story Development",
        image: `${BTS}/storyboards.webp`,
        alt: "Storyboard and sequential visual development for Caiden's Courage",
      },
      {
        id: "concept-art",
        eyebrow: "Visual Development",
        title: "Concept Art",
        role: "Creative Direction • Visual Development",
        image: `${BTS}/caiden_concept_Thumbnail.webp`,
        alt: "Caiden's Courage concept art and visual exploration",
      },
      {
        id: "characters",
        eyebrow: "Character Development",
        title: "Characters",
        role: "Creator • Character Development",
        image: `${BTS}/caiden_character_thumbnail.webp`,
        alt: "Caiden's Courage character design and development",
        href: "/work/caidens-courage",
      },
      {
        id: "worldbuilding",
        eyebrow: "Franchise Development",
        title: "Worldbuilding",
        role: "Creator • Story Systems",
        image: `${BTS}/worldbuilding_thumbnail_caiden.webp`,
        alt: "Caiden's Courage worldbuilding and environment development",
        href: "/work/caidens-courage",
      },
    ],
  },
  {
    id: "branded",
    label: "Branded Development",
    intro:
      "Story-led campaigns and content systems developed to connect brand strategy, audience culture, and platform behavior.",
    cards: [
      {
        id: "spice-world",
        eyebrow: "Commercial",
        title: "Spice World | Global Flavors",
        role: "Producer",
        image: `${BTS}/Commercials_thumbnail.webp`,
        alt: "Spice World Global Flavors commercial production still",
      },
      {
        id: "dc-comics-campaign",
        eyebrow: "Campaign",
        title: "DC Comics",
        role: "Interactive • Short Film Segment Producer",
        image: `${GRID}/cartoon_network_allstardunk.webp`,
        alt: "DC Comics interactive campaign featuring animated characters on a broadcast set",
      },
      {
        id: "pbs-kids",
        eyebrow: "Interactive Story",
        title: "PBS Kids",
        role: "Storyteller",
        image: `${BTS}/PBSkids.webp`,
        alt: "PBS Kids Play and Learn Science interactive experience",
      },
      {
        id: "coca-cola-storyboards",
        eyebrow: "Storyboards",
        title: "Coca-Cola",
        role: "Storyboard Artist • Producer",
        image: `${BTS}/cocalcola_storyboards.webp`,
        alt: "Coca-Cola commercial storyboard frames",
      },
      {
        id: "amira-learning",
        eyebrow: "Animation Development",
        title: "Amira Learning",
        role: "Producer",
        image: `${AMIRA}/AmiraLearning_DarkPanel.webp`,
        alt: "Amira Learning animation development artwork",
        href: "/work/amira-learning",
      },
      {
        id: "ford-hbcugo",
        eyebrow: "Branded IP",
        title: "Ford + HBCU GO Commercial",
        role: "Producer • Tech Integration",
        image: `${BTS}/Ford_Thumbnail.webp`,
        alt: "Ford and HBCU GO Accelerating Brilliance branded commercial",
        href: "/work/hbcugo",
      },
      {
        id: "dababy-sexyy-red",
        eyebrow: "Music Video",
        title: "DaBaby x Sexyy Red",
        role: "Producer • Creative Development",
        image: `${GRID}/musicvideo_1.webp`,
        alt: "DaBaby x Sexyy Red music video production",
      },
      {
        id: "dc-comics-animation",
        eyebrow: "Animation Development",
        title: "DC Comics",
        role: "Producer • Visual Development",
        image: `${BTS}/DCComicsAnimation.webp`,
        alt: "DC Comics animation and visual development artwork",
      },
    ],
  },
  {
    id: "narrative",
    label: "Narrative Development",
    intro:
      "Long-form and short-form stories developed through concept, script, visual direction, production, and audience positioning.",
    cards: [
      {
        id: "tripping-the-fantastic",
        eyebrow: "Short Film",
        title: "Tripping the Fantastic",
        role: "Producer • Story Development",
        image: `${GRID}/trippingthefantasic.webp`,
        alt: "Tripping the Fantastic short film",
      },
      {
        id: "independent-feature-film",
        eyebrow: "Feature",
        title: "Independent Feature Film",
        role: "Producer • Creative Development",
        image: `${GRID}/narrative-film.webp`,
        alt: "Independent feature film project",
      },
      {
        id: "proof-of-concept",
        eyebrow: "Narrative Development",
        title: "Proof of Concept",
        description:
          "Focused story and production experiments created to demonstrate tone, characters, format, and franchise potential.",
        image: `${BTS}/ReviewScripts.webp`,
        alt: "Proof of concept development and script review",
      },
    ],
  },
];

export const storySystemsFeatures = [
  {
    id: "montagecms",
    eyebrow: "MONTAGECMS",
    title: "Building the platform",
    description:
      "A zero-to-one streaming and content-management ecosystem designed to help creators organize, distribute, and grow story-driven media.",
    image:
      "/images/Selected%20Works/MontageCMS/montageCMS_portfolio_cover%40caiden.webp",
    alt: "MontageCMS streaming platform interface",
    href: "/work/montagecms",
  },
  {
    id: "hbcugo",
    eyebrow: "HBCU GO",
    title: "Building the audience",
    description:
      "Product and content leadership across a multi-platform streaming ecosystem spanning connected TV, mobile, web, sports, and entertainment.",
    image: "/images/Portfolio%20Cards/HBCUgo/HBCUgo_grid_stilliano.webp",
    alt: "HBCU GO streaming platform experience",
    href: "/work/hbcugo",
  },
  {
    id: "caidens-courage",
    eyebrow: "CAIDEN'S COURAGE",
    title: "Building the franchise",
    description:
      "An original children's IP expanding across publishing, interactive learning, games, animation development, and community experiences.",
    image: `${CC}/Asset%201%40caiden.webp`,
    alt: "Caiden's Courage franchise ecosystem",
    href: "/work/caidens-courage",
  },
] as const;

export const developmentProcessSteps = [
  {
    step: "01",
    title: "Audience",
    description:
      "Understand the people, behaviors, culture, and unmet needs shaping the opportunity.",
  },
  {
    step: "02",
    title: "Story",
    description:
      "Define the narrative premise, emotional stakes, characters, and audience promise.",
  },
  {
    step: "03",
    title: "Visual Development",
    description:
      "Explore style, environments, storyboards, motion, and the creative language of the world.",
  },
  {
    step: "04",
    title: "Production",
    description:
      "Align talent, teams, timelines, technology, and execution around a shared creative vision.",
  },
  {
    step: "05",
    title: "Platform",
    description:
      "Shape how the story is distributed, discovered, experienced, and expanded across media.",
  },
  {
    step: "06",
    title: "Community",
    description:
      "Use feedback, engagement, and audience behavior to strengthen the story and guide future development.",
  },
] as const;

export const storiesRecognitionEntries: StoriesRecognitionEntry[] = [
  {
    id: "television-academy",
    title: "Television Academy Member",
    detail: "Producing Peer Group",
    category: "Industry Membership",
  },
  {
    id: "emmy-ford-hbcugo",
    title: "Emmy Award Winner — Ford x HBCU GO",
    detail: "Branded commercial and narrative series",
    category: "Branded Content",
  },
  {
    id: "telly-cannes",
    title: "Telly Award-Winning Short Screened at Cannes Film Festival",
    detail: "Producer • Assistant Director",
    category: "Production Leadership",
  },
  {
    id: "la-film-festival",
    title: "Short Film Selected for LA Film Festival",
    detail: "Executive Producer • Narrative Development",
    category: "Narrative Development",
  },
  {
    id: "feature-14-day",
    title: "Feature Film Produced on a 14-Day Schedule",
    detail: "Producer • Independent Production",
    category: "Independent Production",
  },
  {
    id: "lil-baby-video",
    title: "Lil Baby Music Video",
    detail: "Associate Producer • Music & Branded Content",
    category: "Music & Branded Content",
  },
];
