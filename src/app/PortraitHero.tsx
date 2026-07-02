import Link from "next/link";
import { portraitHeroContent, type PortraitHeroVariant } from "@/data/portrait-hero-content";
import { portraitHeroImages } from "@/data/hero-images";
import styles from "./page.module.css";

type PortraitHeroProps = {
  variant: PortraitHeroVariant;
  proof?: string;
};

export function PortraitHero({ variant, proof }: PortraitHeroProps) {
  const content = portraitHeroContent[variant];
  const images = portraitHeroImages[variant];
  const proofLine = proof ?? content.proof;

  return (
    <section
      className={`case-hero portrait-hero portrait-hero--${variant}`}
      aria-label="Tarus D. Stills"
    >
      <picture className="case-hero-media">
        <source media="(max-width: 768px)" srcSet={images.mobile} />
        <img
          src={images.desktop}
          alt="Tarus D. Stills"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="case-hero-overlay about-hero-overlay" aria-hidden />

      <div className={`${styles.inner} case-hero-content about-hero-content`}>
        <div className="about-hero-copy">
          <p className="portrait-hero-chapter">{content.chapter}</p>
          <p className="case-hero-eyebrow about-hero-eyebrow portrait-hero-label">
            {content.label}
          </p>
          <h1 className="case-hero-title about-hero-title">
            {content.headlineLines.map((line) => (
              <span key={line} className="about-hero-title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="case-hero-subtitle about-hero-subline">{content.subcopy}</p>
          {proofLine ? <p className="about-hero-proof">{proofLine}</p> : null}
          <Link href={content.ctaHref} className="about-hero-cta">
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
