"use client";

import { useEffect, useState } from "react";

export type WorkShowcaseItem = {
  title: string;
  desc: string;
  image: string;
};

type WorkShowcaseProps = {
  items: WorkShowcaseItem[];
};

function WorkCardContent({ item }: { item: WorkShowcaseItem }) {
  return (
    <>
      {item.image ? (
        <img
          className="work-card-media"
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="work-card-media" aria-hidden />
      )}

      <div className="work-card-overlay" aria-hidden />
      <div className="work-card-content">
        <h3 className="work-card-title">{item.title}</h3>
        <p className="work-card-description">{item.desc}</p>
      </div>
    </>
  );
}

export function WorkShowcase({ items }: WorkShowcaseProps) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const bookStrategyCall = () => {
    setModalOpen(false);
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.hash = "contact";
  };

  return (
    <>
      <div className="work-grid">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            className="work-card"
            aria-label={`${item.title}. ${item.desc}`}
            onClick={() => setModalOpen(true)}
          >
            <WorkCardContent item={item} />
          </button>
        ))}
      </div>

      <div
        className={`work-modal-backdrop${modalOpen ? " is-open" : ""}`}
        onClick={closeModal}
        aria-hidden={!modalOpen}
      >
        <div
          className="work-modal"
          role="dialog"
          aria-modal={modalOpen}
          aria-labelledby="work-modal-heading"
          aria-hidden={!modalOpen}
          onClick={(event) => event.stopPropagation()}
        >
          <h2 id="work-modal-heading" className="work-modal-header">
            Full Case Study Coming Soon
          </h2>
          <div className="work-modal-body">
            <p>
              Stilliano Studio is currently expanding detailed project
              documentation and strategic breakdowns for selected work.
            </p>
            <p>
              For project inquiries or to discuss product strategy, experience
              systems, or consulting opportunities, reach out directly below.
            </p>
          </div>
          <div className="work-modal-actions">
            <button
              type="button"
              className="work-modal-primary"
              onClick={bookStrategyCall}
            >
              Book Strategy Call
            </button>
            <button
              type="button"
              className="work-modal-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
