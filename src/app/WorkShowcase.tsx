"use client";

import Link from "next/link";
import {
  featuredWorkProjects,
  interactiveMediaProjects,
  type FeaturedWorkProject,
  type ProjectMediaItem,
} from "@/data/selected-work";
import { MoreWorkGrid } from "./MoreWorkGrid";
import styles from "./work-showcase.module.css";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function projectMediaAriaDetail(item: ProjectMediaItem): string {
  if (item.caption) {
    return `${item.caption.category}, ${item.caption.detail}, ${item.caption.year}`;
  }
  return item.label;
}

function ProjectMediaCard({
  item,
  href,
  onOpenModal,
  ariaLabel,
}: {
  item: ProjectMediaItem;
  href?: string;
  onOpenModal?: () => void;
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

  const content = media;

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={className}
          style={hasCardStyle ? cardStyle : undefined}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={className}
        style={hasCardStyle ? cardStyle : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  if (onOpenModal) {
    return (
      <button
        type="button"
        className={className}
        style={hasCardStyle ? cardStyle : undefined}
        aria-label={ariaLabel}
        onClick={onOpenModal}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={className} style={hasCardStyle ? cardStyle : undefined} aria-label={ariaLabel}>
      {content}
    </div>
  );
}

function FeaturedProjectBlock({
  project,
  onOpenModal,
}: {
  project: FeaturedWorkProject;
  onOpenModal: () => void;
}) {
  const introLabel = `${project.campaignTitle}. ${project.headline}`;

  const intro = (
    <>
      <p className={styles.projectKicker}>{project.kicker}</p>
      <p className={styles.projectTitle}>{project.campaignTitle}</p>
      <h3 className={styles.projectHeadline}>{project.headline}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <ul className={styles.projectMetrics}>
        {project.metrics.map((metric) => (
          <li key={metric} className={styles.projectMetric}>
            {metric}
          </li>
        ))}
      </ul>
      {project.caseStudyCta ? (
        <p className={styles.projectCaseStudyCta}>{project.caseStudyCta} →</p>
      ) : null}
    </>
  );

  return (
    <article className={styles.featuredProject}>
      {project.href ? (
        isExternalHref(project.href) ? (
          <a
            href={project.href}
            className={styles.projectIntro}
            aria-label={introLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intro}
          </a>
        ) : (
          <Link href={project.href} className={styles.projectIntro} aria-label={introLabel}>
            {intro}
          </Link>
        )
      ) : (
        <button
          type="button"
          className={styles.projectIntro}
          aria-label={introLabel}
          onClick={onOpenModal}
        >
          {intro}
        </button>
      )}

      <div className={styles.projectMediaGrid} data-project={project.slug}>
        {project.media.map((item) => (
          <ProjectMediaCard
            key={`${project.slug}-${item.label}`}
            item={item}
            href={project.href}
            onOpenModal={project.href ? undefined : onOpenModal}
            ariaLabel={`${project.campaignTitle}: ${projectMediaAriaDetail(item)}`}
          />
        ))}
      </div>
    </article>
  );
}

export function WorkShowcase({ theme = "dark" }: { theme?: "dark" | "light" }) {
  return (
    <div
      className={`${styles.workSection}${
        theme === "light" ? ` ${styles.workSectionLight}` : ""
      }`}
    >
      <div className={styles.workInner}>
      <div className={styles.featuredStack}>
        {featuredWorkProjects.map((project) => (
          <FeaturedProjectBlock
            key={project.slug}
            project={project}
            onOpenModal={() => {}}
          />
        ))}
      </div>

      <MoreWorkGrid
        projects={interactiveMediaProjects}
        heading="Interactive Media"
        id="entertainment-interactive-media"
      />
      </div>
    </div>
  );
}
