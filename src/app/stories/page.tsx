import type { Metadata } from "next";
import leadStyles from "../how-i-lead/how-i-lead.module.css";
import { BehindTheWorkSection } from "../BehindTheWorkSection";
import { StoriesHero } from "./StoriesHero";
import { CreativeDevelopmentSlate } from "./CreativeDevelopmentSlate";
import {
  DevelopmentProcessSection,
  StoriesRecognitionSection,
  StorySystemsSection,
} from "./StoriesSections";
import { storiesBehindTheWorkItems } from "@/data/stories-behind-the-work";

export const metadata: Metadata = {
  title: "Story Development & Content Strategy | Stilliano Black",
  description:
    "Story development, original IP, branded content, narrative production, and platform strategy across entertainment, streaming, animation, and interactive media.",
  openGraph: {
    title: "Story Development & Content Strategy",
    description:
      "Explore original development, branded storytelling, narrative projects, and the platforms that help stories reach and grow audiences.",
  },
};

export default function StoriesPage() {
  return (
    <div className={`case-page case-page--stories ${leadStyles.page}`}>
      <main>
        <StoriesHero />

        <StoriesRecognitionSection />

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
