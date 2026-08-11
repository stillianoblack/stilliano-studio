"use client";

import { useEffect } from "react";

export type WorkModalProject = {
  title: string;
  description: string;
  image: string;
};

type WorkModalProps = {
  open: boolean;
  onClose: () => void;
  project: WorkModalProject | null;
};

export function WorkModal({ open, onClose, project }: WorkModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const isOpen = open && project != null;

  return (
    <div
      className={`work-modal-backdrop${isOpen ? " is-open" : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      {project ? (
        <div
          className="work-modal work-modal--preview"
          role="dialog"
          aria-modal={isOpen}
          aria-labelledby="work-modal-heading"
          aria-hidden={!isOpen}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="work-modal-media">
            <img src={project.image} alt="" decoding="async" />
          </div>
          <div className="work-modal-meta">
            <h2 id="work-modal-heading" className="work-modal-header">
              {project.title}
            </h2>
            <p className="work-modal-description">{project.description}</p>
            <button type="button" className="work-modal-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
