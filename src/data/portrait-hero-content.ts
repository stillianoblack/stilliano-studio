export type PortraitHeroVariant = "home" | "about";

export type PortraitHeroContent = {
  chapter: string;
  label: string;
  headlineLines: readonly string[];
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
      "Creating Story-Driven",
      "Worlds Across Film,",
      "Games & Interactive",
      "Media",
    ],
    subcopy:
      "Creative Product Executive, Producer, and Creative Technologist building original worlds through film, games, AI, publishing, education, and interactive experiences.",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
  about: {
    chapter: "CHAPTER 02",
    label: "TARUS D. STILLS",
    headlineLines: ["The System Behind", "the Worlds"],
    subcopy:
      "Still-i-ano is the creative identity of Tarus D. Stills — a producer, creative technologist, and product leader working at the intersection of story, systems, and emerging technology.",
    ctaHref: "/#contact",
    ctaLabel: "Start a Conversation",
  },
};
