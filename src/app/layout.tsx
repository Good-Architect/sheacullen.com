import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Corinthia,
  Montserrat,
  Teko,
  DM_Serif_Display,
  Handlee,
} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-sans",
});

const corinthia = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-cursive",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-display",
});

const teko = Teko({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-subtitle",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-title",
});

const handlee = Handlee({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-handwrite",
});

const fontVars = [
  playfairDisplay.variable,
  inter.variable,
  corinthia.variable,
  montserrat.variable,
  teko.variable,
  dmSerifDisplay.variable,
  handlee.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Shea Cullen — Humankind Design",
  description:
    "Architect. Product designer. An unquenchable hunger to create.",
  metadataBase: new URL("https://sheacullen.com"),
  openGraph: {
    title: "Shea Cullen — Humankind Design",
    description:
      "Architect. Product designer. An unquenchable hunger to create.",
    url: "https://sheacullen.com",
    siteName: "Shea Cullen",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shea Cullen — Humankind Design",
    description:
      "Architect. Product designer. An unquenchable hunger to create.",
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
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
