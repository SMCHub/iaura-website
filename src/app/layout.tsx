import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iAura - Discover Your Aura | AI-Powered Personality Analysis",
  description:
    "Transform your voice into a unique AI-generated aura. Record, analyze, and discover your personality through stunning visual art powered by artificial intelligence.",
  keywords: [
    "aura",
    "AI",
    "personality analysis",
    "voice analysis",
    "aura generation",
    "self-discovery",
  ],
  openGraph: {
    title: "iAura - Discover Your Aura",
    description:
      "Transform your voice into a unique AI-generated aura. AI-powered personality analysis.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "iAura - Discover Your Aura",
    description:
      "Transform your voice into a unique AI-generated aura. AI-powered personality analysis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
