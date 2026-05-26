import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Aurelian | Houston Luxury Boutique Hotel",
  description: "An intimate sanctuary in the heart of Houston's Galleria district. Book direct for exclusive rates, suite upgrades, and bespoke amenities at Houston's premier luxury boutique hotel.",
  keywords: "luxury hotel, Houston boutique hotel, Galleria hotel, The Aurelian Houston, fine dining Houston, spa hotel Houston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
