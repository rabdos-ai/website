import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rabdos AI - Next Generation AI Solutions",
  description: "Rabdos AI delivers cutting-edge artificial intelligence solutions to transform your business and drive innovation.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Rabdos AI", "AI Solutions"],
  authors: [{ name: "Rabdos AI" }],
  openGraph: {
    title: "Rabdos AI - Next Generation AI Solutions",
    description: "Rabdos AI delivers cutting-edge artificial intelligence solutions to transform your business and drive innovation.",
    url: "https://rabdos.ai",
    siteName: "Rabdos AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabdos AI - Next Generation AI Solutions",
    description: "Rabdos AI delivers cutting-edge artificial intelligence solutions to transform your business and drive innovation.",
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

