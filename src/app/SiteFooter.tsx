import styles from "./page.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <a href="/" className={styles.footerLogo} aria-label="T.D. Stills home">
        <img
          src="/images/SVGS/TDLogo.svg"
          alt=""
          className={styles.footerLogoMark}
          width={40}
          height={40}
        />
      </a>
      <span className={styles.footerCopyright}>
        © {new Date().getFullYear()} T.D. Stills
      </span>
      <span className={styles.footerTagline}>Filmmaker · Author · Tech Founder</span>
    </footer>
  );
}
