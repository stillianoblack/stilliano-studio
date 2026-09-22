import { buildSiteJsonLd } from "@/data/site-seo";

/** Global WebSite + ProfilePage + Person JSON-LD */
export function SiteJsonLd() {
  const jsonLd = buildSiteJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
