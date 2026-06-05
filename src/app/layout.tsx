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
  "Still•i•ano | Interactive Media • Storytelling • Emerging Technology";

const siteDescription =
  "Creative Director for Interactive Experiences bridging product design, storytelling, and emerging technology across entertainment, education, retail, and digital platforms.";

const socialImage = "/images/Heros/socialsharing_stilliano.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://stillianoblack.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://stillianoblack.com",
    siteName: "Still•i•ano",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "Still•i•ano — Creative Director for Interactive Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
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
