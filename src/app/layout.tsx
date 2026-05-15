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

export const metadata: Metadata = {
  metadataBase: new URL("https://stillianoblack.com"),
  title: "Stilliano Studio | Strategic Product & Experience Consultancy",
  description:
    "Stilliano Studio partners with startups, streaming platforms, and digital brands to shape product experiences, UX systems, and go-to-market ecosystems built for engagement and scale.",
  openGraph: {
    title: "Stilliano Studio | Strategic Product & Experience Consultancy",
    description:
      "Stilliano Studio partners with startups, streaming platforms, and digital brands to shape product experiences, UX systems, and go-to-market ecosystems built for engagement and scale.",
    url: "https://stillianoblack.com",
    siteName: "Stilliano Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stilliano Studio | Strategic Product & Experience Consultancy",
    description:
      "Stilliano Studio partners with startups, streaming platforms, and digital brands to shape product experiences, UX systems, and go-to-market ecosystems built for engagement and scale.",
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
