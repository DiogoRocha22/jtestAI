import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JTest",
  description: "Gere testes unitários de maneira rápida e fácil com JTest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-800 min-h-screen flex flex-col`}
        style={{
          background: 'radial-gradient(ellipse at top right, #ffd900 0%, transparent 10%, transparent 90%, #ffd900 100%)'
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
