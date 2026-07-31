import styles from "./page.module.css";

export function HomeAboutSection() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <p className={styles.aboutBgWord} aria-hidden="true">
        STILLS
      </p>
      <p className={styles.aboutVerticalLabel} aria-hidden="true">
        About
      </p>
      <div className={`${styles.inner} ${styles.aboutInner}`}>
        <header className={styles.aboutMasthead}>
          <span className={styles.aboutSectionNo}>01</span>
          <div className={styles.aboutMeta}>
            <span className={styles.aboutMetaLine}>About</span>
          </div>
          <span className={styles.aboutMastheadRule} aria-hidden="true" />
        </header>

        <div className={styles.aboutSpread}>
          <div className={styles.aboutVisualCol}>
            <figure className={styles.aboutPortrait}>
              <img
                className={styles.aboutPhoto}
                src="/images/headshots-profiles/CD_TD_Headshot_copy.webp"
                alt="Tarus D. Stills"
                width={340}
                height={420}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className={styles.aboutRole}>
              Creative Product Executive,
              <br />
              Producer &amp; Creative Technologist
            </p>
            <div className={styles.aboutStatBlock}>
              <span className={styles.aboutStatLabel}>Focus</span>
              <p className={styles.aboutStatValue}>
                Film &bull; Games &bull; AI &bull; Education &bull; Interactive Storytelling
              </p>
            </div>
          </div>

          <div className={styles.aboutEditorialCol}>
            <p className={styles.aboutCaption}>
              Los Angeles, CA / Story / Systems / Culture
            </p>

            <h2 id="about-heading" className={styles.aboutTitle}>
              <span className={styles.aboutTitleLine}>Who is Stills?</span>
              <span className={styles.aboutTitleLine}>
                What is a Still&bull;i&bull;ano?
              </span>
            </h2>

            <div className={styles.aboutBody}>
              <p className={styles.aboutBodyLead}>Good question.</p>
              <p>
                Still&bull;i&bull;ano is the creative identity of Tarus D. Stills — a
                producer, creative technologist, and product leader working at the
                intersection of story, systems, and emerging technology.
              </p>
              <p>
                The work spans film and motion design, product strategy, games, AI,
                education, and interactive storytelling — building worlds that move from
                concept to audience.
              </p>
              <p>
                That path runs through entertainment platforms, learning systems, fan
                experiences, and original IP — including Caiden&apos;s Courage, a
                story-powered universe for focus, courage, and emotional growth.
              </p>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>So what is a Still&bull;i&bull;ano?</h3>
              <ul className={styles.aboutIdentityList}>
                <li>Part producer.</li>
                <li>Part creative technologist.</li>
                <li>Part product leader.</li>
                <li>Part worldbuilder.</li>
                <li>Part storyteller who still asks &ldquo;what if?&rdquo;</li>
              </ul>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>Film, Motion &amp; Production</h3>
              <p>
                Before product leadership, there was motion design, film, and production.
                That foundation still shapes how I build digital products, direct creative
                systems, and design story-driven experiences.
              </p>
              <ul className={styles.aboutIdentityList}>
                <li>Produced a feature film on a 14-day shoot</li>
                <li>Produced / 1st AD on a Telly Award-winning short screened at Cannes</li>
                <li>Executive Produced a short film selected for LA Film Festival</li>
                <li>Associate Produced a Lil Baby music video</li>
                <li>Produced branded content, motion graphics, and commercial media</li>
              </ul>
            </div>

            <blockquote className={styles.aboutClosingQuote}>
              <p>Worlds are built at the intersection of vision and execution.</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
