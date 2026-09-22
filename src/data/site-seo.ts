import type { Metadata } from "next";

/** Canonical personal site */
export const SITE_URL = "https://tdstills.com";

/** Site branding / short-form creative name */
export const SITE_NAME = "T.D. Stills";

/** Full legal / professional name for Person schema and long-form bio */
export const PERSON_NAME = "Tarus D. Stills";

export const PERSON_ALTERNATE_NAMES = ["T.D. Stills", "TD Stills"] as const;

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
  "Tarus D. Stills, professionally known as T.D. Stills, is a filmmaker, author, speaker, creator, and founder of Caiden's Courage and Montage.";

/** Shorter variant when space is constrained */
export const HOME_META_DESCRIPTION_SHORT =
  "Tarus D. Stills (T.D. Stills) is a filmmaker, author, speaker, creator, and founder of Caiden's Courage and Montage.";

export const IDENTITY_BYLINE = "Filmmaker • Author • Speaker • Creator • Founder";

export const IDENTITY_SUPPORTING_COPY =
  "Tarus D. Stills, professionally known as T.D. Stills, is a filmmaker, author, speaker, creator, and founder of Caiden's Courage and Montage.";

export const SOCIAL_SHARE_IMAGE = "/images/Heros/socialsharing_stilliano.jpg";

/**
 * No verified LinkedIn / Instagram / IMDb profile URLs exist in this repo
 * (homepage social links use "#" placeholders). Omit sameAs until real URLs are added.
 */
export const PERSON_SAME_AS: string[] = [];

/** Projects founded/created — separate Organization entities, not Person alternate names */
export const FOUNDED_ORGANIZATIONS = [
  {
    id: "caidens-courage",
    name: "Caiden's Courage",
    /** Real project URL already used on the site */
    url: "https://caidenvale.com",
    description: "Original children's story world and emotional confidence platform.",
  },
  {
    id: "montage",
    name: "Montage",
    /** Case study on this site — no separate public Montage marketing URL in the repo */
    path: "/work/montagecms",
    description: "AI-native media operating system for creators and streaming.",
  },
] as const;

/** Public indexable routes for sitemap generation */
export const SITEMAP_PATHS = [
  "/",
  "/about",
  "/product",
  "/content-strategy",
  "/books-and-products",
  "/how-i-lead",
  "/not-work",
  "/work/caidens-courage",
  "/work/montagecms",
  "/work/hbcugo",
  "/work/genius-sports",
  "/work/amira-learning",
  "/work/state-farm",
] as const;

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
  const profileId = `${SITE_URL}/#profile`;

  const orgNodes = FOUNDED_ORGANIZATIONS.map((org) => {
    const url = "url" in org && org.url ? org.url : absoluteUrl("path" in org ? org.path : "/");
    return {
      "@type": "Organization",
      "@id": `${SITE_URL}/#${org.id}`,
      name: org.name,
      url,
      description: org.description,
      founder: { "@id": personId },
    };
  });

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: PERSON_NAME,
    alternateName: [...PERSON_ALTERNATE_NAMES],
    url: SITE_URL,
    description: PERSON_DESCRIPTION,
    jobTitle: [...PERSON_JOB_TITLES],
    founderOf: orgNodes.map((org) => ({ "@id": org["@id"] })),
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
        name: SITE_NAME,
        description: HOME_META_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
      person,
      ...orgNodes,
    ],
  };
}
