import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/site-seo";
import { ProductPortfolioGrid } from "../ProductPortfolioGrid";
import styles from "../page.module.css";
import homeStyles from "../home-editorial.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Selected Work",
  description:
    "Selected product and platform work from T.D. Stills across streaming, CTV, sports, education, and entertainment.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <div className={`${styles.page} ${homeStyles.home}`}>
      <main>
        <section
          className={homeStyles.tlSection}
          aria-labelledby="portfolio-heading"
          style={{ paddingTop: "clamp(7.5rem, 14vw, 10rem)" }}
        >
          <div className={styles.inner}>
            <p className={homeStyles.sectionEyebrow}>Product • Platforms • Experiences</p>
            <h1 id="portfolio-heading" className={homeStyles.tlHeadingWide}>
              Portfolio
            </h1>
            <p className={homeStyles.tlLead}>
              Selected product and platform work across streaming, CTV, sports, education,
              and entertainment.
            </p>
          </div>
        </section>

        <section
          id="work"
          className={homeStyles.productPortfolio}
          aria-label="Product portfolio"
        >
          <ProductPortfolioGrid />
        </section>
      </main>
    </div>
  );
}
