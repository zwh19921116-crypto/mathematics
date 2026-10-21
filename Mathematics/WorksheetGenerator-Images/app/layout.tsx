import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Worksheet Resource Generator",
  description: "Fast, low-cost educational worksheet resource generation"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
