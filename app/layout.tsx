import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amm-data-solutions-website.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMM Data Solutions",
  url: siteUrl,
  email: "bammdatasolutins229@gmail.com",
  slogan: "Let's Make Solutions",
  description: "AMM Data Solutions helps businesses simplify operations and improve digital growth through AI automation, business systems, websites, data analytics, SEO, lead generation and digital marketing.",
  areaServed: ["Pakistan", "Worldwide"],
  knowsAbout: [
    "AI automation and business systems",
    "CRM and lead management",
    "Website and e-commerce development",
    "Data analytics and business intelligence",
    "Technical SEO and AI search visibility",
    "B2B lead generation and growth systems",
    "Digital marketing and creative solutions"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AMM Data Solutions | AI Automation, Websites & Digital Growth",
    template: "%s | AMM Data Solutions",
  },
  description: "Practical AI automation, business systems, websites, data analytics, SEO, lead generation and digital marketing for growing businesses in Pakistan and worldwide.",
  alternates: { canonical: "/" },
  verification: { google: "Jtom06he16CGnICLTI2Xngg9zlJ6K3rInR1hMhKzATQ" },
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
    title: "AMM Data Solutions | AI Automation, Websites & Digital Growth",
    description: "We help businesses simplify operations and improve digital growth with practical technology and clear systems.",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMM Data Solutions | AI Automation, Websites & Digital Growth",
    description: "Practical business automation, digital systems and growth services for businesses in Pakistan and worldwide.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
