import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amm-data-solutions-website.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMM Data Solutions",
  url: siteUrl,
  email: "bammdatasolutins229@gmail.com",
  description:
    "AMM Data Solutions helps businesses improve workflows and online discovery with practical AI automation, Google SEO, AI search visibility, WhatsApp workflows, data systems, follow-up processes and creative digital services.",
  knowsAbout: [
    "AI automation",
    "WhatsApp automation",
    "Data and spreadsheet automation",
    "Lead recovery and follow-up systems",
    "Social media and advertising",
    "Creative and AI video production",
    "Google SEO and technical SEO",
    "On-page SEO and Search Console monitoring",
    "AI search visibility and answer engine optimization",
  ],
};

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
  verification: {
    google: "Jtom06he16CGnICLTI2Xngg9zlJ6K3rInR1hMhKzATQ",
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
      "Practical AI automation, Google SEO, AI search visibility, business workflows, data systems and creative digital services for growing businesses.",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
