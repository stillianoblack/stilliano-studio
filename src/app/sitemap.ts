import type { MetadataRoute } from "next";
import { SITEMAP_PATHS, absoluteUrl } from "@/data/site-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
