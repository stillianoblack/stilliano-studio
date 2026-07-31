import styles from "./page.module.css";
import { engagementPhases } from "@/data/about-sections-content";

export function EngagementStructureSection() {
  return (
    <section
      className="case-section section-spacing about-section about-section--engagement"
      aria-labelledby="about-engagement-heading"
    >
      <div className={`${styles.inner} about-engagement-editorial`}>
        <div className="about-engagement-intro">
          <p className="about-section-kicker">Engagement Model</p>
          <h2
            id="about-engagement-heading"
            className="case-heading display-heading display-heading-xl"
          >
            Example Engagement Structure
          </h2>
          <p className="case-body case-section-lead about-engagement-lead">
            A strategic systems arc — discovery through launch — designed for clarity,
            velocity, and measurable adoption.
          </p>
        </div>
        <ol className="about-engagement-timeline">
          {engagementPhases.map((phase) => (
            <li key={phase.phase} className="about-engagement-phase">
              <header className="about-engagement-phase-header">
                <span className="about-engagement-phase-label">{phase.phase}</span>
                <h3 className="about-engagement-phase-title">
                  {phase.title}
                  <span className="about-engagement-phase-window">
                    ({phase.window})
                  </span>
                </h3>
              </header>
              <ul className="about-engagement-phase-list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
