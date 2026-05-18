import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Bugatti Tourbillon | Beyond Hypercar",
  description: "1,800hp. Naturally aspirated W16. 250 units. The Tourbillon redefines what a road car can be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable} antialiased`}>
      <body className="bg-noir text-eef2f5 min-h-screen">
        {children}
      </body>
    </html>
  );
}
