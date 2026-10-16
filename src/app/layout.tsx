import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AMM Data Solutions | Let's Make Solutions", template: "%s | AMM Data Solutions" },
  description: "Practical digital solutions, AI automation, business systems, and search visibility for growing businesses.",
  applicationName: "AMM Data Solutions",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f9fc" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
