import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shea Cullen — UX & Product Design",
    template: "%s | Shea Cullen",
  },
  description:
    "UX & Product Designer with a background in architecture. I design digital products that work the way buildings should — with intention, clarity, and care for the people who use them.",
  metadataBase: new URL("https://sheacullen.com"),
  openGraph: {
    title: "Shea Cullen — UX & Product Design",
    description:
      "UX & Product Designer with a background in architecture.",
    url: "https://sheacullen.com",
    siteName: "Shea Cullen",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shea Cullen — UX & Product Design",
    description:
      "UX & Product Designer with a background in architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
