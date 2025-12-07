import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

import Footer from "@/components/Footer";
import LocomotiveScrollWrapper from "@/components/LocomotiveScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad",
  description: "Engineer delivering fast, scalable, and meticulously crafted digital experiences.",
  keywords: [
    "Saad",
    "Muhammad Saad Haider",
    "Engineer",
    "Programmer",
    "Coder",
    "India",
    "Vynk",
    "Anton",
    "Autotone",
    "Open Source Contributor"
  ],
  authors: [{ name: "Saad", url: "https://saad.works" }],
  creator: "Saad",
  publisher: "Saad",
  openGraph: {
    title: "Saad",
    description: "Engineer delivering fast, scalable, and meticulously crafted digital experiences.",
    url: "https://saad.works",
    siteName: "Saad",
    images: [
      {
        url: "https://saad.works/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saad - Engineer",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad",
    description: "Engineer delivering fast, scalable, and meticulously crafted digital experiences.",
    images: ["/og-image.png"],
    site: "@_MSaaDH",
    creator: "@_MSaaDH",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocomotiveScrollWrapper>
          <div className='max-w-2xl mx-auto md:mt-12 mt-4 p-8'>
            {children}
          </div>
          <div className='max-w-2xl mx-auto'>
            <Footer />
          </div>
        </LocomotiveScrollWrapper>
        <Analytics />
      </body>
    </html>
  );
}