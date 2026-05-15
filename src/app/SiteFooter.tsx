import styles from "./page.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <a href="/" className={styles.footerLogo} aria-label="Stilliano Studio home">
        <span className="stilliano-logo" aria-hidden />
      </a>
      <span>© {new Date().getFullYear()} Stilliano Black</span>
      <span>Strategy · Identity · Digital product</span>
    </footer>
  );
}
