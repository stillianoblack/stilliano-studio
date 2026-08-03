import Link from "next/link";
import {
  developmentProcessSteps,
  storiesRecognitionEntries,
  storySystemsFeatures,
} from "@/data/stories-slate-content";
import styles from "./stories-sections.module.css";

export function StorySystemsSection() {
  return (
    <section className={styles.systems} aria-labelledby="story-systems-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>STORY SYSTEMS</p>
        <h2 id="story-systems-heading" className={styles.systemsHeading}>
          Great stories need equally strong platforms.
        </h2>
        <p className={styles.systemsBody}>
          My work spans both creative development and the digital systems that help stories
          reach audiences, grow communities, and evolve across formats. From building
          MontageCMS and shaping HBCU GO&apos;s streaming ecosystem to developing Caiden&apos;s
          Courage across books, games, curriculum, and interactive experiences, I understand
          how content strategy, product design, distribution, and audience engagement work
          together.
        </p>

        <ul className={styles.systemsGrid}>
          {storySystemsFeatures.map((feature) => (
            <li key={feature.id}>
              <Link href={feature.href} className={styles.systemsCard}>
                <div className={styles.systemsMedia}>
                  <img src={feature.image} alt={feature.alt} loading="lazy" decoding="async" />
                </div>
                <div className={styles.systemsCopy}>
                  <p className={styles.systemsEyebrow}>{feature.eyebrow}</p>
                  <h3 className={styles.systemsTitle}>{feature.title}</h3>
                  <p className={styles.systemsDescription}>{feature.description}</p>
                  <span className={styles.systemsLink}>View case study →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DevelopmentProcessSection() {
  return (
    <section className={styles.process} aria-labelledby="development-process-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>FROM IDEA TO AUDIENCE</p>
        <h2 id="development-process-heading" className={styles.processHeading}>
          A connected development process
        </h2>
        <ol className={styles.processSequence}>
          {developmentProcessSteps.map((step) => (
            <li key={step.step} className={styles.processStep}>
              <span className={styles.processNumber} aria-hidden>
                {step.step}
              </span>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDescription}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function StoriesRecognitionSection() {
  if (!storiesRecognitionEntries.length) {
    return null;
  }

  return (
    <section
      className={`${styles.recognition} ${styles.recognitionAfterHero}`}
      aria-labelledby="stories-recognition-heading"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>RECOGNITION</p>
        <h2 id="stories-recognition-heading" className={styles.recognitionHeading}>
          Selected Recognition &amp; Industry Experience
        </h2>
        <ul className={styles.recognitionList}>
          {storiesRecognitionEntries.map((entry) => (
            <li key={entry.id} className={styles.recognitionItem}>
              <div className={styles.recognitionCopy}>
                <p className={styles.recognitionTitle}>{entry.title}</p>
                <p className={styles.recognitionDetail}>{entry.detail}</p>
              </div>
              <p className={styles.recognitionContext}>{entry.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
