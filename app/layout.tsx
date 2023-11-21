import type { Metadata } from "next";
import { Baumans, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const baumans = Baumans({ subsets: ["latin"], weight: ["400"] });

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
    <html lang="en">
      <body className={baumans.className}>{children}</body>
    </html>
  );
}
