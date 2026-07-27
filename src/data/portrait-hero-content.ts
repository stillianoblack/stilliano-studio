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
          { text: "Directing " },
          { text: "Synthetic Media", accent: true },
          { text: "," },
        ],
      },
      {
        parts: [
          { text: "3D Worlds & " },
          { text: "AI Storytelling", accent: true },
        ],
      },
    ],
    subcopy:
      "Creative Technologist and Interactive Creative Director building AI-powered storytelling systems, digital experiences, and entertainment franchises at the intersection of design, technology, and emerging media.",
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
