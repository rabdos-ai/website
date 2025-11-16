import type { Metadata } from "next";
import { IBM_Plex_Sans, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import VideoBackground from "./components/VideoBackground";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rabdos AI - Frontier-Level Math Problem Generation",
  description: "Rabdos generates exceptionally challenging mathematical problems at scale for training and evaluating frontier AI models. Problems harder than IMO with precise difficulty control.",
  keywords: ["AI", "Math Problems", "Machine Learning", "Rabdos AI", "AI Evaluation", "Frontier Models", "Mathematical Reasoning", "IMO", "AI Training"],
  authors: [{ name: "Rabdos AI" }],
  openGraph: {
    title: "Rabdos AI - Frontier-Level Math Problem Generation",
    description: "Rabdos generates exceptionally challenging mathematical problems at scale for training and evaluating frontier AI models. Problems harder than IMO with precise difficulty control.",
    url: "https://rabdos.ai",
    siteName: "Rabdos AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabdos AI - Frontier-Level Math Problem Generation",
    description: "Rabdos generates exceptionally challenging mathematical problems at scale for training and evaluating frontier AI models.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${cormorant.variable} ${spaceMono.variable} antialiased`}>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
