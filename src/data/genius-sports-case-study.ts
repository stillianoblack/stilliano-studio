/** Genius Sports unified case study — image & video paths (public/) */
const base = "/images/Selected%20Works/GeniusSports";

export const geniusSportsImages = {
  hero: `${base}/genius-sports-hero.webp`,
  heroMobile: `${base}/genius-sports-hero-mobile.webp`,
  fanEngagementOs: `${base}/genius-sports-fan-engagement-os.avif`,
  platformOverview: `${base}/genius-sports-platform-overview.avif`,
  platformEcosystem: `${base}/genius-sports-platform-ecosystem.webp`,
  gameDayFramework: `${base}/genius-sports-game-day-framework.webp`,
  customerAlignmentOs: `${base}/genius-sports-customer-alignment-os.webp`,
  frameworkMvp: `${base}/genius-sports-framework-mvp.webp`,
  marketplaceJourney: `${base}/genius-sports-marketplace-journey.webp`,
  platformHero: `${base}/genius-sports-platform-hero.webp`,
  reels: `${base}/genius-sports-reels.webp`,
  widgets: `${base}/genius-sports-widgets.webp`,
  leanFramework: `${base}/genius-sports-lean-design-framework.webp`,
  partnerBeta: `${base}/genius-sports-partner-beta.webp`,
  partnerProgram: `${base}/genius-sports-partner-program.webp`,
  personas: `${base}/genius-sports-personas.webp`,
  research: `${base}/genius-sports-research.webp`,
  experimentSocial: `${base}/genius-sports-experiment-social.webp`,
  experimentVelocity: `${base}/genius-sports-experiment-velocity.webp`,
} as const;

export const geniusSportsVideos = {
  engageOs: "/videos/genius-sports-engage-os.mp4",
  partnerBetaProgram: "/videos/genius-sports-vendor-lean-program.mp4",
} as const;

export const geniusSportsRoleGrid = [
  {
    title: "Platform Thinking",
    body: "Connected individual products into a broader Fan Engagement OS.",
  },
  {
    title: "Product Discovery",
    body: "Identified customer, workflow, and organizational gaps before teams committed to solutions.",
  },
  {
    title: "Partner Research",
    body: "Gathered direct insight from customers and translated it into product direction.",
  },
  {
    title: "Cross-Functional Leadership",
    body: "Worked across product, engineering, design, marketing, customer teams, and leadership.",
  },
  {
    title: "Process Innovation",
    body: "Created a Lean Design Framework and partner beta model where no consistent system previously existed.",
  },
] as const;

export const geniusSportsPlatformComponents = [
  "Content creation",
  "Genius Reels",
  "Interactive widgets",
  "Campaign configuration",
  "Partner branding",
  "Distribution channels",
  "Fan participation",
  "Engagement analytics",
  "Reusable templates",
  "Platform administration",
] as const;

export const geniusSportsLeanPhases = [
  { title: "Align", body: "Clarify the customer problem, business objective, and product hypothesis." },
  { title: "Discover", body: "Gather customer, workflow, market, and behavioral insight." },
  { title: "Define", body: "Translate learning into personas, journeys, needs, and product priorities." },
  { title: "Co-Create", body: "Develop concepts with selected partners and internal stakeholders." },
  { title: "Validate", body: "Test workflows, concepts, prototypes, and assumptions." },
  { title: "Beta", body: "Launch with design partners and establish a structured feedback cadence." },
  { title: "Learn", body: "Synthesize evidence, document decisions, and identify unresolved risk." },
  { title: "Scale", body: "Translate validated learning into repeatable platform capabilities." },
] as const;

export const geniusSportsBetaSteps = [
  { title: "Partner Selection", body: "Identify customers with relevant use cases, needs, and readiness." },
  { title: "Discovery", body: "Understand current workflows, pain points, constraints, and desired outcomes." },
  { title: "Hypothesis Definition", body: "Document what the team believes and what evidence is needed." },
  { title: "Concept Validation", body: "Review early workflows, prototypes, and product direction." },
  { title: "Beta Participation", body: "Use the product in a realistic partner context." },
  { title: "Feedback Cadence", body: "Create structured moments for observation, input, and decision-making." },
  { title: "Learning Synthesis", body: "Turn partner feedback into prioritized product insight." },
  { title: "Platform Direction", body: "Use evidence to inform what should be refined, scaled, or reconsidered." },
] as const;

export const geniusSportsLeanEvidenceImages = [
  {
    src: geniusSportsImages.leanFramework,
    alt: "Lean Design Framework — phases for partner-led product development",
    captionMeta: "Lean Design Framework",
    caption: "Align, discover, validate, and scale with partners",
  },
  {
    src: geniusSportsImages.experimentSocial,
    alt: "Social-native format prototype — reducing friction in fan participation",
    captionMeta: "Social-native formats",
    caption: "Directional learning on access, clarity, and participation patterns",
  },
  {
    src: geniusSportsImages.experimentVelocity,
    alt: "Content velocity concept — publishing rhythm and partner workflow",
    captionMeta: "Content velocity",
    caption: "Exploring speed-to-publish while preserving partner brand control",
  },
] as const;

export const geniusSportsCrossFunctionalGrid = [
  { title: "Product", body: "Clarified hypotheses, platform value, priorities, and product implications." },
  { title: "Design", body: "Connected research, architecture, workflows, prototypes, and interface systems." },
  { title: "Engineering", body: "Reduced ambiguity before larger implementation commitments." },
  { title: "Product Marketing", body: "Strengthened the connection between customer needs, product narrative, and partner value." },
  { title: "Customer Teams", body: "Created more structured ways to learn from real partner workflows." },
  { title: "Leadership", body: "Presented frameworks and recommendations that supported decision-making." },
] as const;

export const geniusSportsImpactStatements = [
  {
    title: "Connected Platform Thinking",
    body: "Helped frame Genius Reels, engagement widgets, and partner tools as parts of one broader Fan Engagement OS.",
  },
  {
    title: "Customer-Led Development",
    body: "Created a repeatable framework for bringing partner insight into product decisions.",
  },
  {
    title: "Reduced Product Risk",
    body: "Used research, prototypes, experiments, and beta learning to challenge assumptions earlier.",
  },
  {
    title: "Organizational Enablement",
    body: "Created shared language and methods that could support product, design, engineering, marketing, and partner teams.",
  },
] as const;

export const geniusSportsProofPoints = [
  {
    title: "Platform Strategy",
    body: "Connected individual products to a larger ecosystem and partner value proposition.",
  },
  {
    title: "B2B Product Thinking",
    body: "Designed for the customers configuring and deploying fan experiences.",
  },
  {
    title: "Research Leadership",
    body: "Created personas and customer insight where teams needed a stronger evidence base.",
  },
  {
    title: "Process Innovation",
    body: "Built a Lean Design Framework and partner beta model to improve how products were developed.",
  },
] as const;

export const geniusSportsReelsFocus = [
  "Content creation workflows",
  "Reusable formats",
  "Template selection",
  "Editing and configuration",
  "Speed to publish",
  "Partner branding",
  "Distribution",
  "Operational efficiency",
  "Social and digital channel use cases",
] as const;

export const geniusSportsWidgetFocus = [
  "Widget discovery",
  "Configuration",
  "Customization",
  "Brand controls",
  "Preview states",
  "Deployment",
  "Reusability",
  "Integration",
  "Partner autonomy",
  "Commercial scalability",
] as const;
