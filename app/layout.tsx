import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Leslin K Seemon",
    default: "Leslin K Seemon — AI-Enabled Growth Consultant",
  },
  description:
    "AI-enabled growth consultant based in Kerala, India. Content strategy, email marketing, SEO, LinkedIn, and product — all measured.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Leslin K Seemon",
    title: "Leslin K Seemon — AI-Enabled Growth Consultant",
    description:
      "Seven years of content, email, SEO, and product work — with real numbers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leslin K Seemon — AI-Enabled Growth Consultant",
    description:
      "Seven years of content, email, SEO, and product work — with real numbers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
