"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  aspectRatioToCss,
  behindTheWorkItems,
  type BehindTheWorkItem,
} from "@/data/behind-the-work";
import styles from "./behind-the-work.module.css";

const AUTO_SCROLL_PX_PER_FRAME = 0.4;

function itemAriaLabel(item: BehindTheWorkItem) {
  const parts = [item.lead, item.title, item.category, item.description].filter(
    Boolean,
  ) as string[];
  if (item.project) parts.push(item.project);
  if (item.year) parts.push(item.year);
  return parts.join(". ");
}

function captionMeta(item: BehindTheWorkItem) {
  return [item.project, item.year].filter(Boolean).join(" · ");
}

export function BehindTheWorkSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<BehindTheWorkItem | null>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const autoScrollState = useRef({
    paused: false,
    enabled: true,
  });

  const loopItems = useMemo(
    () => [...behindTheWorkItems, ...behindTheWorkItems],
    [],
  );

  const updateScrollState = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const maxScroll = strip.scrollWidth - strip.clientWidth;
    setCanScrollBack(strip.scrollLeft > 8);
    setCanScrollForward(strip.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    updateScrollState();
    strip.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      strip.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      autoScrollState.current.enabled = false;
      return;
    }

    const pause = () => {
      autoScrollState.current.paused = true;
    };

    const resume = () => {
      autoScrollState.current.paused = false;
    };

    let wheelResumeTimer = 0;

    const pauseFromWheel = () => {
      autoScrollState.current.paused = true;
      window.clearTimeout(wheelResumeTimer);
      wheelResumeTimer = window.setTimeout(resume, 2500);
    };

    const onReducedMotionChange = () => {
      autoScrollState.current.enabled = !reducedMotion.matches;
    };

    strip.addEventListener("mouseenter", pause);
    strip.addEventListener("mouseleave", resume);
    strip.addEventListener("focusin", pause);
    strip.addEventListener("focusout", resume);
    strip.addEventListener("touchstart", pause, { passive: true });
    strip.addEventListener("touchend", resume, { passive: true });
    strip.addEventListener("wheel", pauseFromWheel, { passive: true });
    reducedMotion.addEventListener("change", onReducedMotionChange);

    let frameId = 0;

    const tick = () => {
      const { paused, enabled } = autoScrollState.current;
      const isInteractive =
        paused ||
        dragState.current.isDragging ||
        activeItem != null ||
        !enabled;

      if (!isInteractive && strip.scrollWidth > strip.clientWidth) {
        const loopWidth = strip.scrollWidth / 2;

        if (strip.scrollLeft >= loopWidth - 1) {
          strip.scrollLeft -= loopWidth;
        } else {
          strip.scrollLeft += AUTO_SCROLL_PX_PER_FRAME;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      strip.removeEventListener("mouseenter", pause);
      strip.removeEventListener("mouseleave", resume);
      strip.removeEventListener("focusin", pause);
      strip.removeEventListener("focusout", resume);
      strip.removeEventListener("touchstart", pause);
      strip.removeEventListener("touchend", resume);
      strip.removeEventListener("wheel", pauseFromWheel);
      window.clearTimeout(wheelResumeTimer);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
    };
  }, [activeItem]);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  const scrollByDirection = (direction: -1 | 1) => {
    const strip = stripRef.current;
    if (!strip) return;

    autoScrollState.current.paused = true;
    const distance = Math.max(strip.clientWidth * 0.72, 280);
    strip.scrollBy({ left: direction * distance, behavior: "smooth" });
    window.setTimeout(() => {
      autoScrollState.current.paused = false;
    }, 1200);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const strip = stripRef.current;
    if (!strip || event.pointerType === "touch") return;

    autoScrollState.current.paused = true;
    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: strip.scrollLeft,
    };
    strip.setPointerCapture(event.pointerId);
    strip.classList.add(styles.stripDragging);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const strip = stripRef.current;
    if (!strip || !dragState.current.isDragging) return;

    const delta = event.clientX - dragState.current.startX;
    strip.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const strip = stripRef.current;
    if (!strip || !dragState.current.isDragging) return;

    dragState.current.isDragging = false;
    strip.classList.remove(styles.stripDragging);

    if (strip.hasPointerCapture(event.pointerId)) {
      strip.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      autoScrollState.current.paused = false;
    }, 1500);
  };

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="behind-the-work-heading"
      >
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Leadership</p>
            <h2 id="behind-the-work-heading" className={styles.title}>
              Creative Producer and Content
            </h2>
            <p className={styles.intro}>
              A glimpse into the sets, systems, productions, and creative rooms
              behind the stories and experiences I&apos;ve helped bring to life.
            </p>
          </header>
        </div>

        <div className={styles.stripWrap}>
          <div
            ref={stripRef}
            className={styles.strip}
            role="list"
            aria-label="Behind the work image archive"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            {loopItems.map((item, index) => {
              const meta = captionMeta(item);
              const isLandscape = item.aspectRatio === "16/9";
              const isDuplicate = index >= behindTheWorkItems.length;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`${styles.slide} ${
                    isLandscape ? styles.slideLandscape : styles.slidePortrait
                  }`}
                  role="listitem"
                  data-aspect={item.aspectRatio}
                  aria-hidden={isDuplicate ? true : undefined}
                  style={{
                    ["--btw-aspect" as string]: aspectRatioToCss(item.aspectRatio),
                  }}
                >
                  <button
                    type="button"
                    className={styles.card}
                    aria-label={itemAriaLabel(item)}
                    tabIndex={isDuplicate ? -1 : undefined}
                    onClick={() => setActiveItem(item)}
                  >
                    <div className={styles.frame}>
                      <img
                        className={styles.frameImage}
                        src={item.image}
                        alt=""
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                        style={
                          item.objectPosition
                            ? { objectPosition: item.objectPosition }
                            : undefined
                        }
                      />
                    </div>
                    <div className={styles.caption}>
                      {item.lead ? (
                        <>
                          <p className={styles.captionLead}>{item.lead}</p>
                          <h3 className={styles.captionTitle}>{item.title}</h3>
                          <p className={styles.captionCategory}>{item.category}</p>
                        </>
                      ) : (
                        <>
                          <p className={styles.captionCategory}>{item.category}</p>
                          <h3 className={styles.captionTitle}>{item.title}</h3>
                          {meta ? <p className={styles.captionMeta}>{meta}</p> : null}
                        </>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.controls}>
          <p className={styles.hint}>Auto-advancing · pause on hover or touch</p>
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Scroll archive backward"
              disabled={!canScrollBack}
              onClick={() => scrollByDirection(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Scroll archive forward"
              disabled={!canScrollForward}
              onClick={() => scrollByDirection(1)}
            >
              →
            </button>
          </div>
        </div>
      </section>

      <div
        className={`${styles.lightboxBackdrop}${
          activeItem ? ` ${styles.lightboxBackdropOpen}` : ""
        }`}
        onClick={() => setActiveItem(null)}
        aria-hidden={!activeItem}
      >
        {activeItem ? (
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-labelledby="behind-the-work-lightbox-title"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className={styles.lightboxMedia}
              src={activeItem.image}
              alt=""
              style={{
                aspectRatio: aspectRatioToCss(activeItem.aspectRatio),
                ...(activeItem.objectPosition
                  ? { objectPosition: activeItem.objectPosition }
                  : {}),
              }}
            />
            <div className={styles.lightboxBody}>
              {activeItem.lead ? (
                <>
                  <p className={styles.lightboxLead}>{activeItem.lead}</p>
                  <h3 id="behind-the-work-lightbox-title" className={styles.lightboxTitle}>
                    {activeItem.title}
                  </h3>
                  <p className={styles.lightboxCategory}>{activeItem.category}</p>
                </>
              ) : (
                <>
                  <p className={styles.lightboxCategory}>{activeItem.category}</p>
                  <h3 id="behind-the-work-lightbox-title" className={styles.lightboxTitle}>
                    {activeItem.title}
                  </h3>
                </>
              )}
              {captionMeta(activeItem) ? (
                <p className={styles.lightboxMeta}>{captionMeta(activeItem)}</p>
              ) : null}
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setActiveItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
