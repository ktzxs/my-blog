import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Alves Da Costa",
  description: "Blog do Lucas para atividade de Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-blue-600 text-white">
          <nav className="max-w-6xl mx-auto flex gap-6 p-4">
            <Link href="/">Início</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto p-6 w-full">
          {children}
        </main>

      </body>
    </html>
  );
}
