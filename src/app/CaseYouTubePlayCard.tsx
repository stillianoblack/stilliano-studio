"use client";

import { useState } from "react";

type CaseYouTubePlayCardProps = {
  videoId: string;
  title: string;
  className?: string;
};

function youtubePosterUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function buildPlaySrc(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "0",
    controls: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function CaseYouTubePlayCard({
  videoId,
  title,
  className = "",
}: CaseYouTubePlayCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`case-youtube-play-card ${className}`.trim()}>
      {playing ? (
        <div className="case-youtube-play-card-viewport">
          <iframe
            src={buildPlaySrc(videoId)}
            title={title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          className="case-youtube-play-card-trigger"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <span
            className="case-youtube-play-card-poster"
            style={{ backgroundImage: `url(${youtubePosterUrl(videoId)})` }}
            aria-hidden
          />
          <span className="case-youtube-play-card-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
