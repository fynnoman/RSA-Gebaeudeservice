import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rsa-gebaeudeservice.de"),
  title: {
    default: "RSA Gebäudeservice — Reinigung im Saarland · Saarlouis",
    template: "%s — RSA Gebäudeservice",
  },
  description:
    "Professionelle Gebäudereinigung im Saarland. Unterhalts-, Glas-, Industrie- und Bauendreinigung mit Festpreis, Versicherung und eigenen Mitarbeitern — aus Saarlouis für Büros, Praxen, WEGs und Gewerbe.",
  openGraph: {
    title: "RSA Gebäudeservice — Reinigung im Saarland",
    description:
      "Professionelle Reinigung im Saarland — Festpreis, Tariflohn, eigene Mitarbeiter. Aus Saarlouis für das gesamte Saarland.",
    url: "https://rsa-gebaeudeservice.de",
    locale: "de_DE",
    type: "website",
    siteName: "RSA Gebäudeservice",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${geist.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
