/**
 * Homepage personal-authority content.
 * Future CMS: map these arrays to content entries.
 */

export type HomeIdeaItem = {
  id: string;
  title: string;
  category: string;
  /** FUTURE CONTENT: replace with real essay/video URL when published */
  href?: string;
  placeholder?: boolean;
};

export type HomeProofPoint = {
  id: string;
  value: string;
  label: string;
};

export type HomeCareerPoint = {
  id: string;
  org: string;
  value: string;
  label: string;
};

export type HomeSocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

/** Media technology territory — single supporting visual */
export const homeMediaTechImage = {
  src: "/images/home/product-placeholder.webp",
  alt: "Media technology and streaming product work",
} as const;

/** Caiden's Courage — one hero + supporting visuals */
export const homeCaidenImages = {
  hero: {
    src: "/images/Portfolio%20Cards/Caidenscourage/CaidensCourage_book.webp",
    alt: "Caiden's Courage book",
  },
  support: [
    {
      src: "/images/Selected%20Works/caidencourage/images/PhotoCollageMockup.webp",
      alt: "Caiden's Courage book and world imagery",
    },
    {
      src: "/images/Heros/Caidencourage_Hero.webp",
      alt: "Caiden's Courage original children's story world",
    },
  ],
} as const;

/** Montage founder section imagery */
export const homeMontageImage = {
  src: "/images/Selected%20Works/MontageCMS/montagecms-hero.webp",
  alt: "Montage media technology platform",
} as const;

export const homeMontageProof: HomeProofPoint[] = [
  {
    id: "revenue",
    value: "$500K",
    label: "First-year revenue commitments",
  },
  {
    id: "mcp",
    value: "MCP",
    label: "AI-native intelligence layer",
  },
  {
    id: "zero-one",
    value: "0 → 1",
    label: "Built from concept to working platform",
  },
];

export const homeCareerPoints: HomeCareerPoint[] = [
  {
    id: "hbcugo",
    org: "HBCU GO",
    value: "50K → 200K+ MAU",
    label: "Streaming + audience growth",
  },
  {
    id: "genius",
    org: "Genius Sports",
    value: "+50% Fan Engagement",
    label: "Interactive sports experiences",
  },
  {
    id: "amira",
    org: "Amira Learning",
    value: "AI + Education",
    label: "Interactive learning technology",
  },
  {
    id: "entertainment",
    org: "Entertainment",
    value: "Cartoon Network + NBA",
    label: "Interactive media + audience experiences",
  },
];

export const homeIdeaItems: HomeIdeaItem[] = [
  {
    id: "battle-attention",
    title: "The Battle for Attention, IP, Data, and Distribution",
    category: "Media + AI",
    placeholder: true,
  },
  {
    id: "mcp-creative",
    title: "What MCP Means for the Future of Creative Software",
    category: "Media + AI",
    placeholder: true,
  },
  {
    id: "next-streaming",
    title: "Why the Next Streaming Platform Won't Look Like Netflix",
    category: "Streaming",
    placeholder: true,
  },
  {
    id: "childrens-ip-product",
    title: "What Building a Children's IP Taught Me About Product",
    category: "Original IP",
    placeholder: true,
  },
  {
    id: "ai-creators",
    title: "AI Won't Replace Creators. It Will Change the Creative Operating System.",
    category: "Creator Economy",
    placeholder: true,
  },
];

export const homeIdeaCategories = [
  "Media + AI",
  "Creator Economy",
  "Original IP",
  "Product Leadership",
  "Streaming",
  "Storytelling",
] as const;

export const homeSpeakingTopics = [
  "Media + AI",
  "Creative Technology",
  "Creator Economy",
  "Original IP",
  "Zero-to-One Product Building",
  "Interactive Storytelling",
  "Entrepreneurship",
] as const;

export const homeConnectAreas = [
  "Speaking",
  "Strategic Partnerships",
  "Advisory",
  "Media + Technology",
  "Executive Opportunities",
] as const;

/**
 * Secondary connect links.
 * LinkedIn / Instagram profile URLs were not present in the repo —
 * Email is live; replace the # placeholders when profiles are confirmed.
 */
export const homeSocialLinks: HomeSocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Email", href: "mailto:stills@montage.tv" },
];
