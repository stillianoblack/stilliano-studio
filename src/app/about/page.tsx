import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import { PortraitHero } from "../PortraitHero";
import { HomeAboutSection } from "../HomeAboutSection";
import { ServicesLeadershipSection } from "../ServicesLeadershipSection";

export const metadata: Metadata = {
  title: "Tarus D. Stills — Creating Story-Driven Worlds Across Film, Games & Interactive Media | Stilliano Studios",
  description:
    "Creative Product Executive, Producer, and Creative Technologist building original worlds through film, games, AI, publishing, education, and interactive experiences.",
  openGraph: {
    title: "Tarus D. Stills — Creating Story-Driven Worlds Across Film, Games & Interactive Media | Stilliano Studios",
    description:
      "Creative Product Executive, Producer, and Creative Technologist building original worlds through film, games, AI, publishing, education, and interactive experiences.",
  },
};

const CLIENT_PROOF =
  "Cartoon Network \u2022 PBS Kids \u2022 DC Comics \u2022 Amira Learning \u2022 HBCUGo";

const coreStrengths = [
  "Creative Direction",
  "Product Strategy",
  "Audience Engagement",
  "Interactive ExP.",
  "Brand Systems",
  "Experience Design",
  "Storytelling",
  "Gamification",
  "Emerging Technology",
  "Cross-Functional Leadership",
  "Go-To-Market Thinking",
  "Platform Design",
];

export default function AboutPage() {
  return (
    <div className="case-page case-page--about">
      <main>
        <PortraitHero variant="about" proof={CLIENT_PROOF} />

        <HomeAboutSection />

        <ServicesLeadershipSection ctaHref="/#contact" />

        <section
          className="case-section section-spacing about-section about-stilliano-editorial"
          aria-labelledby="stilliano-heading"
        >
          <div className={`${styles.inner} about-stilliano-inner`}>
            <p className="about-section-kicker">Who is Stilliano</p>
            <h2 id="stilliano-heading" className="about-stilliano-heading">
              Product. Story. Systems.
            </h2>
            <div className="about-stilliano-body">
              <p>
                I lead multidisciplinary teams across creative, product, and emerging
                technology to build interactive experiences, products, and brands that
                create lasting customer value.
              </p>
              <p>
                I build experiences that sit between product, story, and culture.
              </p>
              <p>
                Over the last decade I&apos;ve led work across sports streaming,
                children&apos;s media, AI learning platforms, retail technology,
                interactive installations, and original IP development.
              </p>
              <p>
                My work combines product thinking, audience engagement, creative
                direction, and emerging technology to help ideas become systems people
                actually return to.
              </p>
              <p>
                Whether designing fan engagement ecosystems, interactive learning
                platforms, retail experiences, or story-driven worlds, I focus on
                creating experiences that connect emotionally and scale strategically.
              </p>
              <p className="about-stilliano-closing">
                Design is the tool. Engagement is the outcome.
              </p>
            </div>
          </div>
        </section>

        <section
          className="case-section case-section-dark section-spacing about-section about-section--strengths"
          aria-labelledby="about-strengths-heading"
        >
          <div className={styles.inner}>
            <p className="about-section-kicker about-section-kicker--light">Focus Areas</p>
            <h2
              id="about-strengths-heading"
              className="case-heading display-heading display-heading--light display-heading-xl"
            >
              Core Strengths
            </h2>
            <ul className="about-strengths-grid" aria-label="Core strengths">
              {coreStrengths.map((strength) => (
                <li key={strength} className="about-strength-pill">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="case-cta about-cta section-spacing"
          aria-labelledby="about-cta-heading"
        >
          <div className={styles.inner}>
            <div className="about-cta-inner">
              <h2
                id="about-cta-heading"
                className="case-heading display-heading display-heading-xl about-cta-heading"
              >
                <span className="about-cta-heading-line">
                  Let&apos;s build experiences people return to.
                </span>
              </h2>
              <p className="about-cta-body">
                From audience platforms and interactive products to brand ecosystems and
                original IP, I help organizations connect strategy, story, and execution.
              </p>
              <div className="about-cta-actions">
                <Link href="/#contact" className="about-hero-cta">
                  Get in Touch
                </Link>
                <Link href="/#work" className="about-cta-secondary">
                  View Selected Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
