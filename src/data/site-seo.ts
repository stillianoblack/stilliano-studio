import type { Metadata } from "next";

/** Canonical personal site */
export const SITE_URL = "https://tarusstills.com";

/** Site branding / short-form creative name */
export const SITE_NAME = "T.D. Stills";

/** Full legal / professional name for Person schema and long-form bio */
export const PERSON_NAME = "Tarus D. Stills";

export const PERSON_ALTERNATE_NAMES = ["T.D. Stills"] as const;

export const PERSON_JOB_TITLES = [
  "Filmmaker",
  "Author",
  "Speaker",
  "Creator",
  "Founder",
] as const;

export const PERSON_DESCRIPTION =
  "Filmmaker, author, speaker, creator, and founder of Caiden's Courage and Montage.";

export const HOME_META_DESCRIPTION =
  "Tarus D. Stills, also known professionally as T.D. Stills, is a filmmaker, author, speaker, creator, and the founder of Caiden's Courage and Montage.";

export const IDENTITY_BYLINE = "Filmmaker • Author • Speaker • Creator • Founder";

export const IDENTITY_SUPPORTING_COPY =
  "Tarus D. Stills is a filmmaker, author, speaker, creator, and the founder of Caiden's Courage and Montage.";

export const SOCIAL_SHARE_IMAGE = "/images/Heros/socialsharing_stilliano.jpg";

/**
 * No verified LinkedIn / Instagram / IMDb URLs exist in this repo.
 * Omit sameAs until real profile URLs are added.
 */
export const PERSON_SAME_AS: string[] = [];

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(segment: string): string {
  return `${SITE_NAME} | ${segment}`;
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** When true, title is used as-is (already includes site name). */
  absoluteTitle?: boolean;
};

/** Consistent page metadata + OG/Twitter following T.D. Stills | Page Title */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: BuildPageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : pageTitle(title);
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: SOCIAL_SHARE_IMAGE,
          width: 1200,
          height: 675,
          type: "image/jpeg",
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SOCIAL_SHARE_IMAGE],
    },
  };
}

export function buildSiteJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const profileId = `${SITE_URL}/#profilepage`;

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: PERSON_NAME,
    alternateName: [...PERSON_ALTERNATE_NAMES],
    url: SITE_URL,
    description: PERSON_DESCRIPTION,
    jobTitle: [...PERSON_JOB_TITLES],
  };

  if (PERSON_SAME_AS.length > 0) {
    person.sameAs = PERSON_SAME_AS;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: HOME_META_DESCRIPTION,
        publisher: { "@id": personId },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url: SITE_URL,
        name: pageTitle("Filmmaker, Author & Creator"),
        description: HOME_META_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
      person,
    ],
  };
}
