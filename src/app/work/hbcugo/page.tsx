import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "HBCUgo Case Study | Stilliano Studio",
  description:
    "A Stilliano Studio case study exploring CTV strategy, live streaming UX, and digital presentation for HBCU sports and culture.",
  openGraph: {
    title: "HBCUgo Case Study | Stilliano Studio",
    description:
      "A Stilliano Studio case study exploring CTV strategy, live streaming UX, and digital presentation for HBCU sports and culture.",
  },
};

const challengeCards = [
  {
    title: "Event Discovery",
    image: "/images/Selected%20Works/HBCUgo/EventDiscovery.webp",
    body:
      "Helping audiences quickly understand what’s live, what’s upcoming, and what matters most.",
  },
  {
    title: "CTV Navigation",
    image: "/images/Selected%20Works/HBCUgo/CTVNavigation.webp",
    body: "Designing for lean-back environments where clarity and speed matter.",
  },
  {
    title: "Cultural Relevance",
    image: "/images/Selected%20Works/HBCUgo/CulturalRelevance.webp",
    body:
      "Balancing sports utility with the energy, pride, and storytelling of HBCU culture.",
  },
];

const approachPillars = [
  {
    title: "Product Experience",
    body: "Viewing flows, interface patterns, and audience journeys.",
  },
  {
    title: "Streaming Strategy",
    body: "CTV-first thinking for live sports and episodic content.",
  },
  {
    title: "Fan Engagement",
    body: "Moments designed to keep audiences connected beyond the game.",
  },
  {
    title: "Sponsor Visibility",
    body:
      "Digital surfaces that support brand partners without disrupting the viewer experience.",
  },
];

const journeySteps = [
  {
    title: "Discover",
    body:
      "Surfacing live matchups, featured events, and pathways into programming that feels immediate and clear.",
  },
  {
    title: "Watch",
    body:
      "A focused viewing layer built for live sports — stable hierarchy, readable states, and room for the moment.",
  },
  {
    title: "Engage",
    body:
      "Touchpoints that extend the broadcast — highlights, context, and reasons to stay through the final whistle.",
  },
  {
    title: "Return",
    body:
      "Rhythms and reminders that bring audiences back for the next game, series, or cultural moment.",
  },
];

const journeySupportStills = [
  {
    src: "/images/Selected%20Works/HBCUgo/HBCUGO_fanengagement_journey.webp",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/Selected%20Works/HBCUgo/HBCU_fanengagement.webp",
    width: 1920,
    height: 1080,
  },
] as const;

const visualLanguageStills = [
  {
    title: "Live Game Experience",
    image: "/images/Selected%20Works/HBCUgo/LiveGameExperience%20.webp",
    width: 1920,
    height: 1080,
  },
  {
    title: "CTV Interface System",
    image: "/images/Selected%20Works/HBCUgo/CTVInterfaceSystem.webp",
    width: 1920,
    height: 1080,
  },
  {
    title: "Event Landing Page",
    image: "/images/Selected%20Works/HBCUgo/EventLandingPage.webp",
    width: 1920,
    height: 1080,
  },
  {
    title: "Fan Engagement Moments",
    image: "/images/Selected%20Works/HBCUgo/FanEngagementMoments.webp",
    width: 1920,
    height: 1080,
  },
] as const;

const outcomeBullets = [
  "Clearer streaming product narrative",
  "Stronger live-event experience structure",
  "More premium platform presentation",
  "Better alignment between content, audience, and brand partners",
];

export default function HBCUGoCaseStudyPage() {
  return (
    <div className="case-page">
      <main>
        <section className="case-hero" aria-label="HBCUgo case study">
          {/* Hero media: HBCUgo reel + poster. Replace `src` / `poster` when final masters are ready. */}
          <video
            className="case-hero-media"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/Portfolio%20Cards/HBCUgoCOmputer_stilliano.webp"
            aria-hidden
          >
            <source src="/videos/Open_WIP_RandF_HBCUGO_071822.mov" type="video/quicktime" />
          </video>
          <div className="case-hero-overlay" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-hero-eyebrow">
              HBCUGO.TV / STREAMING CASE STUDY
            </p>
            <h1 className="case-hero-title display-heading display-heading-xl">
              HBCUgo
            </h1>
            <p className="case-hero-subtitle">
              CTV strategy, live streaming UX, and digital presentation for HBCU
              sports and culture.
            </p>
            <Link href="/#work" className="case-hero-back">
              Back to Work →
            </Link>
          </div>
        </section>

        <section
          className="case-section case-page-overview-band section-spacing"
          aria-labelledby="overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="overview-heading"
              className="display-heading display-heading-xl case-overview-heading"
            >
              Designing a streaming experience for culture, sports, and audience
              engagement.
            </h2>
            <div className="case-overview-video">
              <video
                className="case-overview-video-media"
                autoPlay
                loop
                muted
                playsInline
                aria-label="HBCUgo navigation and interface preview"
              >
                <source
                  src="/videos/HBCUgomaster.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="case-overview-meta">
              <div className="case-overview-col">
                <p className="case-overview-kicker">Services</p>
                <ul className="case-overview-list">
                  <li>Creative Systems Strategy</li>
                  <li>Streaming & CTV Experience</li>
                  <li>Product & Platform Design</li>
                  <li>Brand & Audience Experience</li>
                  <li>Interactive Storytelling</li>
                  <li>Campaign & Content Ecosystems</li>
                </ul>
              </div>
              <div className="case-overview-col">
                <p className="case-overview-kicker">Project</p>
                <p className="case-overview-project">HBCUgo</p>
                <p className="case-overview-project-meta">
                  Product strategy, UX direction, streaming experience · 2023
                </p>
              </div>
              <div className="case-overview-col case-overview-col--wide">
                <p className="case-overview-kicker">Overview</p>
                <div className="case-overview-prose">
                  <p>
                    Stilliano Studio presents HBCUgo as a case study in live streaming,
                    sports storytelling, and culturally-driven digital experiences. The
                    work centered on shaping product experience, CTV strategy, and digital
                    presentation for audiences engaging with HBCU sports, culture, and live
                    content across streaming platforms.
                  </p>
                  <p>
                    The goal was to create a viewing experience that felt clear, premium,
                    and culturally relevant — supporting live game discovery, event
                    presentation, sponsor visibility, and fan engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-challenge section-spacing"
          aria-labelledby="challenge-heading"
        >
          <div className={`${styles.inner} case-challenge-intro`}>
            <h2 id="challenge-heading" className="display-heading">
              Live sports need more than a video player.
            </h2>
            <div className="case-challenge-cards">
              {challengeCards.map((card) => (
                <article key={card.title} className="case-card">
                  <h3 className="case-card-title">{card.title}</h3>
                  <p className="case-card-body">{card.body}</p>
                </article>
              ))}
            </div>
            <p className="case-section-lead case-section-lead--muted">
              Sports and streaming experiences require clear event hierarchy, intuitive
              navigation, strong content presentation, and engagement systems that
              support audiences before, during, and after the game.
            </p>
          </div>

          <div className={styles.inner}>
            <div className="case-visual-lang-layout case-challenge-sticky-layout">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="challenge-sticky-heading"
              >
                <h3
                  id="challenge-sticky-heading"
                  className="case-visual-lang-sticky-title"
                >
                  The Challenge
                </h3>
                <p className="case-visual-lang-sticky-text">
                  For HBCUgo, the challenge was to create a digital experience that
                  respected the cultural importance of the platform while also supporting
                  the practical needs of live streaming.
                </p>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {challengeCards.map((card) => (
                  <figure
                    key={card.title}
                    className="case-visual-lang-still case-challenge-still-figure"
                    role="listitem"
                  >
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                    />
                  </figure>
                ))}
              </div>
            </div>
            <blockquote className="case-challenge-quote">
              <p>
                &ldquo;The Culture Rebuild&trade; transformed HBCUgo into a scalable
                streaming platform that contributed to 29% YoY growth.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        <section
          className="case-section case-section-approach section-spacing"
          aria-labelledby="approach-heading"
        >
          <div className={styles.inner}>
            <h2 id="approach-heading" className="display-heading">
              A product strategy built around audience behavior.
            </h2>
            <p className="case-section-lead">
              The approach connected product thinking, content hierarchy, and brand
              presentation into one streaming experience. Instead of treating the
              platform as a passive destination, the experience was shaped around how
              audiences discover content, follow live events, and stay connected to
              culture.
            </p>
            <div className="case-grid case-grid--4">
              {approachPillars.map((p) => (
                <article key={p.title} className="case-card case-card--light">
                  <h3 className="case-card-title">{p.title}</h3>
                  <p className="case-card-body">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark case-section-journey section-spacing"
          aria-labelledby="experience-heading"
        >
          <div className={styles.inner}>
            <h2
              id="experience-heading"
              className="display-heading display-heading--light"
            >
              From game discovery to post-event engagement.
            </h2>
            <p className="case-section-lead case-section-lead--muted">
              The experience system considered the full audience journey — from
              discovering a live matchup to navigating content, engaging with moments,
              and returning for future programming.
            </p>
            <ol className="case-journey" aria-label="Audience journey">
              {journeySteps.map((step, i) => (
                <li key={step.title} className="case-journey-step">
                  <span className="case-journey-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="case-journey-title">{step.title}</h3>
                    <p className="case-journey-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="case-journey-stills" role="group" aria-label="Fan engagement">
              <div className="case-journey-stills-pair">
                {journeySupportStills.map((still) => (
                  <figure
                    key={still.src}
                    className="case-journey-still case-journey-still--pair"
                  >
                    <img
                      src={still.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={still.width}
                      height={still.height}
                    />
                  </figure>
                ))}
              </div>
              <figure className="case-journey-still case-journey-still--full">
                <img
                  src="/images/Selected%20Works/HBCUgo/HBCUGO_matchup.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={1080}
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="visual-heading">
          <div className={styles.inner}>
            <h2 id="visual-heading" className="display-heading display-heading-xl">
              A premium sports-streaming language.
            </h2>
            <p className="case-section-lead">
              The visual direction should feel cinematic, energetic, and culturally
              connected — using bold imagery, strong contrast, and interface systems
              that can scale across web, mobile, and connected TV.
            </p>
            <div className="case-visual-lang-layout">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="visual-lang-sticky-heading"
              >
                <h3 id="visual-lang-sticky-heading" className="case-visual-lang-sticky-title">
                  Redesign Objective
                </h3>
                <p className="case-visual-lang-sticky-text">
                  We redesigned the product experience, content structure, and platform
                  systems to improve fan engagement, streamline discovery, and create a
                  scalable foundation for future growth across mobile, web, and connected
                  TV.
                </p>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {visualLanguageStills.map((item) => (
                  <figure
                    key={item.title}
                    className="case-visual-lang-still"
                    role="listitem"
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={item.width}
                      height={item.height}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-outcome section-spacing"
          aria-labelledby="outcome-heading"
        >
          <div className={styles.inner}>
            <h2
              id="outcome-heading"
              className="display-heading display-heading-xl"
            >
              Positioned for audience growth and platform clarity.
            </h2>
            <p className="case-section-lead">
              The work helped frame HBCUgo as more than a streaming destination —
              positioning it as a cultural sports platform designed for live moments, fan
              connection, and scalable digital presentation.
            </p>
            <ul className="case-outcome-list">
              {outcomeBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="case-cta case-cta--editorial section-spacing"
          aria-labelledby="case-cta-heading"
        >
          <div className={`${styles.inner} case-cta-editorial-wrap`}>
            <h2
              id="case-cta-heading"
              className="display-heading display-heading-xl case-cta-editorial-headline"
            >
              <span className="case-cta-editorial-line">Building a streaming</span>
              <span className="case-cta-editorial-line">experience that</span>
              <span className="case-cta-editorial-line">needs to feel bigger?</span>
            </h2>
            <div className="case-cta-editorial-rule" aria-hidden />
            <div className="case-cta-editorial-row">
              <p className="case-cta-editorial-body">
                Stilliano Studio partners with startups, streaming platforms, and digital
                brands to shape product experiences, UX systems, and go-to-market ecosystems
                built for engagement and scale.
              </p>
              <Link href="/#contact" className="case-cta-editorial-button">
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
