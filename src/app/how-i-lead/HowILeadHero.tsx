import Link from "next/link";
import styles from "../page.module.css";
import leadStyles from "./how-i-lead.module.css";

const HERO_IMAGE = "/images/Behind%20The%20Scenes/Onset3.webp";

export function HowILeadHero() {
  return (
    <section
      className={`case-hero portrait-hero ${leadStyles.hero}`}
      aria-labelledby="how-i-lead-hero-heading"
    >
      <picture className="case-hero-media">
        <source media="(max-width: 768px)" srcSet={HERO_IMAGE} />
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="case-hero-overlay about-hero-overlay" aria-hidden />

      <div className={`${styles.inner} case-hero-content about-hero-content`}>
        <div className="about-hero-copy">
          <p className="portrait-hero-chapter">CHAPTER 02</p>
          <p className="case-hero-eyebrow about-hero-eyebrow portrait-hero-label">
            TARUS D. STILLS
          </p>
          <h1 id="how-i-lead-hero-heading" className="case-hero-title about-hero-title">
            <span className="about-hero-title-line">How I Lead</span>
          </h1>
          <p className="case-hero-subtitle about-hero-subline">
            I align creative vision, product strategy, emerging technology, and
            cross-functional teams to build products, stories, and worlds people
            return to.
          </p>
          <p className={`case-hero-subhead-secondary ${leadStyles.heroSecondaryLine}`}>
            Clear vision. Strong systems. Better work.
          </p>
          <div className={leadStyles.heroActions}>
            <Link href="/#work" className="about-hero-cta">
              View Selected Work
            </Link>
            <Link href="/#contact" className={leadStyles.heroCtaSecondary}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
