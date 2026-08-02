export type ExecutiveSummaryTeam =
  | string
  | {
      intro: string;
      members: readonly string[];
    };

export type ExecutiveSummaryData = {
  role: string;
  team: ExecutiveSummaryTeam;
  duration?: string;
  industry?: string;
  ownership: readonly string[];
  executivePartners?: readonly string[];
  businessOutcome: string;
};

export const executiveSummaryBySlug = {
  montagecms: {
    role: "Head of Product, Design & Content",
    team: "Cross-functional product team including UX, engineering, creators, product, and business stakeholders.",
    duration: "2+ Years",
    industry: "Streaming & Entertainment Technology",
    ownership: [
      "Product Vision",
      "Product Strategy",
      "Experience Architecture",
      "UX Direction",
      "Content Discovery",
      "Streaming Platform Architecture",
      "Creator Tools",
      "Design Systems",
      "Customer Research",
    ],
    executivePartners: [
      "Executive Leadership",
      "Engineering",
      "Product",
      "Content Creators",
      "Business Stakeholders",
    ],
    businessOutcome:
      "Created the zero-to-one framework for an independent streaming platform connecting creator workflows, audience engagement, and cross-platform entertainment experiences.",
  },
  "caidens-courage": {
    role: "Creator, Creative Director & Franchise Builder",
    team: "Cross-functional team spanning engineering, AI, illustration, curriculum, educators, motion, and creative production.",
    duration: "2023 – Present",
    industry: "Entertainment • Education • Gaming",
    ownership: [
      "Product Vision",
      "Franchise Development",
      "Creative Direction",
      "World Building",
      "AI Integration",
      "Product Strategy",
      "Interactive Experiences",
      "Curriculum Design",
      "Brand Development",
    ],
    executivePartners: [
      "Engineering",
      "AI Development",
      "Educators",
      "Families",
      "Camp Directors",
      "School Leaders",
    ],
    businessOutcome:
      "Built an original children's entertainment ecosystem spanning books, games, curriculum, AI, and interactive learning experiences.",
  },
  hbcugo: {
    role: "Principal Product Manager & Experience Lead",
    team: "Cross-functional team across Product, Marketing, Engineering, Analytics, Broadcast Operations, Content, Customer Support, and Executive Leadership.",
    duration: "2022–2024",
    industry: "Streaming & Sports Entertainment",
    ownership: [
      "Product Strategy",
      "Roadmaps",
      "Streaming Platforms",
      "Audience Growth",
      "Customer Experience",
      "Product Marketing",
      "Analytics",
      "Executive Communication",
    ],
    executivePartners: [
      "SVP",
      "CMO",
      "Engineering",
      "Analytics",
      "Marketing",
      "Broadcast Operations",
    ],
    businessOutcome:
      "Expanded the streaming ecosystem across Roku, Apple TV, Fire TV, mobile, and web while defining product strategy that supported audience growth and platform expansion.",
  },
  "amira-learning": {
    role: "Interactive Creative Director",
    team: {
      intro: "15+ Cross-functional including:",
      members: [
        "Product Manager",
        "Engineering",
        "UX Designers",
        "Game UX",
        "Game Artists",
        "Learning Scientists",
        "Researchers",
      ],
    },
    duration: "2 Years",
    industry: "Education Technology",
    ownership: [
      "Product Strategy",
      "UX Strategy",
      "Creative Direction",
      "Learning Experiences",
      "AI Product Vision",
      "Gameplay Systems",
      "Research Translation",
    ],
    executivePartners: [
      "Product Leadership",
      "Engineering",
      "Learning Science",
      "Research",
      "Education Leadership",
    ],
    businessOutcome:
      "Defined product strategy and interactive learning systems for an AI-powered literacy platform improving student engagement and educational outcomes.",
  },
  "genius-sports": {
    role: "Principal Product Design Strategist",
    team: "Cross-functional product organization across Product, Engineering, Marketing, Sales, Customer Success, and Executive Leadership.",
    ownership: [
      "Product Strategy",
      "Fan Engagement",
      "Product Marketing",
      "Executive Storytelling",
      "Customer Experience",
      "Design Systems",
    ],
    businessOutcome:
      "Defined strategic product experiences connecting sports organizations, sportsbooks, and fans through interactive engagement products.",
  },
  "state-farm": {
    role: "Principal UX Architect",
    team: "Cross-functional teams across product, design, engineering, research, and global business units.",
    duration: "Enterprise Engagement",
    industry: "Insurance & Financial Services",
    ownership: [
      "Product Strategy",
      "Systems Thinking",
      "UX Architecture",
      "Executive Partnership",
      "Customer Experience",
      "Experience Direction",
    ],
    executivePartners: [
      "Directors",
      "Vice Presidents",
      "Product Leaders",
      "Design Leadership",
      "Engineering",
    ],
    businessOutcome:
      "Clarified complex enterprise systems and established scalable experience direction across My Accounts, Claims, and critical customer journeys.",
  },
} as const satisfies Record<string, ExecutiveSummaryData>;

export type ExecutiveSummarySlug = keyof typeof executiveSummaryBySlug;
