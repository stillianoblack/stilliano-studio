"use client";

import { useEffect, useRef, useState } from "react";

type UseLazyInViewOptions = {
  eager?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function useLazyInView({
  eager = false,
  rootMargin = "240px 0px",
  threshold = 0.08,
}: UseLazyInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(eager);

  useEffect(() => {
    if (eager) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, rootMargin, threshold]);

  return { ref, inView };
}
