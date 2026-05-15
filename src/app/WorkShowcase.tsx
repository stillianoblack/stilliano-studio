"use client";

import Link from "next/link";
import { useState } from "react";
import {
  compactWorkProjects,
  featuredWorkProjects,
  type FeaturedWorkProject,
  type ProjectMediaItem,
} from "@/data/selected-work";
import { WorkModal } from "./WorkModal";
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
      alt=""
      style={hasMediaStyle ? mediaStyle : undefined}
      loading="lazy"
      decoding="async"
    />
  );

  const meta = item.caption ? (
    <div className={styles.projectMediaCaption}>
      <span className={styles.projectMediaCaptionCategory}>{item.caption.category}</span>
      <span className={styles.projectMediaCaptionDetail}>{item.caption.detail}</span>
      <span className={styles.projectMediaCaptionYear}>{item.caption.year}</span>
    </div>
  ) : (
    <span className={styles.projectMediaLabel}>{item.label}</span>
  );

  const content = (
    <>
      {media}
      {meta}
    </>
  );

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

export function WorkShowcase() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className={styles.workSection}>
      <div className={styles.workInner}>
      <div className={styles.featuredStack}>
        {featuredWorkProjects.map((project) => (
          <FeaturedProjectBlock
            key={project.slug}
            project={project}
            onOpenModal={openModal}
          />
        ))}
      </div>

      <div className={styles.moreWorkBlock}>
        <h3 className={styles.moreWorkHeading}>More Selected Work</h3>
        <div className={styles.moreWorkGrid}>
          {compactWorkProjects.map((project) =>
            project.href ? (
              <Link
                key={project.slug}
                href={project.href}
                className={styles.moreWorkCard}
                aria-label={`${project.title}. ${project.description}`}
              >
                <img
                  className={styles.moreWorkCardMedia}
                  src={project.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.moreWorkCardBody}>
                  <h4 className={styles.moreWorkCardTitle}>{project.title}</h4>
                  <p className={styles.moreWorkCardDesc}>{project.description}</p>
                </div>
              </Link>
            ) : (
              <button
                key={project.slug}
                type="button"
                className={styles.moreWorkCard}
                aria-label={`${project.title}. ${project.description}`}
                onClick={openModal}
              >
                <img
                  className={styles.moreWorkCardMedia}
                  src={project.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.moreWorkCardBody}>
                  <h4 className={styles.moreWorkCardTitle}>{project.title}</h4>
                  <p className={styles.moreWorkCardDesc}>{project.description}</p>
                </div>
              </button>
            ),
          )}
        </div>
      </div>

      <WorkModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
