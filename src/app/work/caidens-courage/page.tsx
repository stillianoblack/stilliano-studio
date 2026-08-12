import type { Metadata } from "next";
import Link from "next/link";
import { CaseCinematicVideo } from "../../CaseCinematicVideo";
import { ExecutiveSummary } from "@/app/ExecutiveSummary";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Caiden's Courage — Franchise Ecosystem & Brand Strategy | Stilliano Studios",
  description:
    "A story-driven franchise ecosystem and emotional confidence platform combining SEL, interactive storytelling, audience engagement, and scalable IP strategy.",
  openGraph: {
    title: "Caiden's Courage — Franchise Ecosystem & Brand Strategy | Stilliano Studios",
    description:
      "A story-driven franchise ecosystem and emotional confidence platform combining SEL, interactive storytelling, audience engagement, and scalable IP strategy.",
  },
};

const HERO_IMAGE = "/images/Heros/Caidencourage_Hero.webp";
const HERO_IMAGE_MOBILE = "/images/Heros/Caiden_Hero_Mobile.webp";
const OVERVIEW_IMAGE =
  "/images/Selected%20Works/caidencourage/portfolio-mobile-focus-flame-lab-caiden%20copy.webp";
const OPPORTUNITY_IMAGE =
  "/images/Selected%20Works/caidencourage/images/The%20Opportunity_kid_Courage.webp";
const PLATFORM_IMAGE_1 =
  "/images/Selected%20Works/caidencourage/images/Chooseyournextadventure.webp";
const PLATFORM_IMAGE_2 =
  "/images/Selected%20Works/caidencourage/images/Testcampcourage.webp";

type ParticipationSlide = {
  src: string;
  ariaLabel: string;
  meta: string;
  label: string;
};

const participationSlides: ParticipationSlide[] = [
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Slide1.mp4",
    ariaLabel: "Caiden's Courage participation system — slide 01",
    meta: "Slide 01",
    label: "Story Moment",
  },
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Slide4.mp4",
    ariaLabel: "Caiden's Courage participation system — slide 04",
    meta: "Slide 02",
    label: "Brave Mind Mission",
  },
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Slide5.mp4",
    ariaLabel: "Caiden's Courage participation system — slide 05",
    meta: "Slide 03",
    label: "Focus Training",
  },
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Slide6.mp4",
    ariaLabel: "Caiden's Courage participation system — slide 06",
    meta: "Slide 04",
    label: "Emotional Reset",
  },
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Slide7.mp4",
    ariaLabel: "Caiden's Courage participation system — slide 07",
    meta: "Slide 05",
    label: "Community Activation",
  },
];
const VISUAL_CREATIVE_DIRECTION =
  "/images/Selected%20Works/caidencourage/images/Visual_Creative_Direction.webp";
const FLAME_BRAND =
  "/images/Portfolio%20Cards/Caidenscourage/Caiden%27sCourageFlame_Page1.webp";
const ECOSYSTEM_SITEMAP =
  "/images/Selected%20Works/caidencourage/images/ecosystems_maps/caidencourage_sitemap.webp";
const ECOSYSTEM_BRAND_ARCH =
  "/images/Selected%20Works/caidencourage/images/ecosystems_maps/brandarchitecture.webp";
const ECOSYSTEM_JOURNEY =
  "/images/Selected%20Works/caidencourage/images/ecosystems_maps/customerjourney.webp";
const ECOSYSTEM_PRODUCT =
  "/images/Selected%20Works/caidencourage/images/ecosystems_maps/productmockups.webp";

type EcosystemMap = {
  src: string;
  alt: string;
  meta: string;
  descriptor: string;
};

const ecosystemMaps: EcosystemMap[] = [
  {
    src: ECOSYSTEM_SITEMAP,
    alt: "Caiden's Courage sitemap — information architecture connecting story, SEL, interactive, community, and licensing pillars",
    meta: "Information Architecture",
    descriptor: "Sitemap",
  },
  {
    src: ECOSYSTEM_BRAND_ARCH,
    alt: "Caiden's Courage brand architecture — identity, voice, and franchise system mapping",
    meta: "Brand Architecture",
    descriptor: "Identity System",
  },
  {
    src: ECOSYSTEM_JOURNEY,
    alt: "Caiden's Courage customer journey — the path from discovery through participation and advocacy",
    meta: "Customer Journey",
    descriptor: "Experience Flow",
  },
  {
    src: ECOSYSTEM_PRODUCT,
    alt: "Caiden's Courage product mockups — interactive platform system across surfaces",
    meta: "Product Mockups",
    descriptor: "Platform System",
  },
];

const courageEcosystemBullets = [
  "Storytelling creates emotional connection.",
  "Community transforms connection into participation.",
  "Social sharing expands discovery.",
  "Schools establish trust and recurring engagement.",
  "Interactive experiences deepen retention.",
];
const INTERACTIVE_VIDEO =
  "/images/Selected%20Works/caidencourage/Videos/CaidensCourageInteractiveGame_2.mp4";
const BRANDING_BANNER =
  "/images/Selected%20Works/caidencourage/images/Caidenscourage_branding_banner_desktop.webp";
const CONTENT_ENGINE_IMAGE =
  "/images/Selected%20Works/caidencourage/images/0Cross-PlatformContentEngine_caidencourage_%20copy.webp";
const MERCH_MOCKUP =
  "/images/Selected%20Works/caidencourage/images/mockup_caidencourage.webp";
const COMMUNITY_STRATEGY_IMAGE =
  "/images/Selected%20Works/caidencourage/images/Communitystrategy.webp";

const heroTags = [
  "Audience Engagement",
  "Interactive Media & Games",
  "SEL Platform",
  "Story IP",
  "Franchise Ecosystem",
];

const transformationLoopCards = [
  {
    eyebrow: "Discover",
    src: "/images/Selected%20Works/caidencourage/images/Transformation%20Loop/Awareness_Caiden_crowd.webp",
    alt: "Caiden's Courage — awareness and emotional recognition among kids",
    captionKeyword: "Awareness",
    captionBody: "Kids recognize their emotions, challenges, and strengths.",
  },
  {
    eyebrow: "Practice",
    src: "/images/Selected%20Works/caidencourage/images/Transformation%20Loop/practice_Caiden_SEL.webp",
    alt: "Caiden's Courage — SEL practice and focus training",
    captionKeyword: "Action",
    captionBody:
      "Kids practice focus, emotional regulation, courage, and self-awareness.",
  },
  {
    eyebrow: "Transform",
    src: "/images/Selected%20Works/caidencourage/images/Transformation%20Loop/transform_genesis.webp",
    alt: "Caiden's Courage — transformation and confidence building",
    captionKeyword: "Growth",
    captionBody:
      "Kids build confidence, resilience, and leadership through repetition.",
  },
] as const;

const ecosystemLoopColumns = [
  {
    label: "Discover",
    items: ["Story World", "Comic Books", "Characters", "SEL Reflection"],
  },
  {
    label: "Practice",
    items: [
      "Interactive Missions",
      "Focus Flame Lab",
      "B-4 Coaching",
      "Brave Challenges",
    ],
  },
  {
    label: "Apply",
    items: [
      "Classroom Activities",
      "Camp Courage",
      "Family Discussions",
      "Real-Life Actions",
    ],
  },
  {
    label: "Grow",
    items: ["Confidence", "Focus", "Emotional Regulation", "Leadership"],
  },
  {
    label: "Share",
    items: ["Student Artwork", "Challenges", "Community Stories", "Parent Wins"],
  },
  {
    label: "Belong",
    items: ["Brave Minds Community", "School Programs", "Clubs", "Events"],
  },
] as const;

type EditorialVideo = {
  src: string;
  ariaLabel: string;
  meta: string;
  quote: string;
  caption: string;
  stagger?: 1 | 2 | 3;
};

const editorialVideos: EditorialVideo[] = [
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Fearless.mp4",
    ariaLabel: "Caiden's Courage Fearless story reel",
    meta: "Story Reel 01",
    quote: "When focus fades, courage answers.",
    caption: "Story Reel · Fearless",
  },
  {
    src: "/images/Selected%20Works/caidencourage/Videos/Tap_in.mp4",
    ariaLabel: "Caiden's Courage Tap In story reel",
    meta: "Story Reel 02",
    quote: "Tap in. Light up. Begin.",
    caption: "Story Reel · Tap In",
    stagger: 2,
  },
];

const editorialPoints = [
  "Cinematic Storytelling",
  "SEL Worldbuilding",
  "Interactive Engagement",
  "Franchise Architecture",
  "Audience Participation",
];

const opportunityCards = [
  {
    title: "Parents + Educators",
    body:
      "Parents want meaningful media and emotional tools for positive screen time. Educators want engagement-first SEL support that feels culturally relevant — not clinical.",
  },
  {
    title: "Students",
    body:
      "Kids are searching for identity, belonging, immersive worlds, and characters that feel emotionally relatable — not lectures or instructional content.",
  },
];

type PlatformVisual = {
  src: string;
  alt: string;
  meta: string;
  descriptor: string;
};

const platformPillars = [
  "Brave Mind Missions",
  "Emotional Reset Challenges",
  "Interactive Focus Training",
  "Parent & Teacher Participation",
  "Student Storytelling Ecosystem",
];

const platformVisuals: PlatformVisual[] = [
  {
    src: PLATFORM_IMAGE_1,
    alt: "Caiden's Courage interactive choose-your-next-adventure platform interface",
    meta: "Interactive SEL Platform",
    descriptor: "Choose Your Next Adventure",
  },
  {
    src: PLATFORM_IMAGE_2,
    alt: "Caiden's Courage Camp Courage classroom and community system preview",
    meta: "Classroom + Community System",
    descriptor: "Camp Courage",
  },
];

const ecosystemFlow = [
  { label: "Story", body: "Narrative IP and worldbuilding." },
  { label: "SEL", body: "Emotional regulation, identity, courage." },
  { label: "Interactive", body: "Decision-based engagement and play." },
  { label: "Community", body: "Participation, contribution, belonging." },
  { label: "Licensing", body: "Publishing, animation, merchandise, education." },
];

const audienceSegments = [
  {
    title: "Students",
    body:
      "Need identity, belonging, confidence, and characters that feel emotionally relatable.",
  },
  {
    title: "Parents",
    body:
      "Need meaningful media that supports emotional growth without feeling clinical or instructional.",
  },
  {
    title: "Educators",
    body:
      "Need engagement-first SEL tools that feel culturally current and easy to activate.",
  },
];

const experienceCards = [
  {
    title: "Interactive SEL Moments",
    body:
      "Story-driven beats that turn emotional learning into participation rather than instruction.",
  },
  {
    title: "Emotional Decision-Making",
    body:
      "Choice-based mechanics that practice focus, courage, and emotional regulation.",
  },
  {
    title: "Badge + Progression Systems",
    body:
      "Lightweight progression that rewards growth, reflection, and consistency.",
  },
  {
    title: "Classroom Activities",
    body:
      "Printable and digital prompts designed for educator activation in minutes.",
  },
  {
    title: "Camp Courage Concepts",
    body:
      "Future-ready experiential and program-based extensions of the IP.",
  },
  {
    title: "Digital Mini Experiences",
    body:
      "Bite-sized interactive moments that extend the world beyond the page.",
  },
];

const contentPillars = [
  "Brave Mind Tips",
  "Character Lore Drops",
  "Emotional Reset Moments",
  "Student Spotlights",
  "Parent Testimonials",
  "Micro-Stories",
  "Interactive Challenges",
  "Classroom Prompts",
];

type CampaignEngineNode = {
  title: string;
  description: string;
};

type ActivationQuarter = {
  quarter: string;
  title: string;
  microLabel: string;
  focus: string;
  tags: string[];
};

const campaignEngineNodes: CampaignEngineNode[] = [
  {
    title: "Story",
    description: "Narrative moments introduce the emotional world.",
  },
  {
    title: "Social",
    description: "Short-form content turns story into daily engagement.",
  },
  {
    title: "Community",
    description:
      "Students, parents, and educators contribute artwork, wins, and reflections.",
  },
  {
    title: "Interactive",
    description: "Missions and SEL mechanics turn attention into action.",
  },
  {
    title: "Merch",
    description: "Campaign language becomes wearable identity.",
  },
  {
    title: "Licensing",
    description:
      "The world expands into publishing, animation, education, and experiences.",
  },
];

const getCampaignNode = (title: string) =>
  campaignEngineNodes.find((node) => node.title === title)!;

function CampaignMapNode({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const node = getCampaignNode(title);
  return (
    <div className={`campaign-map-node ${className}`.trim()}>
      <h4 className="campaign-map-node-title">{node.title}</h4>
      <p className="campaign-map-node-description">{node.description}</p>
    </div>
  );
}

const activationCadence: ActivationQuarter[] = [
  {
    quarter: "Q1",
    title: "AWARENESS",
    microLabel: "DISCOVERY",
    focus: "Introduce the world, characters, and emotional premise.",
    tags: [
      "HERO STORY REELS",
      "CHARACTER INTRODUCTIONS",
      "PARENT EMOTIONAL HOOKS",
    ],
  },
  {
    quarter: "Q2",
    title: "PARTICIPATION",
    microLabel: "ENGAGEMENT",
    focus: "Invite kids and classrooms into the ecosystem.",
    tags: [
      "BRAVE MIND CHALLENGES",
      "STUDENT ARTWORK PROMPTS",
      "FOCUS REFLECTION MOMENTS",
    ],
  },
  {
    quarter: "Q3",
    title: "IMMERSION",
    microLabel: "IMMERSION",
    focus: "Extend the IP through interactive and educational experiences.",
    tags: [
      "CAMP COURAGE MISSIONS",
      "SEL MINI EXPERIENCES",
      "READING + FOCUS ACTIVITIES",
    ],
  },
  {
    quarter: "Q4",
    title: "RETENTION",
    microLabel: "RETENTION",
    focus:
      "Transform engagement into rituals, community, and repeat participation.",
    tags: [
      "STUDENT SPOTLIGHTS",
      "COMMUNITY SUBMISSIONS",
      "SEASONAL MERCH DROPS",
    ],
  },
];

const campaignChips = [
  "Social storytelling",
  "Student challenges",
  "School participation",
  "Emotional reflection",
  "Community submissions",
  "Immersive missions",
  "Merchandise",
  "Experiential activations",
];

const visualPillars = [
  "Cinematic Storytelling",
  "Anime-Inspired Framing",
  "Emotional Realism",
  "Ember Glow Effects",
  "Premium Youth Branding",
  "Stylized Environmental Storytelling",
];

const sloganChips = [
  "Focus Is Your Flame.",
  "Built for Brave Minds.",
  "Protect Your Flame.",
  "Different Minds. Powerful Kids.",
];

const howItWasBuiltStack = [
  "React",
  "TypeScript",
  "Supabase",
  "SQL",
  "APIs",
  "AI-Assisted Prototyping",
] as const;

const roleGroups = [
  {
    label: "Product",
    tags: ["Product Vision", "Product Strategy", "Platform Architecture"],
  },
  {
    label: "Experience",
    tags: ["UX Architecture", "Interaction Systems", "Multi-User Journeys"],
  },
  {
    label: "Technology",
    tags: [
      "React / TypeScript",
      "Supabase / SQL",
      "APIs",
      "AI-Assisted Prototyping",
    ],
  },
  {
    label: "Creative",
    tags: [
      "Creative Direction",
      "Interactive Storytelling",
      "Animation + Game Systems",
    ],
  },
  {
    label: "Delivery",
    tags: [
      "Rapid Prototyping",
      "Analytics + Iteration",
      "Pilot Implementation",
    ],
  },
] as const;

const outcomeCards = [
  {
    category: "Product",
    title: "Working Platform Shipped",
    body:
      "Built and launched a connected interactive experience spanning students, educators, content, progression, rewards, and supporting tools.",
  },
  {
    category: "System",
    title: "One Connected Product Ecosystem",
    body:
      "Connected story, missions, progression, rewards, educator workflows, and reporting into a shared system rather than isolated experiences.",
  },
  {
    category: "Technology",
    title: "From Static Design to Working Software",
    body:
      "Moved product ideas into React/TypeScript prototypes supported by Supabase, SQL, APIs, and AI-assisted development.",
  },
  {
    category: "Validation",
    title: "Prototype to Real Users",
    body:
      "Deployed the experience in a live Summer 2026 pilot with real learners and educators.",
  },
  {
    category: "Creative",
    title: "One World Across Multiple Surfaces",
    body:
      "Extended the narrative system across publishing, interactive experiences, games, animation development, and education.",
  },
] as const;

export default function CaidensCourageCaseStudyPage() {
  return (
    <div className="case-page case-page--caiden">
      <main>
        <div className={`${styles.inner} case-caiden-topbar`}>
          <Link href="/#work" className="case-back">
            ← Back to Work
          </Link>
        </div>

        {/* 1 — Hero */}
        <section className="case-hero" aria-label="Caiden's Courage franchise ecosystem">
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={HERO_IMAGE_MOBILE} />
            <img
              src={HERO_IMAGE}
              alt="Caiden's Courage hero"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="case-hero-overlay case-caiden-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-eyebrow case-hero-eyebrow">CAIDEN&apos;S COURAGE</p>
            <h1 className="case-title case-hero-title display-heading display-heading-xl">
              Caiden&apos;s Courage
            </h1>
            <ul className="case-tags case-caiden-hero-tags" aria-label="Project categories">
              {heroTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="case-caiden-hero-actions">
              <a
                href="https://caidenvale.com"
                className="case-caiden-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Live Experience
              </a>
            </div>
          </div>
        </section>

        <ExecutiveSummary slug="caidens-courage" />

        {/* How It Was Built */}
        <section
          className="case-section section-spacing"
          aria-labelledby="caiden-how-built-heading"
        >
          <div className={styles.inner}>
            <p className="platform-systems-label">Building the System</p>
            <h2
              id="caiden-how-built-heading"
              className="display-heading display-heading-md"
            >
              How It Was Built
            </h2>
            <div className="case-body case-section-prose">
              <p>
                I designed and built the interactive learning platform, quest system, and
                educator experience directly — moving from product architecture and UX into
                working prototypes using React, TypeScript, Supabase, APIs, SQL, and
                AI-assisted development workflows.
              </p>
              <p>
                Instead of treating design as a handoff, I used working software to test
                interaction models, progression systems, user states, and content behavior.
                That allowed the product to evolve through real use rather than static
                documentation alone.
              </p>
            </div>
            <div
              className="case-caiden-pillars"
              role="list"
              aria-label="Technical capabilities"
            >
              {howItWasBuiltStack.map((item) => (
                <span
                  key={item}
                  role="listitem"
                  className="case-chip case-caiden-pillar-chip"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview — strategy + transformation loop */}
        <section
          className="case-section case-caiden-overview-band section-spacing"
          aria-labelledby="caiden-overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="caiden-overview-heading"
              className="display-heading display-heading-xl case-caiden-overview-heading"
            >
              How do we help{" "}
              <span className="case-caiden-overview-accent">neurodiverse kids</span> build
              confidence and focus?
            </h2>
            <div className="case-caiden-overview-strategy">
              <p className="case-caiden-overview-kicker">Strategy</p>
              <p className="case-caiden-overview-strategy-text">
                Answering that question required more than a book, curriculum, or digital
                experience. I needed to design a connected product system capable of turning
                storytelling, interactive learning, games, progress, rewards, and educator
                tools into one experience that could evolve with the people using it.
              </p>
            </div>
            <div className="case-caiden-transformation-grid" role="list">
              {transformationLoopCards.map((card) => (
                <figure
                  key={card.eyebrow}
                  className="case-caiden-transformation-card"
                  role="listitem"
                >
                  <p className="case-caiden-transformation-eyebrow">{card.eyebrow}</p>
                  <div className="case-caiden-transformation-media">
                    <img
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                      decoding="async"
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <figcaption className="case-caiden-transformation-caption">
                    <span className="case-caiden-transformation-caption-keyword">
                      {card.captionKeyword}
                    </span>
                    {" - "}
                    <span className="case-caiden-transformation-caption-body">
                      {card.captionBody}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="case-caiden-ecosystem-loop-grid" role="list">
              {ecosystemLoopColumns.map((column) => (
                <div key={column.label} className="case-caiden-ecosystem-loop-col" role="listitem">
                  <p className="case-caiden-ecosystem-loop-kicker">{column.label}</p>
                  <ul className="case-caiden-ecosystem-loop-list">
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial — franchise positioning (blue) */}
        <section
          className="case-section case-caiden-editorial section-spacing"
          aria-labelledby="overview-band-heading"
        >
          <p className="case-caiden-editorial-bg-quote" aria-hidden>
            Find Your Flame.
          </p>
          <div className={`${styles.inner} case-caiden-editorial-layout`}>
            <div className="case-caiden-editorial-copy">
              <p className="case-caiden-editorial-label">Franchise Ecosystem</p>
              <h2
                id="overview-band-heading"
                className="display-heading case-caiden-editorial-title"
              >
                Building a story-driven franchise ecosystem for modern kids, families, and
                educators.
              </h2>
              <div className="case-caiden-editorial-prose">
                <p>
                  A story-driven franchise ecosystem combining entertainment, SEL, interactive
                  systems, and audience participation into a scalable emotional learning
                  platform.
                </p>
              </div>
              <ul className="case-caiden-editorial-points">
                {editorialPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="case-caiden-editorial-signal">
                Built as a scalable ecosystem for publishing, streaming, interactive learning,
                and future licensing expansion.
              </p>
            </div>
            <div className="case-caiden-editorial-stack" role="list">
              {editorialVideos.map((video, index) => (
                <figure
                  key={video.src}
                  className={`case-caiden-editorial-poster${
                    video.stagger ? ` case-caiden-editorial-poster--stagger-${video.stagger}` : ""
                  }`}
                  role="listitem"
                >
                  <div className="case-caiden-editorial-poster-inner">
                    <CaseCinematicVideo
                      src={video.src}
                      ariaLabel={video.ariaLabel}
                      className="case-caiden-editorial-video"
                    />
                  </div>
                  <figcaption className="case-caiden-editorial-caption">
                    <span className="case-caiden-editorial-caption-meta" aria-hidden>
                      <span>{video.meta}</span>
                      <span>9:16</span>
                    </span>
                    <q className="case-caiden-editorial-caption-quote">{video.quote}</q>
                    <span className="case-caiden-editorial-caption-role">{video.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 2 — The Opportunity */}
        <section
          className="case-section section-spacing"
          aria-labelledby="opportunity-heading"
        >
          <div className={styles.inner}>
            <h2
              id="opportunity-heading"
              className="case-heading display-heading display-heading-xl"
            >
              The Opportunity
            </h2>
            <div className="case-body case-section-prose">
              <p>
                Modern kids are overwhelmed, overstimulated, and emotionally disconnected from
                traditional educational media.
              </p>
              <p>
                Parents want meaningful content, emotional tools, and positive screen time.
                Educators want engagement, SEL support, and culturally relevant learning systems.
              </p>
              <p>
                Most educational platforms feel instructional. Most entertainment platforms lack
                emotional depth.
              </p>
              <p>Caiden&apos;s Courage was designed to bridge both worlds.</p>
            </div>
            <div className="case-grid case-grid--2 case-caiden-opportunity-grid">
              {opportunityCards.map((card) => (
                <article
                  key={card.title}
                  className="case-card case-card--light case-caiden-opportunity-card"
                >
                  <h3 className="case-card-title">{card.title}</h3>
                  <p className="case-card-body">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="case-visual-lang-layout case-challenge-sticky-layout platform-systems-section">
              <aside
                className="case-visual-lang-sticky platform-systems-aside"
                aria-labelledby="platform-systems-heading"
              >
                <p className="platform-systems-label">FROM STORY TO PARTICIPATION</p>
                <h3
                  id="platform-systems-heading"
                  className="case-visual-lang-sticky-title platform-systems-title"
                >
                  Platform Systems
                </h3>
                <ul className="platform-systems-list">
                  {platformPillars.map((pillar) => (
                    <li key={pillar}>{pillar}</li>
                  ))}
                </ul>
                <p className="platform-systems-statement">
                  Designed to help kids feel seen, capable, and emotionally confident.
                </p>
              </aside>
              <div
                className="case-visual-lang-stills platform-visual-grid"
                role="list"
              >
                {platformVisuals.map((visual) => (
                  <figure
                    key={visual.src}
                    className="case-visual-lang-still platform-visual-card"
                    role="listitem"
                  >
                    <div className="platform-visual-frame">
                      <img
                        src={visual.src}
                        alt={visual.alt}
                        loading="lazy"
                        decoding="async"
                        width={1600}
                        height={1000}
                      />
                      <span className="platform-visual-overlay" aria-hidden />
                      <span className="platform-visual-glow" aria-hidden />
                    </div>
                    <figcaption className="platform-visual-caption">
                      <span className="platform-visual-caption-meta">
                        <span>{visual.meta}</span>
                        <span>{visual.descriptor}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Platform Architecture & Systems Design */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="ecosystem-heading"
        >
          <div className={styles.inner}>
            <h2
              id="ecosystem-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Platform Architecture &amp; Systems Design
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The experience needed to work as one connected system across students,
              educators, families, content, progression, and reporting. I directed the
              product and creative architecture that connected these touchpoints while
              designing the platform to support new missions, games, learning experiences,
              and community features without rebuilding the underlying experience each
              time.
            </p>
            <p className="case-body case-section-lead case-section-lead--muted">
              This was not built as a single book. It was designed as a world that could expand
              across publishing, streaming, games, classroom programs, merchandise, and community
              activations.
            </p>

            <ol
              className="case-caiden-franchise-flow case-caiden-franchise-flow--tight"
              aria-label="Ecosystem pillars"
            >
              {ecosystemFlow.map((step, i) => (
                <li key={step.label} className="case-caiden-franchise-flow-step">
                  <span className="case-caiden-franchise-flow-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="case-caiden-franchise-flow-label">{step.label}</h3>
                  <p className="case-caiden-franchise-flow-body">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="case-body case-section-prose case-caiden-subsection-pad">
              <h3
                id="one-product-heading"
                className="case-heading display-heading display-heading--light display-heading-md"
              >
                One Product. Multiple User Experiences.
              </h3>
              <p className="case-section-lead case-section-lead--muted">
                The platform serves different users without treating them as disconnected
                products. Students move through stories, missions, games, rewards, and
                progression. Educators manage participants, activities, assessments, and
                reporting. Families connect to progress and supporting experiences, while
                administrative tools manage the programs, content, and data underneath them.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                The architecture was designed so those experiences could share identity,
                content, progress, permissions, and behavioral data across the same product
                ecosystem.
              </p>
            </div>

            <div className="case-visual-lang-layout case-challenge-sticky-layout case-caiden-ecosystem-stack-section">
              <aside
                className="case-visual-lang-sticky case-caiden-ecosystem-stack-aside"
                aria-labelledby="courage-ecosystem-heading"
              >
                <p className="case-caiden-ecosystem-stack-eyebrow">
                  Ecosystem Architecture
                </p>
                <h3
                  id="courage-ecosystem-heading"
                  className="case-visual-lang-sticky-title case-caiden-ecosystem-stack-title"
                >
                  The Courage Ecosystem
                </h3>
                <ul className="case-caiden-ecosystem-stack-list">
                  {courageEcosystemBullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </aside>
              <div
                className="case-visual-lang-stills case-caiden-ecosystem-stack-stills"
                role="list"
              >
                {ecosystemMaps.map((map) => (
                  <figure
                    key={map.src}
                    className="case-caiden-ecosystem-stack-card"
                    role="listitem"
                  >
                    <div className="case-caiden-ecosystem-stack-frame">
                      <img
                        src={map.src}
                        alt={map.alt}
                        loading="lazy"
                        decoding="async"
                        width={1600}
                        height={1000}
                      />
                      <span
                        className="case-caiden-ecosystem-stack-glow"
                        aria-hidden
                      />
                    </div>
                    <figcaption className="case-caiden-ecosystem-stack-caption">
                      <span
                        className="case-caiden-ecosystem-stack-meta"
                        aria-hidden
                      >
                        <span>{map.meta}</span>
                        <span>{map.descriptor}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full-bleed branding banner — below The Courage Ecosystem / Franchise Ecosystem Vision */}
        <figure className="case-caiden-banner-separator" aria-hidden="true">
          <img
            src={BRANDING_BANNER}
            alt="Caiden's Courage branding banner — Find Your Flame franchise campaign"
            loading="lazy"
            decoding="async"
            width={2880}
            height={1200}
          />
        </figure>

        {/* 4 — Creative Strategy */}
        <section
          className="case-section section-spacing"
          aria-labelledby="strategy-heading"
        >
          <div className={styles.inner}>
            <h2
              id="strategy-heading"
              className="case-heading display-heading display-heading-xl"
            >
              Creative Strategy
            </h2>
            <p className="case-caiden-statement case-caiden-statement--light">
              Focus Is Your Flame.
            </p>
            <div className="case-body case-section-prose">
              <p>
                Creative direction became part of the interaction model, not a layer applied
                after the product was built. The core positioning platform reframed focus as
                confidence, identity, and inner power rather than discipline.
              </p>
              <p>
                Instead of asking kids to &ldquo;pay attention,&rdquo; the brand invited them to
                discover the power already inside them.
              </p>
            </div>

            <div className="case-grid case-grid--3 case-caiden-audience-grid">
              {audienceSegments.map((segment) => (
                <article
                  key={segment.title}
                  className="case-card case-card--light case-caiden-audience-card"
                >
                  <p className="case-caiden-audience-label">Audience</p>
                  <h3 className="case-card-title">{segment.title}</h3>
                  <p className="case-card-body">{segment.body}</p>
                </article>
              ))}
            </div>

            <p className="case-caiden-statement case-caiden-emotional-outcome">
              Kids don&apos;t just consume the story. They become participants in the world.
            </p>

            <div
              className="case-caiden-participation"
              aria-label="Participation system reels"
            >
              <p className="case-caiden-participation-eyebrow">
                Participation System
              </p>
              <p className="case-caiden-participation-lead">
                Interaction moments designed for participation, identity, and
                emotional engagement.
              </p>
              <div className="case-caiden-participation-grid" role="list">
                {participationSlides.map((slide, index) => (
                  <figure
                    key={slide.src}
                    className={`case-caiden-participation-card case-caiden-participation-card--${
                      index < 3 ? "top" : "bottom"
                    } case-caiden-participation-card--${index + 1}`}
                    role="listitem"
                  >
                    <div className="case-caiden-participation-frame">
                      <CaseCinematicVideo
                        src={slide.src}
                        ariaLabel={slide.ariaLabel}
                        className="case-caiden-participation-video"
                      />
                      <span className="case-caiden-participation-glow" aria-hidden />
                    </div>
                    <figcaption className="case-caiden-participation-caption">
                      <span className="case-caiden-participation-meta" aria-hidden>
                        <span>{slide.meta}</span>
                        <span>{slide.label}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 — Experience Design */}
        <section
          className="case-section case-section-dark section-spacing case-caiden-section-experience"
          aria-labelledby="experience-heading"
        >
          <div className={styles.inner}>
            <h2
              id="experience-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Experience Design
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The experience was designed around behavior, state, and progression — not just
              screens.
            </p>
            <p className="case-body case-section-lead case-section-lead--muted">
              Each interaction needed to understand where a learner was in the journey, what
              they had completed, what they had earned, and what should happen next. That
              required the UX, content model, progression system, and underlying data to work
              together.
            </p>

            <div className="case-grid case-grid--3 case-caiden-experience-grid">
              {experienceCards.map((card, index) => (
                <article key={card.title} className="case-card case-caiden-experience-card">
                  <span className="case-caiden-module-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="case-card-title">{card.title}</h3>
                  <p className="case-card-body">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="case-body case-section-prose case-caiden-subsection-pad">
              <p className="case-caiden-ecosystem-stack-eyebrow">Interaction Systems</p>
              <h3
                id="designing-product-remembers-heading"
                className="case-heading display-heading display-heading--light display-heading-md"
              >
                Designing a Product That Remembers
              </h3>
              <p className="case-section-lead case-section-lead--muted">
                Student identity, mission completion, Focus Coins, badges, B-4 selection,
                assessment state, and current adventures persist across the experience.
                Designing those states forced the product thinking beyond individual screens
                and into the behavior of the system itself.
              </p>
            </div>

            <figure className="case-caiden-media-figure case-caiden-interactive-media">
              <CaseCinematicVideo
                src={INTERACTIVE_VIDEO}
                poster={OVERVIEW_IMAGE}
                ariaLabel="Caiden's Courage interactive SEL experience gameplay"
                className="case-caiden-interactive-video"
              />
              <figcaption className="case-visual-caption case-visual-caption--dark">
                Interactive Experience · SEL gameplay
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 6 — Content Engine */}
        <section
          className="case-section section-spacing"
          aria-labelledby="content-engine-heading"
        >
          <div className={styles.inner}>
            <h2
              id="content-engine-heading"
              className="case-heading display-heading display-heading-xl"
            >
              Cross-Platform Content Engine
            </h2>
            <p className="case-body case-section-lead">
              The content system was designed so one story idea could become multiple
              connected product experiences instead of isolated pieces of media. A
              narrative moment could extend into an interactive story, game mechanic,
              mission, educator activity, animation, or family touchpoint while remaining
              part of the same ecosystem.
            </p>
            <figure className="case-caiden-media-figure case-caiden-content-engine-figure">
              <img
                src={CONTENT_ENGINE_IMAGE}
                alt="Caiden's Courage cross-platform content engine — social, video, classroom, digital, and community channels"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
            </figure>

            <div className="case-caiden-pillars" role="list" aria-label="Content pillars">
              {contentPillars.map((pillar) => (
                <span key={pillar} role="listitem" className="case-chip case-caiden-pillar-chip">
                  {pillar}
                </span>
              ))}
            </div>

            <p className="case-body case-section-lead">
              The goal was to make the audience feel like they were part of the world — not just
              watching it.
            </p>
          </div>
        </section>

        {/* 7 — 365 Campaign System */}
        <section
          className="case-section case-section-dark section-spacing campaign-system-section"
          aria-labelledby="campaign-heading"
        >
          <p className="campaign-system-bg-word" aria-hidden>
            Find Your Flame
          </p>
          <div className={`${styles.inner} campaign-system-inner`}>
            <h2
              id="campaign-heading"
              className="case-heading display-heading display-heading--light display-heading-xl campaign-system-heading"
            >
              365 Campaign System
            </h2>

            <div className="campaign-editorial-grid">
              <article className="campaign-identity">
                <p className="campaign-kicker">Engagement Architecture</p>
                <h3 className="campaign-title">Find Your Flame</h3>
                <p className="campaign-primary-line">Focus Is Your Flame.</p>
                <p className="campaign-supporting-line">Where Focus Becomes Power.</p>
                <p className="campaign-body">
                  The same product thinking extended into an ongoing engagement
                  architecture. Content, social touchpoints, community participation,
                  interactive experiences, partnerships, and physical products were designed
                  to move audiences back into the larger ecosystem rather than operate as
                  isolated campaigns.
                </p>
                <blockquote className="campaign-pullquote">
                  <p>
                    &ldquo;Kids don&apos;t just consume the story. They become participants in the
                    world.&rdquo;
                  </p>
                </blockquote>
              </article>

              <div
                className="campaign-ecosystem-map"
                aria-label="Campaign ecosystem: Story through Licensing"
              >
                <div className="campaign-map-flow">
                  <CampaignMapNode title="Story" className="campaign-map-node--story" />
                  <span
                    className="campaign-map-connector campaign-map-connector--vertical"
                    aria-hidden
                  />
                  <div className="campaign-map-branch">
                    <CampaignMapNode title="Social" />
                    <span
                      className="campaign-map-connector campaign-map-connector--horizontal"
                      aria-hidden
                    />
                    <CampaignMapNode title="Community" />
                  </div>
                  <span
                    className="campaign-map-connector campaign-map-connector--vertical"
                    aria-hidden
                  />
                  <CampaignMapNode title="Interactive" />
                  <span
                    className="campaign-map-connector campaign-map-connector--vertical"
                    aria-hidden
                  />
                  <div className="campaign-map-branch">
                    <CampaignMapNode title="Merch" />
                    <span
                      className="campaign-map-connector campaign-map-connector--horizontal"
                      aria-hidden
                    />
                    <CampaignMapNode title="Licensing" />
                  </div>
                </div>
              </div>
            </div>

            <div className="campaign-label-strip" aria-label="Campaign activation channels">
              <div className="campaign-label-strip-row campaign-label-strip-row--offset">
                {campaignChips.slice(0, 4).map((chip) => (
                  <span key={chip} className="campaign-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="campaign-label-strip-row">
                {campaignChips.slice(4).map((chip) => (
                  <span key={chip} className="campaign-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="activation-editorial" aria-labelledby="activation-cadence-heading">
              <p id="activation-cadence-heading" className="activation-label">
                Year-Round Activation Cadence
              </p>
              <div className="activation-grid">
                {activationCadence.map((item) => (
                  <article key={item.quarter} className="activation-card">
                    <p className="activation-micro-label">{item.microLabel}</p>
                    <h3 className="activation-heading">
                      <span className="activation-quarter-dot" aria-hidden />
                      {item.quarter} — {item.title}
                    </h3>
                    <p className="activation-copy">{item.focus}</p>
                    <ul
                      className="activation-tags"
                      aria-label={`${item.title} activation tags`}
                    >
                      {item.tags.map((tag) => (
                        <li key={tag}>
                          <span className="activation-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8 — Visual + Creative Direction */}
        <section
          className="case-section section-spacing case-caiden-section-visual"
          aria-labelledby="visual-heading"
        >
          <div className={styles.inner}>
            <h2
              id="visual-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Visual + Creative Direction
            </h2>
            <div className="case-body case-section-prose">
              <p>Technology only works when people want to enter the experience.</p>
              <p>
                The visual system, animation language, characters, motion, interfaces, and
                physical touchpoints were designed as one creative system so the technology
                never felt separate from the world it supported.
              </p>
              <p>
                The visual language blended cinematic storytelling, anime-inspired framing,
                emotional realism, modern youth culture, and premium entertainment branding —
                making the product feel closer to a premium streaming IP or interactive world
                than traditional children&apos;s publishing.
              </p>
            </div>

            <ul
              className="case-tags case-caiden-visual-tags"
              aria-label="Visual direction pillars"
            >
              {visualPillars.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>

            <figure className="case-caiden-media-figure case-caiden-media-figure--wide">
              <img
                src={VISUAL_CREATIVE_DIRECTION}
                alt="Caiden's Courage visual and creative direction — cinematic storytelling, character design, and brand system"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
            </figure>
          </div>
        </section>

        {/* 9 — Brand Language */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="merch-heading"
        >
          <div className={styles.inner}>
            <h2
              id="merch-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Brand Language
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The same system thinking extended into the visual and physical language of the
              product, creating consistency across interfaces, publishing, merchandise,
              animation, and real-world experiences.
            </p>
            <div className="case-caiden-slogans">
              {sloganChips.map((slogan) => (
                <span key={slogan} className="slogan-chip">
                  {slogan}
                </span>
              ))}
            </div>
            <p className="case-body case-section-lead case-section-lead--muted">
              The goal was to create a brand language kids could emotionally identify with — not
              just consume.
            </p>
            <figure className="case-caiden-media-figure case-caiden-media-figure--wide case-caiden-merch-mockup">
              <img
                src={MERCH_MOCKUP}
                alt="Caiden's Courage merchandise and culture mockups — campaign language as wearable identity"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
            </figure>
          </div>
        </section>

        {/* 10 — Participation Culture */}
        <section
          className="case-section section-spacing"
          aria-labelledby="community-heading"
        >
          <div className={styles.inner}>
            <h2
              id="community-heading"
              className="case-heading display-heading display-heading-xl"
            >
              Participation Culture
            </h2>
            <p className="case-caiden-hashtag">#FindYourFlame</p>
            <p className="case-body case-section-lead">
              The product was designed to move participation beyond the screen. Community
              prompts, creative activities, physical artifacts, and shared experiences gave
              users ways to contribute back to the world rather than only consume it.
            </p>
            <figure className="case-caiden-media-figure case-caiden-media-figure--wide case-caiden-community-strategy-figure">
              <img
                src={COMMUNITY_STRATEGY_IMAGE}
                alt="Caiden's Courage participation culture — #FindYourFlame and audience contribution"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
            </figure>
          </div>
        </section>

        {/* Data + Iteration */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="data-iteration-heading"
        >
          <div className={styles.inner}>
            <p className="case-caiden-ecosystem-stack-eyebrow">Data + Iteration</p>
            <h2
              id="data-iteration-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Closing the Loop With Real Behavior
            </h2>
            <div className="case-body case-section-prose">
              <p className="case-section-lead case-section-lead--muted">
                Shipping the platform wasn&apos;t the end of the design process. I built
                SQL-based reporting and analytics workflows to understand how students and
                educators were actually using the experience — including participation,
                mission completion, progression, rewards, and assessment activity.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                Those signals helped identify friction, validate interaction decisions, and
                inform what the product needed next.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Validation */}
        <section
          className="case-section section-spacing"
          aria-labelledby="real-world-validation-heading"
        >
          <div className={styles.inner}>
            <p className="platform-systems-label">Real-World Validation</p>
            <h2
              id="real-world-validation-heading"
              className="case-heading display-heading display-heading-xl"
            >
              From Working Prototype to Real Users
            </h2>
            <div className="case-body case-section-prose">
              <p>
                The system moved beyond prototype into a live learning environment. During
                the Summer 2026 pilot, students interacted with the story, missions, rewards,
                and supporting learning experiences while educators used the program tools
                around them.
              </p>
              <p>
                That real-world usage created the feedback loop I wanted from the beginning:
                build, observe, learn, and improve.
              </p>
              <p className="platform-systems-label">
                Blue Ribbon Results Academy · Summer 2026 Pilot
              </p>
            </div>
          </div>
        </section>

        {/* 11 — My Role */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="role-heading"
        >
          <div className={styles.inner}>
            <h2
              id="role-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              My Role: Director, Creative Technology
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              I directed the intersection of product strategy, experience design, creative
              systems, and technical prototyping — moving between vision, architecture,
              working software, creative direction, data, and real-world implementation.
            </p>
            <div className="case-caiden-role-groups" aria-label="Role capabilities">
              {roleGroups.map((group) => (
                <div key={group.label} className="case-caiden-role-group">
                  <p className="case-caiden-ecosystem-stack-eyebrow">{group.label}</p>
                  <ul className="case-role-tags" aria-label={`${group.label} capabilities`}>
                    {group.tags.map((tag) => (
                      <li key={tag} className="case-role-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12 — Outcomes */}
        <section
          className="case-section section-spacing"
          aria-labelledby="outcomes-heading"
        >
          <div className={styles.inner}>
            <h2
              id="outcomes-heading"
              className="case-heading display-heading display-heading-xl"
            >
              Outcomes
            </h2>

            <div className="case-outcome-grid">
              {outcomeCards.map((outcome) => (
                <article
                  key={outcome.category}
                  className="case-card case-card--light case-outcome-card"
                >
                  <span className="case-outcome-card-index">{outcome.category}</span>
                  <h3 className="case-card-title">{outcome.title}</h3>
                  <p className="case-card-body">{outcome.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 13 — Creative Takeaway */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="takeaway-heading"
        >
          <div className={styles.inner}>
            <h2
              id="takeaway-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Creative Takeaway
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The most interesting creative technology doesn&apos;t start with technology. It
              starts with a human experience worth building — then uses product thinking,
              design, code, AI, data, and storytelling to make that experience real.
            </p>
            <p className="case-caiden-statement case-caiden-final-statement">
              I didn&apos;t design an app.
              <br />
              I directed a system.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="case-cta case-caiden-cta section-spacing"
          aria-labelledby="caiden-cta-heading"
        >
          <div className={`${styles.inner} case-caiden-cta-inner`}>
            <h2
              id="caiden-cta-heading"
              className="case-heading display-heading display-heading-xl case-caiden-cta-heading"
            >
              Explore the world of Caiden&apos;s Courage
            </h2>
            <p className="case-caiden-cta-subbody">
              Explore the connected story, product, and interactive experiences behind the
              system.
            </p>
            <div className="case-caiden-cta-actions">
              <a
                href="https://caidenvale.com"
                className="case-caiden-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Caiden&apos;s Courage
              </a>
              <Link href="/#work" className="case-caiden-cta-secondary">
                Back to Work
              </Link>
              <Link href="/#contact" className="case-caiden-cta-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
