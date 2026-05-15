"use client";

import { useEffect } from "react";

type WorkModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WorkModal({ open, onClose }: WorkModalProps) {
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

  const bookStrategyCall = () => {
    onClose();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <div
      className={`work-modal-backdrop${open ? " is-open" : ""}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className="work-modal"
        role="dialog"
        aria-modal={open}
        aria-labelledby="work-modal-heading"
        aria-hidden={!open}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="work-modal-heading" className="work-modal-header">
          Full Case Study Coming Soon
        </h2>
        <div className="work-modal-body">
          <p>
            Stilliano Studio is currently expanding detailed project documentation and
            strategic breakdowns for selected work.
          </p>
          <p>
            For project inquiries or to discuss product strategy, experience systems, or
            consulting opportunities, reach out directly below.
          </p>
        </div>
        <div className="work-modal-actions">
          <button type="button" className="work-modal-primary" onClick={bookStrategyCall}>
            Book Strategy Call
          </button>
          <button type="button" className="work-modal-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

