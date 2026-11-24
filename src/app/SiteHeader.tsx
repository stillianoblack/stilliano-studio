"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const navLinks: Array<{ href: string; label: string }> = [
  { href: "/product", label: "Portfolio" },
];

export function SiteHeader() {
  const pathname = usePathname();
  /* Light pages need dark idle nav (default idle styles assume a dark hero). */
  const isLightHeaderPage =
    pathname === "/" ||
    pathname === "/not-work" ||
    pathname === "/product" ||
    pathname === "/content-strategy" ||
    pathname === "/books-and-products" ||
    pathname === "/about" ||
    pathname.startsWith("/work/");
  const [navElevated, setNavElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavElevated(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showElevated = isLightHeaderPage || navElevated;

  return (
    <header
      className={`${styles.siteHeader} ${showElevated ? styles.siteHeaderElevated : ""}`}
    >
      <div className={styles.siteHeaderShell}>
        <div className={styles.siteHeaderBar}>
          <div className={styles.headerRow}>
            <Link href="/" className={styles.logo} aria-label="T.D. Stills home">
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
            </Link>

            <nav className={styles.nav} aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
