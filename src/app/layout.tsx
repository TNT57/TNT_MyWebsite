import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { pageMetadata, siteUrl } from "@/app/seo";
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
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: siteConfig.name,
    description: `${siteConfig.tagline}, based in ${siteConfig.location}.`,
    path: "/",
  }),
  // Every other page sets its own string title; this template turns it into
  // "Page — Nathan Tran" automatically.
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <div className="mx-auto flex w-full max-w-[860px] flex-1 flex-col px-5">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
