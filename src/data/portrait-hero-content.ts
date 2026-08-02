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
      { parts: [{ text: "Interactive Creative" }] },
      { parts: [{ text: "Executive" }] },
    ],
    subcopy:
      "I lead multidisciplinary teams across creative, product, and emerging technology to build interactive experiences, products, and brands that create lasting customer value.",
    proof: {
      prefix: "Work with:",
      clients:
        "Cartoon Network \u2022 PBS Kids \u2022 NBA \u2022 HBCU GO \u2022 Genius Sports \u2022 Amira Learning \u2022 State Farm",
    },
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
