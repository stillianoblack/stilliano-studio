"use client";

import Link from "next/link";
import { useState } from "react";
import type { PortfolioWorkItem } from "@/data/portfolio-work";
import { WorkModal } from "./WorkModal";

export type WorkShowcaseItem = PortfolioWorkItem;

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

  return (
    <>
      <div className="work-grid">
        {items.map((item) =>
          item.href ? (
            <Link
              key={item.slug}
              href={item.href}
              className="work-card"
              aria-label={`${item.title}. ${item.desc}`}
            >
              <WorkCardContent item={item} />
            </Link>
          ) : (
            <button
              key={item.slug}
              type="button"
              className="work-card"
              aria-label={`${item.title}. ${item.desc}`}
              onClick={() => setModalOpen(true)}
            >
              <WorkCardContent item={item} />
            </button>
          ),
        )}
      </div>

      <WorkModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
