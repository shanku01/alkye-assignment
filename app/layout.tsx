import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArticleProvider } from "@/context/ArticleContext";
import "./globals.css";

import localFont from 'next/font/local'

const Dreiviertelfett = localFont({
  src: '../asssets/fonts/Dreiviertelfett.otf',
  display: 'swap',
  variable: '--font-Dreiviertelfett', 
})

const Kräftig = localFont({
  src: '../asssets/fonts/Kräftig.otf',
  display: 'swap',
  variable: '--font-Kräftig', 
})

const Buch = localFont({
  src: '../asssets/fonts/Buch.otf',
  display: 'swap',
  variable: '--font-Buch', 
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alkye Assignment",
  description: "Created by Shashank Pradhan for Alkye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${Dreiviertelfett.variable} ${Kräftig.variable} ${Buch.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ArticleProvider>{children}</ArticleProvider>
      </body>
    </html>
  );
}
