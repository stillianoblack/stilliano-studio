"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLazyInView } from "./useLazyInView";

type CaseYouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  showMuteToggle?: boolean;
  /** When true (default), the iframe loads only after scrolling near the viewport. */
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

function buildEmbedSrc(videoId: string, muted: boolean) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    loop: "1",
    playlist: videoId,
    playsinline: "1",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    fs: "0",
    disablekb: "1",
    iv_load_policy: "3",
    cc_load_policy: "0",
    enablejsapi: "1",
  });

  if (typeof window !== "undefined") {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function youtubePosterUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function CaseYouTubeEmbed({
  videoId,
  title,
  className = "",
  showMuteToggle = true,
  lazy = true,
}: CaseYouTubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const revealTimerRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const { ref: rootRef, inView } = useLazyInView({ eager: !lazy });

  const reveal = useCallback(() => {
    setRevealed((current) => (current ? current : true));
  }, []);

  const embedSrc = inView ? buildEmbedSrc(videoId, true) : undefined;

  useEffect(() => {
    setRevealed(false);
  }, [videoId]);

  useEffect(() => {
    return () => {
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) {
      return;
    }

    function onMessage(event: MessageEvent) {
      if (
        event.origin !== "https://www.youtube-nocookie.com" &&
        event.origin !== "https://www.youtube.com"
      ) {
        return;
      }

      if (typeof event.data !== "string") {
        return;
      }

      try {
        const payload = JSON.parse(event.data) as {
          event?: string;
          info?: number;
        };

        if (payload.event === "onStateChange" && payload.info === 1) {
          reveal();
        }
      } catch {
        // Ignore non-JSON postMessages from the embed.
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [inView, reveal]);

  const postCommand = useCallback((func: "mute" | "unMute") => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) {
      return;
    }
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  }, []);

  const handleIframeLoad = () => {
    revealTimerRef.current = window.setTimeout(reveal, 900);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    postCommand(next ? "mute" : "unMute");
  };

  const posterUrl = youtubePosterUrl(videoId);

  return (
    <div ref={rootRef} className={`case-youtube-embed ${className}`.trim()}>
      <div className="case-youtube-embed-viewport" aria-hidden={!revealed}>
        {embedSrc ? (
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            onLoad={handleIframeLoad}
          />
        ) : (
          <div
            className="case-youtube-embed-poster case-youtube-embed-poster--preload"
            style={{ backgroundImage: `url(${posterUrl})` }}
            role="img"
            aria-label={title}
          />
        )}
      </div>
      <div
        className="case-youtube-embed-chrome case-youtube-embed-chrome--top"
        aria-hidden
      />
      <div
        className="case-youtube-embed-chrome case-youtube-embed-chrome--bottom"
        aria-hidden
      />
      {embedSrc ? (
        <div
          className={`case-youtube-embed-poster${revealed ? " is-revealed" : ""}`}
          style={{ backgroundImage: `url(${posterUrl})` }}
          aria-hidden
        />
      ) : null}
      <div className="case-youtube-embed-shield" aria-hidden />
      {showMuteToggle && embedSrc ? (
        <button
          type="button"
          className="case-cinematic-video-unmute case-youtube-embed-unmute"
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
