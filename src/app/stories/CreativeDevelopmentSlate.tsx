"use client";

import Link from "next/link";
import { useCallback, useId, useState } from "react";
import { slateTabs, type SlateCard, type SlateTabId } from "@/data/stories-slate-content";
import slateStyles from "./stories-slate.module.css";

function cardAccessibleName(card: SlateCard) {
  const parts = [card.eyebrow, card.title, card.role, card.description].filter(Boolean);
  return parts.join(". ");
}

function SlateCardItem({ card }: { card: SlateCard }) {
  const inner = (
    <>
      <div className={slateStyles.cardMedia}>
        <img src={card.image} alt={card.alt} loading="lazy" decoding="async" />
      </div>
      <div className={slateStyles.cardBody}>
        <p className={slateStyles.cardEyebrow}>{card.eyebrow}</p>
        <h3 className={slateStyles.cardTitle}>{card.title}</h3>
        {card.role ? <p className={slateStyles.cardRole}>{card.role}</p> : null}
        {card.description ? (
          <p className={slateStyles.cardDescription}>{card.description}</p>
        ) : null}
      </div>
    </>
  );

  if (card.href) {
    return (
      <Link href={card.href} className={slateStyles.card} aria-label={cardAccessibleName(card)}>
        {inner}
      </Link>
    );
  }

  return <article className={slateStyles.card}>{inner}</article>;
}

export function CreativeDevelopmentSlate() {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<SlateTabId>("original");
  const active = slateTabs.find((tab) => tab.id === activeTab) ?? slateTabs[0];

  const focusTab = useCallback(
    (tabId: SlateTabId) => {
      setActiveTab(tabId);
      const tabButton = document.getElementById(`${baseId}-tab-${tabId}`);
      tabButton?.focus();
    },
    [baseId],
  );

  const onTabListKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = slateTabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % slateTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + slateTabs.length) % slateTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = slateTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    focusTab(slateTabs[nextIndex].id);
  };

  return (
    <section
      id="creative-development"
      className={slateStyles.section}
      aria-labelledby="creative-development-heading"
    >
      <div className={slateStyles.inner}>
        <header className={slateStyles.header}>
          <h2 id="creative-development-heading" className={slateStyles.heading}>
            Creative Development
          </h2>
          <p className={slateStyles.lead}>
            Selected work spanning original IP, branded storytelling, and narrative
            development—from early concepts and visual development through production,
            distribution, and audience experience.
          </p>
        </header>

        <div className={slateStyles.hub}>
          <div
            role="tablist"
            aria-label="Creative development slate"
            className={slateStyles.tabList}
            onKeyDown={onTabListKeyDown}
          >
            {slateTabs.map((tab) => {
              const selected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`${slateStyles.tab}${selected ? ` ${slateStyles.tabActive}` : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel-${active.id}`}
            aria-labelledby={`${baseId}-tab-${active.id}`}
            className={slateStyles.panel}
          >
            <p className={slateStyles.panelIntro}>{active.intro}</p>
            <div className={slateStyles.grid}>
              {active.cards.map((card) => (
                <SlateCardItem key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
