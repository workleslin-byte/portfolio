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
    default: "Leslin K Seemon — Content & Growth Lead",
  },
  description:
    "I find the growth problem, build the system that solves it, and write the thing that sells it. Kerala, India — remote and relocation both on the table.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Leslin K Seemon",
    title: "Leslin K Seemon — Content & Growth Lead",
    description:
      "Content-led growth with channel discipline — editorial systems, full-funnel strategy, and the AI layer that ties them together. ₹16.8 Cr in investment moved at Rang De.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Leslin K Seemon — Content & Growth Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leslin K Seemon — Content & Growth Lead",
    description:
      "Content-led growth with channel discipline — editorial systems, full-funnel strategy, and the AI layer that ties them together. Kerala, India.",
    images: ["/og.png"],
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
