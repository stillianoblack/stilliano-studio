/** MontageCMS case study — image & video paths (public/) */
const base = "/images/Selected%20Works/MontageCMS";

export const montageCmsImages = {
  hero: `${base}/4MontageCMS_header.webp`,
  heroLegacy: `${base}/montagecms-hero.webp`,
  creatorWorkspace: `${base}/montagecms-creator-workspace.webp`,
  architecture: `${base}/montagecms-architecture.webp`,
  userFlow: `${base}/montagecms-user-flow.webp`,
  designProcess: `${base}/montageCMS_designprocess.webp`,
  processMural: `${base}/process_mural.webp`,
  designSystemUsers: `${base}/Design-System-Users_mcs.webp`,
  viewerWatcher: `${base}/montagetv_watcher.webp`,
  creatorBackend: `${base}/montagecms_backend.webp`,
  movieAdaptive: `${base}/MovieAdaptive.webp`,
  scheduleRelease: `${base}/ScheduleRelease.webp`,
} as const;

export const montageCmsVideos = {
  overviewEndCredits: "/videos/montage-overview-end-credits.mp4",
  creatorEpg: "/videos/montage-creator-epg.mp4",
} as const;

export const montageCmsRoleProcessImages = [
  {
    src: montageCmsImages.designProcess,
    alt: "MontageCMS design process — discovery through delivery",
  },
  {
    src: montageCmsImages.processMural,
    alt: "MontageCMS product process mural and workflow mapping",
  },
  {
    src: montageCmsImages.designSystemUsers,
    alt: "MontageCMS design system and user experience architecture",
  },
] as const;

export const montageCmsLeadershipItems = [
  "Defined the product vision and strategic roadmap",
  "Conducted creator, filmmaker, and market research",
  "Designed the creator-management and viewer experiences",
  "Developed workflows across content, channels, analytics, and monetization",
  "Established the visual language and interaction system",
  "Coordinated product, design, development, and business priorities",
  "Presented the platform to creators, partners, and stakeholders",
] as const;

export const montageCmsInsights = [
  {
    title: "Ownership",
    body: "Creators wanted greater control over their content, brand, and customer relationships.",
  },
  {
    title: "Distribution",
    body: "Audiences were fragmented across platforms, devices, and disconnected viewing environments.",
  },
  {
    title: "Monetization",
    body: "Creators needed flexible models beyond advertising revenue alone.",
  },
  {
    title: "Accessibility",
    body: "Launching a professional streaming product remained technically and financially difficult.",
  },
] as const;

export const montageCmsCreatorExperience = [
  "Content and catalog management",
  "Channel and playlist creation",
  "Audience and performance insights",
  "Brand and storefront configuration",
  "Monetization and release planning",
] as const;

export const montageCmsViewerExperience = [
  "Personalized content discovery",
  "Branded streaming environments",
  "Cross-device viewing",
  "Profiles, favorites, and watch history",
  "Editorial collections and recommendations",
] as const;

export const montageCmsProcessSteps = [
  { title: "Discover", body: "Understand creator, viewer, and market needs." },
  { title: "Define", body: "Translate insights into product principles and priorities." },
  { title: "Architect", body: "Map the platform, workflows, and connected systems." },
  { title: "Design", body: "Create the interface and brand experience." },
  { title: "Validate", body: "Test concepts with potential users and partners." },
  { title: "Evolve", body: "Use learning to refine the platform and roadmap." },
] as const;

export const montageCmsImpactStatements = [
  {
    title: "Zero-to-One Leadership",
    body: "Turned an early concept into a defined product, brand, platform architecture, and working experience.",
  },
  {
    title: "Product Vision",
    body: "Connected creator tools, consumer streaming, content strategy, and monetization within one ecosystem.",
  },
  {
    title: "Cross-Functional Thinking",
    body: "Balanced user needs, technical requirements, business goals, and creative quality throughout the process.",
  },
  {
    title: "Foundational Experience",
    body: "The work informed my later leadership across streaming, education, sports technology, interactive entertainment, and original IP.",
  },
] as const;
