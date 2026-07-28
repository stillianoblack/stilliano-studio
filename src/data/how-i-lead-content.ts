export type LeadershipPrinciple = {
  id: string;
  title: string;
  body: string;
};

export type OperateStep = {
  id: string;
  title: string;
  body: string;
};

export type LeadershipArea = {
  id: string;
  title: string;
  items: readonly string[];
};

export type PracticeTeaser = {
  id: string;
  title: string;
  headline: string;
  description: string;
  tags: readonly string[];
  href: string;
  image: string;
  imageAlt: string;
};

export const leadershipPrinciples: LeadershipPrinciple[] = [
  {
    id: "vision",
    title: "Vision Before Output",
    body: "I define the reason the work should exist before deciding what it should look like. Strong creative direction begins with audience, business context, cultural relevance, and a clear standard for success.",
  },
  {
    id: "systems",
    title: "Systems Over One-Off Deliverables",
    body: "I build repeatable frameworks, workflows, and creative systems that help teams move faster without lowering the quality bar. The goal is not one great launch—it is an organization capable of producing great work consistently.",
  },
  {
    id: "story",
    title: "Story Before Technology",
    body: "Emerging technology can accelerate production, expand participation, and unlock new forms of expression. It is most powerful when it strengthens the human idea rather than becoming the idea itself.",
  },
  {
    id: "clarity",
    title: "Clarity Creates Autonomy",
    body: "Teams do their best work when the objective, decision rights, constraints, and quality expectations are clear. I create enough structure for people to move confidently without being micromanaged.",
  },
  {
    id: "customers",
    title: "Customers Shape the Roadmap",
    body: "Research, behavior, feedback, and performance data are not separate from creative leadership. They reveal what audiences value, where the experience breaks down, and what deserves to be built next.",
  },
];

export const operateSteps: OperateStep[] = [
  {
    id: "listen",
    title: "Listen",
    body: "Customer behavior, stakeholder priorities, market context, and team realities.",
  },
  {
    id: "frame",
    title: "Frame",
    body: "Define the opportunity, audience, narrative, success metrics, and creative principles.",
  },
  {
    id: "align",
    title: "Align",
    body: "Create shared direction across product, creative, marketing, engineering, production, and leadership.",
  },
  {
    id: "build",
    title: "Build",
    body: "Guide teams through development, rapid prototyping, feedback, production, and delivery.",
  },
  {
    id: "measure",
    title: "Measure",
    body: "Evaluate adoption, engagement, business outcomes, and audience response.",
  },
  {
    id: "evolve",
    title: "Evolve",
    body: "Turn learnings into stronger roadmaps, systems, narratives, and future releases.",
  },
];

export const leadershipAreas: LeadershipArea[] = [
  {
    id: "creative-strategy",
    title: "Creative Strategy",
    items: [
      "Brand and franchise vision",
      "Narrative architecture",
      "Creative briefs and quality standards",
      "Integrated campaigns and experiences",
    ],
  },
  {
    id: "product",
    title: "Product and Experience Strategy",
    items: [
      "Product vision and roadmaps",
      "Customer journeys",
      "Audience engagement",
      "Adoption and retention",
    ],
  },
  {
    id: "ai",
    title: "AI and Emerging Technology",
    items: [
      "AI-assisted creative workflows",
      "Rapid prototyping",
      "Synthetic media and interactive systems",
      "Responsible human-led implementation",
    ],
  },
  {
    id: "cross-functional",
    title: "Cross-Functional Leadership",
    items: [
      "Executive alignment",
      "Creative and technical team direction",
      "Partner and stakeholder management",
      "Decision-making across ambiguity",
    ],
  },
  {
    id: "growth",
    title: "Growth and Measurement",
    items: [
      "Customer insight",
      "Product adoption",
      "Engagement analytics",
      "Feedback loops and optimization",
    ],
  },
  {
    id: "franchise",
    title: "Franchise and World Building",
    items: [
      "Story ecosystems",
      "Character and audience development",
      "Platform expansion",
      "Long-term brand value",
    ],
  },
];

export const practiceTeasers: PracticeTeaser[] = [
  {
    id: "caidens-courage",
    title: "Caiden's Courage",
    headline:
      "Building one connected franchise across publishing, learning, games, and digital experiences.",
    description:
      "Defined the creative and product vision, aligned curriculum, engineering, design, storytelling, and customer feedback, and created an evolving system shaped by camps, families, educators, and student behavior.",
    tags: [
      "Franchise Strategy",
      "Product Leadership",
      "AI",
      "Education",
      "Audience Growth",
    ],
    href: "/work/caidens-courage",
    image: "/images/Heros/Caidencourage_Hero.webp",
    imageAlt: "Caiden's Courage franchise and interactive learning ecosystem",
  },
  {
    id: "hbcugo",
    title: "HBCU Go",
    headline:
      "Aligning executive vision, platform strategy, audience growth, and delivery across a streaming ecosystem.",
    description:
      "Led product direction across connected TV, web, and mobile while partnering with executive leadership, marketing, content, analytics, and engineering teams to grow the platform and strengthen the audience experience.",
    tags: [
      "Streaming",
      "Product Strategy",
      "Executive Alignment",
      "Growth",
      "Cross-Functional Leadership",
    ],
    href: "/work/hbcugo",
    image: "/images/Heros/HBCUgoCTV_Hero.webp",
    imageAlt: "HBCU GO Sports streaming platform across connected TV and mobile",
  },
  {
    id: "interactive-entertainment",
    title: "Interactive Entertainment and Brand Experiences",
    headline:
      "Leading multidisciplinary teams to turn global brands into audience-first interactive experiences.",
    description:
      "Directed product, creative, motion, design, engineering, and production partners across entertainment, sports, education, and retail experiences for recognized brands and franchises.",
    tags: [
      "Creative Direction",
      "Interactive Media",
      "Production",
      "Brand Systems",
      "Audience Engagement",
    ],
    href: "/#entertainment-interactive-media",
    image: "/images/Heros/DCfandom_hero_2.webp",
    imageAlt: "Interactive entertainment and brand experience work for global franchises",
  },
];

export const teamExpectations: readonly string[] = [
  "A clear point of view without ego.",
  "Direct, actionable feedback tied to the objective.",
  "High standards with room for experimentation.",
  "Early alignment before expensive execution.",
  "Honest conversations about tradeoffs, timing, and risk.",
  "A leader who can move between executive strategy and hands-on problem solving.",
  "A commitment to making the team stronger—not simply making the work mine.",
];
