"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./page.module.css";

type HeroStageProps = {
  children: ReactNode;
};

export function HeroStage({ children }: HeroStageProps) {
  const [navElevated, setNavElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavElevated(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.heroStage} aria-label="Introduction">
      <video
        className={styles.heroVideo}
        src="/videos/Open_WIP_RandF_HBCUGO_071822.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className={styles.heroScrim} aria-hidden />
      <div className={styles.heroPattern} aria-hidden />
      <header
        className={`${styles.siteHeader} ${navElevated ? styles.siteHeaderElevated : ""}`}
      >
        <div className={styles.headerRow}>
          <a href="/" className={styles.logo} aria-label="Stilliano Studio home">
            <span className="stilliano-logo" aria-hidden />
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className={styles.navCta} href="#contact">
              Book a call
            </a>
          </nav>
        </div>
      </header>
      <div className={styles.heroStageMain}>{children}</div>
    </section>
  );
}
