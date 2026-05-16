import type { Metadata } from "next";
import Link from "next/link";
import { CaseCinematicVideo } from "../../CaseCinematicVideo";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Amira AI Learning | Stilliano Studio",
  description:
    "Editorial product campaign on behavioral engagement systems, gamified learning, emotional reinforcement, and student motivation for Amira AI Learning.",
  openGraph: {
    title: "Amira AI Learning | Stilliano Studio",
    description:
      "How gameplay systems, emotional reinforcement, and progression loops help students want to keep learning.",
  },
};

const POSTER = "/images/Portfolio%20Cards/amiramock-up_stilliano.webp";
const PROGRESSION_STILL = "/images/Selected%20Works/Amira/wewon_.webp";
const EXCELLENCE_STILL =
  "/images/Selected%20Works/Amira/GloballyRecognizedExcellence.webp";
/** Bump when replacing files in /public/videos/ so browsers fetch fresh encodes. */
const AMIRA_VIDEO_VERSION = "4";

function amiraVideo(path: string) {
  return `${path}?v=${AMIRA_VIDEO_VERSION}`;
}

const AMIRA_VIDEOS = {
  overview: amiraVideo("/videos/AmiraLearning.mp4"),
  marketingCelebration: amiraVideo("/videos/Amira_Marketing_9x16_1.mp4"),
  marketingVoice: amiraVideo("/videos/Amira_Marketing_9x16_2.mp4"),
  userTesting: amiraVideo("/videos/AmiraLearning_Dylon_Testing.mp4"),
  danceChicken: amiraVideo("/videos/Amira_Dance_Chicken.mp4"),
  drBackfire: amiraVideo("/videos/DrBackfire_Character.mp4"),
} as const;

const aiExperienceVideos: {
  src: string;
  poster?: string;
  ariaLabel: string;
  quote: string;
  caption: string;
  index: string;
  stagger?: boolean;
}[] = [
  {
    src: AMIRA_VIDEOS.marketingCelebration,
    poster: POSTER,
    ariaLabel: "Student celebration loop showing Amira reading achievement",
    quote: "Look what I did in Amira today",
    caption: "Student celebration loop",
    index: "01",
  },
  {
    src: AMIRA_VIDEOS.marketingVoice,
    poster: POSTER,
    ariaLabel: "Voice-assisted reading interaction in Amira mobile experience",
    quote: "Listen",
    caption: "Voice-assisted reading interaction",
    index: "02",
    stagger: true,
  },
];

const aiExperiencePoints = [
  "Voice-powered reading support",
  "Adaptive story recommendations",
  "AI-assisted intervention moments",
  "Literacy engagement systems",
  "Classroom-tested learning experiences",
];

const challengeBullets = [
  "Low engagement in traditional learning apps",
  "Lack of personalization at scale",
  "Gap between entertainment and measurable learning outcomes",
];

const challengeStills: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/Selected%20Works/Amira/Gameplayatmosphere.webp",
    alt: "Immersive Amira literacy gameplay atmosphere across tablet devices",
    caption: "Gameplay atmosphere · emotional participation",
  },
  {
    src: "/images/Selected%20Works/Amira/Progressiontension.webp",
    alt: "Amira progression tension between frustration and reward during gameplay",
    caption: "Progression tension · frustration vs reward",
  },
  {
    src: "/images/Selected%20Works/Amira/Engagementobservation.webp",
    alt: "Student engagement observation and session behavior during Amira learning",
    caption: "Engagement observation · session behavior",
  },
];

const heroMetrics = [
  "4M+ Students Reached",
  "Gamified Learning Ecosystem",
  "Mobile + Classroom Platform",
  "Behavioral Engagement Design",
];

const overviewServices = [
  "AI-Powered Learning Experiences",
  "Educational Game Design",
  "Adaptive Reading Systems",
  "Product & Platform Design",
  "Student Engagement Strategy",
  "Interactive Storytelling",
  "Learning UX & Behavioral Design",
  "Gamification & Reward Loops",
  "Character & World Development",
  "User Research & Classroom Testing",
];

const strategySystems = [
  { title: "XP + Progression", body: "Visible ladders that translate practice into momentum." },
  { title: "Reward Loops", body: "Celebration beats timed to effort, not only correctness." },
  { title: "Learning Milestones", body: "Structured arcs that signal growth across reading journeys." },
  { title: "Character Feedback", body: "Reactions that reduce frustration and extend sessions." },
  { title: "Session Momentum", body: "Pacing tuned for classroom rhythm and solo play." },
  { title: "Classroom Engagement", body: "Signals teachers can trust without stealing focus." },
];

const characterInsights = [
  "Celebration increased delight after difficult moments",
  "Reactions reduced frustration during failure states",
  "Emotional feedback encouraged students to continue",
  "Character systems created attachment beyond the lesson",
];

const progressionBeats = [
  {
    title: "Session open",
    body: "Students enter with clear goals, warm character welcome, and immediate sense of progress.",
  },
  {
    title: "Practice loop",
    body: "Reading actions connect to XP, micro-rewards, and readable feedback at every beat.",
  },
  {
    title: "Milestone unlock",
    body: "Achievement moments punctuate the journey — visible, celebratory, emotionally legible.",
  },
  {
    title: "Return trigger",
    body: "Progress state and character memory invite the next session without pressure.",
  },
];

const productFocus = [
  { title: "Engagement psychology", body: "Interaction patterns grounded in sustained attention." },
  { title: "Habit loops", body: "Cadences built for coming back tomorrow." },
  { title: "Progression pacing", body: "Difficulty curves aligned with literacy growth." },
  { title: "Emotional reinforcement", body: "Confidence-building beats woven through flows." },
  { title: "Motivational UX", body: "Feedback that feels rewarding, not punitive." },
  { title: "Adaptive participation", body: "Systems that flex across classroom and mobile." },
];

const outcomeBullets = [
  "Encouraged stronger repeat participation through progression and reward systems",
  "Designed emotional feedback systems that reinforced learning momentum",
  "Increased engagement through gamified interaction loops",
  "Helped transform literacy practice into a more interactive experience",
  "Built scalable engagement systems supporting both classroom and mobile learning",
];

const pullQuotes = [
  { quote: "It feels like I'm actually winning.", attribution: "Student reaction · reward moment" },
  { quote: "I wanted to keep going.", attribution: "Student reaction · session momentum" },
  { quote: "The characters made me smile.", attribution: "Student reaction · character delight" },
];

const userResearchBullets = [
  "Student interview research",
  "Gameplay interaction testing",
  "Learning behavior insights",
  "Emotional engagement analysis",
  "Reward system feedback",
  "Participation loop validation",
];

type ResearchInsight =
  | {
      label: string;
      ariaLabel: string;
      image: string;
    }
  | {
      label: string;
      ariaLabel: string;
      video: string;
      poster?: string;
    };

const characterMoments: { label: string; ariaLabel: string; video: string }[] = [
  {
    label: "Amira Dance Chicken",
    ariaLabel: "Amira character dance chicken animation in gameplay",
    video: AMIRA_VIDEOS.danceChicken,
  },
  {
    label: "Dr Backfire Character",
    ariaLabel: "Dr Backfire character reaction and expression states",
    video: AMIRA_VIDEOS.drBackfire,
  },
];

const researchInsights: ResearchInsight[] = [
  {
    label: "User Testing",
    ariaLabel: "Student gameplay interaction testing session with Amira",
    video: AMIRA_VIDEOS.userTesting,
    poster: POSTER,
  },
  {
    label: "Parents Takeaways",
    ariaLabel: "Parent takeaways from Amira learning sessions",
    image: "/images/Selected%20Works/Amira/parentstakeaways.webp",
  },
  {
    label: "Character Takeaways",
    ariaLabel: "Character-driven emotional takeaways from Amira gameplay",
    image: "/images/Selected%20Works/Amira/CharacterTakeaways.webp",
  },
  {
    label: "Student Feedback",
    ariaLabel: "Student feedback on learning progression and engagement",
    image: "/images/Selected%20Works/Amira/feedback.webp",
  },
];

export default function AmiraLearningCaseStudyPage() {
  return (
    <div className="case-page case-page--amira">
      <main>
        {/* 1 — Hero */}
        <section className="case-hero" aria-label="Amira AI Learning campaign">
          <img
            className="case-hero-media"
            src={POSTER}
            alt="Amira AI Learning literacy gameplay across tablet and mobile devices"
            fetchPriority="high"
            decoding="async"
          />
          <div className="case-hero-overlay" aria-hidden />
          <div className="case-hero-pattern" aria-hidden />
          <div className={`${styles.inner} case-hero-content`}>
            <p className="case-hero-eyebrow">
              AI LEARNING / GAMIFIED EDUCATION / ENGAGEMENT SYSTEMS
            </p>
            <h1 className="case-hero-title display-heading display-heading-xl">
              Amira AI Learning
            </h1>
            <p className="case-hero-subtitle">
              Built interactive educational experiences, reward systems, and gameplay-driven
              engagement loops designed to improve participation, retention, and reading confidence
              for students.
            </p>
            <Link href="/#work" className="case-hero-back">
              Back to Work →
            </Link>
          </div>
        </section>

        {/* 2 — AI learning experience campaign */}
        <section
          className="case-section case-amira-ai-experience section-spacing"
          aria-labelledby="ai-experience-heading"
        >
          <p className="case-amira-ai-experience-bg-quote" aria-hidden>
            Reading confidence starts with engagement.
          </p>
          <div className={`${styles.inner} case-amira-ai-experience-layout`}>
            <div className="case-amira-ai-experience-copy">
              <p className="case-amira-ai-experience-label">AI Learning Experience</p>
              <h2
                id="ai-experience-heading"
                className="display-heading case-amira-ai-experience-title"
              >
                Reading, reimagined through play.
              </h2>
              <div className="case-amira-ai-experience-prose">
                <p>
                  Amira accelerates reading mastery by recommending appropriately challenging
                  stories, listening as students read aloud, and intervening when helpful.
                </p>
                <p className="case-amira-ai-experience-partners">
                  Built in partnership with leading institutions including Carnegie Mellon, Johns
                  Hopkins, and The UT Health Science Center at Houston.
                </p>
              </div>
              <ul className="case-amira-ai-experience-points">
                {aiExperiencePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="case-amira-ai-experience-campaigns" role="list">
              {aiExperienceVideos.map((video) => (
                <figure
                  key={video.index}
                  className={`case-amira-ai-experience-poster${
                    video.stagger ? " case-amira-ai-experience-poster--stagger" : ""
                  }`}
                  role="listitem"
                >
                  <div className="case-amira-ai-experience-poster-inner">
                    <CaseCinematicVideo
                      src={video.src}
                      poster={video.poster}
                      ariaLabel={video.ariaLabel}
                      className="case-amira-ai-experience-video"
                    />
                  </div>
                  <figcaption className="case-amira-ai-experience-caption">
                    <span className="case-amira-ai-experience-poster-meta" aria-hidden>
                      <span>Campaign {video.index}</span>
                      <span>9:16</span>
                    </span>
                    <q className="case-amira-ai-experience-caption-quote">{video.quote}</q>
                    <span className="case-amira-ai-experience-caption-role">{video.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — Editorial excellence */}
        <section
          className="case-section case-amira-excellence section-spacing"
          aria-labelledby="excellence-heading"
        >
          <div className={`${styles.inner} case-amira-excellence-layout`}>
            <div className="case-amira-excellence-copy">
              <p className="case-amira-excellence-eyebrow">Award Winning Innovation</p>
              <h2
                id="excellence-heading"
                className="display-heading display-heading-xl case-amira-excellence-title"
              >
                Globally Recognized Excellence
              </h2>
            </div>
            <figure className="case-amira-excellence-media">
              <img
                src={EXCELLENCE_STILL}
                alt="Amira AI Learning globally recognized excellence and innovation awards"
                loading="lazy"
                decoding="async"
                width={1400}
                height={900}
              />
            </figure>
          </div>
        </section>

        <section className="case-amira-metrics-strip" aria-label="Project highlights">
          <div className={styles.inner}>
            <ul className="case-amira-metrics-strip-list">
              {heroMetrics.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 — Overview */}
        <section
          className="case-section case-page-overview-band section-spacing"
          aria-labelledby="overview-heading"
        >
          <div className={styles.inner}>
            <h2
              id="overview-heading"
              className="display-heading display-heading-xl case-overview-heading"
            >
              Designing learning systems students actually wanted to return to.
            </h2>
            <div className="case-overview-video case-overview-video--player">
              <CaseCinematicVideo
                src={AMIRA_VIDEOS.overview}
                poster={POSTER}
                ariaLabel="Amira AI Learning platform and gameplay preview"
                className="case-overview-cinematic-video"
              />
            </div>
            <div className="case-overview-meta">
              <div className="case-overview-col">
                <p className="case-overview-kicker">Services</p>
                <ul className="case-overview-list">
                  {overviewServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="case-overview-col">
                <p className="case-overview-kicker">Project</p>
                <p className="case-overview-project">Amira AI Learning</p>
                <p className="case-overview-project-meta">
                  Product & experience design, adaptive literacy · Education
                </p>
              </div>
              <div className="case-overview-col case-overview-col--wide">
                <p className="case-overview-kicker">Overview</p>
                <div className="case-overview-prose">
                  <p>
                    Designing an AI-powered reading platform proven to accelerate student
                    learning outcomes
                  </p>
                  <p>
                    Led end-to-end product and experience design for an adaptive learning
                    ecosystem that combined AI, storytelling, gameplay systems, and behavioral
                    engagement mechanics to improve literacy participation, retention, and
                    student confidence across classroom and mobile experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 — The Problem */}
        <section
          className="case-section case-amira-problem section-spacing"
          aria-labelledby="problem-heading"
        >
          <div className={styles.inner}>
            <p className="case-amira-narrative-kicker">How do you make students want to keep learning?</p>
            <h2 id="problem-heading" className="display-heading display-heading-xl">
              Students disengage when learning feels transactional.
            </h2>
            <p className="case-section-lead">
              Traditional educational systems often focused heavily on curriculum delivery while
              ignoring emotional motivation, progression systems, and reward mechanics that encourage
              students to continue participating.
            </p>
          </div>

          <div className={styles.inner}>
            <div className="case-visual-lang-layout case-challenge-sticky-layout">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="challenge-sticky-heading"
              >
                <h3 id="challenge-sticky-heading" className="case-visual-lang-sticky-title">
                  The Challenge
                </h3>
                <p className="case-visual-lang-sticky-text">
                  The challenge was not only helping students learn — it was helping them stay
                  emotionally engaged long enough to build confidence and momentum.
                </p>
                <ul className="case-challenge-bullet-list case-challenge-bullet-list--light">
                  {challengeBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {challengeStills.map((still) => (
                  <figure key={still.caption} className="case-amira-campaign-still" role="listitem">
                    <img
                      src={still.src}
                      alt={still.alt}
                      loading="lazy"
                      decoding="async"
                      width={1600}
                      height={1000}
                    />
                    <figcaption className="case-visual-caption">{still.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Student research / interviews */}
        <section
          className="case-section case-section-dark case-amira-research section-spacing"
          aria-labelledby="research-heading"
        >
          <div className={styles.inner}>
            <h2
              id="research-heading"
              className="display-heading display-heading--light display-heading-xl"
            >
              Listening before designing.
            </h2>
            <p className="case-section-lead case-section-lead--muted">
              Before shaping systems, we observed how students experienced learning — excitement,
              delight, frustration, and the moments that made them want to continue. This was
              emotional insight gathering, not corporate usability theater.
            </p>

            <div className="case-visual-lang-layout case-challenge-sticky-layout case-amira-research-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="user-research-heading"
              >
                <h3 id="user-research-heading" className="case-visual-lang-sticky-title">
                  User Research
                </h3>
                <ul className="case-challenge-bullet-list case-challenge-bullet-list--dark">
                  {userResearchBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {researchInsights.map((item) => (
                  <figure
                    key={item.label}
                    className="case-visual-lang-still case-challenge-still-figure case-amira-research-still"
                    role="listitem"
                  >
                    {"video" in item ? (
                      <CaseCinematicVideo
                        src={item.video}
                        poster={item.poster}
                        ariaLabel={item.ariaLabel}
                        showAudioToggle
                        className="case-amira-research-video"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.ariaLabel}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <figcaption className="case-visual-caption case-visual-caption--dark">
                      {item.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="case-amira-pull-quotes" aria-label="Student insights">
              {pullQuotes.map((item) => (
                <blockquote key={item.quote} className="case-amira-pull-quote">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <cite>{item.attribution}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — Strategy */}
        <section
          className="case-section case-section-approach section-spacing"
          aria-labelledby="strategy-heading"
        >
          <div className={styles.inner}>
            <h2 id="strategy-heading" className="display-heading display-heading-xl">
              Build learning like a game loop.
            </h2>
            <p className="case-section-lead">
              The product strategy focused on transforming literacy practice into an interactive
              progression system. Every interaction was designed to reinforce momentum,
              participation, achievement, and emotional engagement.
            </p>
            <p className="case-section-lead">
              This required connecting gameplay systems, progression loops, rewards, visual feedback,
              learning milestones, emotional reinforcement, and classroom usability into one
              ecosystem.
            </p>
            <div className="case-grid case-grid--4">
              {strategySystems.map((card) => (
                <article key={card.title} className="case-card case-card--light">
                  <h3 className="case-card-title">{card.title}</h3>
                  <p className="case-card-body">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — Character systems */}
        <section
          className="case-section case-section-dark case-amira-characters section-spacing"
          aria-labelledby="characters-heading"
        >
          <div className={styles.inner}>
            <h2
              id="characters-heading"
              className="display-heading display-heading--light display-heading-xl"
            >
              Characters became emotional anchors.
            </h2>
            <p className="case-section-lead case-section-lead--muted">
              Character systems and animations reinforced positive emotional behavior — celebration
              after effort, reactions during difficulty, and feedback that made continuation feel
              worthwhile.
            </p>
          </div>

          <div className={styles.inner}>
            <div className="case-visual-lang-layout case-challenge-sticky-layout case-amira-characters-sticky">
              <aside
                className="case-visual-lang-sticky"
                aria-labelledby="characters-sticky-heading"
              >
                <h3 id="characters-sticky-heading" className="case-visual-lang-sticky-title">
                  Emotional feedback
                </h3>
                <ul className="case-outcome-list case-outcome-list--behavior case-outcome-list--sticky">
                  {characterInsights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
              <div className="case-visual-lang-stills" role="list">
                {characterMoments.map((item) => (
                  <figure
                    key={item.label}
                    className="case-visual-lang-still case-challenge-still-figure case-amira-research-still"
                    role="listitem"
                  >
                    <CaseCinematicVideo
                      src={item.video}
                      ariaLabel={item.ariaLabel}
                      className="case-amira-research-video"
                    />
                    <figcaption className="case-visual-caption case-visual-caption--dark">
                      {item.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 — Gameplay + progression */}
        <section
          className="case-section case-amira-progression section-spacing"
          aria-labelledby="progression-heading"
        >
          <div className={styles.inner}>
            <h2 id="progression-heading" className="display-heading display-heading-xl">
              Every interaction reinforced progress.
            </h2>
            <p className="case-section-lead">
              Level systems, achievement beats, reading milestones, and session pacing were designed
              as behavior architecture — not interface documentation.
            </p>
            <ol className="case-journey case-journey--light" aria-label="Progression system">
              {progressionBeats.map((step, i) => (
                <li key={step.title} className="case-journey-step case-journey-step--light">
                  <span className="case-journey-index case-journey-index--light" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="case-journey-title case-journey-title--light">{step.title}</h3>
                    <p className="case-journey-body case-journey-body--light">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="case-amira-campaign-still case-amira-campaign-still--full">
              <img
                src={PROGRESSION_STILL}
                alt="Amira gameplay win state celebrating student progress and achievement"
                loading="lazy"
                decoding="async"
                width={1600}
                height={1000}
              />
              <figcaption className="case-visual-caption">
                Progression architecture · literacy milestones
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 7 — Product thinking */}
        <section
          className="case-section case-section-dark section-spacing"
          aria-labelledby="thinking-heading"
        >
          <div className={styles.inner}>
            <h2
              id="thinking-heading"
              className="display-heading display-heading--light display-heading-xl"
            >
              More than a game interface.
            </h2>
            <p className="case-section-lead case-section-lead--muted">
              The experience needed to balance educational value with emotional motivation. Every
              interaction supported learning outcomes while helping students feel progress,
              confidence, and ownership over time.
            </p>
            <div className="case-grid">
              {productFocus.map((item) => (
                <article key={item.title} className="case-card">
                  <h3 className="case-card-title">{item.title}</h3>
                  <p className="case-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — Outcomes */}
        <section
          className="case-section case-section-outcome section-spacing"
          aria-labelledby="outcome-heading"
        >
          <div className={styles.inner}>
            <p className="case-amira-metric-banner">4M+ students reached</p>
            <h2 id="outcome-heading" className="display-heading display-heading-xl">
              Designed to improve engagement, confidence, and retention.
            </h2>
            <p className="case-section-lead">
              The work connected learning participation, emotional engagement, repeat usage, and
              scalable systems across classroom and mobile — framed around behavior, not screens.
            </p>
            <ul className="case-outcome-list">
              {outcomeBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9 — Closing philosophy */}
        <section className="case-section section-spacing" aria-labelledby="philosophy-heading">
          <div className={styles.inner}>
            <h2 id="philosophy-heading" className="display-heading display-heading-xl">
              Learning is an emotional experience.
            </h2>
            <p className="case-section-lead">
              The strongest educational products do more than deliver lessons. They create systems
              that help students feel progress, confidence, curiosity, and momentum.
            </p>
            <p className="case-section-lead">
              This project became a case study in how product design, gameplay systems, emotional
              reinforcement, and storytelling can work together to support better learning behavior.
            </p>
          </div>
        </section>

        <section
          className="case-cta case-cta--editorial section-spacing"
          aria-labelledby="case-cta-heading"
        >
          <div className={`${styles.inner} case-cta-editorial-wrap`}>
            <h2
              id="case-cta-heading"
              className="display-heading display-heading-xl case-cta-editorial-headline"
            >
              <span className="case-cta-editorial-line">Continue exploring</span>
              <span className="case-cta-editorial-line">product &amp; culture</span>
              <span className="case-cta-editorial-line">work →</span>
            </h2>
            <div className="case-cta-editorial-rule" aria-hidden />
            <div className="case-cta-editorial-row">
              <p className="case-cta-editorial-body">
                View more selected work or explore the HBCUgo streaming case study.
              </p>
              <div className="case-cta-editorial-actions">
                <Link href="/#work" className="case-cta-editorial-button">
                  View More Work
                </Link>
                <Link href="/work/hbcugo" className="case-cta-editorial-link-secondary">
                  Next: HBCUgo →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
