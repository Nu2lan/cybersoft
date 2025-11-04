import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/language-context";
import Script from "next/script"; // ✅ Add this import
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybersoft",
  description:
    "Cybersoft bizneslərin böyüməsinə kömək edən yüksək təsirli vebsaytlar və genişlənə bilən SaaS məhsulları dizayn edir.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>
            {children}
            <Toaster />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
