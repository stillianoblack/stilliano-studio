"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type TrackRecordEntry = {
  name: string;
  /** Optional two-line (or more) display for the project title. */
  titleLines?: string[];
  body: string;
  image: string;
  meta: string;
  href?: string;
};

function TrackRecordTitle({ entry }: { entry: TrackRecordEntry }) {
  if (entry.titleLines?.length) {
    return (
      <h3 className="track-record-copy-title">
        {entry.titleLines.map((line) => (
          <span key={line} className="track-record-copy-title-line">
            {line}
          </span>
        ))}
      </h3>
    );
  }

  return <h3 className="track-record-copy-title">{entry.name}</h3>;
}

type TrackRecordStickyProps = {
  entries: TrackRecordEntry[];
};

function TrackRecordProjectLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Small lead-in at zone start — card 01 without extra scroll dead zone. */
const ZONE_LEAD_IN = 0.04;

export function TrackRecordSticky({ entries }: TrackRecordStickyProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const swapTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const count = entries.length;

  const setIndex = useCallback((next: number) => {
    const clamped = Math.min(Math.max(next, 0), count - 1);
    if (clamped === activeIndexRef.current) return;
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);
  }, [count]);

  useEffect(() => {
    const zone = zoneRef.current;
    if (!zone || count <= 1) return;

    const updateFromScroll = () => {
      const zoneRect = zone.getBoundingClientRect();
      const scrolledInZone = Math.max(-zoneRect.top, 0);
      const maxScroll = Math.max(zone.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(scrolledInZone / maxScroll, 1);

      if (progress <= ZONE_LEAD_IN) {
        setIndex(0);
        return;
      }

      const swapProgress = (progress - ZONE_LEAD_IN) / (1 - ZONE_LEAD_IN);
      const next = Math.min(Math.floor(swapProgress * count), count - 1);
      setIndex(next);
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [count, setIndex]);

  if (count === 0) return null;

  const sectionHeader = (
    <header className="track-record-header track-record-header--mobile">
      <p className="about-section-kicker about-section-kicker--light">Track Record</p>
      <h2
        id="track-record-heading"
        className="track-record-title case-heading display-heading display-heading--light display-heading-xl"
      >
        Relevant Experience
      </h2>
    </header>
  );

  const desktopHeader = (
    <header className="track-record-header track-record-header--desktop">
      <p className="about-section-kicker about-section-kicker--light">Track Record</p>
      <h2
        id="track-record-heading"
        className="track-record-title case-heading display-heading display-heading--light display-heading-xl"
      >
        Relevant Experience
      </h2>
    </header>
  );

  return (
    <>
      {sectionHeader}

      <ol className="track-record-mobile-list">
        {entries.map((entry, index) => (
          <li key={entry.name} className="track-record-mobile-item">
            <figure className="track-record-mobile-media">
              <img
                src={entry.image}
                alt=""
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
            </figure>
            <div className="track-record-mobile-copy">
              <span className="track-record-copy-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <TrackRecordTitle entry={entry} />
              <p className="track-record-copy-body">{entry.body}</p>
              <p className="track-record-copy-meta">{entry.meta}</p>
              {entry.href ? (
                <TrackRecordProjectLink href={entry.href} className="track-record-copy-link">
                  View project →
                </TrackRecordProjectLink>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <div className="track-record-scroll-track">
        {desktopHeader}

        <div
          className="track-record-sticky-zone"
          ref={zoneRef}
          style={{ ["--track-record-steps" as string]: count }}
        >
          <div className="track-record-sticky-pin">
            <div className="track-record-sticky-layout">
              <div
                className="track-record-copy-panel"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="track-record-copy-slot">
                  {entries.map((entry, index) => {
                    const isActive = index === activeIndex;
                    const isPast = index < activeIndex;
                    return (
                      <article
                        key={entry.name}
                        className={`track-record-copy-step${
                          isActive ? " track-record-copy-step--active" : ""
                        }${isPast ? " track-record-copy-step--past" : ""}${
                          !isActive && !isPast ? " track-record-copy-step--future" : ""
                        }`}
                        aria-hidden={!isActive}
                      >
                        <span className="track-record-copy-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <TrackRecordTitle entry={entry} />
                        <p className="track-record-copy-body">{entry.body}</p>
                        <p className="track-record-copy-meta">{entry.meta}</p>
                        {entry.href ? (
                          <TrackRecordProjectLink
                            href={entry.href}
                            className="track-record-copy-link"
                          >
                            View project →
                          </TrackRecordProjectLink>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>

              <figure
                className="track-record-media-panel"
                aria-label={`${entries[activeIndex].name} preview`}
              >
                <div className="track-record-media-stack">
                  {entries.map((entry, index) => (
                    <img
                      key={entry.image}
                      src={entry.image}
                      alt=""
                      className={`track-record-media-slide${
                        index === activeIndex ? " track-record-media-slide--active" : ""
                      }`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width={1600}
                      height={900}
                    />
                  ))}
                </div>
                <span className="track-record-media-scrim" aria-hidden />
              </figure>
            </div>
          </div>

          <div
            ref={swapTrackRef}
            className="track-record-swap-track"
            style={{ ["--track-record-swap-steps" as string]: count }}
            aria-hidden
          />
        </div>
      </div>
    </>
  );
}
