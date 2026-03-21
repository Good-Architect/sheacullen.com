import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shea Cullen — Humankind Design",
  description:
    "A designer who creates products that work with how humans work.",
  metadataBase: new URL("https://sheacullen.com"),
  openGraph: {
    title: "Shea Cullen — Humankind Design",
    description:
      "A designer who creates products that work with how humans work.",
    url: "https://sheacullen.com",
    siteName: "Shea Cullen",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shea Cullen — Humankind Design",
    description:
      "A designer who creates products that work with how humans work.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@100..900&family=Cormorant:ital,wght@1,400;1,500;1,600&family=Corinthia:wght@400;700&family=Montserrat:wght@400;500;600;700;800;900&family=Bungee&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
