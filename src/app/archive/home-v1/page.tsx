import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/site-seo";
import { HomePageArchiveV1 } from "../../HomePageArchiveV1";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Archived Homepage v1",
    description: "Archived previous homepage version — preserved for reference.",
    path: "/archive/home-v1",
  }),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ArchivedHomeV1Page() {
  return <HomePageArchiveV1 />;
}
