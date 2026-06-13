import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Leslin K Seemon",
    default: "Leslin K Seemon — Content & Growth. Writer. Kerala.",
  },
  description:
    "Seven years turning content into measured growth. Every number verified.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Leslin K Seemon",
    title: "Leslin K Seemon — Content & Growth. Writer. Kerala.",
    description:
      "Seven years turning content into measured growth. Every number verified.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leslin K Seemon — Content & Growth. Writer. Kerala.",
    description:
      "Seven years turning content into measured growth. Every number verified.",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
