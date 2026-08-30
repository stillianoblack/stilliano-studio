import type { Metadata } from "next";
import Link from "next/link";
import { BehindTheWorkSection } from "../BehindTheWorkSection";
import { behindTheWorkItems } from "@/data/behind-the-work";
import styles from "../page.module.css";
import filmStyles from "./film.module.css";

export const metadata: Metadata = {
  title: "Film & Production | Tarus D. Stills",
  description:
    "Producing, creative direction, short films, production work, and visual storytelling — selected credits and behind-the-scenes from Tarus D. Stills.",
  openGraph: {
    title: "Film & Production | Tarus D. Stills",
    description:
      "Cinematic producing, creative direction, and visual storytelling across film, commercials, and music video.",
  },
};

const filmCredits = [
  "Produced a feature film on a 14-day shoot",
  "Produced / 1st AD on a Telly Award-winning short screened at Cannes",
  "Executive Produced a short film selected for LA Film Festival",
  "Associate Produced a Lil Baby music video",
  "Produced branded content, motion graphics, and commercial media",
];

export default function FilmPage() {
  return (
    <div className={`case-page ${filmStyles.page}`}>
      <main>
        <section className={filmStyles.hero} aria-labelledby="film-hero-heading">
          <div className={`${styles.inner} ${filmStyles.heroInner}`}>
            <p className={filmStyles.eyebrow}>Film • Production • Direction</p>
            <h1 id="film-hero-heading" className={filmStyles.title}>
              Film &amp; Production
            </h1>
            <p className={filmStyles.lead}>
              Visual storytelling shaped on set — producing, creative direction, and the
              craft of moving images from concept through production.
            </p>
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
                  video, and branded content — the same storytelling instincts that now
                  shape original IP and interactive worlds.
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
          eyebrow="On Set"
          title="Behind the Work"
          intro="Selected production stills, campaign sets, and visual storytelling from commercial, music, and narrative work."
          items={behindTheWorkItems}
        />

        <section className={filmStyles.cta} aria-labelledby="film-cta-heading">
          <div className={styles.inner}>
            <h2 id="film-cta-heading" className={filmStyles.ctaTitle}>
              Story continues beyond the frame.
            </h2>
            <p className={filmStyles.ctaBody}>
              Explore original IP development, animation, and story systems — or return to
              the full body of work.
            </p>
            <div className={filmStyles.ctaActions}>
              <Link href="/stories" className={filmStyles.ctaPrimary}>
                Stories + IP
              </Link>
              <Link href="/#work" className={filmStyles.ctaSecondary}>
                Selected Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
