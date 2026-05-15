import styles from "./page.module.css";
import { StillianoLogo } from "./StillianoLogo";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <a href="/" className={styles.footerLogo} aria-label="Stilliano Studio home">
        <StillianoLogo className="stilliano-logo" />
      </a>
      <span>© {new Date().getFullYear()} Stilliano Black</span>
      <span>Strategy · Identity · Digital product</span>
    </footer>
  );
}
