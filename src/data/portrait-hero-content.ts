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
  label?: string;
  headlineLines: readonly PortraitHeroHeadlineLine[];
  subcopy: string;
  proof?: string;
  ctaHref: string;
  ctaLabel: string;
};

export const portraitHeroContent: Record<PortraitHeroVariant, PortraitHeroContent> = {
  home: {
    chapter: "Tarus D. Stills",
    headlineLines: [
      { parts: [{ text: "Interactive Creative" }] },
      { parts: [{ text: "Executive" }] },
    ],
    subcopy:
      "I align creative vision, product strategy, and emerging technology to build products, experiences, and brands that create lasting customer value.",
    ctaHref: "#work",
    ctaLabel: "See Work",
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
