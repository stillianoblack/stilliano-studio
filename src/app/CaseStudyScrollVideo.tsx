"use client";

import { useEffect, useRef, useState } from "react";

export function caseStudyVideoMimeType(src: string) {
  const path = src.split("?")[0] ?? src;
  return path.endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

type CaseStudyScrollVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  summary: string;
  showCaption?: boolean;
  loop?: boolean;
};

export function CaseStudyScrollVideo({
  src,
  poster,
  ariaLabel,
  summary,
  showCaption = true,
  loop = false,
}: CaseStudyScrollVideoProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const programmaticPauseRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
        setIsNear(entry.isIntersecting);
      },
      { rootMargin: "280px 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) {
      return;
    }

    if (reduceMotion) {
      programmaticPauseRef.current = true;
      video.pause();
      programmaticPauseRef.current = false;
      return;
    }

    if (isNear && !userPaused) {
      video.muted = true;
      void video.play().catch(() => {
        /* Autoplay blocked until interaction */
      });
      return;
    }

    programmaticPauseRef.current = true;
    video.pause();
    programmaticPauseRef.current = false;
  }, [isNear, shouldLoad, userPaused, reduceMotion]);

  return (
    <figure ref={rootRef} className="case-genius-video-figure">
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="case-genius-video"
          controls
          playsInline
          muted
          loop={loop}
          preload="none"
          poster={poster}
          aria-label={ariaLabel}
          onPlay={() => setUserPaused(false)}
          onPause={() => {
            if (programmaticPauseRef.current) {
              return;
            }
            if (isNear) {
              setUserPaused(true);
            }
          }}
        >
          <source src={src} type={caseStudyVideoMimeType(src)} />
        </video>
      ) : (
        <div
          className="case-genius-video case-genius-video--scroll-placeholder"
          role="img"
          aria-label={ariaLabel}
          style={
            poster
              ? {
                  backgroundImage: `url(${poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
      )}
      {showCaption ? (
        <figcaption className="case-visual-caption case-genius-video-caption">
          <span className="case-visual-caption-meta">{ariaLabel}</span>
          <span className="case-genius-video-summary">{summary}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
