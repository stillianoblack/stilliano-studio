import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import {
  montageCmsCreatorExperience,
  montageCmsImages,
  montageCmsImpactStatements,
  montageCmsInsights,
  montageCmsLeadershipItems,
  montageCmsProcessSteps,
  montageCmsRoleProcessImages,
  montageCmsVideos,
  montageCmsViewerExperience,
} from "@/data/montagecms-case-study";
import { CaseStudyScrollVideo } from "@/app/CaseStudyScrollVideo";
import { ExecutiveSummary } from "@/app/ExecutiveSummary";

export const metadata: Metadata = {
  title:
    "MontageCMS — Streaming Product Strategy & Creative Direction | Stilliano Black",
  description:
    "A zero-to-one case study exploring the product strategy, creative direction, systems design, and streaming experiences behind MontageCMS.",
  openGraph: {
    title: "MontageCMS: Building an Independent Streaming Ecosystem",
    description:
      "From product vision and creator research to viewer experience and platform architecture, see how MontageCMS was developed from zero to one.",
  },
};

const HERO_DESKTOP = montageCmsImages.hero;
const HERO_MOBILE = montageCmsImages.hero;

export default function MontageCmsCaseStudyPage() {
  return (
    <div className="case-page case-page--montagecms">
      <main>
        <section className="case-hero" aria-label="MontageCMS case study">
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={HERO_MOBILE} />
            <img
              src={HERO_DESKTOP}
              alt="Montage.tv streaming interface — featured content, discovery rows, and branded home experience"
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: "center 38%" }}
            />
          </picture>
          <div className="case-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-hero-eyebrow">FROM ZERO TO ONE</p>
            <h1 className="case-hero-title display-heading display-heading-xl">
              MontageCMS
            </h1>
            <p className="case-hero-subtitle">
              I designed, coded, and shaped the technical foundation for a zero-to-one
              streaming CMS — connecting creator tools, viewer experience, and platform
              architecture into one working system.
            </p>
            <Link href="/#work" className="case-hero-back">
              Back to Work →
            </Link>
          </div>
        </section>

        <ExecutiveSummary slug="montagecms" />

        <section
          className="case-section case-page-overview-band section-spacing"
          aria-labelledby="montage-overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-overview-heading"
              className="display-heading display-heading-xl case-overview-heading"
            >
              Building the platform behind independent streaming.
            </h2>
            <div className="case-overview-media-block">
              <CaseStudyScrollVideo
                src={montageCmsVideos.overviewEndCredits}
                ariaLabel="MontageCMS streaming experience"
                summary="End-credits sequence illustrating the cinematic viewer experience MontageCMS was built to support."
                showCaption={false}
              />
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-how-built-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-how-built-heading"
              className="display-heading display-heading-md"
            >
              How It Was Built
            </h2>
            <div className="case-body case-section-prose">
              <p>
                I worked closely with MontageCMS&apos;s CTO throughout, taking an active
                hands-on role in prototyping — moving quickly from architecture conversations
                into working React/TypeScript builds, using Supabase for data and auth. Rather
                than handing off finished designs and waiting, I prototyped directly alongside
                engineering, testing creator-tool flows and platform structure in code before
                they were fully specified — shortening the distance between a design decision
                and something the team could actually see working.
              </p>
            </div>
            <div className="case-grid case-grid--2">
              <article className="case-card case-card--light">
                <h3 className="case-card-title">Stack</h3>
                <p className="case-card-body">
                  React, TypeScript, Supabase, APIs
                </p>
              </article>
              <article className="case-card case-card--light">
                <h3 className="case-card-title">Partnership</h3>
                <p className="case-card-body">
                  Prototyped directly with the CTO on platform architecture and creator
                  tooling
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-technical-problem-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-technical-problem-heading"
              className="display-heading display-heading-md"
            >
              A Technical Problem Worth Solving
            </h2>
            <div className="case-body case-section-prose">
              <p>
                As we grew toward partnerships with film schools, one of the harder problems
                we worked through together was permissions logic — separating viewership from
                ownership as student filmmakers graduated. Working directly with the CTO, I
                helped shape the permission model that governed what happened to a student&apos;s
                work and access after graduation, balancing continued visibility for their
                portfolio against the platform&apos;s ownership and licensing structure.
              </p>
            </div>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={montageCmsImages.databaseUml}
                alt="MontageCMS database UML diagram showing users, teams, and permissions relationships"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-opportunity-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-opportunity-heading"
              className="display-heading display-heading-md"
            >
              The Opportunity
            </h2>
            <div className="case-body case-section-prose">
              <p>
                Independent creators were gaining access to the tools required to produce
                professional entertainment, but distribution remained fragmented. Existing
                platforms offered reach without ownership, while traditional streaming
                technology was expensive and difficult to manage.
              </p>
              <p>
                MontageCMS was conceived as an integrated platform that would allow creators
                and media brands to manage content, launch branded streaming destinations,
                understand audience behavior, and develop new revenue opportunities from one
                connected system.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="montage-role-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-role-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              More Than a Design Project
            </h2>
            <div className="case-visual-lang-layout case-montage-role-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="montage-role-heading"
              >
                <div className="case-visual-lang-sticky-copy">
                  <p className="case-visual-lang-sticky-text">
                    I led MontageCMS from initial concept through product definition,
                    customer discovery, experience architecture, interface design,
                    prototyping, brand development, and early go-to-market planning.
                  </p>
                  <p className="case-visual-lang-sticky-text">
                    My responsibility was not simply to design the interface. It was to
                    determine what the product should become, whom it should serve, how its
                    systems should work together, and how the experience could create value
                    for creators, viewers, and business partners.
                  </p>
                </div>
                <ul
                  className="case-montage-leadership-list case-montage-leadership-list--sticky"
                  aria-label="Leadership responsibilities"
                >
                  {montageCmsLeadershipItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {montageCmsRoleProcessImages.map((item) => (
                  <figure
                    key={item.src}
                    className="case-visual-lang-still case-montage-still--dark"
                    role="listitem"
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-research-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-research-heading"
              className="display-heading display-heading-md"
            >
              Understanding the Creator Economy Before Building
            </h2>
            <p className="case-body case-section-lead">
              The product strategy was grounded in conversations with independent
              filmmakers, entertainment entrepreneurs, and creators navigating the
              challenges of distribution. Research revealed recurring needs around ownership,
              discoverability, monetization, audience data, and technical accessibility.
            </p>
            <div className="case-grid case-grid--4">
              {montageCmsInsights.map((insight) => (
                <article key={insight.title} className="case-card case-card--light">
                  <h3 className="case-card-title">{insight.title}</h3>
                  <p className="case-card-body">{insight.body}</p>
                </article>
              ))}
            </div>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={montageCmsImages.creatorWorkspace}
                alt="MontageCMS product strategy and creator workflow research session"
                loading="lazy"
                decoding="async"
                width={2400}
                height={1600}
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">Research &amp; strategy</span>
                Grounding product direction in creator and market conversations
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="montage-vision-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-vision-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              One Platform, Two Connected Experiences
            </h2>
            <div className="case-visual-lang-layout case-montage-platform-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="montage-vision-heading"
              >
                <p className="case-visual-lang-sticky-text">
                  MontageCMS was designed as both a creator operating system and a consumer
                  streaming destination. The creator side gave media owners tools to organize
                  content, manage channels, understand performance, and shape their brand. The
                  viewer side translated that content into an immersive entertainment
                  experience across devices.
                </p>
                <div className="case-montage-sticky-experience">
                  <h3 className="case-montage-col-title">Creator Experience</h3>
                  <ul className="case-overview-list case-montage-list">
                    {montageCmsCreatorExperience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-montage-sticky-experience">
                  <h3 className="case-montage-col-title">Viewer Experience</h3>
                  <ul className="case-overview-list case-montage-list">
                    {montageCmsViewerExperience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                <figure
                  className="case-visual-lang-still case-montage-still--dark"
                  role="listitem"
                >
                  <img
                    src={montageCmsImages.creatorBackend}
                    alt="MontageCMS creator backend — catalog, channels, and programming control"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure
                  className="case-visual-lang-still case-montage-still--dark"
                  role="listitem"
                >
                  <img
                    src={montageCmsImages.viewerWatcher}
                    alt="Montage.tv viewer experience — discovery, playback, and branded streaming"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-viewer-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-viewer-heading"
              className="display-heading display-heading-md"
            >
              Designing the Viewer Experience
            </h2>
            <p className="case-body case-section-lead">
              The consumer experience needed to feel cinematic and editorial rather than
              administrative. I developed a streaming interface that supported discovery,
              recommendations, branded channels, and flexible content presentation while
              maintaining a cohesive experience across desktop, mobile, and television.
            </p>
            <div className="case-montage-viewer-grid">
              <figure className="case-montage-artifact-figure">
                <img
                  src={montageCmsImages.movieAdaptive}
                  alt="MontageCMS adaptive movie detail and playback layout"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="case-montage-artifact-figure">
                <img
                  src={montageCmsImages.scheduleRelease}
                  alt="MontageCMS schedule and release planning for viewer-facing content"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="montage-creator-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-creator-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Giving Creators Control Behind the Screen
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The creator dashboard translated complex publishing and distribution tasks into
              approachable workflows. Content owners could organize films and series, build
              programming collections, configure their destination, and monitor audience
              activity without needing to manage the underlying technical infrastructure.
            </p>
            <CaseStudyScrollVideo
              src={montageCmsVideos.creatorEpg}
              ariaLabel="Creator EPG and programming control"
              summary="Electronic program guide and scheduling workflow for creators managing channels and release windows."
            />
          </div>
        </section>

        <section
          className="case-section section-spacing case-montage-systems"
          aria-labelledby="montage-systems-heading"
        >
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-montage-eyebrow">Information Architecture</p>
            <h2
              id="montage-systems-heading"
              className="display-heading display-heading-md"
            >
              Mapping the Platform Before Scaling It
            </h2>
            <p className="case-body case-section-lead">
              Because MontageCMS connected multiple audiences, devices, and business models,
              the architecture had to be established before the interface could scale. I mapped
              the relationship between creator workflows, viewer journeys, content states,
              platform services, and monetization opportunities.
            </p>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={montageCmsImages.architecture}
                alt="MontageCMS information architecture and product process diagram"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">Platform framework</span>
                Architecture connecting creator workflows, viewer journeys, and services
              </figcaption>
            </figure>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={montageCmsImages.userFlow}
                alt="MontageCMS user flows and streaming experience wireframes"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">User flows</span>
                Stream experience structure before high-fidelity execution
              </figcaption>
            </figure>
            <ol className="case-genius-lean-grid case-montage-process-grid" aria-label="Product process">
              {montageCmsProcessSteps.map((step, index) => (
                <li key={step.title} className="case-genius-lean-cell">
                  <span className="case-genius-lean-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="case-genius-lean-title">{step.title}</h3>
                  <p className="case-genius-lean-body">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="montage-monetization-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-monetization-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Designing for a Sustainable Ecosystem
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The platform could not succeed as a viewing interface alone. Its product
              framework explored how creators could build direct audience relationships and
              generate revenue through subscriptions, transactional access, branded channels,
              partnerships, and premium experiences.
            </p>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="montage-impact-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-impact-heading"
              className="display-heading display-heading-md"
            >
              What MontageCMS Demonstrates
            </h2>
            <p className="case-body case-section-lead">
              MontageCMS became a proving ground for the leadership approach I continue to
              use today: start with the audience, connect creative vision to business
              opportunity, make complex systems understandable, and build enough of the
              future that others can see and believe in it.
            </p>
            <div className="case-grid case-grid--4">
              {montageCmsImpactStatements.map((item) => (
                <article key={item.title} className="case-card case-card--light">
                  <h3 className="case-card-title">{item.title}</h3>
                  <p className="case-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="montage-reflection-heading"
        >
          <div className={styles.inner}>
            <h2
              id="montage-reflection-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              The Foundation for What Came Next
            </h2>
            <div className="case-body case-section-prose">
              <p className="case-section-lead case-section-lead--muted">
                MontageCMS changed the way I understood what it takes to build a product
                end-to-end. It showed me that the most meaningful platforms aren&apos;t just
                designed — they&apos;re built, tested, and shipped by someone close enough to
                the code and the system architecture to make the design real, not just
                proposed.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                That lesson has continued through my work in streaming, interactive
                education, sports technology, and the development of original story-driven
                products.
              </p>
            </div>
            <blockquote className="case-challenge-quote">
              <p>
                Customer insight, product strategy, technology, and creative execution are one
                connected system.
              </p>
            </blockquote>
          </div>
        </section>

        <section
          className="case-cta case-cta--editorial section-spacing"
          aria-labelledby="montage-next-heading"
        >
          <div className={styles.inner}>
            <div className="case-cta-editorial-wrap">
              <h2
                id="montage-next-heading"
                className="case-cta-editorial-headline display-heading"
              >
                <span className="case-cta-editorial-line">Next project</span>
              </h2>
              <div className="case-cta-editorial-row">
                <p className="case-cta-editorial-body">
                  Continue to Caiden&apos;s Courage — the flagship world that follows
                  MontageCMS on the homepage — or explore HBCU GO streaming leadership.
                </p>
                <div className="case-cta-editorial-actions">
                  <Link
                    href="/work/caidens-courage"
                    className="case-cta-editorial-button"
                  >
                    View Caiden&apos;s Courage
                  </Link>
                  <Link href="/work/hbcugo" className="case-cta-editorial-link-secondary">
                    HBCU GO Sports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
