export type FeaturedWorldProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  desktopImage: string;
  desktopObjectPosition?: string;
  mobileObjectPosition?: string;
  href?: string;
};

export const featuredWorldProjects: FeaturedWorldProject[] = [
  {
    id: "caidens-courage",
    number: "01",
    title: "Caiden's Courage",
    category: "Original Entertainment Universe",
    eyebrow: "Featured World",
    heading: "Caiden's Courage",
    subheading: "Every universe starts with one story.",
    description:
      "An original entertainment universe for focus, courage, and emotional growth — spanning books, games, education, interactive technology, school pilots, and film development.",
    desktopImage: "/images/Heros/Caidencourage_Hero.webp",
    desktopObjectPosition: "center center",
    mobileObjectPosition: "center center",
    href: "/work/caidens-courage",
  },
  {
    id: "hbcugo",
    number: "02",
    title: "HBCU GO Sports",
    category: "Streaming + Sports Platform",
    eyebrow: "Selected System",
    heading: "HBCU GO Sports",
    subheading: "The digital home for Black college sports.",
    description:
      "Led platform transformation across OTT, mobile, web, and connected TV — aligning live sports, cultural programming, audience engagement, and monetization into one scalable streaming ecosystem.",
    desktopImage: "/images/Heros/HBCUgoCTV_Hero.webp",
    desktopObjectPosition: "center center",
    mobileObjectPosition: "center center",
    href: "/work/hbcugo",
  },
  {
    id: "amira-learning",
    number: "03",
    title: "Amira Learning",
    category: "AI Education Experience",
    eyebrow: "Selected System",
    heading: "Amira Learning",
    subheading: "What if reading felt more like a game?",
    description:
      "Product and experience design for an adaptive literacy platform combining AI coaching, character-led storytelling, gameplay loops, and classroom engagement.",
    desktopImage: "/images/Heros/Amira_Hero_2.webp",
    desktopObjectPosition: "center center",
    mobileObjectPosition: "center center",
    href: "/work/amira-learning",
  },
  {
    id: "dc-fandome",
    number: "04",
    title: "DC Fandome",
    category: "Entertainment Experience",
    eyebrow: "Selected Experience",
    heading: "DC Fandome",
    subheading: "Culture-driven fan experiences at scale.",
    description:
      "Interactive creative direction and fan engagement systems that transformed iconic IP into story-driven digital experiences for entertainment audiences.",
    desktopImage: "/images/Heros/DCfandom_hero_2.webp",
    desktopObjectPosition: "center center",
    mobileObjectPosition: "center center",
  },
  {
    id: "home-depot",
    number: "05",
    title: "Home Depot",
    category: "Retail Interactive Experience",
    eyebrow: "Selected Experience",
    heading: "Home Depot",
    subheading: "Interactive retail for physical environments.",
    description:
      "Designed interactive retail experiences connecting digital touchpoints, in-store environments, and customer participation.",
    desktopImage: "/images/Heros/homedepot_desktop_header.webp",
    desktopObjectPosition: "center center",
    mobileObjectPosition: "center center",
  },
];

export const DEFAULT_FEATURED_WORLD_INDEX = 0;

export function getDesktopObjectPosition(project: FeaturedWorldProject): string {
  return project.desktopObjectPosition ?? "center center";
}

export function getMobileObjectPosition(project: FeaturedWorldProject): string {
  return project.mobileObjectPosition ?? getDesktopObjectPosition(project);
}
