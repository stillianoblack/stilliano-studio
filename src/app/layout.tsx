import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Tarus D. Stills | World Builder, Storyteller & Founder";

const siteDescription =
  "Creative executive working across original IP, product, media, film, and technology — building story worlds of his own, including Caiden’s Courage.";

const socialTitle = "Tarus D. Stills | World Builder, Storyteller & Founder";
const socialDescription =
  "Raised in product and media, shaped by film and animation, and proven by building worlds of my own.";

const socialImage = "/images/Heros/socialsharing_stilliano.jpg";
const socialImageWidth = 1200;
const socialImageHeight = 675;

export const metadata: Metadata = {
  metadataBase: new URL("https://stillianoblack.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: "https://stillianoblack.com",
    siteName: "Still•i•ano",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: socialImageWidth,
        height: socialImageHeight,
        type: "image/jpeg",
        alt: "Tarus D. Stills — World Builder, Storyteller & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
  other: {
    "twitter:url": "https://stillianoblack.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
