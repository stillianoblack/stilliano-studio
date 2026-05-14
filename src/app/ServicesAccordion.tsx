"use client";

import { useId, useState } from "react";

export type ServiceAccordionItem = {
  title: string;
  summary: string;
  description: string;
  bullets: string[];
};

function formatNumber(i: number) {
  return String(i + 1).padStart(2, "0");
}

export function ServicesAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: ServiceAccordionItem[];
  defaultOpenIndex?: number;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(() => {
    if (items.length === 0) return -1;
    return Math.min(Math.max(defaultOpenIndex, 0), items.length - 1);
  });

  return (
    <div className="services-list">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        const buttonId = `${baseId}-trigger-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={item.title}
            className="service-item"
            data-open={isOpen ? "true" : "false"}
          >
            <button
              type="button"
              id={buttonId}
              className="service-header"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
            >
              <span className="service-number">{formatNumber(i)}</span>
              <span className="service-headings">
                <span className="service-title">{item.title}</span>
                <span className="service-summary">{item.summary}</span>
              </span>
              <span className="service-toggle" aria-hidden>
                <span className="service-toggle-line" />
                <span className="service-toggle-line service-toggle-line-vert" />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="service-content"
              data-open={isOpen ? "true" : "false"}
            >
              <div className="service-content-inner">
                <p className="service-description">{item.description}</p>
                <ul className="service-bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

