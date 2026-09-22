import type { Metadata } from "next";
import Link from "next/link";
import {
  homeCaidenImages,
  homeCareerPoints,
  homeConnectAreas,
  homeIdeaItems,
  homeMontageImage,
  homeMontageProof,
  homeSocialLinks,
  homeSpeakingTopics,
} from "@/data/home-thought-leadership";
import {
  HOME_META_DESCRIPTION,
  IDENTITY_BYLINE,
  IDENTITY_SUPPORTING_COPY,
  buildPageMetadata,
  pageTitle,
} from "@/data/site-seo";
import { portraitHeroImages } from "@/data/hero-images";
import styles from "./page.module.css";
import homeStyles from "./home-editorial.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle("Filmmaker, Author & Creator"),
  description: HOME_META_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className={`${styles.page} ${homeStyles.home}`}>
      <main>
        {/* 01 HERO — full-bleed portrait */}
        <section className={homeStyles.hero} aria-labelledby="home-hero-heading">
          <picture className={homeStyles.heroMedia}>
            <source
              media="(max-width: 768px)"
              srcSet={portraitHeroImages.home.mobile}
            />
            <img
              src={portraitHeroImages.home.desktop}
              alt=""
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className={homeStyles.heroOverlay} aria-hidden />
          <div className={`${styles.inner} ${homeStyles.heroContent}`}>
            <div className={homeStyles.heroInner}>
              <h1 className={homeStyles.heroStatement} id="home-hero-heading">
                <span aria-hidden>👋🏾 </span>Hello, I&apos;m T.D. Stills.
              </h1>
              <p className={homeStyles.heroRoles}>{IDENTITY_BYLINE}</p>
              <p className={homeStyles.heroIdentity}>{IDENTITY_SUPPORTING_COPY}</p>
              <p className={homeStyles.heroLead}>
                Explore what I&apos;m building across media, technology, and original IP
              </p>
              <div className={homeStyles.heroActions}>
                <a href="#caiden" className={homeStyles.heroCta}>
                  Explore My Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 02 INTRO — under header */}
        <section
          id="intro"
          className={homeStyles.introSection}
          aria-labelledby="intro-heading"
        >
          <div className={styles.inner}>
            <div className={homeStyles.introInner}>
              <p className={homeStyles.sectionEyebrow}>About</p>
              <h2 id="intro-heading" className={homeStyles.introHeading}>
                Bio
              </h2>
              <div className={homeStyles.introProse}>
                <p>
                  I&apos;ve always cared about great stories — and how those stories evolve
                  across platforms, formats, and audiences. For more than 15 years, I&apos;ve
                  worked at the intersection of storytelling, digital products, and audience
                  experience across streaming, sports, entertainment, education, and emerging
                  technology.
                </p>
                <p>
                  Today, I&apos;m especially interested in how neurodivergent kids and young
                  adults are navigating the changing landscape of media, technology, and
                  education — how they discover and understand content, how creators are
                  building for them, and how stories can move across platforms in ways that
                  are more engaging, accessible, and meaningful.
                </p>
              </div>
              <Link href="/about" className={homeStyles.textCta}>
                A little more about me →
              </Link>
            </div>
          </div>
        </section>

        {/* 03 AUTHOR + WORLD BUILDER — Caiden's Courage */}
        <section
          id="caiden"
          className={`${homeStyles.tlSection} ${homeStyles.tlSectionAlt}`}
          aria-labelledby="caiden-heading"
        >
          <div className={`${styles.inner} ${homeStyles.splitSection}`}>
            <div className={homeStyles.splitCopy}>
              <p className={homeStyles.sectionEyebrow}>
                Author + Illustration + Original IP
              </p>
              <h2 id="caiden-heading" className={homeStyles.tlHeadingWide}>
                I&apos;m an author, illustrator and world builder.
              </h2>
              <div className={homeStyles.tlProse}>
                <p>
                  I created Caiden&apos;s Courage, an original children&apos;s universe
                  spanning graphic novels, interactive learning, games, technology, and
                  education.
                </p>
                <p>It started with a story. I&apos;m building the world around it.</p>
              </div>
              <Link href="/work/caidens-courage" className={homeStyles.textCta}>
                Explore Caiden&apos;s Courage →
              </Link>
            </div>
            <div className={homeStyles.caidenVisuals}>
              <div className={homeStyles.caidenHeroMedia}>
                <img
                  src={homeCaidenImages.hero.src}
                  alt={homeCaidenImages.hero.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={homeStyles.caidenSupportRow}>
                {homeCaidenImages.support.map((image) => (
                  <div key={image.src} className={homeStyles.caidenSupportMedia}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 FOUNDER — Montage */}
        <section
          id="montage"
          className={homeStyles.tlSection}
          aria-labelledby="montage-heading"
        >
          <div className={`${styles.inner} ${homeStyles.splitSection}`}>
            <div className={homeStyles.splitCopy}>
              <p className={homeStyles.sectionEyebrow}>Media Technology + AI</p>
              <h2 id="montage-heading" className={homeStyles.tlHeadingWide}>
                I&apos;m the founder of Montage.
              </h2>
              <div className={homeStyles.tlProse}>
                <p>
                  I started Montage because I believe creators need more than another
                  place to upload content. They need infrastructure to manage, program,
                  distribute, understand, and grow their media.
                </p>
                <p>
                  Today, Montage is evolving into an AI-native media operating system
                  connecting content, streaming, distribution, analytics, and creator
                  workflows.
                </p>
              </div>
              <ul className={homeStyles.proofGrid}>
                {homeMontageProof.map((point) => (
                  <li key={point.id} className={homeStyles.proofItem}>
                    <p className={homeStyles.proofValue}>{point.value}</p>
                    <p className={homeStyles.proofLabel}>{point.label}</p>
                  </li>
                ))}
              </ul>
              <Link href="/work/montagecms" className={homeStyles.textCta}>
                Explore Montage →
              </Link>
            </div>
            <div className={homeStyles.splitMedia}>
              <img
                src={homeMontageImage.src}
                alt={homeMontageImage.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* 05 CAREER CREDIBILITY */}
        <section
          id="career"
          className={`${homeStyles.tlSection} ${homeStyles.tlSectionAlt}`}
          aria-labelledby="career-heading"
        >
          <div className={styles.inner}>
            <h2 id="career-heading" className={homeStyles.tlHeadingWide}>
              I&apos;ve spent my career building what&apos;s next.
            </h2>
            <p className={homeStyles.tlLead}>
              Before building my own companies, I helped shape products and experiences
              across streaming, sports, entertainment, education, and consumer technology.
            </p>
            <ul className={homeStyles.careerGrid}>
              {homeCareerPoints.map((point) => (
                <li key={point.id} className={homeStyles.careerItem}>
                  <p className={homeStyles.careerOrg}>{point.org}</p>
                  <p className={homeStyles.careerValue}>{point.value}</p>
                  <p className={homeStyles.careerLabel}>{point.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 IDEAS */}
        <section id="ideas" className={homeStyles.tlSection} aria-labelledby="ideas-heading">
          <div className={styles.inner}>
            <p className={homeStyles.sectionEyebrow}>Ideas</p>
            <h2 id="ideas-heading" className={homeStyles.tlHeadingWide}>
              I&apos;m sharing what I&apos;m learning.
            </h2>
            <p className={homeStyles.tlLead}>
              I&apos;m building in public across media, AI, original IP, the creator
              economy, and product leadership — sharing the ideas, experiments, and
              lessons I&apos;m learning along the way.
            </p>
            <ul className={homeStyles.ideaCards}>
              {homeIdeaItems.map((item) => (
                <li key={item.id} className={homeStyles.ideaCard}>
                  {item.href ? (
                    <a href={item.href} className={homeStyles.ideaCardLink}>
                      <span className={homeStyles.ideaCategory}>{item.category}</span>
                      <p className={homeStyles.ideaTitle}>{item.title}</p>
                    </a>
                  ) : (
                    <>
                      <span className={homeStyles.ideaCategory}>{item.category}</span>
                      <p className={homeStyles.ideaTitle}>{item.title}</p>
                      {item.placeholder ? (
                        <span className={homeStyles.ideaPlaceholder}>Coming soon</span>
                      ) : null}
                    </>
                  )}
                </li>
              ))}
            </ul>
            <a href="#ideas" className={homeStyles.textCta}>
              Explore Ideas →
            </a>
          </div>
        </section>

        {/* 07 SPEAKING */}
        <section
          id="speaking"
          className={`${homeStyles.tlSection} ${homeStyles.tlSectionAlt}`}
          aria-labelledby="speaking-heading"
        >
          <div className={`${styles.inner} ${homeStyles.speakingLayout}`}>
            <div className={homeStyles.speakingCopy}>
              <p className={homeStyles.sectionEyebrow}>Speaking</p>
              <h2 id="speaking-heading" className={homeStyles.tlHeadingWide}>
                I speak about what I&apos;m building.
              </h2>
              <p className={homeStyles.tlLead}>
                I share what I&apos;m learning about entrepreneurship, media technology,
                AI, storytelling, product innovation, original IP, and the creator
                economy.
              </p>
              <ul className={homeStyles.topicList}>
                {homeSpeakingTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <p className={homeStyles.speakingCredit}>
                Speaker — Compton College Film Festival
              </p>
              <a
                className={homeStyles.heroCta}
                href="mailto:stills@montage.tv?subject=Speaking%20Inquiry"
              >
                Invite Tarus to Speak
              </a>
            </div>
            <div className={homeStyles.speakingMedia}>
              <img
                src="/images/home/mespeaking.webp"
                alt="Tarus D. Stills speaking with a microphone"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* 08 MISSION */}
        <section
          id="mission"
          className={homeStyles.missionSection}
          aria-labelledby="mission-heading"
        >
          <div className={`${styles.inner} ${homeStyles.missionLayout}`}>
            <div className={homeStyles.missionMedia}>
              <img
                src="/images/home/meandkid_reading.webp"
                alt="Tarus reading with a young storyteller"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={homeStyles.missionCopy}>
              <h2 id="mission-heading" className={homeStyles.missionHeading}>
                Stories should create more storytellers.
              </h2>
              <p>
                I believe the things we build should create opportunities for other
                people to build, too. That means supporting young storytellers, creators,
                educators, and communities with the confidence and tools to bring their
                own ideas into the world.
              </p>
            </div>
          </div>
        </section>

        {/* 09 CONNECT */}
        <section
          id="contact"
          className={homeStyles.connectSection}
          aria-labelledby="contact-heading"
        >
          <div className={styles.inner}>
            <h2 id="contact-heading" className={homeStyles.connectHeading}>
              Let&apos;s connect.
            </h2>
            <p className={homeStyles.connectBody}>
              I&apos;m always interested in conversations around media, technology,
              original IP, emerging platforms, and what&apos;s being built next.
            </p>
            <ul className={homeStyles.connectAreas}>
              {homeConnectAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <a className={homeStyles.heroCta} href="mailto:stills@montage.tv">
              Get in Touch
            </a>
            <ul className={homeStyles.socialLinks}>
              {homeSocialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
