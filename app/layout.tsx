import type { Metadata } from "next";
import { Baumans, Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const baumans = Baumans({ subsets: ["latin"], weight: ["400"] });
const pixelify = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixelized",
});

export const metadata: Metadata = {
  title: "DAOCember",
  description: "A MetaFam event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelify.variable}`}>
      <body className={baumans.className}>{children}</body>
    </html>
  );
}
