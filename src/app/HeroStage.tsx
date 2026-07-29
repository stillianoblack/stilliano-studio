import type { ReactNode } from "react";
import styles from "./page.module.css";

type HeroStageProps = {
  children: ReactNode;
};

export function HeroStage({ children }: HeroStageProps) {
  return (
    <section className={styles.heroStage} aria-label="Introduction">
      <video
        className={styles.heroVideo}
        src="/videos/HBCUgomaster.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className={styles.heroScrim} aria-hidden />
      <div className={styles.heroPattern} aria-hidden />
      <div className={styles.heroStageMain}>{children}</div>
    </section>
  );
}
