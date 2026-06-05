from pathlib import Path

NEW = r"""            <header className={styles.aboutMasthead}>
              <span className={styles.aboutSectionNo}>01</span>
              <motion.div className={styles.aboutMeta}>
                <span className={styles.aboutMetaLine}>About</span>
                <span className={styles.aboutMetaLine}>Streaming / Story / Culture</span>
                <span className={styles.aboutMetaLine}>Los Angeles, CA</span>
              </motion.div>
              <span className={styles.aboutMastheadRule} aria-hidden="true" />
            </header>

            <motion.div className={styles.aboutSpread}>
              <motion.div className={styles.aboutVisualCol}>
                <figure className={styles.aboutPortrait}>
                  <img
                    className={styles.aboutPhoto}
                    src="/images/headshots-profiles/TD_Headshot_copy.webp"
                    alt="Tarus D. Stills"
                    width={340}
                    height={420}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.aboutPortraitShade} aria-hidden="true" />
                  <span className={styles.aboutPortraitGrain} aria-hidden="true" />
                </figure>
                <p className={styles.aboutRole}>
                  Associate Creative Director, Product &amp; Experience
                </p>
                <motion.div className={styles.aboutStatBlock}>
                  <span className={styles.aboutStatLabel}>Focus</span>
                  <p className={styles.aboutStatValue}>
                    Streaming platforms · Interactive media · Audience systems
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className={styles.aboutEditorialCol}>
                <h2 id="about-heading" className={styles.aboutTitle}>
                  <span className={styles.aboutTitleLine}>Designing</span>
                  <span className={styles.aboutTitleLine}>the systems</span>
                  <span className={styles.aboutTitleLine}>behind audience</span>
                  <span className={styles.aboutTitleLine}>experiences.</span>
                </h2>

                <span className={styles.aboutColRule} aria-hidden="true" />

                <motion.div className={styles.aboutBody}>
                  <p className={styles.aboutBodyLead}>
                    Most startups and media platforms don&apos;t struggle because of bad
                    ideas. They struggle when product, brand, audience experience, and
                    execution stop working together.
                  </p>
                  <p>
                    Tarus D. Stills helps teams align product strategy, UX systems,
                    storytelling, and go-to-market thinking into cohesive digital
                    ecosystems built for engagement, clarity, and scale.
                  </p>
                  <blockquote className={styles.aboutPullQuote}>
                    <p>
                      &ldquo;The best audience experiences happen when product, story,
                      and systems work together.&rdquo;
                    </p>
                  </blockquote>
                  <p>
                    His work spans streaming platforms, interactive media, audience
                    engagement systems, and culturally-driven digital experiences —
                    operating at the intersection of product thinking, brand storytelling,
                    and scalable execution.
                  </p>
                  <p>
                    From UX architecture and platform strategy to creative direction and
                    audience growth, he builds connected experiences designed to move
                    products, brands, and people forward.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
"""

# Fix accidental motion.div tags
NEW = NEW.replace("<motion.div", "<div").replace("</motion.div>", "</div>")

path = Path(__file__).resolve().parents[1] / "src/app/page.tsx"
text = path.read_text()
start = text.index("          <div className={`${styles.inner} ${styles.aboutInner}`}>")
end = text.index("        </section>", start)
# find end of about section - first </section> after start
end = text.index("\n        </section>\n\n        <section id=\"services\"", start)

inner_start = start + len("          <div className={`${styles.inner} ${styles.aboutInner}`}>\n")
text = text[:inner_start] + NEW + text[end:]
path.write_text(text)
print("patched", "motion" in NEW)
