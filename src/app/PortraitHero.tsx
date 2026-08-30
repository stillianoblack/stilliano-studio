import Link from "next/link";
import {
  portraitHeroContent,
  type PortraitHeroProof,
  type PortraitHeroVariant,
} from "@/data/portrait-hero-content";
import { portraitHeroImages } from "@/data/hero-images";
import styles from "./page.module.css";

type PortraitHeroProps = {
  variant: PortraitHeroVariant;
  proof?: PortraitHeroProof;
};

function HeroProof({ proof }: { proof: PortraitHeroProof }) {
  if (typeof proof === "string") {
    return <p className="about-hero-proof">{proof}</p>;
  }

  return (
    <p className="about-hero-proof">
      {proof.prefix}{" "}
      <em className="about-hero-proof-clients">{proof.clients}</em>
    </p>
  );
}

export function PortraitHero({ variant, proof }: PortraitHeroProps) {
  const content = portraitHeroContent[variant];
  const images = portraitHeroImages[variant];
  const proofContent = proof ?? content.proof;

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
          {content.chapter ? (
            <p className="portrait-hero-chapter">{content.chapter}</p>
          ) : null}
          {content.label ? (
            <p className="case-hero-eyebrow about-hero-eyebrow portrait-hero-label">
              {content.label}
            </p>
          ) : null}
          <h1 className="case-hero-title about-hero-title">
            {content.headlineLines.map((line) => (
              <span
                key={line.parts.map((part) => part.text).join("")}
                className="about-hero-title-line"
              >
                {line.parts.map((part) =>
                  part.accent ? (
                    <span key={part.text} className="portrait-hero-title-accent">
                      {part.text}
                    </span>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </span>
            ))}
          </h1>
          {content.roles ? (
            <p className="about-hero-roles">{content.roles}</p>
          ) : null}
          <p className="case-hero-subtitle about-hero-subline">{content.subcopy}</p>
          {proofContent ? <HeroProof proof={proofContent} /> : null}
          {content.ctaHref.startsWith("#") ? (
            <a href={content.ctaHref} className="about-hero-cta">
              {content.ctaLabel}
            </a>
          ) : (
            <Link href={content.ctaHref} className="about-hero-cta">
              {content.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
