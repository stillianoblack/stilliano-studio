"use client";

import { useEffect, useRef, useState } from "react";
import { useLazyInView } from "./useLazyInView";

type CaseCinematicVideoProps = {
  src?: string;
  poster?: string;
  ariaLabel: string;
  captionsSrc?: string;
  showAudioToggle?: boolean;
  className?: string;
  placeholderLabel?: string;
  /** When true (default), video source loads only after scrolling near the viewport. */
  lazy?: boolean;
};

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

function videoMimeType(src: string) {
  const path = src.split("?")[0] ?? src;
  return path.endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

export function CaseCinematicVideo({
  src,
  poster,
  ariaLabel,
  captionsSrc,
  showAudioToggle = false,
  className = "",
  placeholderLabel = "Visual forthcoming",
  lazy = true,
}: CaseCinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const { ref: rootRef, inView } = useLazyInView({ eager: !lazy || !src });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || !inView) {
      return;
    }

    void video.play().catch(() => {
      // Autoplay may be blocked until user gesture.
    });
  }, [inView, src]);

  if (!src) {
    return (
      <div
        ref={rootRef}
        className={`case-cinematic-video case-cinematic-video--placeholder ${className}`.trim()}
        role="img"
        aria-label={placeholderLabel}
      >
        <span className="case-cinematic-video-placeholder-label">{placeholderLabel}</span>
      </div>
    );
  }

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  };

  const showPosterShell = lazy && !inView;

  return (
    <div ref={rootRef} className={`case-cinematic-video ${className}`.trim()}>
      {showPosterShell ? (
        <div
          className="case-cinematic-video-poster-shell"
          role="img"
          aria-label={ariaLabel}
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        />
      ) : (
        <video
          ref={videoRef}
          className="case-cinematic-video-media"
          autoPlay
          loop
          muted={showAudioToggle ? muted : true}
          playsInline
          preload="none"
          poster={poster}
          aria-label={ariaLabel}
        >
          <source
            src={src}
            type={videoMimeType(src)}
          />
          {captionsSrc ? (
            <track kind="captions" src={captionsSrc} srcLang="en" label="English" default />
          ) : null}
        </video>
      )}
      {showAudioToggle && inView ? (
        <button
          type="button"
          className="case-cinematic-video-unmute"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
        >
          {muted ? <IconMuted /> : <IconUnmuted />}
        </button>
      ) : null}
    </div>
  );
}
