import type { Metadata } from "next";
import leadStyles from "../how-i-lead/how-i-lead.module.css";
import { BehindTheWorkSection } from "../BehindTheWorkSection";
import { TrustedClientsSection } from "../TrustedClientsSection";
import { StoriesHero } from "./StoriesHero";
import { CreativeDevelopmentSlate } from "./CreativeDevelopmentSlate";
import {
  DevelopmentProcessSection,
  StoriesRecognitionSection,
  StorySystemsSection,
} from "./StoriesSections";
import { storiesBehindTheWorkItems } from "@/data/stories-behind-the-work";

export const metadata: Metadata = {
  title: "Stories + IP | Tarus D. Stills",
  description:
    "Original storytelling and IP — Caiden’s Courage, books, characters, interactive experiences, games, and story development.",
  openGraph: {
    title: "Stories + IP | Tarus D. Stills",
    description:
      "Explore original IP, story worlds, branded entertainment, and narrative development led by Caiden’s Courage.",
  },
};

export default function StoriesPage() {
  return (
    <div className={`case-page case-page--stories ${leadStyles.page}`}>
      <main>
        <StoriesHero />

        <StoriesRecognitionSection />

        <TrustedClientsSection
          headline="Stories and systems built across entertainment, streaming, education, gaming, and emerging technology."
          subcopy="Selected work spanning creative development, motion, interactive products, production, and platform-driven storytelling."
        />

        <CreativeDevelopmentSlate />

        <StorySystemsSection />

        <DevelopmentProcessSection />

        <BehindTheWorkSection
          eyebrow="Development"
          title="Behind the Development"
          intro="A look inside the creative reviews, production environments, animation workflows, and collaborative systems behind the stories and experiences I've helped bring to life."
          items={storiesBehindTheWorkItems}
        />

      </main>
    </div>
  );
}
