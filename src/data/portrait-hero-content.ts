export type PortraitHeroVariant = "home" | "about";

export type PortraitHeroHeadlinePart = {
  text: string;
  accent?: boolean;
};

export type PortraitHeroHeadlineLine = {
  parts: readonly PortraitHeroHeadlinePart[];
};

export type PortraitHeroContent = {
  chapter: string;
  label: string;
  headlineLines: readonly PortraitHeroHeadlineLine[];
  subcopy: string;
  proof?: string;
  ctaHref: string;
  ctaLabel: string;
};

export const portraitHeroContent: Record<PortraitHeroVariant, PortraitHeroContent> = {
  home: {
    chapter: "CHAPTER 01",
    label: "TARUS D. STILLS",
    headlineLines: [
      {
        parts: [
          { text: "Building " },
          { text: "AI-Powered", accent: true },
        ],
      },
      { parts: [{ text: "Stories, Products" }] },
      { parts: [{ text: "& Franchises" }] },
    ],
    subcopy:
      "I partner with executive leaders, product organizations, and creative teams to transform emerging technology into products, stories, and experiences that drive customer adoption, cultural relevance, and long-term brand value.",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
  about: {
    chapter: "CHAPTER 02",
    label: "TARUS D. STILLS",
    headlineLines: [
      { parts: [{ text: "The System Behind" }] },
      { parts: [{ text: "the Worlds" }] },
    ],
    subcopy:
      "Still-i-ano is the creative identity of Tarus D. Stills — a producer, creative technologist, and product leader working at the intersection of story, systems, and emerging technology.",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
};
