"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { WorkModal } from "./WorkModal";

const CAROUSEL_INTERVAL_MS = 7000;
const TRANSITION_MS = 1000;

type HeroSlide = {
  title: string;
  /** Optional line under title in carousel nav (active slide). */
  subtitle?: string;
  image: string;
  href?: string;
  /** Mobile-only hero image (used <=768px). */
  mobileImage?: string;
  /** Mobile background-position for subject centering (used <=768px). */
  mobilePosition?: string;
  /** Mobile background-size (used <=768px). */
  mobileSize?: string;
};

const SLIDES: HeroSlide[] = [
  {
    title: "Caiden's Courage",
    image: "/images/Heros/Caidencourage_Hero.webp",
    href: "/work/caidens-courage",
    mobileImage: "/images/Heros/Caiden_Hero_Mobile.webp",
    mobilePosition: "50% 20%",
    mobileSize: "cover",
  },
  {
    title: "HBCUgo Sports",
    image: "/images/Heros/HBCUgoCTV_Hero.webp",
    href: "/work/hbcugo",
    mobileImage: "/images/Heros/HBCUgo_hero_mobile_1.webp",
    mobilePosition: "50% 20%",
    mobileSize: "cover",
  },
  {
    title: "Amira Learning",
    image: "/images/Heros/Amira_Hero_2.webp",
    href: "/work/amira-learning",
    mobileImage: "/images/Heros/Amira_Hero_mobile.webp",
    mobilePosition: "50% 20%",
    mobileSize: "cover",
  },
  {
    title: "DC Fandom",
    image: "/images/Heros/DCfandom_hero_2.webp",
    mobileImage: "/images/Heros/DCfandom_hero_mobile.webp",
    mobilePosition: "50% 20%",
    mobileSize: "cover",
  },
  {
    title: "Genius Sports",
    image: "/images/Heros/geniussports_hero.webp",
    mobileImage: "/images/Heros/geniussports_hero_mobile_1.webp",
    mobilePosition: "50% 20%",
    mobileSize: "cover",
  },
];

export function HeroCarousel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const wheelLock = useRef(false);
  const activeIndexRef = useRef(0);
  const touchStartY = useRef(0);
  const touchAccumulated = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const beginTransition = useCallback((nextIndex: number) => {
    setActiveIndex((current) => {
      if (current === nextIndex) return current;
      setPrevIndex(current);
      window.setTimeout(() => {
        setPrevIndex(null);
      }, TRANSITION_MS);
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
      if (wheelLock.current || window.scrollY > 8) return;
      const next = (activeIndexRef.current + 1) % SLIDES.length;
      beginTransition(next);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [beginTransition]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const TOUCH_THRESHOLD = 48;
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const lockAndTransition = (nextIndex: number) => {
      wheelLock.current = true;
      beginTransition(nextIndex);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, TRANSITION_MS + 120);
    };

    const shouldCaptureScroll = (direction: "up" | "down") => {
      if (window.scrollY > 8) return false;
      const current = activeIndexRef.current;
      if (direction === "down") return current < SLIDES.length - 1;
      return current > 0;
    };

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
        lockAndTransition(current + 1);
        return;
      }

      // Scroll up goes back through slides; on first slide, allow default.
      if (scrollingUp && current > 0) {
        event.preventDefault();
        lockAndTransition(current - 1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!mobileQuery.matches || window.scrollY > 8) return;
      touchStartY.current = event.touches[0]?.clientY ?? 0;
      touchAccumulated.current = 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!mobileQuery.matches || window.scrollY > 8) return;
      if (wheelLock.current) {
        event.preventDefault();
        return;
      }

      const y = event.touches[0]?.clientY ?? 0;
      touchAccumulated.current = touchStartY.current - y;

      if (touchAccumulated.current > 0 && shouldCaptureScroll("down")) {
        event.preventDefault();
      } else if (touchAccumulated.current < 0 && shouldCaptureScroll("up")) {
        event.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (!mobileQuery.matches || window.scrollY > 8 || wheelLock.current) return;

      const delta = touchAccumulated.current;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;

      const current = activeIndexRef.current;
      if (delta > 0 && current < SLIDES.length - 1) {
        lockAndTransition(current + 1);
      } else if (delta < 0 && current > 0) {
        lockAndTransition(current - 1);
      }
      touchAccumulated.current = 0;
    };

    const onScroll = () => {
      if (!mobileQuery.matches || wheelLock.current) return;
      // Only intercept scroll attempts while still at the hero — not when reading below.
      if (window.scrollY > 8) return;
      const current = activeIndexRef.current;
      if (current >= SLIDES.length - 1 || window.scrollY <= 0) return;

      window.scrollTo({ top: 0, behavior: "instant" });
      lockAndTransition(current + 1);
    };

    section.addEventListener("wheel", onWheel, { passive: false });

    const attachMobileScroll = () => {
      if (!mobileQuery.matches) return;
      document.addEventListener("touchstart", onTouchStart, { passive: true });
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    };

    const detachMobileScroll = () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };

    const onMobileQueryChange = () => {
      detachMobileScroll();
      attachMobileScroll();
    };

    attachMobileScroll();
    mobileQuery.addEventListener("change", onMobileQueryChange);

    return () => {
      section.removeEventListener("wheel", onWheel);
      mobileQuery.removeEventListener("change", onMobileQueryChange);
      detachMobileScroll();
    };
  }, [beginTransition]);

  const progress =
    SLIDES.length <= 1 ? 1 : activeIndex / (SLIDES.length - 1);

  return (
    <section
      ref={sectionRef}
      className={styles.heroCarousel}
      aria-label="Featured work"
      aria-roledescription="carousel"
    >
      <div className={styles.heroCarouselMedia} aria-hidden>
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const isUnder = index === prevIndex;
          return (
            <div
              key={slide.title}
              className={`${styles.heroCarouselSlide} ${
                isActive ? styles.heroCarouselSlideActive : ""
              } ${isUnder ? styles.heroCarouselSlideUnder : ""}`}
              style={{
                ["--hero-object-position" as string]:
                  slide.mobilePosition ?? "center center",
              }}
            >
              <picture className={styles.heroCarouselSlidePicture}>
                <source
                  media="(max-width: 768px)"
                  srcSet={slide.mobileImage ?? slide.image}
                />
                <img
                  className={styles.heroCarouselSlideImage}
                  src={slide.image}
                  alt=""
                  decoding="async"
                  draggable={false}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </picture>
            </div>
          );
        })}
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
                  <span className={styles.heroCarouselTitleGroup}>
                    <span className={styles.heroCarouselTitleText}>
                      {slide.title}
                    </span>
                    {slide.subtitle ? (
                      <span className={styles.heroCarouselTitleSubtitle}>
                        {slide.subtitle}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
            </div>

            <Link href="/about" className={styles.heroCarouselNoseyLink}>
              Get Nosey →
            </Link>

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
            {SLIDES[activeIndex].subtitle ? (
              <span className={styles.heroCarouselMobileSubtitle}>
                {SLIDES[activeIndex].subtitle}
              </span>
            ) : null}
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
