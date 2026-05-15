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
    "Shaping streaming, storytelling, and cultural audience experiences across product and brand ecosystems.",
  openGraph: {
    title: "Stilliano Studio | Strategic Product & Experience Consultancy",
    description:
      "Shaping streaming, storytelling, and cultural audience experiences across product and brand ecosystems.",
    url: "https://stillianoblack.com",
    siteName: "Stilliano Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stilliano Studio | Strategic Product & Experience Consultancy",
    description:
      "Shaping streaming, storytelling, and cultural audience experiences across product and brand ecosystems.",
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
