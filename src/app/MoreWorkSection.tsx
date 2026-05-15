"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { portfolioWorkItems, type PortfolioWorkItem } from "@/data/portfolio-work";
import { WorkModal } from "./WorkModal";

function MoreWorkCard({
  item,
  onOpenModal,
}: {
  item: PortfolioWorkItem;
  onOpenModal: () => void;
}) {
  const content = (
    <>
      <div className="more-work-card-media-wrap">
        {item.image ? (
          <img
            className="more-work-card-media"
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="more-work-card-media more-work-card-media--placeholder" aria-hidden />
        )}
      </div>
      <div className="more-work-card-meta">
        <h3 className="more-work-card-title">{item.title}</h3>
        <span className="more-work-card-rule" aria-hidden />
        <p className="more-work-card-desc">{item.desc}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="more-work-card">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="more-work-card"
      aria-label={`${item.title}. ${item.desc}`}
      onClick={onOpenModal}
    >
      {content}
    </button>
  );
}

export function MoreWorkSection() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState<Set<string>>(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const items = useMemo(() => {
    const currentSlug = pathname?.replace(/^\/work\//, "").replace(/\/$/, "");
    if (!currentSlug) {
      return portfolioWorkItems;
    }
    return portfolioWorkItems.filter((item) => item.slug !== currentSlug);
  }, [pathname]);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      setActiveIndex(0);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft < maxScroll - 8);

    const cards = track.querySelectorAll<HTMLElement>(".more-work-card");
    if (cards.length === 0) {
      return;
    }

    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, [items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sectionObserver.observe(section);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) {
      return;
    }

    const slides = track.querySelectorAll<HTMLElement>("[data-more-work-slide]");

    const slideObserver = new IntersectionObserver(
      (entries) => {
        setVisibleSlides((previous) => {
          const next = new Set(previous);
          let changed = false;

          entries.forEach((entry) => {
            const slug = entry.target.getAttribute("data-more-work-slide");
            if (!slug) {
              return;
            }

            if (entry.isIntersecting) {
              if (!next.has(slug)) {
                next.add(slug);
                changed = true;
              }
            }
          });

          return changed ? next : previous;
        });
      },
      {
        root: track,
        threshold: 0.35,
        rootMargin: "0px 8% 0px 0px",
      },
    );

    slides.forEach((slide) => slideObserver.observe(slide));

    return () => {
      slideObserver.disconnect();
    };
  }, [items]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>(".more-work-card");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 24;
    const distance = (card?.offsetWidth ?? track.clientWidth * 0.8) + gap;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`more-work${sectionInView ? " is-inview" : ""}`}
      aria-labelledby="more-work-heading"
    >
      <div className="more-work-inner">
        <div className="more-work-label-col">
          <h2 id="more-work-heading" className="more-work-label display-heading">
            <span className="more-work-label-line">More</span>
            <span className="more-work-label-line">Work</span>
          </h2>
        </div>

        <div className="more-work-main">
          <div ref={trackRef} className="more-work-track" role="list">
            {items.map((item, index) => (
              <div
                key={item.slug}
                className={`more-work-slide${
                  visibleSlides.has(item.slug) ? " is-visible" : ""
                }`}
                data-more-work-slide={item.slug}
                role="listitem"
                style={{ transitionDelay: `${index * 0.09}s` }}
              >
                <MoreWorkCard item={item} onOpenModal={() => setModalOpen(true)} />
              </div>
            ))}
          </div>

          <div className="more-work-controls">
          <div className="more-work-arrows">
            <button
              type="button"
              className="more-work-arrow"
              aria-label="Previous projects"
              disabled={!canScrollPrev}
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="more-work-arrow"
              aria-label="Next projects"
              disabled={!canScrollNext}
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>

          <div className="more-work-progress" aria-hidden>
            {items.map((item, index) => (
              <span
                key={item.slug}
                className={`more-work-progress-dash${
                  index === activeIndex ? " is-active" : ""
                }`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>

      <WorkModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
