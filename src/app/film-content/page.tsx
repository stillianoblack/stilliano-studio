import type { Metadata } from "next";
import styles from "../page.module.css";
import leadStyles from "../how-i-lead/how-i-lead.module.css";
import { FilmContentHero } from "../FilmContentHero";
import { TrustedClientsSection } from "../TrustedClientsSection";
import { BehindTheWorkSection } from "../BehindTheWorkSection";
import { MoreWorkGridSection } from "../MoreWorkGrid";
import { entertainmentMediaProjects } from "@/data/selected-work";

export const metadata: Metadata = {
  title: "Film — Tarus D. Stills | Stilliano Studios",
  description:
    "Creative producer and branded media across music videos, independent film, narrative development, and entertainment campaigns.",
  openGraph: {
    title: "Film — Tarus D. Stills | Stilliano Studios",
    description:
      "Creative producer and branded media across music videos, independent film, narrative development, and entertainment campaigns.",
  },
};

export default function FilmContentPage() {
  return (
    <div className={`case-page case-page--film-content ${leadStyles.page}`}>
      <main>
        <FilmContentHero />

        <TrustedClientsSection />

        <BehindTheWorkSection />

        <section
          className={`${styles.workShowcase} ${styles.workShowcaseLight}`}
        >
          <div className={styles.workShowcaseInner}>
            <MoreWorkGridSection
              projects={entertainmentMediaProjects}
              heading="Entertainment Media"
              id="entertainment-media"
              theme="light"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
