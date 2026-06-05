"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type TrustedByVideoProps = {
  src: string;
  ariaLabel?: string;
};

function IconPlay() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 5.5v13l11-6.5-11-6.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPause() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 6v12M16 6v12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMuted() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 5L6 9H3v6h3l5 4V5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M16 9l5 5M21 9l-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUnmuted() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 5L6 9H3v6h3l5 4V5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustedByVideo({
  src,
  ariaLabel = "Product and experience demo reel",
}: TrustedByVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

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
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "240px 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) {
      return;
    }

    if (isVisible && !userPaused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      return;
    }

    video.pause();
    setPlaying(false);
  }, [isVisible, shouldLoad, userPaused]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      setUserPaused(false);
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      return;
    }

    video.pause();
    setUserPaused(true);
    setPlaying(false);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  };

  return (
    <div ref={rootRef} className={styles.trustedVideoPlayer}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={styles.trustedVideoMedia}
          loop
          muted={muted}
          playsInline
          preload="none"
          aria-label={ariaLabel}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className={styles.trustedVideoPlaceholder} aria-hidden />
      )}
      {shouldLoad ? (
        <div className={styles.trustedVideoControls}>
          <button
            type="button"
            className={styles.trustedVideoControl}
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            aria-pressed={playing}
          >
            {playing ? <IconPause /> : <IconPlay />}
          </button>
          <button
            type="button"
            className={styles.trustedVideoControl}
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            aria-pressed={!muted}
          >
            {muted ? <IconMuted /> : <IconUnmuted />}
          </button>
        </div>
      ) : null}
    </div>
  );
}
