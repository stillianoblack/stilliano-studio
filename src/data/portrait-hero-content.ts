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
    chapter: "CHAPTER 02",
    label: "TARUS D. STILLS",
    headlineLines: [
      { parts: [{ text: "The System Behind" }] },
      { parts: [{ text: "the Worlds" }] },
    ],
    subcopy:
      "Creative technology leader working across product strategy, generative AI, interactive experiences, and entertainment — building the systems that turn stories and ideas into working products.",
    proof: "GENERATIVE AI • PROTOTYPING • PRODUCT SYSTEMS • INTERACTIVE • STREAMING",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
};
