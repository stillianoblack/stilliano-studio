import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteJsonLd } from "./SiteJsonLd";
import {
  HOME_META_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_SHARE_IMAGE,
  pageTitle,
} from "@/data/site-seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const defaultTitle = pageTitle("Filmmaker, Author & Creator");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `${SITE_NAME} | %s`,
  },
  description: HOME_META_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: HOME_META_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SOCIAL_SHARE_IMAGE,
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: HOME_META_DESCRIPTION,
    images: [SOCIAL_SHARE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable}`}
    >
      <body className={geistSans.className}>
        <SiteJsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
