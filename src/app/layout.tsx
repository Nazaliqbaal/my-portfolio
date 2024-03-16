import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
