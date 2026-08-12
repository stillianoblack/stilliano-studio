import { HomePortraitHero } from "./HomePortraitHero";
import { FeaturedWorldsIndex } from "./FeaturedWorldsIndex";
import styles from "./page.module.css";
import { LeadershipFeedbackSection } from "./LeadershipFeedbackSection";
import { WorkShowcase } from "./WorkShowcase";

const enginePillars = [
  {
    title: "Product Experience",
    desc: "Interaction models, feature flows, and world-facing UX designed to make story-driven products feel intuitive across film, games, web, mobile, and streaming.",
  },
  {
    title: "Brand Systems",
    desc: "Visual and narrative systems that keep characters, campaigns, and platforms cohesive as a universe scales across touchpoints.",
  },
  {
    title: "Digital Platforms",
    desc: "Websites, apps, and connected ecosystems built to support discovery, participation, and long-term audience engagement.",
  },
  {
    title: "Go-To-Market Strategy",
    desc: "Launch systems that connect creative vision to adoption — aligning teams, messaging, and operational readiness from concept to launch.",
  },
];

const growthCallouts = [
  {
    label: "50K → 200K+ MAU",
    value: "Scaled HBCU GO across OTT, web, mobile & connected TV",
  },
  {
    label: "0 → 1 Interactive Platform",
    value:
      "Architected and shipped Caiden’s Courage across student, educator & family experiences",
  },
];

const homeClientBrands = [
  "Cartoon Network",
  "PBS Kids",
  "NBA",
  "HBCU GO",
  "Genius Sports",
  "Amira Learning",
  "State Farm",
];

const marquee =
  "Story first. Systems that ship. ";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HomePortraitHero />

        <section
          className={styles.engine}
          aria-label="Growth highlights"
        >
          <div className={styles.inner}>
            <div className={styles.engineGrid}>
              {growthCallouts.map((callout) => (
                <div
                  key={callout.label}
                  className={`${styles.engineCard} ${styles.quoteCard}`}
                >
                  <h3>{callout.label}</h3>
                  <p>{callout.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.marqueeWrap} aria-label="Selected collaborators">
          <div className={`${styles.marquee} ${styles.clientMarquee}`}>
            {[0, 1].map((loop) => (
              <span key={loop} className={styles.clientMarqueeTrack}>
                {homeClientBrands.map((brand) => (
                  <span key={`${loop}-${brand}`} className={styles.clientMarqueeItem}>
                    <strong>{brand}</strong>
                    <span className={styles.clientMarqueeDot} aria-hidden>
                      ●
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <section
          id="work"
          className={`${styles.workShowcase} ${styles.workShowcaseLight}`}
          aria-labelledby="work-heading"
        >
          <div className={styles.workShowcaseInner}>
            <header className={styles.workShowcaseHead}>
              <span className="section-eyebrow">Portfolio</span>
              <h2 id="work-heading" className="section-title">
                Selected Work
              </h2>
              <p className={styles.workShowcaseSubcopy}>
                Selected work across sports technology, streaming, education, entertainment,
                retail, and interactive media — each project reflecting a different way to
                turn ideas into scalable experiences.
              </p>
            </header>

            <WorkShowcase theme="light" />
          </div>
        </section>

        <section className={styles.quoteSection} aria-label="Testimonial">
          <div className={styles.inner}>
            <span className="section-eyebrow">Recent testimony</span>
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
                    Transformation & Operations Leader
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <FeaturedWorldsIndex />

        <div className={styles.marqueeWrap} aria-hidden="true">
          <div className={styles.marquee}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>{marquee}</span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>{marquee}</span>
            ))}
          </div>
        </div>

        <section className={styles.engine} aria-labelledby="engine-heading">
          <div className={styles.inner}>
            <h2 id="engine-heading" className="section-title">
              The system behind the experience.
            </h2>
            <p className={styles.engineIntro}>
              Behind every strong creative experience is a system: the workflows, teams,
              tools, and decisions that move an idea from concept to launch.
            </p>
            <div className={styles.engineGrid}>
              {enginePillars.map((pillar) => (
                <div key={pillar.title} className={styles.engineCard}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quoteSection} aria-label="Testimonial">
          <div className={styles.inner}>
            <blockquote className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;A trusted partner for years. Consistent, reliable, and
                genuinely invested in our mission.&rdquo;
              </p>
              <footer className={styles.quoteMeta}>
                <strong>Avery Chen</strong> / Senior Director, Fieldlight Media
              </footer>
            </blockquote>
          </div>
        </section>

        <LeadershipFeedbackSection />

        <section id="contact" className={styles.footerCta}>
          <div className={styles.inner}>
            <h2 className={`section-title ${styles.footerCtaTitle}`}>
              <span
                className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineDesktop}`}
              >
                Building something{"\u00a0"}that
              </span>
              <span className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineMobile}`}>
                Building something
              </span>
              <span className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineMobile}`}>
                that
              </span>
              <span className={styles.footerCtaTitleLine}>needs to feel alive?</span>
            </h2>
            <div className={styles.footerCtaRule} aria-hidden />
            <div className={styles.footerCtaRow}>
              <p className={styles.footerNote}>
                I collaborate with teams and founders building story-driven products,
                entertainment experiences, platforms, and creative systems that need to
                move from idea to launch.
              </p>
              <a
                className={styles.footerCtaButton}
                href="mailto:stills@montage.tv"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
