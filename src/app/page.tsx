import Link from "next/link";
import { HomePortraitHero } from "./HomePortraitHero";
import { FeaturedWorldsIndex } from "./FeaturedWorldsIndex";
import styles from "./page.module.css";
import { ServicesAccordion, type ServiceAccordionItem } from "./ServicesAccordion";
import { LeadershipFeedbackSection } from "./LeadershipFeedbackSection";
import { TrustedByVideo } from "./TrustedByVideo";
import { BehindTheWorkSection } from "./BehindTheWorkSection";
import { WorkShowcase } from "./WorkShowcase";

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


const enginePillars = [
  {
    title: "Product Experience",
    desc: "Interaction models, feature flows, and world-facing UX designed to make story-driven products feel intuitive across film, games, web, mobile, and streaming.",
  },
  {
    title: "Brand Systems",
    desc: "Visual and narrative systems that keep characters, campaigns, and platforms cohesive as a universe scales across touchpoints.",
  },
  {
    title: "Digital Platforms",
    desc: "Websites, apps, and connected ecosystems built to support discovery, participation, and long-term audience engagement.",
  },
  {
    title: "Go-To-Market Strategy",
    desc: "Launch systems that connect creative vision to adoption — aligning teams, messaging, and operational readiness from concept to release.",
  },
];

const serviceAccordionItems: ServiceAccordionItem[] = [
  {
    title: "Product Experience Design",
    summary: "UX systems, feature design, and streaming experiences.",
    description:
      "Experience architecture for story-driven products — from gameplay loops and interactive narratives to platforms built for retention and clarity.",
    bullets: [
      "UX / UI Systems",
      "Product Strategy",
      "Feature Architecture",
      "Streaming & CTV Experience",
      "User Engagement Flows",
    ],
  },
  {
    title: "Brand Systems",
    summary: "Identity, visual language, and product cohesion.",
    description:
      "Connected visual and narrative systems that align brand, interface, and story into one recognizable creative universe.",
    bullets: [
      "Creative Direction",
      "Visual Identity",
      "Product Brand Systems",
      "Interface Design Language",
      "Design Consistency",
    ],
  },
  {
    title: "Digital Experience Design",
    summary: "Web platforms designed for engagement and conversion.",
    description:
      "Digital environments shaped for audience participation — from campaign platforms to full ecosystems that support growth and interaction.",
    bullets: [
      "Website Design",
      "Conversion Strategy",
      "Information Architecture",
      "Platform UX",
      "Content Systems",
    ],
  },
  {
    title: "Go-To-Market Experience Strategy",
    summary: "Launch positioning and growth-focused experience design.",
    description:
      "Go-to-market systems that help teams introduce story-driven products with clarity during key growth and release phases.",
    bullets: [
      "Launch Strategy",
      "Messaging Hierarchy",
      "Onboarding Systems",
      "Audience Positioning",
      "Conversion Paths",
    ],
  },
  {
    title: "Streaming + CTV Strategy",
    summary: "Connected TV and live audience experiences.",
    description:
      "Streaming and live-event experiences for sports and entertainment platforms — fan engagement, discovery, sponsorship visibility, and retention.",
    bullets: [
      "Streaming UX",
      "Live Event Systems",
      "Fan Engagement",
      "Sponsor Visibility",
      "Cross-Platform Strategy",
    ],
  },
];

const marquee =
  "Story first. Systems that ship. ";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HomePortraitHero />
        <FeaturedWorldsIndex />

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

        <section className={styles.quoteSection} aria-label="Testimonial">
          <div className={styles.inner}>
            <span className="section-eyebrow">Recent testimony</span>
            <div className={styles.quoteCard}>
              <div className={styles.quoteLayout}>
                <img
                  className={styles.quoteAvatar}
                  src="/images/headshots-profiles/katpat.webp"
                  alt="Katherine Piedade"
                  loading="lazy"
                  decoding="async"
                />
                <blockquote className={styles.quoteBody}>
                  <p className={styles.quoteText}>
                    &ldquo;Tarus combines product strategy, creative leadership, and
                    operational thinking in a way that consistently elevates both the
                    work and the teams around him.&rdquo;
                  </p>
                  <footer className={styles.quoteMeta}>
                    — <strong>Katherine Piedade</strong>
                    <br />
                    Transformation & Operations Leader
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <BehindTheWorkSection />

        <section id="work" className={styles.workShowcase} aria-labelledby="work-heading">
          <div className={styles.workShowcaseInner}>
            <header className={styles.workShowcaseHead}>
              <span className="section-eyebrow">Work</span>
              <h2 id="work-heading" className="section-title">
                Selected Worlds &amp; Systems
              </h2>
              <p className={styles.workShowcaseSubcopy}>
                Selected work across sports technology, streaming, education, entertainment,
                retail, and interactive media — each project reflecting a different way to
                turn ideas into scalable experiences.
              </p>
            </header>

            <WorkShowcase />
          </div>
        </section>

        <div className={styles.marqueeWrap} aria-hidden="true">
          <div className={styles.marquee}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>{marquee}</span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>{marquee}</span>
            ))}
          </div>
        </div>

        <section id="about" className={styles.about} aria-labelledby="about-heading">
          <p className={styles.aboutBgWord} aria-hidden="true">
            STILLS
          </p>
          <p className={styles.aboutVerticalLabel} aria-hidden="true">
            About
          </p>
          <div className={`${styles.inner} ${styles.aboutInner}`}>
            <header className={styles.aboutMasthead}>
              <span className={styles.aboutSectionNo}>01</span>
              <div className={styles.aboutMeta}>
                <span className={styles.aboutMetaLine}>About</span>
              </div>
              <span className={styles.aboutMastheadRule} aria-hidden="true" />
            </header>

            <div className={styles.aboutSpread}>
              <div className={styles.aboutVisualCol}>
                <figure className={styles.aboutPortrait}>
                  <img
                    className={styles.aboutPhoto}
                    src="/images/headshots-profiles/CD_TD_Headshot_copy.webp"
                    alt="Tarus D. Stills"
                    width={340}
                    height={420}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <p className={styles.aboutRole}>
                  Creative Product Executive,
                  <br />
                  Producer &amp; Creative Technologist
                </p>
                <div className={styles.aboutStatBlock}>
                  <span className={styles.aboutStatLabel}>Focus</span>
                  <p className={styles.aboutStatValue}>
                    Film &bull; Games &bull; AI &bull; Education &bull; Interactive Storytelling
                  </p>
                  <Link href="/about" className={styles.aboutNoseyLink}>
                    Get Nosey →
                  </Link>
                </div>
              </div>

              <div className={styles.aboutEditorialCol}>
                <p className={styles.aboutCaption}>
                  Los Angeles, CA / Story / Systems / Culture
                </p>

                <h2 id="about-heading" className={styles.aboutTitle}>
                  <span className={styles.aboutTitleLine}>Who is Stills?</span>
                  <span className={styles.aboutTitleLine}>
                    What is a Still&bull;i&bull;ano?
                  </span>
                </h2>

                <div className={styles.aboutBody}>
                  <p className={styles.aboutBodyLead}>Good question.</p>
                  <p>
                    Still&bull;i&bull;ano is the creative identity of Tarus D. Stills — a
                    producer, creative technologist, and product leader working at the
                    intersection of story, systems, and emerging technology.
                  </p>
                  <p>
                    The work spans film and motion design, product strategy, games, AI,
                    education, and interactive storytelling — building worlds that move from
                    concept to audience.
                  </p>
                  <p>
                    That path runs through entertainment platforms, learning systems, fan
                    experiences, and original IP — including Caiden&apos;s Courage, a
                    story-powered universe for focus, courage, and emotional growth.
                  </p>

                  <span className={styles.aboutSectionRule} aria-hidden="true" />

                  <h3 className={styles.aboutSubheading}>So what is a Still&bull;i&bull;ano?</h3>
                  <ul className={styles.aboutIdentityList}>
                    <li>Part producer.</li>
                    <li>Part creative technologist.</li>
                    <li>Part product leader.</li>
                    <li>Part worldbuilder.</li>
                    <li>Part storyteller who still asks &ldquo;what if?&rdquo;</li>
                  </ul>

                  <span className={styles.aboutSectionRule} aria-hidden="true" />

                  <h3 className={styles.aboutSubheading}>Film, Motion &amp; Production</h3>
                  <p>
                    Before product leadership, there was motion design, film, and production.
                    That foundation still shapes how I build digital products, direct creative
                    systems, and design story-driven experiences.
                  </p>
                  <ul className={styles.aboutIdentityList}>
                    <li>Produced a feature film on a 14-day shoot</li>
                    <li>Produced / 1st AD on a Telly Award-winning short screened at Cannes</li>
                    <li>Executive Produced a short film selected for LA Film Festival</li>
                    <li>Associate Produced a Lil Baby music video</li>
                    <li>Produced branded content, motion graphics, and commercial media</li>
                  </ul>
                </div>

                <blockquote className={styles.aboutClosingQuote}>
                  <p>Worlds are built at the intersection of vision and execution.</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-heading">
          <div className={styles.inner}>
            <div className="services-wrap">
              <div className="services-left">
                <span className="section-eyebrow">Capabilities</span>
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
                <a className="services-cta" href="#contact">
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.engine} aria-labelledby="engine-heading">
          <div className={styles.inner}>
            <h2 id="engine-heading" className="section-title">
              The system behind the experience.
            </h2>
            <p className={styles.engineIntro}>
              Behind every strong creative experience is a system: the workflows, teams,
              tools, and decisions that move an idea from concept to launch.
            </p>
            <div className={styles.engineGrid}>
              {enginePillars.map((pillar) => (
                <div key={pillar.title} className={styles.engineCard}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quoteSection} aria-label="Testimonial">
          <div className={styles.inner}>
            <blockquote className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;A trusted partner for years. Consistent, reliable, and
                genuinely invested in our mission.&rdquo;
              </p>
              <footer className={styles.quoteMeta}>
                <strong>Avery Chen</strong> / Senior Director, Fieldlight Media
              </footer>
            </blockquote>
          </div>
        </section>

        <LeadershipFeedbackSection />

        <section id="contact" className={styles.footerCta}>
          <div className={styles.inner}>
            <h2 className={`section-title ${styles.footerCtaTitle}`}>
              <span
                className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineDesktop}`}
              >
                Building something{"\u00a0"}that
              </span>
              <span className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineMobile}`}>
                Building something
              </span>
              <span className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineMobile}`}>
                that
              </span>
              <span className={styles.footerCtaTitleLine}>needs to feel alive?</span>
            </h2>
            <div className={styles.footerCtaRule} aria-hidden />
            <div className={styles.footerCtaRow}>
              <p className={styles.footerNote}>
                I collaborate with teams and founders building story-driven products,
                entertainment experiences, platforms, and creative systems that need to
                move from idea to launch.
              </p>
              <a
                className={styles.footerCtaButton}
                href="mailto:stills@montage.tv"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
