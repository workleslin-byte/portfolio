import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// Display — the smear face. High optical contrast at large sizes.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI — clean, neutral, modern.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leslin-portfolio.vercel.app"),
  title: {
    template: "%s — Leslin K Seemon",
    default: "Leslin K Seemon — Growth Operator + AI Systems Builder",
  },
  description:
    "I find the growth problem, build the system that solves it, and write the thing that sells it. Kerala, India — remote and relocation both on the table.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Leslin K Seemon",
    title: "Leslin K Seemon — Growth Operator + AI Systems Builder",
    description:
      "One head holding the brand layer and the build layer. ₹16.8 Cr of social investment moved through comms, a clinical RAG architected end to end, a product built solo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leslin K Seemon — Growth Operator + AI Systems Builder",
    description:
      "One head holding the brand layer and the build layer. Kerala, India.",
  },
};

export const viewport: Viewport = {
  themeColor: "#efede8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${fraunces.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
