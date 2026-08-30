import type { Metadata } from "next";
import { HomePageArchiveV1 } from "../../HomePageArchiveV1";

export const metadata: Metadata = {
  title: "Archived Homepage v1 | Stilliano",
  description: "Archived previous homepage version — preserved for reference.",
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
