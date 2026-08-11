export type PortraitHeroVariant = "home" | "about";

export type PortraitHeroHeadlinePart = {
  text: string;
  accent?: boolean;
};

export type PortraitHeroHeadlineLine = {
  parts: readonly PortraitHeroHeadlinePart[];
};

export type PortraitHeroProof =
  | string
  | {
      prefix: string;
      clients: string;
    };

export type PortraitHeroContent = {
  chapter: string;
  label?: string;
  headlineLines: readonly PortraitHeroHeadlineLine[];
  subcopy: string;
  proof?: PortraitHeroProof;
  ctaHref: string;
  ctaLabel: string;
};

export const portraitHeroContent: Record<PortraitHeroVariant, PortraitHeroContent> = {
  home: {
    chapter: "Tarus D. Stills",
    headlineLines: [
      { parts: [{ text: "Brands people return to." }] },
      { parts: [{ text: "Growth that lasts." }] },
    ],
    subcopy:
      "I lead product marketing and brand growth across streaming, sports, and entertainment platforms — turning audience insight into positioning, go-to-market, and long-term fandom.",
    ctaHref: "#work",
    ctaLabel: "Explore Projects",
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
