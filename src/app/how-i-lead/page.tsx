import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import leadStyles from "./how-i-lead.module.css";
import { HowILeadHero } from "./HowILeadHero";
import {
  leadershipAreas,
  leadershipPrinciples,
  operateSteps,
  practiceTeasers,
  teamExpectations,
} from "@/data/how-i-lead-content";

export const metadata: Metadata = {
  title: "How I Lead — Tarus D. Stills | Stilliano Studios",
  description:
    "Creative executive leadership at the intersection of product strategy, emerging technology, storytelling, and cross-functional teams.",
  openGraph: {
    title: "How I Lead — Tarus D. Stills | Stilliano Studios",
    description:
      "Creative executive leadership at the intersection of product strategy, emerging technology, storytelling, and cross-functional teams.",
  },
};

export default function HowILeadPage() {
  return (
    <div className={`case-page case-page--how-i-lead ${leadStyles.page}`}>
      <main>
        <HowILeadHero />

        <section
          className={`case-section section-spacing ${leadStyles.intro}`}
          aria-labelledby="how-i-lead-intro-heading"
        >
          <div className={`${styles.inner} ${leadStyles.introInner}`}>
            <p className="about-section-kicker">Leadership</p>
            <h2 id="how-i-lead-intro-heading" className={leadStyles.introHeading}>
              Creative leadership is more than taste.
            </h2>
            <div className={leadStyles.introBody}>
              <p>
                The strongest ideas only become valuable when teams understand the
                vision, know what success looks like, and have the systems to deliver
                consistently.
              </p>
              <p>
                I lead by translating ambiguity into direction—connecting customer
                insight, business priorities, storytelling, technology, and execution
                around a clear shared outcome.
              </p>
            </div>
            <p className={leadStyles.introPull}>
              I turn complex ideas into a direction teams can act on.
            </p>
          </div>
        </section>

        <section
          className="case-section section-spacing capabilities-editorial"
          aria-labelledby="how-i-lead-principles-heading"
        >
          <div className={styles.inner}>
            <p className="about-section-kicker">Principles</p>
            <h2
              id="how-i-lead-principles-heading"
              className={`display-heading ${leadStyles.sectionHeading}`}
            >
              Leadership Principles
            </h2>
            <ol className={leadStyles.principlesBoard} aria-label="Leadership principles">
              {leadershipPrinciples.map((principle, index) => (
                <li key={principle.id} className={leadStyles.principleCell}>
                  <span className={leadStyles.principleNumber} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={leadStyles.principleTitle}>{principle.title}</h3>
                  <p className={leadStyles.principleBody}>{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={`case-section section-spacing ${leadStyles.operate}`}
          aria-labelledby="how-i-lead-operate-heading"
        >
          <div className={styles.inner}>
            <p className={leadStyles.sectionKicker}>Process</p>
            <h2
              id="how-i-lead-operate-heading"
              className={`display-heading ${leadStyles.sectionHeading} ${leadStyles.sectionHeadingLight}`}
            >
              How I Operate
            </h2>
            <ol className={leadStyles.processTrack} aria-label="How I operate">
              {operateSteps.map((step, index) => (
                <li key={step.id} className={leadStyles.processStep}>
                  <span className={leadStyles.processIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={leadStyles.processTitle}>{step.title}</h3>
                  <p className={leadStyles.processBody}>{step.body}</p>
                </li>
              ))}
            </ol>
            <p className={leadStyles.operateClosing}>
              Every release should make the next decision smarter.
            </p>
          </div>
        </section>

        <section
          className="case-section section-spacing"
          aria-labelledby="how-i-lead-areas-heading"
        >
          <div className={styles.inner}>
            <p className="about-section-kicker">Scope</p>
            <h2
              id="how-i-lead-areas-heading"
              className={`display-heading ${leadStyles.sectionHeading}`}
            >
              Where I Lead
            </h2>
            <ul className={leadStyles.areasGrid} aria-label="Areas of leadership">
              {leadershipAreas.map((area) => (
                <li key={area.id} className={leadStyles.areaBlock}>
                  <h3 className={leadStyles.areaTitle}>{area.title}</h3>
                  <ul className={leadStyles.areaList}>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={`case-section section-spacing ${leadStyles.practice}`}
          aria-labelledby="how-i-lead-practice-heading"
        >
          <div className={styles.inner}>
            <p className={leadStyles.sectionKicker}>Practice</p>
            <h2
              id="how-i-lead-practice-heading"
              className={`display-heading ${leadStyles.sectionHeading} ${leadStyles.sectionHeadingLight}`}
            >
              Leadership in Practice
            </h2>
            <ul className={leadStyles.practiceGrid}>
              {practiceTeasers.map((teaser) => (
                <li key={teaser.id}>
                  <Link href={teaser.href} className={leadStyles.practiceCard}>
                    <img
                      className={leadStyles.practiceMedia}
                      src={teaser.image}
                      alt={teaser.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={leadStyles.practiceBody}>
                      <p className={leadStyles.practiceLabel}>{teaser.title}</p>
                      <h3 className={leadStyles.practiceHeadline}>{teaser.headline}</h3>
                      <p className={leadStyles.practiceDescription}>
                        {teaser.description}
                      </p>
                      <div className={leadStyles.practiceTags}>
                        {teaser.tags.map((tag) => (
                          <span key={tag} className={leadStyles.practiceTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="case-section section-spacing about-stilliano-editorial"
          aria-labelledby="how-i-lead-teams-heading"
        >
          <div className={`${styles.inner} about-stilliano-inner`}>
            <p className="about-section-kicker">Collaboration</p>
            <h2
              id="how-i-lead-teams-heading"
              className="about-stilliano-heading"
            >
              What Teams Can Expect
            </h2>
            <ul className={leadStyles.teamsList} aria-label="What teams can expect">
              {teamExpectations.map((item) => (
                <li key={item} className={leadStyles.teamsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={`case-section section-spacing ${leadStyles.manifesto}`}
          aria-labelledby="how-i-lead-manifesto-heading"
        >
          <div className={`${styles.inner} ${leadStyles.manifestoInner}`}>
            <p className={leadStyles.sectionKicker}>Executive Perspective</p>
            <blockquote>
              <p
                id="how-i-lead-manifesto-heading"
                className={leadStyles.manifestoQuote}
              >
                Creative leadership is the discipline of making the vision{" "}
                <em>clear enough to inspire people</em>, structured enough to execute,
                and valuable enough to matter.
              </p>
            </blockquote>
            <p className={leadStyles.manifestoSupport}>
              I do not separate story, product, technology, and growth. The opportunity
              is usually found in how those systems connect.
            </p>
          </div>
        </section>

        <section
          className="case-cta about-cta section-spacing"
          aria-labelledby="how-i-lead-cta-heading"
        >
          <div className={styles.inner}>
            <div className="about-cta-inner">
              <h2
                id="how-i-lead-cta-heading"
                className="case-heading display-heading display-heading-xl about-cta-heading"
              >
                <span className="about-cta-heading-line">
                  Let&apos;s build what people return to.
                </span>
              </h2>
              <p className="about-cta-body">
                I partner with organizations, studios, product teams, and creative
                leaders working at the intersection of technology, storytelling, and
                audience experience.
              </p>
              <div className="about-cta-actions">
                <Link href="/#contact" className="about-hero-cta">
                  Start a Conversation
                </Link>
                <Link href="/#work" className="about-cta-secondary">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
