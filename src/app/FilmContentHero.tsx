import Link from "next/link";
import styles from "./page.module.css";
import leadStyles from "./how-i-lead/how-i-lead.module.css";

const HERO_IMAGE = "/images/Behind%20The%20Scenes/Onset3.webp";

export function FilmContentHero() {
  return (
    <section
      className={`case-hero portrait-hero ${leadStyles.hero}`}
      aria-labelledby="film-content-hero-heading"
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
          <p className="portrait-hero-chapter">CHAPTER 03</p>
          <p className="case-hero-eyebrow about-hero-eyebrow portrait-hero-label">
            TARUS D. STILLS
          </p>
          <h1 id="film-content-hero-heading" className="case-hero-title about-hero-title">
            <span className="about-hero-title-line">Creative Producer</span>
            <span className="about-hero-title-line">and Branded Media</span>
          </h1>
          <p className="case-hero-subtitle about-hero-subline">
            From music videos and independent film to branded campaigns and narrative
            development — producing story-driven media that connects culture, audience,
            and brand.
          </p>
          <p className={`case-hero-subhead-secondary ${leadStyles.heroSecondaryLine}`}>
            Sets. Stories. Systems that ship.
          </p>
          <div className={leadStyles.heroActions}>
            <Link href="/#work" className="about-hero-cta">
              View Interactive Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
