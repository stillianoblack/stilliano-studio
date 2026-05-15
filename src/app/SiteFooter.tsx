import styles from "./page.module.css";
import { StillianoLogo } from "./StillianoLogo";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <a href="/" className={styles.footerLogo} aria-label="Stilliano Studio home">
        <StillianoLogo className="stilliano-logo" />
      </a>
      <span className={styles.footerCopyright}>
        © {new Date().getFullYear()} Stilliano Black
      </span>
      <span className={styles.footerTagline}>Strategy · Identity · Digital product</span>
    </footer>
  );
}
