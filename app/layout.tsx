import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "AMM Data Solutions — Let’s Make Solutions", description: "AI Automation, Business Systems, Digital Solutions & Creative Services." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }