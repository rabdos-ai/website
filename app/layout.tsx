import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

