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
        src="/videos/Open_WIP_RandF_HBCUGO_071822.mov"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className={styles.heroScrim} aria-hidden />
      <div className={styles.heroPattern} aria-hidden />
      <div className={styles.heroStageMain}>{children}</div>
    </section>
  );
}
