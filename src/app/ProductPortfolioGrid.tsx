"use client";

import Link from "next/link";
import {
  featuredWorkProjects,
  interactiveMediaProjects,
  type FeaturedWorkProject,
  type ProjectMediaItem,
} from "@/data/selected-work";
import { homeOnlyWorkProjects } from "@/data/home-selected-work";
import styles from "./work-showcase.module.css";
import homeStyles from "./home-editorial.module.css";

/** Product portfolio order — visual grids only (role + title + media). */
export const productPortfolioSlugs = [
  "hbcugo",
  "local-now",
  "montagecms",
  "genius-sports",
  "amira-learning",
] as const;

const productCategories: Record<string, string> = {
  hbcugo: "Head of Product",
  "local-now": "Product Manager",
  montagecms: "Head of Product, Design, and Content",
  "genius-sports": "Principal Product",
  "amira-learning": "Interactive Product Manager",
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ProjectMediaCard({
  item,
  href,
  ariaLabel,
}: {
  item: ProjectMediaItem;
  href?: string;
  ariaLabel: string;
}) {
  const className = `${styles.projectMediaCard}${
    item.wide ? ` ${styles.projectMediaCardWide}` : ""
  }${item.fillRowHeight ? ` ${styles.projectMediaCardRowFill}` : ""}${
    item.centerMedia ? ` ${styles.projectMediaCardCenteredMedia}` : ""
  }${item.aspectRatio ? ` ${styles.projectMediaCardFit}` : ""}`;

  const cardStyle = {
    ...(item.aspectRatio ? { aspectRatio: item.aspectRatio } : {}),
    ...(item.cardBackground ? { background: item.cardBackground } : {}),
  } as React.CSSProperties;

  const hasCardStyle = item.aspectRatio != null || item.cardBackground != null;

  const hasMediaStyle =
    item.objectPosition != null ||
    item.objectFit != null ||
    item.mediaScale != null;

  const mediaStyle: React.CSSProperties = {
    ...(item.objectPosition ? { objectPosition: item.objectPosition } : {}),
    ...(item.objectFit ? { objectFit: item.objectFit } : {}),
    ...(item.mediaScale != null
      ? { transform: `scale(${item.mediaScale})` }
      : {}),
  };

  const media = item.video ? (
    <video
      className={styles.projectVideo}
      src={item.video}
      poster={item.poster}
      style={hasMediaStyle ? mediaStyle : undefined}
      autoPlay
      loop
      muted
      playsInline
      aria-label={item.label}
    >
      {item.video.endsWith(".mov") ? (
        <source src={item.video} type="video/quicktime" />
      ) : null}
    </video>
  ) : (
    <img
      className={styles.projectMediaImage}
      src={item.image}
      alt={item.label}
      style={hasMediaStyle ? mediaStyle : undefined}
      loading="lazy"
      decoding="async"
    />
  );

  if (href && isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        style={hasCardStyle ? cardStyle : undefined}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {media}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        style={hasCardStyle ? cardStyle : undefined}
        aria-label={ariaLabel}
      >
        {media}
      </Link>
    );
  }

  return (
    <div className={className} style={hasCardStyle ? cardStyle : undefined} aria-label={ariaLabel}>
      {media}
    </div>
  );
}

function VisualProjectBlock({ project }: { project: FeaturedWorkProject }) {
  const category = productCategories[project.slug] ?? project.kicker;

  return (
    <article className={homeStyles.visualProject}>
      <div className={homeStyles.visualProjectHead}>
        <p className={homeStyles.workCategory}>{category}</p>
        <h2 className={homeStyles.visualProjectTitle}>{project.campaignTitle}</h2>
        {project.href ? (
          isExternalHref(project.href) ? (
            <a
              href={project.href}
              className={homeStyles.workCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          ) : (
            <Link href={project.href} className={homeStyles.workCta}>
              View Project →
            </Link>
          )
        ) : null}
      </div>

      <div className={styles.projectMediaGrid} data-project={project.slug}>
        {project.media.map((item) => (
          <ProjectMediaCard
            key={`${project.slug}-${item.label}`}
            item={item}
            href={project.href}
            ariaLabel={`${project.campaignTitle}: ${item.label}`}
          />
        ))}
      </div>
    </article>
  );
}

/** Image-first product portfolio — role, title, CTA, media grids only. */
export function ProductPortfolioGrid() {
  const projectIndex = new Map(
    [...featuredWorkProjects, ...homeOnlyWorkProjects].map((project) => [
      project.slug,
      project,
    ]),
  );

  const projects = productPortfolioSlugs
    .map((slug) => projectIndex.get(slug))
    .filter((project): project is FeaturedWorkProject => project != null);

  return (
    <div className={`${styles.workSection} ${styles.workSectionLight} ${homeStyles.visualWork}`}>
      <div className={styles.workInner}>
        <div className={styles.featuredStack}>
          {projects.map((project) => (
            <VisualProjectBlock key={project.slug} project={project} />
          ))}

          <article className={homeStyles.visualProject}>
            <div className={homeStyles.visualProjectHead}>
              <p className={homeStyles.workCategory}>Interactive Media</p>
              <h2 className={homeStyles.visualProjectTitle}>Platform Experiences</h2>
            </div>
            <div className={homeStyles.filmGrid}>
              {interactiveMediaProjects.map((item) => (
                <div key={item.slug} className={homeStyles.filmCard}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
