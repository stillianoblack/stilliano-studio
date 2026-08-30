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
              Creative Executive,
              <br />
              Founder &amp; Storyteller
            </p>
            <div className={styles.aboutStatBlock}>
              <span className={styles.aboutStatLabel}>Focus</span>
              <p className={styles.aboutStatValue}>
                Original IP &bull; Film &bull; Media &bull; Product &bull; Technology
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
                I&apos;m a creative executive, product leader, founder, and storyteller —
                building original worlds across books, games, film, interactive experiences,
                and emerging technology.
              </p>
              <p>
                The first part of my career was spent building products across streaming,
                education, sports, media, and technology — with organizations including
                Cartoon Network, PBS Kids, DC Comics, TBS, HBCU GO, State Farm, and others.
              </p>
              <p>
                That experience didn&apos;t end. It expanded. Today it informs how I build
                original story worlds — including Caiden&apos;s Courage, a kids media universe
                spanning publishing, interactive experiences, games, and education.
              </p>
              <p>
                He didn&apos;t leave product behind. He expanded beyond it.
              </p>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>So what is a Still&bull;i&bull;ano?</h3>
              <p>
                A Still&bull;i&bull;ano moves fluidly between product, creativity, technology,
                and culture — connecting disciplines that are often treated as separate.
              </p>
              <ul className={styles.aboutIdentityList}>
                <li>Part founder.</li>
                <li>Part creative executive.</li>
                <li>Part product leader.</li>
                <li>Part filmmaker and producer.</li>
                <li>Part storyteller who still asks &ldquo;what if?&rdquo;</li>
              </ul>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>
                Entertainment + Creative Practice
              </h3>
              <p>
                Filmmaking, animation, branded content, and production taught me how stories
                move from concept through production, distribution, and audience experience —
                knowledge now applied to original IP, interactive products, and media
                systems.
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
