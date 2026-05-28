"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { WorkModal } from "./WorkModal";

const CAROUSEL_INTERVAL_MS = 7000;
const TRANSITION_MS = 900;

type HeroSlide = {
  title: string;
  image: string;
  href?: string;
  /** Mobile-only hero image (used <=768px). */
  mobileImage?: string;
  /** Mobile background-position for subject centering (used <=768px). */
  mobilePosition?: string;
};

const SLIDES: HeroSlide[] = [
  {
    title: "Caiden's Courage",
    image: "/images/Heros/Caidencourage_Hero.webp",
    href: "/work/caidens-courage",
    mobileImage: "/images/Heros/Mobile/Caiden_Hero_Mobile.webp",
    // Subject is weighted right; nudge crop right so character centers.
    mobilePosition: "68% 18%",
  },
  {
    title: "HBCUgo",
    image: "/images/Heros/HBCUgoCTV_Hero.webp",
    href: "/work/hbcugo",
    mobileImage: "/images/Heros/Mobile/HBCUgo_hero_mobile.webp",
    // Player sits right; pull crop slightly right.
    mobilePosition: "62% 18%",
  },
  {
    title: "Amira Learning",
    image: "/images/Heros/Amira_Hero_2.webp",
    href: "/work/amira-learning",
    mobileImage: "/images/Heros/Mobile/Amira_Hero_mobile.webp",
    mobilePosition: "52% 20%",
  },
  {
    title: "DC Fandom",
    image: "/images/Heros/DCfandom_hero_2.webp",
    mobileImage: "/images/Heros/Mobile/DCfandom_hero_mobile.webp",
    mobilePosition: "55% 12%",
  },
];

export function HeroCarousel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const beginTransition = useCallback((nextIndex: number) => {
    setActiveIndex((current) => {
      if (current === nextIndex) return current;
      setIsTransitioning(true);
      window.setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
      return nextIndex;
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next =
        ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
      beginTransition(next);
    },
    [beginTransition],
  );

  const goNext = useCallback(() => {
    const current = activeIndexRef.current;
    if (current < SLIDES.length - 1) beginTransition(current + 1);
  }, [beginTransition]);

  const goPrev = useCallback(() => {
    const current = activeIndexRef.current;
    if (current > 0) beginTransition(current - 1);
  }, [beginTransition]);

  const handleWorldSelect = useCallback(
    (index: number) => {
      const slide = SLIDES[index];
      if (index === activeIndexRef.current) {
        if (slide.href) {
          router.push(slide.href);
          return;
        }
        setModalOpen(true);
        return;
      }
      goTo(index);
    },
    [goTo, router],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (wheelLock.current) return;
      setActiveIndex((current) => {
        const next = (current + 1) % SLIDES.length;
        setIsTransitioning(true);
        window.setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
        return next;
      });
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (event: WheelEvent) => {
      if (window.scrollY > 8) return;
      if (wheelLock.current) {
        event.preventDefault();
        return;
      }

      const current = activeIndexRef.current;
      const scrollingUp = event.deltaY < 0;
      const scrollingDown = event.deltaY > 0;

      // Scroll down advances slides; on last slide, allow normal page scroll.
      if (scrollingDown && current < SLIDES.length - 1) {
        event.preventDefault();
        wheelLock.current = true;
        beginTransition(current + 1);
        window.setTimeout(() => {
          wheelLock.current = false;
        }, TRANSITION_MS + 120);
        return;
      }

      // Scroll up goes back through slides; on first slide, allow default.
      if (scrollingUp && current > 0) {
        event.preventDefault();
        wheelLock.current = true;
        beginTransition(current - 1);
        window.setTimeout(() => {
          wheelLock.current = false;
        }, TRANSITION_MS + 120);
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [beginTransition]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const startY = touchStartY.current;
    const endY = event.changedTouches[0]?.clientY;
    touchStartY.current = null;
    if (startY == null || endY == null || isTransitioning) return;

    const delta = startY - endY;
    if (Math.abs(delta) < 48) return;

    if (delta > 0) goNext();
    else goPrev();
  };

  const progress =
    SLIDES.length <= 1 ? 1 : activeIndex / (SLIDES.length - 1);

  return (
    <section
      ref={sectionRef}
      className={styles.heroCarousel}
      aria-label="Featured work"
      aria-roledescription="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.heroCarouselMedia} aria-hidden>
        {SLIDES.map((slide, index) => (
          <div
            key={slide.title}
            className={`${styles.heroCarouselSlide} ${
              index === activeIndex ? styles.heroCarouselSlideActive : ""
            }`}
            style={{
              backgroundImage: `url("${encodeURI(slide.image)}")`,
              ["--hero-bg-image-mobile" as string]: `url("${encodeURI(
                slide.mobileImage ?? slide.image,
              )}")`,
              ["--hero-bg-position-mobile" as string]:
                slide.mobilePosition ?? "center top",
            }}
          />
        ))}
      </div>

      <div className={styles.heroCarouselScrim} aria-hidden />
      <div className={styles.heroPattern} aria-hidden />

      <div className={styles.heroCarouselMain}>
        <div className={styles.heroCarouselShell}>
          <div className={styles.heroCarouselBottom}>
            <h1 className={styles.heroCarouselHeadline}>
              <span className={styles.heroCarouselHeadlineLine}>
                Creative Technologist &amp;
              </span>
              <span className={styles.heroCarouselHeadlineLine}>
                Product Storyteller
              </span>
            </h1>

            <div
              className={styles.heroCarouselTitles}
              role="tablist"
              aria-label="Selected worlds"
            >
            {SLIDES.map((slide, index) => {
              const isActive = index === activeIndex;
              const labelNumber = String(index + 1).padStart(2, "0");
              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${labelNumber} ${slide.title}`}
                  className={`${styles.heroCarouselTitleBtn} ${
                    isActive ? styles.heroCarouselTitleBtnActive : ""
                  }`}
                  onClick={() => handleWorldSelect(index)}
                >
                  <span className={styles.heroCarouselTitleIndex}>
                    {labelNumber}
                  </span>
                  <span className={styles.heroCarouselTitleText}>
                    {slide.title}
                  </span>
                </button>
              );
            })}
            </div>

            <div className={styles.heroCarouselMobileTitle} aria-live="polite">
            {SLIDES[activeIndex].href ? (
              <Link
                href={SLIDES[activeIndex].href}
                className={styles.heroCarouselMobileTitleLink}
                onClick={(event) => {
                  event.preventDefault();
                  handleWorldSelect(activeIndex);
                }}
              >
                {SLIDES[activeIndex].title}
              </Link>
            ) : (
              <button
                type="button"
                className={styles.heroCarouselMobileTitleLink}
                onClick={() => handleWorldSelect(activeIndex)}
              >
                {SLIDES[activeIndex].title}
              </button>
            )}
            <span className={styles.heroCarouselMobileMeta}>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            </div>
          </div>

          <div
            className={styles.heroCarouselCounter}
            aria-label={`Slide ${activeIndex + 1} of ${SLIDES.length}`}
          >
            <span className={styles.heroCarouselCounterCurrent}>
              {activeIndex + 1}
            </span>
            <span className={styles.heroCarouselCounterTrack}>
              <span
                className={styles.heroCarouselCounterFill}
                style={{ transform: `scaleY(${progress})` }}
              />
            </span>
            <span className={styles.heroCarouselCounterTotal}>
              {SLIDES.length}
            </span>
          </div>

          <a
            href="#work"
            className={styles.heroCarouselArrow}
            aria-label="Scroll to work"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M10 3v11M10 14l-4.25-4.25M10 14l4.25-4.25"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <WorkModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
