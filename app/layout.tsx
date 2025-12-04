import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Student Portfolio",
  description: "A professional student portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 pt-24 pb-12">{children}</main>
      </body>
    </html>
  );
}
