"use client";

import Link from "next/link";
import { useState } from "react";
import type { CompactWorkProject } from "@/data/selected-work";
import { WorkModal } from "./WorkModal";
import styles from "./work-showcase.module.css";

type MoreWorkGridProps = {
  projects: CompactWorkProject[];
  heading: string;
  id?: string;
  theme?: "dark" | "light";
};

export function MoreWorkGrid({
  projects,
  heading,
  id,
}: MoreWorkGridProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <div className={styles.moreWorkBlock} id={id}>
        <h3 className={styles.moreWorkHeading}>{heading}</h3>
        <div className={styles.moreWorkGrid}>
          {projects.map((project) =>
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
    </>
  );
}

export function MoreWorkGridSection({
  projects,
  heading,
  id,
  theme = "dark",
}: MoreWorkGridProps) {
  return (
    <div
      className={`${styles.workSection}${
        theme === "light" ? ` ${styles.workSectionLight}` : ""
      }`}
    >
      <div className={styles.workInner}>
        <MoreWorkGrid projects={projects} heading={heading} id={id} theme={theme} />
      </div>
    </div>
  );
}
