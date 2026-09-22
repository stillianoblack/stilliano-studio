import Link from "next/link";
import {
  homeDisciplineTiles,
  type HomeDisciplineTile,
} from "@/data/home-discipline-mosaic";
import styles from "./home-editorial.module.css";

const sizeClass: Record<HomeDisciplineTile["size"], string> = {
  portrait: styles.mosaicTile_portrait,
  landscape: styles.mosaicTile_landscape,
  medium: styles.mosaicTile_medium,
  compact: styles.mosaicTile_compact,
  wide: styles.mosaicTile_wide,
};

export function HomeDisciplineMosaic() {
  return (
    <section
      id="disciplines"
      className={styles.mosaicSection}
      aria-labelledby="disciplines-heading"
    >
      <div className={styles.mosaicInner}>
        <header className={styles.mosaicHead}>
          <p className={styles.sectionEyebrow}>Selected Disciplines</p>
          <h2 id="disciplines-heading" className={styles.mosaicTitle}>
            Where Product, Story, and Culture Meet.
          </h2>
        </header>

        <div className={styles.mosaic}>
          {homeDisciplineTiles.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`${styles.mosaicTile} ${sizeClass[tile.size]}`}
              aria-label={`${tile.label}: ${tile.title}. ${tile.description}`}
            >
              <div className={styles.mosaicMedia}>
                {/* Replace /public/images/home/*-placeholder.webp with final photography */}
                <img src={tile.image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className={styles.mosaicOverlay} aria-hidden />
              <div className={styles.mosaicContent}>
                <p className={styles.mosaicLabel}>{tile.label}</p>
                <div className={styles.mosaicReveal}>
                  <h3 className={styles.mosaicTileTitle}>{tile.title}</h3>
                  <p className={styles.mosaicTileDesc}>{tile.description}</p>
                  <span className={styles.mosaicCta}>View Work →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
