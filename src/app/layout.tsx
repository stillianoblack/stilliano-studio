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

const siteTitle =
  "Tarus D. Stills | Director of Product Marketing & Brand Growth — Media & Entertainment Tech";

const siteDescription =
  "Director of Product Marketing & Brand Growth leading streaming, sports, and entertainment platforms — audience growth, positioning, and go-to-market strategy.";

const socialTitle = "Tarus D. Stills | Director of Product Marketing & Brand Growth";
const socialDescription =
  "Audience growth, brand positioning, and go-to-market strategy across streaming, sports, and entertainment tech.";

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
        alt: "Tarus D. Stills — Director of Product Marketing & Brand Growth",
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
