import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import {
  geniusSportsBetaSteps,
  geniusSportsCrossFunctionalGrid,
  geniusSportsImages,
  geniusSportsImpactStatements,
  geniusSportsLeanEvidenceImages,
  geniusSportsLeanPhases,
  geniusSportsPlatformComponents,
  geniusSportsProofPoints,
  geniusSportsReelsFocus,
  geniusSportsRoleGrid,
  geniusSportsVideos,
  geniusSportsWidgetFocus,
} from "@/data/genius-sports-case-study";
import { CaseStudyScrollVideo } from "@/app/CaseStudyScrollVideo";
import { ExecutiveSummary } from "@/app/ExecutiveSummary";

export const metadata: Metadata = {
  title: "Genius Sports Fan Engagement Platform | Stilliano Black",
  description:
    "A Principal Product Design & Growth Strategist case study exploring Genius Sports' fan-engagement platform, Genius Reels, B2B engagement widgets, partner growth, and a Lean Design Framework for customer-led product development.",
  openGraph: {
    title: "Genius Sports: Building a Connected Fan Engagement OS",
    description:
      "How audience growth, go-to-market strategy, Genius Reels, B2B widgets, and a Lean Design Framework supported a more connected approach to fan engagement.",
  },
};

export default function GeniusSportsCaseStudyPage() {
  return (
    <div className="case-page case-page--genius-sports">
      <main>
        <section className="case-hero" aria-label="Genius Sports case study">
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={geniusSportsImages.heroMobile} />
            <img
              src={geniusSportsImages.hero}
              alt="Genius Sports Fan Engagement OS — platform and partner product experiences"
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: "center 40%" }}
            />
          </picture>
          <div className="case-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-hero-eyebrow">PRINCIPAL PRODUCT DESIGN &amp; GROWTH STRATEGIST</p>
            <h1 className="case-hero-title display-heading display-heading-xl">
              Genius Sports
            </h1>
            <p className="case-hero-subtitle">
              Building a connected platform for modern fan engagement.
            </p>
            <Link href="/#work" className="case-hero-back">
              Back to Work →
            </Link>
          </div>
        </section>

        <ExecutiveSummary slug="genius-sports" />

        <section
          className="case-section case-page-overview-band section-spacing"
          aria-labelledby="genius-overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="genius-overview-heading"
              className="display-heading display-heading-xl case-overview-heading"
            >
              Fan Engagement OS and partner-led product development.
            </h2>
            <div className="case-overview-media-block">
              <CaseStudyScrollVideo
                src={geniusSportsVideos.engageOs}
                poster={geniusSportsImages.platformEcosystem}
                ariaLabel="Fan Engagement OS overview"
                summary="Overview of the connected fan-engagement platform and how capabilities align for partners across leagues, teams, sportsbooks, media, and brands."
                showCaption={false}
              />
            </div>
            <p className="case-body case-section-lead">
              Genius Sports was developing a growing suite of products designed to help
              leagues, teams, sportsbooks, media companies, and brand partners engage fans
              through content, interactive experiences, and digital channels. My role was to
              help these capabilities operate as a more connected Fan Engagement OS while
              creating a stronger way for product teams to learn directly with partners.
            </p>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-platform-opportunity">
          <div className={styles.inner}>
            <h2 id="genius-platform-opportunity" className="display-heading display-heading-md">
              The Platform Opportunity
            </h2>
            <div className="case-body case-section-prose">
              <p>
                Genius Sports had a broad portfolio of fan-engagement capabilities, but the
                larger opportunity was to help those products operate as one coherent
                ecosystem. Partners needed easier ways to create content, configure
                experiences, distribute engagement products, and understand performance across
                their digital channels.
              </p>
              <p>
                My work connected product strategy, customer insight, platform architecture,
                interface design, and partner collaboration across the Fan Engagement OS.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="genius-role-heading"
        >
          <div className={styles.inner}>
            <h2
              id="genius-role-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Working Across Product, Platform, and Partner Experience
            </h2>
            <div className="case-body case-section-prose">
              <p className="case-section-lead case-section-lead--muted">
                As Principal Product Design &amp; Growth Strategist, I led audience engagement
                and growth strategy across Genius Sports&apos; fan-engagement platform —
                including Genius Reels, configurable B2B engagement widgets, and
                partner-facing product experiences — translating fan behavior insights into
                scalable growth outcomes. Partnering across Product, Engineering, and
                Marketing, this work increased fan engagement 50% and improved partner
                adoption 20%. I also created a Lean Design Framework that brought customers
                directly into discovery, validation, and beta development.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                My role extended beyond screen design. I helped identify product gaps, clarify
                how capabilities should connect, gather customer insight, create
                research-informed personas, and establish a more repeatable way for teams to
                build with partners.
              </p>
            </div>
            <div className="case-grid case-grid--4">
              {geniusSportsRoleGrid.map((item) => (
                <article key={item.title} className="case-card">
                  <h3 className="case-card-title">{item.title}</h3>
                  <p className="case-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-os-heading">
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-montage-eyebrow">Connected Platform Strategy</p>
            <h2 id="genius-os-heading" className="display-heading display-heading-md">
              From a Product Suite to a Fan Engagement Operating System
            </h2>
            <p className="case-body case-section-lead">
              The Fan Engagement OS connected content creation, interactive formats,
              configurable widgets, partner workflows, distribution, and engagement insight
              within one larger product ecosystem.
            </p>
            <p className="case-body case-section-prose">
              The work required thinking beyond individual features. I helped clarify how
              products could share patterns, data, workflows, and partner value while still
              supporting different use cases across leagues, teams, sportsbooks, publishers,
              and brands.
            </p>
            <ul className="case-state-farm-focus-list" aria-label="Platform components">
              {geniusSportsPlatformComponents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="case-visual-lang-layout case-challenge-sticky-layout case-genius-os-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="genius-connection-heading"
              >
                <h3
                  id="genius-connection-heading"
                  className="case-visual-lang-sticky-title"
                >
                  Designing for Connection
                </h3>
                <p className="case-visual-lang-sticky-text">
                  The goal was not simply to make each product usable in isolation. It was to
                  create a clearer experience across the suite so partners could understand what
                  was available, configure the right product, deploy it efficiently, and measure
                  its impact.
                </p>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                <figure className="case-visual-lang-still" role="listitem">
                  <img
                    src={geniusSportsImages.fanEngagementOs}
                    alt="Genius Sports Fan Engagement OS — connected platform ecosystem"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="case-visual-lang-still" role="listitem">
                  <img
                    src={geniusSportsImages.gameDayFramework}
                    alt="Game Day Engagement Framework with Lean Design Framework for partner-led widget development"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="case-visual-caption">
                    <span className="case-visual-caption-meta">Game Day Engagement</span>
                    Modular widget framework connecting pre-game, live, and post-game fan
                    participation
                  </figcaption>
                </figure>
                <figure className="case-visual-lang-still" role="listitem">
                  <img
                    src={geniusSportsImages.customerAlignmentOs}
                    alt="Customer Alignment Model — evidence-based decisions across marketplace discovery and deployment"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="case-visual-caption">
                    <span className="case-visual-caption-meta">Customer alignment</span>
                    Aligning assumptions with observed partner behavior across the widget
                    marketplace
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="genius-reels-heading"
        >
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-state-farm-eyebrow-dark">Content Creation</p>
            <h2
              id="genius-reels-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Helping Partners Turn Sports Moments Into Scalable Content
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              Genius Reels supported the creation and distribution of sports content designed
              for modern digital channels. The product opportunity centered on helping partners
              move from raw sports moments to branded, platform-ready content with greater
              speed and consistency.
            </p>
            <ul className="case-genius-focus-list case-genius-focus-list--dark">
              {geniusSportsReelsFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <figure className="case-montage-artifact-figure">
              <img
                src={geniusSportsImages.reels}
                alt="Genius Reels content creation and publishing workflow"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="case-visual-caption case-visual-caption--dark case-visual-caption--genius-reels">
                <span className="case-visual-caption-meta">Genius Reels</span>
                Templates, editing, branding, and distribution for partner content teams
              </figcaption>
            </figure>
            <h3 className="case-genius-subheading case-genius-subheading--dark">
              Reducing the Distance Between Moment and Audience
            </h3>
            <p className="case-body case-section-prose case-section-lead--muted">
              The experience needed to make content production faster without removing the
              control partners required over format, branding, and publishing decisions.
            </p>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-widgets-heading">
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-montage-eyebrow">Configurable Partner Products</p>
            <h2 id="genius-widgets-heading" className="display-heading display-heading-md">
              Making Fan Engagement Easier to Configure and Deploy
            </h2>
            <p className="case-body case-section-lead">
              The widget ecosystem gave B2B partners a way to bring interactive fan experiences
              into their own digital properties. I worked on patterns and workflows that helped
              make those products more understandable, configurable, reusable, and aligned with
              the broader platform.
            </p>
            <ul className="case-state-farm-focus-list">
              {geniusSportsWidgetFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <figure className="case-montage-artifact-figure">
              <img
                src={geniusSportsImages.widgets}
                alt="B2B fan engagement widget library and configuration patterns"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">Engagement widgets</span>
                Discovery, configuration, preview, and deployment for B2B partners
              </figcaption>
            </figure>
            <h3 className="case-state-farm-subheading">Designing for Partners, Not Only End Fans</h3>
            <p className="case-body case-section-prose">
              Because the platform served B2B customers, the product had to work at two levels:
              partners needed intuitive controls and reliable deployment, while fans needed
              engaging and frictionless experiences.
            </p>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="genius-gap-heading"
        >
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-state-farm-eyebrow-dark">
              Organizational Opportunity
            </p>
            <h2
              id="genius-gap-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              The Product Team Needed a Better Way to Build With Partners
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The organization had product expertise and strong commercial relationships, but
              there was no consistent partner-led discovery or beta-development model. Important
              product decisions could move forward without enough direct research, shared
              personas, or structured validation with the customers expected to use the
              platform.
            </p>
            <p className="case-body case-section-prose case-section-lead--muted">
              I identified this gap and created a Lean Design Framework that connected customer
              research, product hypotheses, design exploration, partner feedback, and beta
              learning.
            </p>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-lean-heading">
          <div className={styles.inner}>
            <h2 id="genius-lean-heading" className="display-heading display-heading-md">
              Creating a Repeatable System for Partner-Led Product Development
            </h2>
            <div className="case-visual-lang-layout case-challenge-sticky-layout case-genius-lean-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="genius-lean-sticky-heading"
              >
                <h3 id="genius-lean-sticky-heading" className="case-visual-lang-sticky-title">
                  Lean Design Framework
                </h3>
                <div className="case-visual-lang-sticky-copy">
                  <p className="case-visual-lang-sticky-text">
                    I developed the Lean Design Framework to give teams a practical way to reduce
                    uncertainty before making larger product and engineering commitments.
                  </p>
                  <p className="case-visual-lang-sticky-text">
                    The framework created a shared structure for defining the problem, understanding
                    the partner, testing assumptions, and learning through beta participation—
                    supported by prototypes and directional experiments across the Fan Engagement
                    OS.
                  </p>
                </div>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {geniusSportsLeanEvidenceImages.map((item) => (
                  <figure key={item.src} className="case-visual-lang-still" role="listitem">
                    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                    <figcaption className="case-visual-caption">
                      <span className="case-visual-caption-meta">{item.captionMeta}</span>
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <ol className="case-genius-lean-grid" aria-label="Lean Design Framework phases">
              {geniusSportsLeanPhases.map((step, index) => (
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
          aria-labelledby="genius-personas-heading"
        >
          <div className={styles.inner}>
            <h2
              id="genius-personas-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Giving Product Decisions a Clearer Customer Foundation
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              To strengthen product direction, I gathered customer insight and created
              research-informed personas that helped teams better understand partner contexts,
              responsibilities, motivations, constraints, and success measures.
            </p>
            <p className="case-body case-section-prose case-section-lead--muted">
              The personas were not intended as static deliverables. They were designed to help
              teams evaluate product decisions through the realities of the customers operating
              the platform.
            </p>
            <div className="case-state-farm-split">
              <figure className="case-montage-artifact-figure">
                <img
                  src={geniusSportsImages.frameworkMvp}
                  alt="Cupcake to Wedding Cake framework — MVP through scalable Genius Engage marketplace"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="case-visual-caption case-visual-caption--dark">
                  <span className="case-visual-caption-meta">Product scaling model</span>
                  From MVP marketplace to self-serve partner deployment
                </figcaption>
              </figure>
              <figure className="case-montage-artifact-figure">
                <img
                  src={geniusSportsImages.marketplaceJourney}
                  alt="Marketplace engagement journey — sales, vendor, and retention funnels"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="case-visual-caption case-visual-caption--dark">
                  <span className="case-visual-caption-meta">Marketplace journey</span>
                  Discovery through optimization across partner funnels
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-beta-heading">
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-montage-eyebrow">Customer Learning System</p>
            <h2 id="genius-beta-heading" className="display-heading display-heading-md">
              Creating the Foundation for the First Structured Partner Beta Program
            </h2>
            <p className="case-body case-section-lead">
              The Lean Design Framework became the foundation for a closer partner beta model
              that allowed product teams to build with customers rather than waiting until after
              launch to discover whether key assumptions were correct.
            </p>
            <p className="case-body case-section-prose">
              This created a repeatable path for partner selection, discovery, prototype
              validation, feedback, beta learning, and product decision-making.
            </p>
            <CaseStudyScrollVideo
              src={geniusSportsVideos.partnerBetaProgram}
              poster={geniusSportsImages.partnerBeta}
              ariaLabel="Lean Design Framework and partner beta overview"
              summary="An overview of the Lean Design Framework and partner beta model I created to bring customers directly into product development."
            />
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={geniusSportsImages.partnerBeta}
                alt="Partner beta framework — selection through platform direction"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="case-grid case-grid--4">
              {geniusSportsBetaSteps.map((step) => (
                <article key={step.title} className="case-card case-card--light">
                  <h3 className="case-card-title">{step.title}</h3>
                  <p className="case-card-body">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-cross-heading">
          <div className={styles.inner}>
            <h2 id="genius-cross-heading" className="display-heading display-heading-md">
              Connecting Product, Design, Engineering, Marketing, and Customers
            </h2>
            <p className="case-body case-section-lead">
              The work required alignment across internal teams and external partners. I
              translated customer insight into product language, created visual frameworks that
              made complex decisions easier to discuss, and helped teams connect short-term
              feature work to the broader platform strategy.
            </p>
            <div className="case-grid case-grid--4">
              {geniusSportsCrossFunctionalGrid.map((item) => (
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
          aria-labelledby="genius-impact-heading"
        >
          <div className={styles.inner}>
            <h2
              id="genius-impact-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Building More Than Features
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The most important contribution was not a single screen or experiment. It was
              helping establish a more connected way to think about the fan-engagement platform
              and a more disciplined way to build with the partners using it.
            </p>
            <div className="case-grid case-grid--4">
              {geniusSportsImpactStatements.map((item) => (
                <article key={item.title} className="case-card">
                  <h3 className="case-card-title">{item.title}</h3>
                  <p className="case-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section section-spacing" aria-labelledby="genius-demonstrates-heading">
          <div className={styles.inner}>
            <h2 id="genius-demonstrates-heading" className="display-heading display-heading-md">
              Product Leadership at the Intersection of Platform, Partner, and Fan
            </h2>
            <p className="case-body case-section-lead">
              The Genius Sports work demonstrates my ability to operate across multiple layers of
              product development: shaping the platform ecosystem, designing partner-facing
              tools, understanding end-fan behavior, creating research systems, and improving how
              teams make decisions together.
            </p>
            <div className="case-grid case-grid--4">
              {geniusSportsProofPoints.map((item) => (
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
          aria-labelledby="genius-reflection-heading"
        >
          <div className={styles.inner}>
            <h2
              id="genius-reflection-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              The Best Fan Products Are Built With the Partners Delivering Them
            </h2>
            <div className="case-body case-section-prose">
              <p className="case-section-lead case-section-lead--muted">
                Genius Sports reinforced that fan engagement cannot be designed only from the
                perspective of the end user. The platform also has to work for the leagues,
                teams, sportsbooks, media companies, and brands creating and operating those
                experiences.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                The strongest product decisions came from connecting partner reality, fan
                behavior, commercial opportunity, technical feasibility, and platform strategy
                within one shared development process.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-cta case-cta--editorial section-spacing"
          aria-labelledby="genius-next-heading"
        >
          <div className={styles.inner}>
            <div className="case-cta-editorial-wrap">
              <h2 id="genius-next-heading" className="case-cta-editorial-headline display-heading">
                <span className="case-cta-editorial-line">Continue exploring</span>
              </h2>
              <div className="case-cta-editorial-row">
                <p className="case-cta-editorial-body">
                  Continue to MontageCMS streaming leadership or explore HBCU GO sports
                  platform work.
                </p>
                <div className="case-cta-editorial-actions">
                  <Link href="/work/montagecms" className="case-cta-editorial-button">
                    MontageCMS
                  </Link>
                  <Link href="/work/hbcugo" className="case-cta-editorial-link-secondary">
                    HBCU GO
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
