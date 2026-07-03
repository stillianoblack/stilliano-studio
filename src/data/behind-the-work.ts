export type BehindTheWorkAspectRatio = "16/9" | "9/16";

export type BehindTheWorkItem = {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  /** Optional top line — e.g. talent or project name */
  lead?: string;
  year?: string;
  project?: string;
  aspectRatio: BehindTheWorkAspectRatio;
  objectPosition?: string;
};

export function aspectRatioToCss(ratio: BehindTheWorkAspectRatio): string {
  return ratio.replace("/", " / ");
}

const BTS = "/images/Behind%20The%20Scenes";

export const behindTheWorkItems: BehindTheWorkItem[] = [
  {
    id: "mbj-campaign",
    image: `${BTS}/MBJ.webp`,
    lead: "Michael B. Jordan",
    title: "Commercial Campaign",
    category: "Creative Production",
    description:
      "Supporting creative execution on set for a national campaign.",
    aspectRatio: "9/16",
    objectPosition: "center 35%",
  },
  {
    id: "on-set-wide-1",
    image: `${BTS}/Onset3.webp`,
    title: "On Set",
    category: "Film + Production",
    description:
      "Behind the scenes supporting creative execution and production.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  {
    id: "on-set-1",
    image: `${BTS}/Onset.webp`,
    title: "Production Day",
    category: "Commercial Production",
    description:
      "In the room where concept, crew, and performance come together.",
    aspectRatio: "9/16",
    objectPosition: "center 30%",
  },
  {
    id: "on-set-wide-2",
    image: `${BTS}/Onset4.webp`,
    title: "Set Atmosphere",
    category: "Film + Production",
    description:
      "Documenting the energy and craft behind the frame.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  {
    id: "music-video",
    image: `${BTS}/musicvideo.webp`,
    title: "Music Video",
    category: "Film + Production",
    description:
      "Directing performance, camera, and visual language on a music video set.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  {
    id: "on-set-2",
    image: `${BTS}/Onset2.webp`,
    title: "Creative Collaboration",
    category: "Campaign Production",
    description:
      "Working alongside teams, talent, and partners to bring concepts to life.",
    aspectRatio: "9/16",
    objectPosition: "center 35%",
  },
  {
    id: "on-set-wide-3",
    image: `${BTS}/Onset5.webp`,
    title: "Crew & Camera",
    category: "Film + Production",
    description:
      "Production in motion — lighting, lens, and direction in sync.",
    aspectRatio: "16/9",
    objectPosition: "center 40%",
  },
  {
    id: "spade-of-spades",
    image: `${BTS}/spadeofspade.webp`,
    title: "Spade of Spades",
    category: "Commercial Production",
    description:
      "On set for a branded campaign — creative direction in production.",
    aspectRatio: "9/16",
    objectPosition: "center 35%",
  },
  {
    id: "review-scripts",
    image: `${BTS}/ReviewScripts.webp`,
    title: "Script Review",
    category: "Creative Systems",
    description:
      "Where planning, logistics, and storytelling come together.",
    aspectRatio: "9/16",
    objectPosition: "center 30%",
  },
  {
    id: "on-set-wide-4",
    image: `${BTS}/Onset6.webp`,
    title: "In Session",
    category: "Commercial Production",
    description:
      "Reviewing the frame, performance, and visual direction in context.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
];
