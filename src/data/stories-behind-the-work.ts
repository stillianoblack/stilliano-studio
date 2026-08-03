import {
  behindTheWorkItems,
  type BehindTheWorkItem,
} from "@/data/behind-the-work";

const BTS = "/images/Behind%20The%20Scenes";

const animationItems: BehindTheWorkItem[] = [
  {
    id: "dc-comics-animation-dev",
    image: `${BTS}/DCComics2.webp`,
    lead: "DC COMICS",
    title: "Animation Development",
    category: "Animation Development",
    project: "DC Comics",
    description:
      "Animation development and creative review within a major entertainment IP workflow.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  {
    id: "caidens-frame-animation",
    image: `${BTS}/Caidens_frame_animation.webp`,
    lead: "CAIDEN'S COURAGE",
    title: "Frame Animation",
    category: "Frame Animation",
    project: "Caiden's Courage",
    description:
      "Frame-by-frame animation development for an original children's franchise.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  {
    id: "dc-comics-motion-visual",
    image: `${BTS}/DCComicsAnimation.webp`,
    lead: "DC COMICS",
    title: "Motion & Visual Development",
    category: "Motion & Visual Development",
    project: "DC Comics",
    description:
      "Motion and visual development exploring character, performance, and animated storytelling.",
    aspectRatio: "16/9",
    objectPosition: "center center",
  },
  ...([1, 2, 3, 4, 5] as const).map((index) => ({
    id: `caiden-thumbnail-${index}`,
    image: `${BTS}/caiden_thumbnail_${index}.webp`,
    lead: "CAIDEN'S COURAGE",
    title: "Animation Still",
    category: "Frame Animation",
    project: "Caiden's Courage",
    description: "Animation development still from an original children's franchise.",
    aspectRatio: "16/9" as const,
    objectPosition: "center center",
  })),
];

const storiesLabelOverrides: Partial<
  Record<BehindTheWorkItem["id"], Pick<BehindTheWorkItem, "lead" | "title" | "category">>
> = {
  "on-set-wide-1": {
    lead: "PRODUCTION",
    title: "On Set",
    category: "On Set",
  },
  "on-set-1": {
    lead: "COMMERCIAL PRODUCTION",
    title: "Production Day",
    category: "Production Day",
  },
};

const productionItems: BehindTheWorkItem[] = behindTheWorkItems.map((item) => ({
  ...item,
  ...storiesLabelOverrides[item.id],
}));

/** Animation stills interleaved with production imagery for an editorial scatter. */
const storiesCarouselOrder = [
  "mbj-campaign",
  "caiden-thumbnail-2",
  "on-set-wide-1",
  "dc-comics-animation-dev",
  "on-set-1",
  "caiden-thumbnail-4",
  "on-set-wide-2",
  "caidens-frame-animation",
  "music-video",
  "caiden-thumbnail-1",
  "on-set-2",
  "dc-comics-motion-visual",
  "on-set-wide-3",
  "caiden-thumbnail-5",
  "spade-of-spades",
  "caiden-thumbnail-3",
  "review-scripts",
  "on-set-wide-4",
] as const;

const storiesItemMap = new Map<string, BehindTheWorkItem>(
  [...productionItems, ...animationItems].map((item) => [item.id, item]),
);

export const storiesBehindTheWorkItems: BehindTheWorkItem[] = storiesCarouselOrder.flatMap(
  (id) => {
    const item = storiesItemMap.get(id);
    return item ? [item] : [];
  },
);
