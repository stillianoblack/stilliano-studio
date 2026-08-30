import styles from "../page.module.css";
import leadStyles from "../how-i-lead/how-i-lead.module.css";

const HERO_IMAGE = "/images/Heros/content_animation_hero.webp";

export function StoriesHero() {
  return (
    <section
      className={`case-hero portrait-hero ${leadStyles.hero}`}
      aria-labelledby="stories-hero-heading"
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
          <p className="case-hero-eyebrow about-hero-eyebrow portrait-hero-label">
            STORIES + ORIGINAL IP
          </p>
          <h1 id="stories-hero-heading" className="case-hero-title about-hero-title">
            <span className="about-hero-title-line">Building Story Worlds</span>
          </h1>
          <p className="case-hero-subtitle about-hero-subline">
            Original storytelling and IP across books, characters, interactive experiences,
            games, and narrative development — led by Caiden&apos;s Courage and extended
            through branded entertainment and story systems.
          </p>
          <p className="about-hero-proof">
            Work with:{" "}
            <em className="about-hero-proof-clients">
              Cartoon Network • PBS Kids • Amira Learning • Petro Canada • TBS • Coca Cola
            </em>
          </p>
          <div className={leadStyles.heroActions}>
            <a href="#creative-development" className="about-hero-cta">
              Explore the Slate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
