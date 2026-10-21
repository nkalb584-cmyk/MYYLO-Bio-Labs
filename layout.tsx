import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import CartDrawer from "@/components/CartDrawer";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MYYLO bio Labs | Research-Grade Peptides for Laboratory Science",
    template: "%s | MYYLO bio Labs",
  },
  description:
    "MYYLO bio Labs supplies research-grade peptides for in-vitro laboratory use only, with HPLC purity testing and a Certificate of Analysis for every batch.",
  openGraph: {
    type: "website",
    siteName: "MYYLO bio Labs",
    title: "MYYLO bio Labs | Research-Grade Peptides",
    description: "Research-grade peptides for laboratory science. For in-vitro research use only.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <AgeGate />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
