import type { LeadershipTestimonial } from "@/data/leadership-feedback";
import styles from "./leadership-feedback.module.css";

function getInitials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type TestimonialCardProps = {
  testimonial: LeadershipTestimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardAvatar} aria-hidden>
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt="" loading="lazy" decoding="async" />
          ) : (
            <span className={styles.cardAvatarPlaceholder}>{getInitials(testimonial.name)}</span>
          )}
        </div>

        <blockquote className={styles.cardQuote}>
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>

        <footer className={styles.cardFooter}>
          <p className={styles.cardName}>{testimonial.name}</p>
          <p className={styles.cardRole}>{testimonial.role}</p>
        </footer>
      </div>
    </article>
  );
}
