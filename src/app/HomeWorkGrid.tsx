"use client";

import Link from "next/link";
import {
  entertainmentMediaProjects,
  featuredWorkProjects,
  type FeaturedWorkProject,
  type ProjectMediaItem,
} from "@/data/selected-work";
import { homeOnlyWorkProjects, homeSelectedWorkSlugs } from "@/data/home-selected-work";
import styles from "./work-showcase.module.css";
import homeStyles from "./home-editorial.module.css";

const homeCategories: Record<string, string> = {
  hbcugo: "Head of Product",
  "local-now": "Product Manager",
  "caidens-courage": "Founder",
  montagecms: "Head of Product, Design, and Content",
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
  const category = homeCategories[project.slug] ?? project.kicker;

  return (
    <article className={homeStyles.visualProject}>
      <div className={homeStyles.visualProjectHead}>
        <p className={homeStyles.workCategory}>{category}</p>
        <h3 className={homeStyles.visualProjectTitle}>{project.campaignTitle}</h3>
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

export function HomeWorkGrid() {
  const projectIndex = new Map(
    [...featuredWorkProjects, ...homeOnlyWorkProjects].map((project) => [
      project.slug,
      project,
    ]),
  );

  const projects = homeSelectedWorkSlugs
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
              <p className={homeStyles.workCategory}>Head of Content and Programming</p>
              <h3 className={homeStyles.visualProjectTitle}>Film / Production</h3>
              <Link href="/film" className={homeStyles.workCta}>
                View Project →
              </Link>
            </div>

            <div className={homeStyles.filmGrid}>
              {entertainmentMediaProjects.map((item) => (
                <Link
                  key={item.slug}
                  href="/film"
                  className={homeStyles.filmCard}
                  aria-label={`${item.title}: ${item.description}`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <span className={homeStyles.filmCardTitle}>{item.title}</span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
