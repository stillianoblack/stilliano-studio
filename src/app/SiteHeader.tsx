"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export function SiteHeader() {
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
    <header
      className={`${styles.siteHeader} ${navElevated ? styles.siteHeaderElevated : ""}`}
    >
      <div className={styles.headerRow}>
        <a href="/" className={styles.logo} aria-label="Stilliano Studio home">
          <span className="stilliano-logo" aria-hidden />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a className={styles.navCta} href="/#contact">
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
