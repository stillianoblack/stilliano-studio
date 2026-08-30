import type { Metadata } from "next";
import Link from "next/link";
import { PortraitHero } from "../PortraitHero";
import aboutStyles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Tarus D. Stills | Product Leader, Creative Technologist & Founder",
  description:
    "Product leader across streaming, CTV, media, and content production — and creator of Caiden’s Courage.",
  openGraph: {
    title: "About Tarus D. Stills | Product Leader, Creative Technologist & Founder",
    description:
      "Product leader across streaming, CTV, media, and content production — focused on how stories are built, distributed, and experienced across screens.",
  },
};

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
    <div className="case-page case-page--about">
      <main>
        <PortraitHero variant="about" />

        <section className={aboutStyles.section} aria-labelledby="about-bio-heading">
          <div className={`${aboutStyles.inner} ${aboutStyles.bioInner}`}>
            <p className={aboutStyles.kicker}>About</p>
            <h2 id="about-bio-heading" className={aboutStyles.heading}>
              Bio
            </h2>
            <div className={aboutStyles.bioBody}>
              <p>
                Tarus D. Stills is a product leader, creative technologist, and founder with
                experience across streaming, CTV, sports, education, and entertainment. His
                work sits at the intersection of product strategy, content production, and
                audience experience — building the systems and stories people engage with
                across screens.
              </p>
              <p>
                Today, he is the creator of Caiden&apos;s Courage, an original children&apos;s
                universe spanning books, games, interactive learning, and media.
              </p>
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
          className={`${aboutStyles.section} ${aboutStyles.sectionAlt}`}
          aria-labelledby="current-work-heading"
        >
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
              <Link href="/#work" className={aboutStyles.ctaSecondary}>
                View Selected Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
