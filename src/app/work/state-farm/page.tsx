import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import {
  stateFarmAlignmentPrinciples,
  stateFarmClaimsNeeds,
  stateFarmEnterprisePillars,
  stateFarmImages,
  stateFarmImpactStatements,
  stateFarmLeadershipImpact,
  stateFarmMyAccountsFocus,
} from "@/data/state-farm-case-study";
import { ExecutiveSummary } from "@/app/ExecutiveSummary";

export const metadata: Metadata = {
  title: "State Farm Enterprise Experience Architecture | Stilliano Black",
  description:
    "A Principal UX Architect case study exploring global experience architecture, executive partnership, product strategy, and critical customer journeys at State Farm.",
  openGraph: {
    title: "State Farm: Leading Enterprise Experience Architecture",
    description:
      "How enterprise architecture, customer insight, and executive partnership shaped connected account and claims experiences at State Farm.",
  },
};

const HERO_IMAGE = stateFarmImages.hero;

export default function StateFarmCaseStudyPage() {
  return (
    <div className="case-page case-page--state-farm">
      <main>
        <section className="case-hero" aria-label="State Farm case study">
          <picture className="case-hero-media">
            <source media="(max-width: 768px)" srcSet={HERO_IMAGE} />
            <img
              src={HERO_IMAGE}
              alt="State Farm My Accounts architecture and Claims landing experience"
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: "center 42%" }}
            />
          </picture>
          <div className="case-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-hero-eyebrow">PRINCIPAL UX ARCHITECTURE</p>
            <h1 className="case-hero-title display-heading display-heading-xl">
              State Farm
            </h1>
            <p className="case-hero-subtitle">
              Leading global experience architecture across complex products and
              critical customer journeys.
            </p>
            <Link href="/#work" className="case-hero-back">
              Back to Work →
            </Link>
          </div>
        </section>

        <ExecutiveSummary slug="state-farm" />

        <section
          className="case-section case-page-overview-band section-spacing"
          aria-labelledby="sf-overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-overview-heading"
              className="display-heading display-heading-xl case-overview-heading"
            >
              Enterprise experience architecture at the intersection of systems
              and human need.
            </h2>
            <div className="case-overview-media-block">
              <figure className="case-montage-artifact-figure case-montage-artifact-figure--overview">
                <img
                  src={stateFarmImages.hero}
                  alt="State Farm product ecosystem — My Accounts architecture paired with Claims customer experience"
                  loading="eager"
                  decoding="async"
                  width={3021}
                  height={1317}
                />
              </figure>
            </div>
            <p className="case-body case-section-lead">
              As a Principal UX Architect, I was brought into strategic initiatives
              that required alignment across products, platforms, customer journeys,
              business units, and global teams. I partnered with directors, vice
              presidents, product leaders, designers, engineers, and researchers to
              clarify complex systems and establish scalable experience direction.
            </p>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="sf-mandate-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-mandate-heading"
              className="display-heading display-heading-md"
            >
              The Leadership Mandate
            </h2>
            <div className="case-body case-section-prose">
              <p>
                My role extended beyond the delivery of individual interfaces. I was
                trusted with high-priority initiatives where teams needed greater
                clarity across customer needs, business requirements, platform
                architecture, and product direction.
              </p>
              <p>
                I helped create the connective tissue between strategic intent and
                product execution—mapping complex ecosystems, aligning teams, defining
                scalable frameworks, and translating broad organizational goals into
                actionable customer experiences.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="sf-enterprise-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-enterprise-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Architecture Before Interface
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              State Farm&apos;s digital ecosystem served customers across numerous
              products, accounts, service journeys, and internal business teams. The
              challenge was not simply to improve isolated screens. It was to create
              structures that helped products behave like one connected experience.
            </p>
            <div className="case-grid case-grid--4">
              {stateFarmEnterprisePillars.map((pillar) => (
                <article key={pillar.title} className="case-card">
                  <h3 className="case-card-title">{pillar.title}</h3>
                  <p className="case-card-body">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="sf-myaccounts-heading"
        >
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-montage-eyebrow">My Accounts Platform</p>
            <h2
              id="sf-myaccounts-heading"
              className="display-heading display-heading-md"
            >
              Creating a Connected Customer Account Ecosystem
            </h2>
            <p className="case-body case-section-lead">
              The My Accounts work required a scalable model for organizing customer
              relationships across products, services, profiles, and account activity. I
              led architecture and product-definition efforts that helped clarify how
              customers would move through the ecosystem and how teams could build
              against a shared framework.
            </p>
            <ul className="case-state-farm-focus-list" aria-label="My Accounts focus areas">
              {stateFarmMyAccountsFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="case-state-farm-subheading">Mapping the Ecosystem</h3>
            <p className="case-body case-section-prose">
              Before defining individual screens, I mapped the relationships among users,
              products, accounts, services, and platform entry points. This helped teams
              see the broader system and make decisions that supported both immediate
              requirements and future growth.
            </p>
            <figure className="case-montage-artifact-figure">
              <img
                src={stateFarmImages.architectureMap}
                alt="State Farm My Accounts ecosystem map and experience architecture"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1317}
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">Ecosystem mapping</span>
                Relationships across products, accounts, and platform entry points
              </figcaption>
            </figure>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={stateFarmImages.productHubs}
                alt="State Farm product hub framework and navigation architecture"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1317}
              />
              <figcaption className="case-visual-caption">
                <span className="case-visual-caption-meta">Product hubs</span>
                Shared frameworks for navigation, content, and account structure
              </figcaption>
            </figure>

            <h3 className="case-state-farm-subheading">From Framework to Product Experience</h3>
            <p className="case-body case-section-prose">
              The architecture was translated into product hubs, navigation systems,
              account structures, and interface patterns that made complex information
              easier for customers to understand and easier for product teams to scale.
            </p>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="sf-claims-heading"
        >
          <div className={styles.inner}>
            <p className="case-hero-eyebrow case-state-farm-eyebrow-dark">
              Claims Experience
            </p>
            <h2
              id="sf-claims-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Simplifying the First Step of a High-Stress Journey
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              Filing a claim often begins during a moment of confusion, anxiety, or
              urgency. The landing experience needed to quickly help customers identify
              their situation, understand what information they needed, and take the
              correct next step.
            </p>
            <p className="case-body case-section-prose case-section-lead--muted">
              The work combined customer insight, experience strategy, content clarity,
              responsive design, and service navigation to make the journey feel more
              approachable and actionable.
            </p>
            <div className="case-grid case-grid--4">
              {stateFarmClaimsNeeds.map((need) => (
                <article key={need.title} className="case-card">
                  <h3 className="case-card-title">{need.title}</h3>
                  <p className="case-card-body">{need.body}</p>
                </article>
              ))}
            </div>
            <div className="case-state-farm-split">
              <figure className="case-montage-artifact-figure">
                <img
                  src={stateFarmImages.claimsHero}
                  alt="State Farm Claims landing page — category cards and guided entry"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="case-visual-caption case-visual-caption--dark">
                  <span className="case-visual-caption-meta">Claims landing</span>
                  Situation-based entry and clear next steps
                </figcaption>
              </figure>
              <figure className="case-montage-artifact-figure">
                <img
                  src={stateFarmImages.claimsMobile}
                  alt="State Farm Claims responsive mobile experience"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="case-visual-caption case-visual-caption--dark">
                  <span className="case-visual-caption-meta">Responsive viewing</span>
                  Consistent guidance across device contexts
                </figcaption>
              </figure>
            </div>
            <figure className="case-montage-artifact-figure case-montage-artifact-figure--compact">
              <img
                src={stateFarmImages.claimsFullPage}
                alt="State Farm Claims full landing page design — desktop layout"
                loading="lazy"
                decoding="async"
                width={3021}
                height={1317}
              />
              <figcaption className="case-visual-caption case-visual-caption--dark">
                <span className="case-visual-caption-meta">Full journey</span>
                Desktop claims landing with FAQ and service navigation
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="sf-alignment-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-alignment-heading"
              className="display-heading display-heading-md"
            >
              Connecting Human Needs to Enterprise Requirements
            </h2>
            <p className="case-body case-section-lead">
              Enterprise products succeed when customer needs, business goals, technical
              constraints, and organizational realities are considered together. Across
              both initiatives, I translated broad and sometimes competing inputs into
              clear frameworks that teams could understand, discuss, and execute.
            </p>
            <div className="case-grid case-grid--4">
              {stateFarmAlignmentPrinciples.map((item) => (
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
          aria-labelledby="sf-influence-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-influence-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Trusted Beyond the Boundaries of UX
            </h2>
            <div className="case-body case-section-prose">
              <p className="case-section-lead case-section-lead--muted">
                Directors and vice presidents regularly brought me into high-priority
                work because of my ability to connect customer experience, business
                needs, product architecture, and strategic direction.
              </p>
              <p className="case-section-lead case-section-lead--muted">
                My influence expanded beyond traditional UX responsibilities, and I was
                ultimately invited to join the product management organization—recognition
                that the work I was leading was helping shape product direction, not
                simply interface execution.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="sf-how-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-how-heading"
              className="display-heading display-heading-md"
            >
              How I Led
            </h2>
            <div className="case-grid case-grid--4">
              {stateFarmLeadershipImpact.map((item) => (
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
          aria-labelledby="sf-demonstrates-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-demonstrates-heading"
              className="display-heading display-heading-md display-heading--light"
            >
              Enterprise Scale Without Losing the Human Experience
            </h2>
            <p className="case-body case-section-lead case-section-lead--muted">
              The State Farm work demonstrates my ability to operate at two levels
              simultaneously: shaping large-scale systems and ensuring that the
              resulting customer experience remains clear, useful, and human.
            </p>
            <div className="case-grid case-grid--4">
              {stateFarmImpactStatements.map((item) => (
                <article key={item.title} className="case-card">
                  <h3 className="case-card-title">{item.title}</h3>
                  <p className="case-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="sf-reflection-heading"
        >
          <div className={styles.inner}>
            <h2
              id="sf-reflection-heading"
              className="display-heading display-heading-md"
            >
              Design Leadership Is the Ability to Create Clarity
            </h2>
            <div className="case-body case-section-prose">
              <p>
                My time at State Farm reinforced that the most valuable design leaders
                do more than produce solutions. They help organizations understand the
                problem, see the complete system, align around a direction, and move
                forward with confidence.
              </p>
              <p>
                That experience became foundational to how I later approached streaming
                products, education technology, sports platforms, interactive
                entertainment, and original intellectual property.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-cta case-cta--editorial section-spacing"
          aria-labelledby="sf-next-heading"
        >
          <div className={styles.inner}>
            <div className="case-cta-editorial-wrap">
              <h2
                id="sf-next-heading"
                className="case-cta-editorial-headline display-heading"
              >
                <span className="case-cta-editorial-line">Continue exploring</span>
              </h2>
              <div className="case-cta-editorial-row">
                <p className="case-cta-editorial-body">
                  Return to Caiden&apos;s Courage — the flagship world that followed
                  this enterprise chapter on the homepage — or browse entertainment and
                  interactive media work.
                </p>
                <div className="case-cta-editorial-actions">
                  <Link
                    href="/work/caidens-courage"
                    className="case-cta-editorial-button"
                  >
                    Caiden&apos;s Courage
                  </Link>
                  <Link
                    href="/#entertainment-interactive-media"
                    className="case-cta-editorial-link-secondary"
                  >
                    Entertainment + Interactive Media
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
