"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const navLinks: Array<{ href: string; label: string; cta?: boolean }> = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Portfolio" },
  { href: "/content-strategy", label: "Storyteller" },
  { href: "/books-and-products", label: "Books & Products" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isNarrow, setIsNarrow] = useState(false);
  /* Light pages need dark idle nav (default idle styles assume a dark hero). */
  const isLightHeaderPage =
    pathname === "/not-work" ||
    pathname === "/product" ||
    pathname === "/content-strategy" ||
    pathname === "/books-and-products" ||
    pathname === "/about" ||
    pathname.startsWith("/work/") ||
    /* Mobile homepage uses a light stacked hero */
    (pathname === "/" && isNarrow);
  const [navElevated, setNavElevated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setNavElevated(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const showElevated = isLightHeaderPage || navElevated || menuOpen;

  return (
    <header
      className={`${styles.siteHeader} ${showElevated ? styles.siteHeaderElevated : ""}`}
    >
      <div className={styles.siteHeaderShell}>
        <div className={styles.siteHeaderBar}>
          <div className={styles.headerRow}>
            <a href="/" className={styles.logo} aria-label="T.D. Stills home">
              <img
                src="/images/SVGS/TDLogo.svg"
                alt=""
                className={styles.logoMark}
                width={36}
                height={36}
              />
              <span className={styles.logoDivider} aria-hidden>
                |
              </span>
              <span className={styles.logoWordmark}>
                <span className={styles.logoPrimary}>T.D. STILLS</span>
              </span>
            </a>

            <nav className={styles.nav} aria-label="Primary">
              {navLinks.map((link) =>
                link.cta ? (
                  <a key={link.href} className={styles.navCta} href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <button
              type="button"
              className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={styles.menuButtonBars} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`${styles.mobileNavPanel} ${menuOpen ? styles.mobileNavPanelOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={styles.mobileNavBackdrop}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <nav className={styles.mobileNav} aria-label="Mobile">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={styles.mobileNavItem}
                style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  className={link.cta ? styles.mobileNavCta : styles.mobileNavLink}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
