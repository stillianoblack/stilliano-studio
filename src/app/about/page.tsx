import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import { TrackRecordSticky, type TrackRecordEntry } from "./TrackRecordSticky";

export const metadata: Metadata = {
  title: "Tarus D. Stills — Creative Director for Interactive Experiences | Stilliano Studios",
  description:
    "Creative leader at the intersection of product, storytelling, audience engagement, entertainment, education, retail, and emerging technology.",
  openGraph: {
    title: "Tarus D. Stills — Creative Director for Interactive Experiences | Stilliano Studios",
    description:
      "Building audience experiences across product, entertainment, education, retail, and emerging technology.",
  },
};

const HERO_IMAGE = "/images/Heros/tarus_hero_2.webp";
const HERO_IMAGE_MOBILE = "/images/Heros/tarus_hero_mobile.webp";

const helpItems = [
  "Translate complex platform capabilities into customer-facing value",
  "Bridge product, engineering, GTM, and design execution",
  "Build scalable engagement and operational systems",
  "Accelerate 0→1 MVP and roadmap delivery",
  "Prototype and validate workflows using AI-native tooling",
  "Align product launches with adoption and operational readiness",
];

/** Highlighted capability block index (0-based) on the editorial board. */
const CAPABILITIES_HIGHLIGHT_INDEX = 2;

const experienceEntries: TrackRecordEntry[] = [
  {
    name: "Genius Sports",
    titleLines: ["Genius", "Sports"],
    body:
      "Built fan engagement ecosystems across Social streaming, sports data, and interactive experiences.",
    image: "/images/Heros/geniussports_hero.webp",
    meta: "Product Systems • Streaming • Engagement",
    href: "https://www.geniussports.com/",
  },
  {
    name: "HBCUgo Sports",
    body:
      "Helped scale OTT/CTV platform ecosystems across Roku, Plex, Apple TV, and web.",
    image: "/images/Heros/HBCUgoCTV_Hero.webp",
    meta: "OTT • CTV • Platform Scale",
    href: "/work/hbcugo",
  },
  {
    name: "Cutclass",
    body:
      "Product systems and digital platform strategy for creator-driven learning experiences.",
    image: "/images/Portfolio%20Cards/cutclass_card_stilliano.webp",
    meta: "Streaming • Film Education • Platform",
    href: "https://cutclass.io/",
  },
  {
    name: "Caiden\u2019s Courage",
    body:
      "Developing a cross-platform SEL + interactive storytelling ecosystem for kids.",
    image: "/images/Heros/Caidencourage_Hero.webp",
    meta: "Story IP • SEL • Interactive",
    href: "/work/caidens-courage",
  },
];

const engagementPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Alignment",
    window: "Week 1–2",
    items: [
      "product + GTM workflow audit",
      "roadmap analysis",
      "operational bottlenecks",
      "launch readiness evaluation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Systems & Execution",
    window: "Week 3–8",
    items: [
      "GTM/product alignment",
      "workflow systems",
      "adoption optimization",
      "AI-assisted prototyping",
      "product/design acceleration",
    ],
  },
  {
    phase: "Phase 3",
    title: "Launch & Optimization",
    window: "Week 9–12",
    items: [
      "rollout support",
      "KPI monitoring",
      "engagement optimization",
      "operational refinement",
      "future-state recommendations",
    ],
  },
];

const coreStrengths = [
  "Creative Direction",
  "Product Strategy",
  "Audience Engagement",
  "Interactive Experiences",
  "Brand Systems",
  "Experience Design",
  "Storytelling",
  "Gamification",
  "Emerging Technology",
  "Cross-Functional Leadership",
  "Go-To-Market Thinking",
  "Platform Design",
];

export default function AboutPage() {
  return (
    <div className="case-page case-page--about">
      <main>
        <section className="case-hero" aria-label="Tarus D. Stills">
          <div className={`${styles.inner} about-topbar`}>
            <Link href="/" className="case-back">
              ← Back Home
            </Link>
          </div>
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={HERO_IMAGE_MOBILE} />
            <img
              src={HERO_IMAGE}
              alt="Tarus D. Stills"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="case-hero-overlay about-hero-overlay" aria-hidden />
          <div className={`${styles.inner} case-hero-content about-hero-content`}>
            <div className="about-hero-copy">
              <p className="case-hero-eyebrow about-hero-eyebrow">TARUS D. STILLS</p>
              <h1 className="case-hero-title about-hero-title">
                <span className="about-hero-title-line">Creative Director</span>
                <span className="about-hero-title-line">for Interactive Experiences</span>
              </h1>
              <p className="case-hero-subtitle about-hero-subline">
                Building audience experiences across product, entertainment, education,
                retail, and emerging technology.
              </p>
              <p className="about-hero-proof">
                Cartoon Network &bull; PBS Kids &bull; DC Comics &bull; Amira Learning
                &bull; HBCUGo &bull; State Farm
              </p>
              <Link href="/#contact" className="about-hero-cta">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing about-section capabilities-editorial"
          aria-labelledby="capabilities-heading"
        >
          <div className={styles.inner}>
            <div className="capabilities-editorial-layout">
              <div className="capabilities-intro">
                <p className="capabilities-eyebrow">Capabilities</p>
                <h2 id="capabilities-heading" className="capabilities-heading">
                  The Value of Product Systems
                  <sup className="capabilities-heading-mark" aria-hidden>
                    ™
                  </sup>
                </h2>
                <p className="capabilities-copy">
                  Every strong product lives in the space between vision, execution, and
                  adoption.
                </p>
                <Link href="/#contact" className="capabilities-cta">
                  Start a Conversation
                </Link>
              </div>
              <ol className="capabilities-board" aria-label="Product systems capabilities">
                {helpItems.map((item, index) => (
                  <li
                    key={item}
                    className={`capability-cell${
                      index === CAPABILITIES_HIGHLIGHT_INDEX
                        ? " capability-cell-highlight"
                        : ""
                    }`}
                  >
                    <span className="capability-number" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="capability-text">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing about-section about-stilliano-editorial"
          aria-labelledby="stilliano-heading"
        >
          <div className={`${styles.inner} about-stilliano-inner`}>
            <p className="about-section-kicker">Who is Stilliano</p>
            <h2 id="stilliano-heading" className="about-stilliano-heading">
              Product. Story. Systems.
            </h2>
            <div className="about-stilliano-body">
              <p>
                I build experiences that sit between product, story, and culture.
              </p>
              <p>
                Over the last decade I&apos;ve led work across sports streaming,
                children&apos;s media, AI learning platforms, retail technology,
                interactive installations, and original IP development.
              </p>
              <p>
                My work combines product thinking, audience engagement, creative
                direction, and emerging technology to help ideas become systems people
                actually return to.
              </p>
              <p>
                Whether designing fan engagement ecosystems, interactive learning
                platforms, retail experiences, or story-driven worlds, I focus on
                creating experiences that connect emotionally and scale strategically.
              </p>
              <p className="about-stilliano-closing">
                Design is the tool. Engagement is the outcome.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing track-record-section"
          aria-labelledby="track-record-heading"
        >
          <div className={styles.inner}>
            <TrackRecordSticky entries={experienceEntries} />
          </div>
        </section>

        <section
          className="case-section section-spacing about-section about-section--engagement"
          aria-labelledby="about-engagement-heading"
        >
          <div className={`${styles.inner} about-engagement-editorial`}>
            <div className="about-engagement-intro">
              <p className="about-section-kicker">Engagement Model</p>
              <h2
                id="about-engagement-heading"
                className="case-heading display-heading display-heading-xl"
              >
                Example Engagement Structure
              </h2>
              <p className="case-body case-section-lead about-engagement-lead">
                A strategic systems arc — discovery through launch — designed for clarity,
                velocity, and measurable adoption.
              </p>
            </div>
            <ol className="about-engagement-timeline">
              {engagementPhases.map((phase) => (
                <li key={phase.phase} className="about-engagement-phase">
                  <header className="about-engagement-phase-header">
                    <span className="about-engagement-phase-label">{phase.phase}</span>
                    <h3 className="about-engagement-phase-title">
                      {phase.title}
                      <span className="about-engagement-phase-window">
                        ({phase.window})
                      </span>
                    </h3>
                  </header>
                  <ul className="about-engagement-phase-list">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing about-section about-section--strengths"
          aria-labelledby="about-strengths-heading"
        >
          <div className={styles.inner}>
            <p className="about-section-kicker about-section-kicker--light">Focus Areas</p>
            <h2
              id="about-strengths-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Core Strengths
            </h2>
            <ul className="about-strengths-grid" aria-label="Core strengths">
              {coreStrengths.map((strength) => (
                <li key={strength} className="about-strength-pill">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="case-cta about-cta section-spacing"
          aria-labelledby="about-cta-heading"
        >
          <div className={styles.inner}>
            <div className="about-cta-inner">
            <h2
              id="about-cta-heading"
              className="case-heading display-heading display-heading-xl about-cta-heading"
            >
              <span className="about-cta-heading-line">
                Let&apos;s build experiences people return to.
              </span>
            </h2>
            <p className="about-cta-body">
              From audience platforms and interactive products to brand ecosystems and
              original IP, I help organizations connect strategy, story, and execution.
            </p>
            <div className="about-cta-actions">
              <Link href="/#contact" className="about-hero-cta">
                Get in Touch
              </Link>
              <Link href="/#work" className="about-cta-secondary">
                View Selected Work
              </Link>
            </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
