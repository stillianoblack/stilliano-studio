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
                Generative AI &bull; Product &bull; Entertainment &bull; Interactive
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
                I&apos;m a creative technologist and product leader working at the
                intersection of generative AI, entertainment, interactive experiences,
                and emerging platforms.
              </p>
              <p>
                My career began in design, but my work increasingly moved beyond the
                interface — into product strategy, streaming systems, technical
                prototyping, creator tools, interactive storytelling, and the technology
                required to turn ideas into working experiences.
              </p>
              <p>
                Today, I move between product vision and execution — using AI-assisted
                development, rapid prototyping, UX, data, and creative direction to
                explore what emerging technology can become.
              </p>
              <p>
                I&apos;ve worked across entertainment and technology with organizations
                including Cartoon Network, PBS Kids, DC Comics, TBS, HBCU GO, State Farm,
                and others — connecting creative vision with the systems required to
                deliver it.
              </p>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>So what is a Still&bull;i&bull;ano?</h3>
              <p>
                A Still&bull;i&bull;ano is someone who moves fluidly between product,
                creativity, technology, and culture — connecting disciplines that are
                often treated as separate.
              </p>
              <ul className={styles.aboutIdentityList}>
                <li>Part producer.</li>
                <li>Part creative technologist.</li>
                <li>Part product leader.</li>
                <li>Part worldbuilder.</li>
                <li>Part storyteller who still asks &ldquo;what if?&rdquo;</li>
              </ul>

              <span className={styles.aboutSectionRule} aria-hidden="true" />

              <h3 className={styles.aboutSubheading}>
                Entertainment + Creative Technology
              </h3>
              <p>
                My background in filmmaking, animation, branded content, and production
                taught me how stories move from concept through production, distribution,
                and audience experience — knowledge I now apply to interactive products,
                streaming systems, creator tools, and emerging technology.
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
