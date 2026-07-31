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

const illustrations = [
  {
    title: "Black Soniq",
    year: "2024",
    medium: "Digital illustration",
    src: "/images/Selected Works/illustrations/Black Soniq Portfolio@caiden.webp",
    alt: "Black Soniq illustration",
  },
  {
    title: "Caiden Fallen",
    year: "2024",
    medium: "Digital illustration",
    src: "/images/Selected Works/caidencourage/images/CaidenFallen@caiden.webp",
    alt: "Caiden Fallen illustration",
  },
  {
    title: "Underneath",
    year: "2024",
    medium: "Digital illustration",
    src: "/images/Selected Works/caidencourage/images/caidenunderneath@caiden.webp",
    alt: "Caiden underneath illustration",
  },
  {
    title: "My Brain Has Too Many Tabs Open",
    year: "2024",
    medium: "Digital illustration",
    src: "/images/Selected Works/illustrations/My Brain Has Too Many Tabs Open@caiden.webp",
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
