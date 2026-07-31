import styles from "./page.module.css";
import { ServicesAccordion } from "./ServicesAccordion";
import { serviceAccordionItems } from "@/data/services-content";

type ServicesLeadershipSectionProps = {
  ctaHref?: string;
};

export function ServicesLeadershipSection({
  ctaHref = "/#contact",
}: ServicesLeadershipSectionProps) {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className={styles.inner}>
        <div className="services-wrap">
          <div className="services-left">
            <span className="section-eyebrow">Areas of Leadership</span>
            <h2 id="services-heading" className="section-title">
              Strategic systems.
              <br />
              Creative execution.
            </h2>
            <a className="services-subeyebrow" href="#services">
              Ways I build →
            </a>

            <div className="services-media" aria-hidden>
              <img
                className="services-media-inner"
                src="/images/Web%20Images/Montage_Computer_WithManTyping.webp"
                alt=""
              />
            </div>
          </div>

          <div className="services-right">
            <ServicesAccordion items={serviceAccordionItems} defaultOpenIndex={0} />
            <a className="services-cta" href={ctaHref}>
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
