"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_FEATURED_WORLD_INDEX,
  featuredWorldProjects,
  getDesktopObjectPosition,
  getMobileObjectPosition,
  type FeaturedWorldProject,
} from "@/data/featured-worlds";
import { WorkModal, type WorkModalProject } from "./WorkModal";
import styles from "./featured-worlds-index.module.css";

function useCoarsePointer() {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsCoarse(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isCoarse;
}

function FeaturedPanel({
  project,
  showCta = true,
}: {
  project: FeaturedWorldProject;
  showCta?: boolean;
}) {
  return (
    <header className={styles.featurePanel} aria-live="polite">
      <span className={styles.featureEyebrow}>{project.eyebrow}</span>
      <h2 className={styles.featureHeading}>{project.heading}</h2>
      <p className={styles.featureSubhead}>{project.subheading}</p>
      <p className={styles.featureDescription}>{project.description}</p>
      {showCta && project.href ? (
        <Link href={project.href} className={styles.featureCta}>
          View Project →
        </Link>
      ) : null}
    </header>
  );
}

export function FeaturedWorldsIndex() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_FEATURED_WORLD_INDEX);
  const [modalProject, setModalProject] = useState<WorkModalProject | null>(null);
  const isCoarsePointer = useCoarsePointer();

  const activeProject = featuredWorldProjects[activeIndex];

  const previewProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const openProject = useCallback((project: FeaturedWorldProject) => {
    if (project.href) return;
    setModalProject({
      title: project.title,
      description: project.description,
      image: project.desktopImage,
    });
  }, []);

  return (
    <section
      id="worlds"
      className={styles.section}
      aria-label="Featured worlds and systems"
    >
      <div className={styles.media} aria-hidden>
        {featuredWorldProjects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={project.id}
              className={`${styles.mediaSlide} ${
                isActive ? styles.mediaSlideActive : ""
              }`}
              style={{
                ["--world-object-position" as string]:
                  getDesktopObjectPosition(project),
              }}
            >
              <img
                className={styles.mediaImage}
                src={project.desktopImage}
                alt=""
                decoding="async"
                draggable={false}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.scrim} aria-hidden />
      <div className={styles.pattern} aria-hidden />

      <div className={styles.mobileFeatureFrame}>
        {featuredWorldProjects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={project.id}
              className={`${styles.mobileFeatureSlide} ${
                isActive ? styles.mobileFeatureSlideActive : ""
              }`}
            >
              <img
                className={styles.mobileFeatureImage}
                src={project.desktopImage}
                alt=""
                decoding="async"
                draggable={false}
                style={{
                  objectPosition: getMobileObjectPosition(project),
                }}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.content}>
        <div className={styles.shell}>
          <div className={styles.layout}>
            <div key={activeProject.id} className={styles.featureBlock}>
              <FeaturedPanel project={activeProject} showCta={!isCoarsePointer} />
              {isCoarsePointer && activeProject.href ? (
                <Link href={activeProject.href} className={styles.featureCtaMobile}>
                  View Project →
                </Link>
              ) : null}
            </div>

            <ul className={styles.index} aria-label="Project index">
              {featuredWorldProjects.map((project, index) => {
                const isActive = index === activeIndex;

                if (isCoarsePointer) {
                  return (
                    <li key={project.id} className={styles.indexItem}>
                      <div
                        className={`${styles.indexRow} ${
                          isActive ? styles.indexRowActive : ""
                        }`}
                      >
                        <button
                          type="button"
                          className={styles.indexPreviewBtn}
                          aria-current={isActive ? "true" : undefined}
                          onClick={() => previewProject(index)}
                        >
                          <span className={styles.indexNumber}>
                            {project.number}
                          </span>
                          <span className={styles.indexCopy}>
                            <span className={styles.indexTitle}>
                              {project.title}
                            </span>
                            <span className={styles.indexCategory}>
                              {project.category}
                            </span>
                          </span>
                        </button>
                        {project.href ? (
                          <Link
                            href={project.href}
                            className={styles.indexOpenLink}
                            aria-label={`Open ${project.title}`}
                          >
                            View →
                          </Link>
                        ) : (
                          <button
                            type="button"
                            className={styles.indexOpenLink}
                            aria-label={`Open ${project.title}`}
                            onClick={() => openProject(project)}
                          >
                            View →
                          </button>
                        )}
                      </div>
                    </li>
                  );
                }

                if (project.href) {
                  return (
                    <li key={project.id} className={styles.indexItem}>
                      <Link
                        href={project.href}
                        className={`${styles.indexLink} ${
                          isActive ? styles.indexLinkActive : ""
                        }`}
                        aria-current={isActive ? "true" : undefined}
                        onMouseEnter={() => previewProject(index)}
                        onFocus={() => previewProject(index)}
                      >
                        <span className={styles.indexNumber}>
                          {project.number}
                        </span>
                        <span className={styles.indexCopy}>
                          <span className={styles.indexTitle}>
                            {project.title}
                          </span>
                          <span className={styles.indexCategory}>
                            {project.category}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={project.id} className={styles.indexItem}>
                    <button
                      type="button"
                      className={`${styles.indexLink} ${
                        isActive ? styles.indexLinkActive : ""
                      }`}
                      aria-current={isActive ? "true" : undefined}
                      onMouseEnter={() => previewProject(index)}
                      onFocus={() => previewProject(index)}
                      onClick={() => openProject(project)}
                    >
                      <span className={styles.indexNumber}>
                        {project.number}
                      </span>
                      <span className={styles.indexCopy}>
                        <span className={styles.indexTitle}>
                          {project.title}
                        </span>
                        <span className={styles.indexCategory}>
                          {project.category}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <WorkModal
        open={modalProject != null}
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
