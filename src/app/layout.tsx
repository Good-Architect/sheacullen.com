import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Corinthia,
  Montserrat,
  Teko,
  Bungee_Shade,
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

const bungeeShade = Bungee_Shade({
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
  bungeeShade.variable,
  handlee.variable,
].join(" ");

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
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
