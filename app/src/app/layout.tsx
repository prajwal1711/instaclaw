import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InstaClaw — The Easiest Way to Use OpenClaw",
  description:
    "Get OpenClaw running in under 1 minute. No servers, no code, no tech skills. Pick your AI, connect Telegram, and your assistant is live.",
  metadataBase: new URL("https://instaclaw.dev"),
  openGraph: {
    title: "InstaClaw — Get OpenClaw Running in Under 1 Minute",
    description:
      "Skip the servers, the code, and the headaches. Your OpenClaw AI assistant on Telegram in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
