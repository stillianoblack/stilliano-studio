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
  chapter?: string;
  label?: string;
  roles?: string;
  headlineLines: readonly PortraitHeroHeadlineLine[];
  subcopy: string;
  proof?: PortraitHeroProof;
  ctaHref: string;
  ctaLabel: string;
};

export const portraitHeroContent: Record<PortraitHeroVariant, PortraitHeroContent> = {
  home: {
    chapter: "Tarus D. Stills",
    label: "CREATIVE TECHNOLOGY • PRODUCT • AI",
    headlineLines: [
      { parts: [{ text: "I Turn Ideas Into" }] },
      { parts: [{ text: "Working Experiences." }] },
    ],
    subcopy:
      "Creative technologist and product strategist building zero-to-one products at the intersection of AI, storytelling, design, and emerging technology—from interactive experiences and streaming platforms to animation and original IP.",
    ctaHref: "#work",
    ctaLabel: "Explore Projects",
  },
  about: {
    headlineLines: [{ parts: [{ text: "Tarus D. Stills" }] }],
    roles: "Creative Technologist • Product Leader • Founder",
    subcopy:
      "Product leader across streaming, CTV, media, and content production — focused on how stories are built, distributed, and experienced across screens.",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
};
