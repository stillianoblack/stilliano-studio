import type { Metadata } from "next";
import styles from "./not-work.module.css";

export const metadata: Metadata = {
  title: "Original Worlds — Tarus D. Stills | Stilliano Studios",
  description:
    "Selected illustrations from the Caiden's Courage universe and personal creative work.",
  openGraph: {
    title: "Original Worlds — Tarus D. Stills | Stilliano Studios",
    description:
      "Selected illustrations from the Caiden's Courage universe and personal creative work.",
  },
};

const ILLUSTRATIONS = "/images/Selected%20Works/illustrations";
const CC = "/images/Selected%20Works/caidencourage/images";

const illustrations = [
  {
    title: "Black Soniq",
    year: "2024",
    medium: "Digital illustration",
    src: `${ILLUSTRATIONS}/Black%20Soniq%20Portfolio%40caiden.webp`,
    alt: "Black Soniq illustration",
  },
  {
    title: "Caiden Fallen",
    year: "2024",
    medium: "Digital illustration",
    src: `${CC}/CaidenFallen%40caiden.webp`,
    alt: "Caiden Fallen illustration",
  },
  {
    title: "Underneath",
    year: "2024",
    medium: "Digital illustration",
    src: `${CC}/caidenunderneath%40caiden.webp`,
    alt: "Caiden underneath illustration",
  },
  {
    title: "My Brain Has Too Many Tabs Open",
    year: "2024",
    medium: "Digital illustration",
    src: `${ILLUSTRATIONS}/My%20Brain%20Has%20Too%20Many%20Tabs%20Open%40caiden.webp`,
    alt: "My Brain Has Too Many Tabs Open illustration",
  },
] as const;

export default function NotWorkPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Original Worlds</h1>
        </header>

        <ul className={styles.grid} aria-label="Original worlds">
          {illustrations.map((piece) => (
            <li key={piece.title} className={styles.item}>
              <figure className={styles.figure}>
                <img
                  className={styles.image}
                  src={piece.src}
                  alt={piece.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className={styles.meta}>
                <h2 className={styles.pieceTitle}>{piece.title}</h2>
                <p className={styles.pieceDetail}>Year: {piece.year}</p>
                <p className={styles.pieceDetail}>Medium: {piece.medium}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
