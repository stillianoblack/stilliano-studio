export type FeaturedWorldProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
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
    backgroundImage: "/images/Heros/Caidencourage_Hero.webp",
    mobileBackgroundImage: "/images/Heros/Caiden_Hero_Mobile.webp",
    mobileObjectPosition: "50% 20%",
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
    backgroundImage: "/images/Heros/HBCUgoCTV_Hero.webp",
    mobileBackgroundImage: "/images/Heros/HBCUgo_hero_mobile_1.webp",
    mobileObjectPosition: "50% 20%",
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
    backgroundImage: "/images/Heros/Amira_Hero_2.webp",
    mobileBackgroundImage: "/images/Heros/Amira_Hero_mobile.webp",
    mobileObjectPosition: "50% 20%",
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
    backgroundImage: "/images/Heros/DCfandom_hero_2.webp",
    mobileBackgroundImage: "/images/Heros/DCfandom_hero_mobile.webp",
    mobileObjectPosition: "50% 20%",
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
    backgroundImage: "/images/Heros/homedepot_desktop_header.webp",
    mobileBackgroundImage: "/images/Heros/homedepot_Mobile_header.webp",
    mobileObjectPosition: "50% 20%",
  },
];

export const DEFAULT_FEATURED_WORLD_INDEX = 0;
