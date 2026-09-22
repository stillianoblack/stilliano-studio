import type { Metadata } from "next";
import Link from "next/link";
import {
  IDENTITY_BYLINE,
  IDENTITY_SUPPORTING_COPY,
  buildPageMetadata,
} from "@/data/site-seo";
import aboutStyles from "./about.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description: IDENTITY_SUPPORTING_COPY,
  path: "/about",
});

const selectedExperience = [
  {
    org: "HBCU GO",
    role: "Head of Product & Design / Streaming + CTV",
  },
  {
    org: "Genius Sports",
    role: "Principal Product / Fan Engagement",
  },
  {
    org: "Amira Learning",
    role: "Product / Education Technology",
  },
  {
    org: "MontageCMS / CutClass",
    role: "Founder / Streaming Technology",
  },
  {
    org: "Caiden’s Courage",
    role: "Creator / Original IP",
  },
] as const;

export default function AboutPage() {
  return (
    <div className={`case-page case-page--about ${aboutStyles.page}`}>
      <main>
        <section className={aboutStyles.hero} aria-labelledby="about-hero-heading">
          <div className={aboutStyles.inner}>
            <div className={aboutStyles.heroShell}>
              <div className={aboutStyles.heroLayout}>
                <div className={aboutStyles.heroCopy}>
                  <p className={aboutStyles.kicker}>About</p>
                  <h1 id="about-hero-heading" className={aboutStyles.heroHeading}>
                    Hey there! I&apos;m T.D.
                  </h1>
                  <p className={aboutStyles.heroByline}>{IDENTITY_BYLINE}</p>
                  <div className={aboutStyles.heroBody}>
                    <p>{IDENTITY_SUPPORTING_COPY}</p>
                    <p>
                      I&apos;m a filmmaker, author, and founder who loves building stories,
                      worlds, and experiences that help people see possibility in themselves.
                    </p>
                    <p>
                      Right now, much of my creative energy is focused on building Caiden&apos;s
                      Courage — a story-driven world designed to help kids who think differently
                      build confidence, imagination, and courage through books, media,
                      technology, and learning experiences.
                    </p>
                    <p>
                      I&apos;m also interested in what happens when a story becomes more than a
                      story — when it can become a book, an animated world, a classroom
                      experience, a game, a community, or something a kid carries with them long
                      after they&apos;ve finished reading.
                    </p>
                    <p className={aboutStyles.heroMission}>
                      My mission is to help kids see the way their minds work as something worth
                      believing in.
                    </p>
                  </div>
                </div>
                <div className={aboutStyles.heroMask}>
                  <img
                    src="/images/headshots-profiles/TD_Headshot_copy.webp"
                    alt="T.D. Stills"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${aboutStyles.section} ${aboutStyles.sectionAlt}`}
          aria-labelledby="experience-heading"
        >
          <div className={`${aboutStyles.inner} ${aboutStyles.blockInner}`}>
            <p className={aboutStyles.kicker}>Career</p>
            <h2 id="experience-heading" className={aboutStyles.heading}>
              Selected Experience
            </h2>
            <ul className={aboutStyles.experienceList}>
              {selectedExperience.map((item) => (
                <li key={item.org} className={aboutStyles.experienceItem}>
                  <p className={aboutStyles.experienceOrg}>{item.org}</p>
                  <p className={aboutStyles.experienceRole}>{item.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={aboutStyles.section}
          aria-labelledby="creative-practice-heading"
        >
          <div className={`${aboutStyles.inner} ${aboutStyles.blockInner}`}>
            <p className={aboutStyles.kicker}>Creative</p>
            <h2 id="creative-practice-heading" className={aboutStyles.heading}>
              Creative Practice
            </h2>
            <p className={aboutStyles.prose}>
              Alongside product leadership, Tarus has worked across filmmaking, producing,
              motion design, and visual storytelling. That creative background informs how he
              approaches products built around content, audiences, and entertainment.
            </p>
          </div>
        </section>

        <section
          id="speaking"
          className={`${aboutStyles.section} ${aboutStyles.sectionAlt}`}
          aria-labelledby="speaking-heading"
        >
          <div className={`${aboutStyles.inner} ${aboutStyles.blockInner}`}>
            <p className={aboutStyles.kicker}>Speaking</p>
            <h2 id="speaking-heading" className={aboutStyles.heading}>
              Creative Leadership
            </h2>
            <p className={aboutStyles.prose}>
              Ideas on media, technology, storytelling, and culture — shared through talks,
              panels, and creative leadership conversations.
            </p>
          </div>
        </section>

        <section className={aboutStyles.section} aria-labelledby="current-work-heading">
          <div className={`${aboutStyles.inner} ${aboutStyles.blockInner}`}>
            <p className={aboutStyles.kicker}>Now</p>
            <h2 id="current-work-heading" className={aboutStyles.heading}>
              Current Focus
            </h2>
            <p className={aboutStyles.prose}>
              Today, Tarus is building Caiden&apos;s Courage — an original children&apos;s
              story world spanning publishing, interactive learning, games, and media.
            </p>
          </div>
        </section>

        <section className={aboutStyles.cta} aria-labelledby="about-cta-heading">
          <div className={`${aboutStyles.inner} ${aboutStyles.ctaInner}`}>
            <h2 id="about-cta-heading" className={aboutStyles.ctaHeading}>
              Let&apos;s talk.
            </h2>
            <p className={aboutStyles.ctaBody}>
              Open to collaborations across streaming, media technology, entertainment, and
              original IP.
            </p>
            <div className={aboutStyles.ctaActions}>
              <Link href="/#contact" className={aboutStyles.ctaPrimary}>
                Get in Touch
              </Link>
              <Link href="/product" className={aboutStyles.ctaSecondary}>
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
