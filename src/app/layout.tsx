import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Nazal's Portfolio",
  description: "Nazal's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#dad7cd]">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
