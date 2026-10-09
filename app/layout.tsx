import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amm-data-solutions-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AMM Data Solutions | AI Automation & Digital Business Systems",
    template: "%s | AMM Data Solutions",
  },
  description:
    "AMM Data Solutions helps businesses simplify repetitive work with practical AI automation, WhatsApp workflows, data systems, follow-up processes and creative digital services.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AMM Data Solutions",
    title: "AMM Data Solutions | AI Automation & Digital Business Systems",
    description:
      "Practical AI automation, business workflows, data systems and creative digital services for growing businesses.",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMM Data Solutions | AI Automation & Digital Business Systems",
    description:
      "Practical AI automation, business workflows, data systems and creative digital services for growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
