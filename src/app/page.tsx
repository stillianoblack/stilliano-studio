import type { Metadata } from "next";
import { HomeWorkGrid } from "./HomeWorkGrid";
import styles from "./page.module.css";
import homeStyles from "./home-editorial.module.css";

export const metadata: Metadata = {
  title: "Tarus D. Stills | World Builder, Storyteller & Founder",
  description:
    "World builder, storyteller, and founder — building original worlds across product, film, and technology.",
  openGraph: {
    title: "Tarus D. Stills | World Builder, Storyteller & Founder",
    description:
      "Principal Product Leader and Tech Founder across entertainment, sports, streaming, and education.",
  },
};

export default function Home() {
  return (
    <div className={`${styles.page} ${homeStyles.home}`}>
      <main>
        <section className={homeStyles.hero} aria-labelledby="home-hero-heading">
          <div className={`${styles.inner} ${homeStyles.heroInner}`}>
            <p className={homeStyles.heroName}>Tarus D. Stills</p>
            <p className={homeStyles.heroRoles}>
              Product Manager • Creative Technologist • Founder
            </p>
            <h1 className={homeStyles.heroStatement} id="home-hero-heading">
              Principal Product Leader and Tech Founder across entertainment, sports,
              streaming, and education.
            </h1>
            <a href="#work" className={homeStyles.heroCta}>
              Explore Selected Work
            </a>
          </div>
        </section>

        <section
          id="work"
          className={homeStyles.selectedWork}
          aria-label="Selected work"
        >
          <HomeWorkGrid />
        </section>

        <section className={styles.quoteSection} aria-label="Recent testimony">
          <div className={styles.inner}>
            <span className="section-eyebrow">Recent Testimony</span>
            <div className={styles.quoteCard}>
              <div className={styles.quoteLayout}>
                <img
                  className={styles.quoteAvatar}
                  src="/images/headshots-profiles/katpat.webp"
                  alt="Katherine Piedade"
                  loading="lazy"
                  decoding="async"
                />
                <blockquote className={styles.quoteBody}>
                  <p className={styles.quoteText}>
                    &ldquo;Tarus combines product strategy, creative leadership, and
                    operational thinking in a way that consistently elevates both the
                    work and the teams around him.&rdquo;
                  </p>
                  <footer className={styles.quoteMeta}>
                    — <strong>Katherine Piedade</strong>
                    <br />
                    Transformation &amp; Operations Leader
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.footerCta}>
          <div className={styles.inner}>
            <h2 className={`section-title ${styles.footerCtaTitle}`}>
              <span className={styles.footerCtaTitleLine}>
                Building a world that needs to feel alive?
              </span>
            </h2>
            <div className={styles.footerCtaRule} aria-hidden />
            <div className={styles.footerCtaRow}>
              <p className={styles.footerNote}>
                Open to collaborations across original IP, entertainment, media technology,
                and story-driven platforms.
              </p>
              <a className={styles.footerCtaButton} href="mailto:stills@montage.tv">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
