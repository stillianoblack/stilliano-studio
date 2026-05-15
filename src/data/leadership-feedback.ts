export type TestimonialVariant = "standard" | "wide" | "featured";

export type LeadershipTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  variant: TestimonialVariant;
  avatar?: string;
};

/** Display order: featured testimonial centered in the carousel. */
export const leadershipTestimonials: LeadershipTestimonial[] = [
  {
    id: "janani",
    name: "Janani Prithviraj",
    role: "AI Product | Adobe Firefly • Ex-Amazon",
    variant: "wide",
    avatar: "/images/headshots-profiles/JananiPrithviraj.webp",
    quote:
      "Tarus is one of those rare leaders who combines technical depth, creative intelligence, and genuine mentorship. His ability to simplify complex challenges while motivating teams and fostering collaboration left a lasting impact on both my professional growth and the quality of the work around him.",
  },
  {
    id: "aubury",
    name: "Aubury Webb Jr.",
    role: "UX Designer & Digital Artist",
    variant: "standard",
    avatar: "/images/headshots-profiles/AuburyWebbJr.webp",
    quote:
      "Tarus has a strong instinct for translating complex ideas into cohesive digital experiences. His understanding of information architecture, interaction design, and motion systems consistently helped shape thoughtful, visually compelling work across multiple projects.",
  },
  {
    id: "katherine",
    name: "Katherine Piedade, MA",
    role: "Transformation & Operations Leader",
    variant: "featured",
    avatar: "/images/headshots-profiles/katpat.webp",
    quote:
      "Tarus brings a rare combination of product strategy, systems thinking, and creative leadership. His ability to align user experience with business objectives consistently elevated both the work and the teams around him. He approaches challenges with clarity, integrity, and a strong operational mindset that drives meaningful results.",
  },
  {
    id: "matthew",
    name: "Matthew Burge",
    role: "Creative Founder, SCAD, Burgeoning Media Group",
    variant: "wide",
    avatar: "/images/headshots-profiles/MatthewBurge.webp",
    quote:
      "Tarus is an exceptional creative thinker and visual communicator. His ability to blend technical systems, storytelling, and design strategy allows him to push creative work beyond execution into experiences that feel purposeful and culturally relevant.",
  },
  {
    id: "john",
    name: "John Daniels",
    role: "Optical Network Engineer Director, MARTA",
    variant: "standard",
    avatar: "/images/headshots-profiles/JohnDaniels.webp",
    quote:
      "Tarus demonstrated leadership and initiative early on by identifying operational gaps and proactively building systems that improved internal processes and communication. His ability to combine structure, creativity, and strategic thinking made an immediate impact across the organization.",
  },
  {
    id: "brian",
    name: "Brian Rogers",
    role: "SVP Marketing & Brand Strategy Leader",
    variant: "standard",
    avatar: "/images/headshots-profiles/BrianRogers.webp",
    quote:
      "Tarus combines product thinking, brand storytelling, and creative systems leadership in a way that consistently pushes the work forward. His UX instincts, strategic perspective, and ability to shape cohesive digital experiences make him a strong partner across both product and brand initiatives.",
  },
];
