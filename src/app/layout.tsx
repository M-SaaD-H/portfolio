import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import { ThemeContextProvider } from "@/contexts/ThemeContextProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad - The Code Whisperer 🤫",
  description: "Welcome to my corner of the internet where I turn coffee into code and bugs into features. Warning: May contain traces of actual competence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-200 relative`}
      >
        <ThemeContextProvider>
          <div className='backdrop-blur-md sticky top-0 transition-colors duration-200 z-50'>
            <div className='flex justify-between items-center max-w-4xl mx-auto'>
              <DarkModeToggle />
              <Navigation />
            </div>
          </div>
          <div className='max-w-2xl mx-auto'>
            {children}
          </div>
          <div className='max-w-2xl mx-auto'>
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}