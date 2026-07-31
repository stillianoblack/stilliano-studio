import styles from "./page.module.css";
import { TrustedByVideo } from "./TrustedByVideo";

const trustedClients = [
  "Cartoon Network",
  "PBS Kids",
  "State Farm",
  "DC Comics",
  "Amira Learning AI",
  "HBCUgo",
  "TBS",
  "Target",
  "Petro Canada",
  "Office Depot",
  "AMC",
  "Best Buy",
];

export function TrustedClientsSection() {
  return (
    <section className={styles.trusted} aria-labelledby="trusted-heading">
      <div className={styles.inner}>
        <header className={styles.trustedIntroBlock}>
          <span className={`section-eyebrow ${styles.trustedEyebrow}`}>
            Selected Clients &amp; Collaborators
          </span>
          <h2 id="trusted-heading" className={styles.trustedHeadline}>
            Story-driven worlds and interactive systems across film, games,
            entertainment, education, AI, and emerging technology.
          </h2>
          <p className={styles.trustedSubcopy}>
            A reel of selected motion, interactive, product, and entertainment work.
          </p>
        </header>

        <div className={styles.trustedSplit} aria-label="Demo reel and clients">
          <div className={styles.trustedSplitLeft}>
            <div className={styles.trustedVideo}>
              <TrustedByVideo src="/videos/demo_2026_1.mp4" />
            </div>
          </div>
          <div className={styles.trustedSplitRight} aria-label="Client list">
            {trustedClients.map((name) => (
              <div key={name} className={styles.trustedClientName}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
