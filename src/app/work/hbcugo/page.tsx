import type { Metadata } from "next";
import Link from "next/link";
import { CaseYouTubePlayCard } from "../../CaseYouTubePlayCard";
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

const HERO_IMAGE_DESKTOP = "/images/Heros/HBCUgoCTV_Hero.webp";
const HERO_IMAGE_MOBILE = "/images/Heros/HBCUgo_hero_mobile.webp";

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

const engagementArchitectureBlocks = [
  {
    title: "Mapping the End-to-End Fan Experience",
    body:
      "We mapped the complete fan lifecycle—from awareness and ticket sales to game-day participation and post-game retention—to identify opportunities for deeper engagement.",
    image: "/images/Selected%20Works/HBCUgo/experienceachitecture/audience_loop.webp",
    alt: "HBCUgo audience engagement lifecycle diagram",
  },
  {
    title: "Building a Content Ecosystem for HBCU Culture",
    body:
      "We designed a scalable content architecture that unified live sports, original programming, educational content, campus culture, and community experiences into a single streaming destination.",
    image: "/images/Selected%20Works/HBCUgo/experienceachitecture/content_ecosystem.webp",
    alt: "HBCUgo content ecosystem architecture diagram",
  },
  {
    title: "Reducing Friction Across the 10-Foot Experience",
    body:
      "Authentication is one of the largest drop-off points in connected TV products. We redesigned the onboarding experience to streamline account creation, device activation, and content access across Roku, Apple TV, Fire TV, and web platforms.",
    image: "/images/Selected%20Works/HBCUgo/experienceachitecture/tenfoot_architecture.webp",
    alt: "HBCUgo ten-foot connected TV experience architecture diagram",
  },
] as const;

const platformLifeVideos = [
  {
    videoId: "BfMaqNtKr9g",
    title: "HBCUgo promotional asset — platform awareness",
  },
  {
    videoId: "2GnYo7MQPG8",
    title: "HBCUgo promotional asset — platform discovery",
  },
] as const;

export default function HBCUGoCaseStudyPage() {
  return (
    <div className="case-page case-page--hbcugo">
      <main>
        <section className="case-hero" aria-label="HBCUgo case study">
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={HERO_IMAGE_MOBILE} />
            <img
              src={HERO_IMAGE_DESKTOP}
              alt="HBCUgo hero"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="case-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
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
              How do we create a streaming destination centered around HBCU
              culture?
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
                  src="/videos/Open_WIP_RandF_HBCUGO_071822.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="case-overview-meta">
              <div className="case-overview-col">
                <p className="case-overview-kicker">Services</p>
                <ul className="case-overview-list">
                  <li>Product Strategy</li>
                  <li>Streaming Platform Architecture</li>
                  <li>UX Direction</li>
                  <li>Audience Engagement</li>
                  <li>Content Discovery Systems</li>
                  <li>Cross-Platform Experience Design</li>
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
                <p className="case-overview-kicker">Strategy</p>
                <div className="case-overview-prose">
                  <p>
                    Build an ecosystem connecting live sports, culture, alumni, and
                    community.
                  </p>
                </div>
                <p className="case-overview-kicker case-overview-kicker--spaced">Outcome</p>
                <ul className="case-overview-list">
                  <li>
                    Expanded HBCUgo from a streaming product into a multi-platform
                    audience ecosystem.
                  </li>
                  <li>
                    Increased content discoverability across live sports, culture, and
                    on-demand experiences.
                  </li>
                  <li>
                    Created a scalable framework supporting Plex, Roku, Apple TV, mobile,
                    and web audiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section case-hbcugo-engagement section-spacing"
          aria-labelledby="engagement-heading"
        >
          <div className={styles.inner}>
            <h2
              id="engagement-heading"
              className="display-heading display-heading--light display-heading-xl case-hbcugo-engagement-title"
            >
              Audience Engagement Strategy
            </h2>
            <p className="case-hbcugo-engagement-lead">
              HBCUgo was designed to become the digital home for HBCU sports, culture,
              and community—creating a unified viewing experience across streaming
              platforms while increasing audience engagement and content discovery.
            </p>

            {engagementArchitectureBlocks.map((block) => (
              <article key={block.title} className="case-hbcugo-engagement-block">
                <h3 className="case-hbcugo-engagement-block-title">{block.title}</h3>
                <p className="case-hbcugo-engagement-block-body">{block.body}</p>
                <figure className="case-hbcugo-engagement-figure">
                  <img
                    src={block.image}
                    alt={block.alt}
                    loading="lazy"
                    decoding="async"
                    width={1920}
                    height={1080}
                  />
                </figure>
              </article>
            ))}

            <blockquote className="case-hbcugo-engagement-quote">
              <p className="case-hbcugo-engagement-quote-kicker">Strategic Goal</p>
              <p className="case-hbcugo-engagement-quote-text">
                Create multiple entry points into the HBCU ecosystem while increasing
                content discovery and cross-category engagement.
              </p>
            </blockquote>

            <article className="case-hbcugo-engagement-block case-hbcugo-engagement-block--after-quote">
              <h3 className="case-hbcugo-engagement-block-title">
                Multi-Platform Experience
              </h3>
              <p className="case-hbcugo-engagement-block-body">
                Building the digital home for HBCU culture.
              </p>
              <figure className="case-hbcugo-engagement-figure">
                <img
                  src="/images/Selected%20Works/HBCUgo/experienceachitecture/OTTPlatforms_architecture.webp"
                  alt="HBCUgo multi-platform OTT architecture diagram"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={1080}
                />
              </figure>
            </article>
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
                <div className="case-visual-lang-sticky-copy">
                  <p className="case-visual-lang-sticky-text">
                    Most sports platforms are designed to maximize viewing sessions.
                  </p>
                  <p className="case-visual-lang-sticky-text">
                    HBCUgo needed to build something larger: a digital destination that
                    could deepen cultural connection, increase content discovery, and turn
                    casual viewers into repeat community members.
                  </p>
                  <p className="case-visual-lang-sticky-text case-visual-lang-sticky-text--question">
                    How might we transform a one-time viewer into a returning fan?
                  </p>
                </div>
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

        <section
          className="case-section case-hbcugo-platform-life section-spacing"
          aria-labelledby="platform-life-heading"
        >
          <div className={styles.inner}>
            <h2
              id="platform-life-heading"
              className="display-heading display-heading--light display-heading-xl"
            >
              Bringing the Platform to Life
            </h2>
            <p className="case-hbcugo-platform-life-lead">
              To support adoption across streaming platforms, we developed a suite of
              promotional assets designed to drive awareness, engagement, and platform
              discovery.
            </p>
            <div className="case-hbcugo-platform-life-videos">
              {platformLifeVideos.map((video) => (
                <CaseYouTubePlayCard
                  key={video.videoId}
                  videoId={video.videoId}
                  title={video.title}
                />
              ))}
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
            <figure className="case-outcome-figure">
              <img
                src="/images/Selected%20Works/HBCUgo/experienceachitecture/DeepeningFanEngagement.webp"
                alt="HBCUgo deepening fan engagement architecture diagram"
                loading="lazy"
                decoding="async"
                width={1920}
                height={1080}
              />
            </figure>
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
                Shaping streaming, storytelling, and cultural audience experiences across
                product and brand ecosystems.
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
