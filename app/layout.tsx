import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMM Data Solutions",
  description: "AMM Data Solutions — Let's Make Solutions.",
  metadataBase: new URL("https://amm-data-solutions-website.vercel.app"),
  verification: {
    google: "Jtom06he16CGnICLTI2Xngg9zlJ6K3rInR1hMhKzATQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
