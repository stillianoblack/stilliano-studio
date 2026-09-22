import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/data/site-seo";
import { BehindTheWorkSection } from "../BehindTheWorkSection";
import { TrustedClientsSection } from "../TrustedClientsSection";
import { storiesBehindTheWorkItems } from "@/data/stories-behind-the-work";
import { entertainmentMediaProjects } from "@/data/selected-work";
import { CreativeDevelopmentSlate } from "../stories/CreativeDevelopmentSlate";
import {
  DevelopmentProcessSection,
  StoriesRecognitionSection,
  StorySystemsSection,
} from "../stories/StoriesSections";
import styles from "../page.module.css";
import filmStyles from "../film/film.module.css";
import homeStyles from "../home-editorial.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Storyteller",
  description:
    "Stories and systems from T.D. Stills across entertainment, streaming, education, gaming, and emerging technology.",
  path: "/content-strategy",
});

const filmCredits = [
  "Produced a feature film on a 14-day shoot",
  "Produced / 1st AD on a Telly Award-winning short screened at Cannes",
  "Executive Produced a short film selected for LA Film Festival",
  "Associate Produced a Lil Baby music video",
  "Produced branded content, motion graphics, and commercial media",
];

const filmProjectGroups = [
  {
    category: "Narrative Film",
    projects: entertainmentMediaProjects.filter((project) =>
      ["tripping-the-fantastic", "narrative-film"].includes(project.slug),
    ),
  },
  {
    category: "Digital Content",
    projects: entertainmentMediaProjects.filter(
      (project) => project.slug === "music-video",
    ),
  },
] as const;

export default function ContentStrategyPage() {
  const projectGroups = filmProjectGroups.filter((group) => group.projects.length > 0);

  return (
    <div className={`${styles.page} ${homeStyles.home} ${filmStyles.page}`}>
      <main>
        <section
          className={homeStyles.tlSection}
          aria-labelledby="content-strategy-hero-heading"
          style={{ paddingTop: "clamp(7.5rem, 14vw, 10rem)" }}
        >
          <div className={styles.inner}>
            <p className={homeStyles.sectionEyebrow}>Film • Stories • Original IP</p>
            <h1 id="content-strategy-hero-heading" className={homeStyles.tlHeadingWide}>
              Storyteller
            </h1>
            <p className={homeStyles.tlLead}>
              Stories and systems built across entertainment, streaming, education,
              gaming, and emerging technology.
            </p>
          </div>
        </section>

        <TrustedClientsSection
          headline="Partners across entertainment, education, streaming, and emerging technology."
          subcopy="Selected clients and collaborators from film, games, brands, and platforms."
        />

        <section
          id="film"
          className={filmStyles.projects}
          aria-labelledby="film-projects-heading"
        >
          <div className={styles.inner}>
            <p className={filmStyles.eyebrow}>Producer • Content Strategy • Programming</p>
            <h2 id="film-projects-heading" className={filmStyles.creditsTitle}>
              Film / Production
            </h2>

            <div className={filmStyles.projectGroups}>
              {projectGroups.map((group) => (
                <div key={group.category} className={filmStyles.projectGroup}>
                  <h3 className={filmStyles.projectGroupTitle}>{group.category}</h3>
                  <div className={filmStyles.projectGrid}>
                    {group.projects.map((item) => (
                      <article key={item.slug} className={filmStyles.projectCard}>
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className={filmStyles.projectCardBody}>
                          <p className={filmStyles.projectCardTitle}>{item.title}</p>
                          <p className={filmStyles.projectCardMeta}>{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={filmStyles.credits}
          aria-labelledby="film-credits-heading"
        >
          <div className={styles.inner}>
            <div className={filmStyles.creditsLayout}>
              <div>
                <p className={filmStyles.eyebrow}>Selected Credits</p>
                <h2 id="film-credits-heading" className={filmStyles.creditsTitle}>
                  From set to screen.
                </h2>
                <p className={filmStyles.creditsBody}>
                  Production experience across narrative film, commercial campaigns, music
                  video, and branded content.
                </p>
              </div>
              <ul className={filmStyles.creditList}>
                {filmCredits.map((credit) => (
                  <li key={credit}>{credit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <BehindTheWorkSection
          eyebrow="Development"
          title="Behind the Development"
          intro="A look inside the creative reviews, production environments, animation workflows, and collaborative systems behind the stories and experiences I've helped bring to life."
          items={storiesBehindTheWorkItems}
        />

        <section id="stories" aria-label="Stories and original IP">
          <StoriesRecognitionSection />

          <CreativeDevelopmentSlate />

          <StorySystemsSection />

          <DevelopmentProcessSection />
        </section>

        <section className={filmStyles.cta} aria-labelledby="content-cta-heading">
          <div className={styles.inner}>
            <h2 id="content-cta-heading" className={filmStyles.ctaTitle}>
              Explore product work.
            </h2>
            <p className={filmStyles.ctaBody}>
              Platforms, streaming experiences, and digital products — or return home.
            </p>
            <div className={filmStyles.ctaActions}>
              <Link href="/product" className={filmStyles.ctaPrimary}>
                Portfolio
              </Link>
              <Link href="/" className={filmStyles.ctaSecondary}>
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
