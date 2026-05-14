import Link from "next/link";
import styles from "../../page.module.css";

const services = [
  "Product Design",
  "CTV Strategy",
  "Live Streaming UX",
  "Brand Experience",
];

const approachCards = [
  {
    title: "Product Experience",
    desc: "Designed viewing flows and interface patterns for live sports and streaming audiences.",
  },
  {
    title: "CTV Strategy",
    desc: "Considered how content, navigation, and engagement translate across connected TV environments.",
  },
  {
    title: "Cultural Presentation",
    desc: "Balanced sports utility with the cultural energy and storytelling unique to HBCU audiences.",
  },
];

const visualCards = [
  "Live Game Experience",
  "CTV Interface System",
  "Event Landing Page",
  "Fan Engagement Moments",
];

export default function HBCUGoCaseStudyPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className="case-hero" aria-label="Case study hero">
          <div className={styles.inner}>
            <Link
              href="/#work"
              className={styles.workAllLink}
              style={{ color: "rgba(247, 247, 244, 0.72)" }}
            >
              ← Back to work
            </Link>
            <h1 className="case-title">HBCUgo</h1>
            <p className="case-subtitle">
              Streaming strategy, product experience, and digital presentation for
              live sports and culture.
            </p>
          </div>
        </section>

        <section aria-label="Case study overview" style={{ background: "#ffffff" }}>
          <div className={styles.inner}>
            <div className="case-meta-grid">
              <div>
                <h3>Services</h3>
                <ul>
                  {services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Project</h3>
                <ul>
                  <li>HBCUgo / HBCU Legacy Classics</li>
                </ul>
              </div>

              <div>
                <h3>Overview</h3>
                <p>
                  Stilliano Studio presents HBCUgo as a case study in live streaming,
                  sports storytelling, and culturally-driven digital experiences. The
                  work centered on shaping a digital product experience for audiences
                  engaging with HBCU sports, culture, and live content across connected
                  TV and streaming platforms.
                </p>
                <p style={{ marginTop: "1.25rem" }}>
                  The goal was to create a viewing experience that felt clear, premium,
                  and culturally relevant—supporting live game discovery, event
                  presentation, sponsor visibility, and fan engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="challenge-heading">
          <div className={styles.inner}>
            <h2 id="challenge-heading">The Challenge</h2>
            <p>
              Live sports experiences require more than a video player. They need
              intuitive navigation, clear event hierarchy, branded presentation, and a
              viewing flow that keeps audiences engaged before, during, and after the
              game.
            </p>
          </div>
        </section>

        <section className="case-section" aria-labelledby="approach-heading">
          <div className={styles.inner}>
            <h2 id="approach-heading">The Approach</h2>
            <div className="case-approach-grid">
              {approachCards.map((card) => (
                <article key={card.title} className="case-approach-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="visuals-heading">
          <div className={styles.inner}>
            <h2 id="visuals-heading">Selected Visual Direction</h2>
            <div className="case-visual-grid" role="list">
              {visualCards.map((title, i) => (
                <article key={title} className="case-visual-card" role="listitem">
                  <div className="case-visual-label">
                    <strong>{title}</strong>
                    <span>Placeholder {i + 1}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-cta" aria-label="Start a project">
          <div className={styles.inner}>
            <h2>
              Have a streaming, product, or digital experience that needs to feel
              bigger?
            </h2>
            <Link href="/#contact" className={styles.btnPrimary}>
              Start a Project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

