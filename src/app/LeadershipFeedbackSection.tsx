"use client";

import { useMemo } from "react";
import { leadershipTestimonials } from "@/data/leadership-feedback";
import styles from "./leadership-feedback.module.css";
import { TestimonialCard } from "./TestimonialCard";

export function LeadershipFeedbackSection() {
  const marqueeTestimonials = useMemo(
    () => [...leadershipTestimonials, ...leadershipTestimonials],
    [],
  );

  return (
    <section
      className={styles.section}
      aria-labelledby="leadership-feedback-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Leadership & Partner Feedback</p>
          <h2 id="leadership-feedback-heading" className={styles.title}>
            Trusted by teams shaping culture, product, and scale.
          </h2>
          <p className={styles.subtext}>
            Leadership feedback from partners and collaborators across product strategy,
            UX systems, storytelling, and organizational execution.
          </p>
        </header>
      </div>

      <div
        className={styles.marquee}
        aria-label="Leadership and partner testimonials"
        tabIndex={0}
      >
        <div className={styles.track} role="list">
          {marqueeTestimonials.map((testimonial, index) => {
            const isDuplicate = index >= leadershipTestimonials.length;

            return (
              <div
                key={`${testimonial.id}-${index}`}
                className={styles.slide}
                role="listitem"
                aria-hidden={isDuplicate ? true : undefined}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
