import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/site-seo";
import styles from "../page.module.css";
import homeStyles from "../home-editorial.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Books & Products",
  description:
    "Current books and products from T.D. Stills — including Caiden's Courage and Montage.",
  path: "/books-and-products",
});

const portfolioBase = "/images/Portfolio%20Cards/Caidenscourage";

const items = [
  {
    id: "caiden-book",
    eyebrow: "Book + Original IP",
    title: "Caiden's Courage",
    body: "Caiden never expected to discover a hidden world filled with dragons, ancient guardians, and the mysterious Focus Flame.\n\nWhen darkness threatens both worlds, he must learn to trust himself, protect those he loves, and discover that the qualities that make him different may also become his greatest strength. A cinematic full-color fantasy adventure about courage, friendship, and discovering the hero within.",
    href: "https://caidenvale.com/",
    cta: "Explore the Book",
    image: `${portfolioBase}/CaidenBook.webp`,
    imageAlt: "Caiden's Courage book cover",
    external: true,
  },
  {
    id: "workbook",
    eyebrow: "Workbook",
    title: "Courage Companion Activity Workbook",
    body: "The Courage Companion Activity Workbook is the official hands-on companion to Caiden's Courage. Packed with coloring pages, brain puzzles, story-based activities, reflection prompts, and creative challenges, it transforms reading into an interactive adventure. Designed for ages 7–12, it helps children strengthen reading comprehension, critical thinking, communication, and confidence while continuing their journey through the world of Caiden's Courage.",
    href: "https://caidenvale.com/story/books",
    cta: "Explore the Workbook",
    image: `${portfolioBase}/CaidensCourage_ColoringBook_work%201%20copy.webp`,
    imageAlt: "Courage Companion Activity Workbook",
    external: true,
  },
  {
    id: "interactive-platform",
    eyebrow: "Software",
    title: "Interactive Learning Platform",
    body: "Combining story-driven adventures, digital missions, printable activities, educator tools, and family resources, Students can continue the adventure by completing missions, earning Focus Coins and rewards, unlocking new experiences, and exploring interactive games that reinforce reading comprehension and social-emotional learning.",
    href: "https://caidenscourage.com/",
    cta: "Explore the Platform",
    image: `${portfolioBase}/InteractivePlatform.webp`,
    imageAlt: "Caiden's Courage interactive learning platform",
    external: true,
  },
  {
    id: "montage",
    eyebrow: "Media Technology + AI",
    title: "Montage",
    body: "An AI-native media operating system connecting content, streaming, distribution, analytics, and creator workflows — infrastructure for creators who need more than another place to upload.",
    href: "/work/montagecms",
    cta: "Explore Montage",
    image: "/images/Selected%20Works/MontageCMS/montagecms-hero.webp",
    imageAlt: "Montage media technology platform",
    external: false,
  },
] as const;

export default function BooksAndProductsPage() {
  return (
    <div className={`${styles.page} ${homeStyles.home}`}>
      <main>
        <section
          className={homeStyles.tlSection}
          aria-labelledby="books-products-heading"
          style={{ paddingTop: "clamp(7.5rem, 14vw, 10rem)" }}
        >
          <div className={styles.inner}>
            <p className={homeStyles.sectionEyebrow}>Books • IP • Products</p>
            <h1 id="books-products-heading" className={homeStyles.tlHeadingWide}>
              Books &amp; Products
            </h1>
            <p className={homeStyles.tlLead}>
              Things I&apos;ve created and continue to build — from original story worlds
              to interactive learning experiences.
            </p>
          </div>
        </section>

        <section className={homeStyles.tlSection} aria-label="Books and products">
          <div className={styles.inner}>
            <div className={homeStyles.ventureStack}>
              {items.map((item, index) => (
                <article key={item.id} className={homeStyles.venture}>
                  <div className={homeStyles.ventureMedia}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <div className={homeStyles.ventureCopy}>
                    <p className={homeStyles.ventureEyebrow}>{item.eyebrow}</p>
                    <h2 className={homeStyles.ventureTitle}>{item.title}</h2>
                    <p className={homeStyles.ventureBody}>{item.body}</p>
                    <a
                      href={item.href}
                      className={homeStyles.heroCta}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
