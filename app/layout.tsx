import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architects website",
  description: "Website for architects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className + " " + "scroll-smooth"}>{children}</body>
    </html>
  );
}
