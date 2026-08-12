import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import { PortraitHero } from "../PortraitHero";
import { HomeAboutSection } from "../HomeAboutSection";
import { ServicesLeadershipSection } from "../ServicesLeadershipSection";

export const metadata: Metadata = {
  title:
    "Tarus D. Stills — Creative Technologist & Product Innovation Leader | Stilliano Studios",
  description:
    "Creative technologist and product leader working across generative AI, entertainment, interactive experiences, and emerging platforms.",
  openGraph: {
    title:
      "Tarus D. Stills — Creative Technologist & Product Innovation Leader | Stilliano Studios",
    description:
      "Creative technologist and product leader working across generative AI, entertainment, interactive experiences, and emerging platforms.",
  },
};

const coreStrengths = [
  "Product Strategy",
  "Creative Technology",
  "Generative AI",
  "Rapid Prototyping",
  "Interactive Systems",
  "Platform Architecture",
  "Entertainment Technology",
  "Streaming Platforms",
  "Audience Experience",
  "Zero-to-One Development",
  "GTM Strategy",
];

export default function AboutPage() {
  return (
    <div className="case-page case-page--about">
      <main>
        <PortraitHero variant="about" />

        <section
          className="case-section about-intent-callout section-spacing"
          aria-label="Career focus"
        >
          <div className={styles.inner}>
            <blockquote className="about-intent-quote">
              <p>
                I&apos;m looking for leadership roles where I can drive innovation in
                generative AI for film, animation, and video games — building products,
                platforms, and experiences from zero to one.
              </p>
            </blockquote>
            <p className="about-intent-support">
              Product vision • Creative technology • Emerging platforms • Zero-to-one
              innovation
            </p>
          </div>
        </section>

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
                I don&apos;t separate product strategy from creative execution, or
                technology from audience experience.
              </p>
              <p>
                I work across those systems because the strongest products emerge when
                they&apos;re designed together — from the customer problem and product
                architecture to the working prototype, creative experience, and path to
                market.
              </p>
              <p>
                My work has moved across streaming, animation, interactive entertainment,
                creator platforms, AI, branded content, and original IP — but the
                throughline has remained the same: understanding how product, story,
                technology, and audience behavior connect.
              </p>
              <p className="about-stilliano-closing">
                Systems are the tool. Engagement is the outcome.
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
                I&apos;m interested in leadership opportunities across creative
                technology, product innovation, generative AI, entertainment, and
                emerging platforms.
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
