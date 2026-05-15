import { HeroStage } from "./HeroStage";
import styles from "./page.module.css";
import { ServicesAccordion, type ServiceAccordionItem } from "./ServicesAccordion";
import { portfolioWorkItems } from "@/data/portfolio-work";
import { WorkShowcase } from "./WorkShowcase";

const trustedClients = [
  "Sprite",
  "Best Buy",
  "Target",
  "HBCUgo",
  "Montage",
  "Amira Learning",
];


const enginePillars = [
  {
    title: "Product Experience",
    desc: "UX systems, feature flows, and interaction models designed to improve clarity, engagement, and retention across web, mobile, and streaming environments.",
  },
  {
    title: "Brand Systems",
    desc: "Visual and narrative systems that help products feel cohesive, recognizable, and aligned across every digital touchpoint.",
  },
  {
    title: "Digital Platforms",
    desc: "Websites, landing pages, and digital ecosystems designed to support conversion, storytelling, and scalable growth.",
  },
  {
    title: "Go-To-Market Strategy",
    desc: "Launch-focused experience strategy designed to help products communicate value clearly and drive audience engagement from day one.",
  },
];

const serviceAccordionItems: ServiceAccordionItem[] = [
  {
    title: "Product Experience Design",
    summary: "UX systems, feature design, and streaming experiences.",
    description:
      "We help startups and digital platforms structure products that feel intuitive, scalable, and aligned to user behavior.",
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
      "We create connected visual systems that align brand, interface, and product experience into one recognizable ecosystem.",
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
      "From landing pages to full digital ecosystems, we build platforms designed to support growth and audience interaction.",
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
      "We help teams shape how products are introduced, experienced, and understood during key growth phases.",
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
      "We help sports and streaming platforms create digital experiences that support fan engagement, discovery, sponsorship visibility, and retention.",
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
  "We don't just make it look good. We make it work. ";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HeroStage>
          <section className={styles.hero}>
            <div className={styles.inner}>
              <p className={styles.heroLabel}>
                SPORTS • STREAMING • CULTURE
              </p>
              <h1 className={styles.heroTitle}>
                Story-driven products.
                <br />
                Real-world <em>growth</em>.
              </h1>
              <p className={styles.heroLead}>
                Stilliano Studio partners with startups, streaming platforms, and
                digital brands to shape product experiences, UX systems, and
                go-to-market ecosystems built for engagement and scale.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.btnPrimary} href="#work">
                  View Work
                </a>
                <a className={styles.btnGhost} href="#contact">
                  Book Strategy Call
                </a>
              </div>
            </div>
          </section>
        </HeroStage>

        <section className={styles.trusted} aria-labelledby="trusted-heading">
          <div className={styles.inner}>
            <div className={styles.trustedLayout}>
              <div className={styles.trustedLead}>
                <h2 id="trusted-heading" className="section-title">
                  Trusted By
                </h2>
                <p className={styles.trustedIntro}>
                  Selected experience across Sprite, Best Buy, Target, HBCUgo,
                  Montage, Amira Learning, and digital product ecosystems.
                </p>
              </div>
              <div className={styles.trustedClients}>
                {trustedClients.map((name) => (
                  <div key={name} className={styles.trustedClient}>
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
                  src="/images/headshots-profiles/brian-rogers.jpeg"
                  alt="Brian Rogers"
                  loading="lazy"
                  decoding="async"
                />
                <blockquote className={styles.quoteBody}>
                  <p className={styles.quoteText}>
                    &ldquo;If you&apos;re looking for a studio that understands
                    both product thinking and brand storytelling, Stilliano
                    Studio delivers at a high level. Their creative direction, UX
                    instincts, and ability to shape cohesive digital experiences
                    consistently pushed the work forward.&rdquo;
                  </p>
                  <footer className={styles.quoteMeta}>— Brian Rogers</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={styles.workShowcase} aria-labelledby="work-heading">
          <div className={styles.inner}>
            <header className={styles.workShowcaseHead}>
              <span className="section-eyebrow">Work</span>
              <h2 id="work-heading" className="section-title">
                Selected Work
              </h2>
            </header>

            <WorkShowcase items={portfolioWorkItems} />
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

        <section id="about" className={styles.about}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>About us</span>
            </div>
            <div className={styles.aboutGrid}>
              <h2 className={styles.aboutTitle}>
                Built for teams navigating growth.
              </h2>
              <div className={styles.aboutBody}>
                <p>
                  Most startups don&apos;t fail because of bad ideas. They fail
                  because their product experience, positioning, and systems
                  become disconnected as they scale.
                </p>
                <p>
                  Stilliano Studio helps teams align product, UX, brand, and
                  go-to-market strategy into one cohesive experience — creating
                  digital ecosystems that are easier to understand, easier to
                  use, and easier to grow.
                </p>
                <p>
                  We operate at the intersection of product thinking,
                  storytelling, streaming strategy, and digital execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-heading">
          <div className={styles.inner}>
            <div className="services-wrap">
              <div className="services-left">
                <span className="section-eyebrow">Services</span>
                <h2 id="services-heading" className="section-title">
                  Strategic systems.
                  <br />
                  Creative execution.
                </h2>
                <a className="services-subeyebrow" href="#services">
                  Our services →
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
                  Get in Touch
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
              A strategic framework for shaping how digital products are built,
              experienced, and scaled.
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

        <section id="contact" className={styles.footerCta}>
          <div className={styles.inner}>
            <h2 className={`section-title ${styles.footerCtaTitle}`}>
              <span
                className={`${styles.footerCtaTitleLine} ${styles.footerCtaTitleLineFirst}`}
              >
                Building something{"\u00a0"}that
              </span>
              <span className={styles.footerCtaTitleLine}>needs to scale?</span>
            </h2>
            <div className={styles.footerCtaRule} aria-hidden />
            <div className={styles.footerCtaRow}>
              <p className={styles.footerNote}>
                Stilliano Studio partners with startups, streaming platforms, and
                modern digital brands to create product systems designed for
                growth, engagement, and long-term clarity.
              </p>
              <a
                className={styles.footerCtaButton}
                href="mailto:stills@montage.tv"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
