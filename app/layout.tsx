import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutTransition from "@/components/motion/LayoutTransition";
import CookieBanner from "@/components/CookieBanner";
import StructuredData, { organizationSchema, websiteSchema } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://uphash.com'),
  title: "UPHASH Inc. - イノベーションを通じて未来を創造",
  description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。",
  keywords: ["UPHASH", "空間コンピューティング", "イノベーション", "技術", "XGRIDS"],
  authors: [{ name: "UPHASH Inc." }],
  creator: "UPHASH Inc.",
  publisher: "UPHASH Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UPHASH Inc. - イノベーションを通じて未来を創造",
    description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。",
    url: "https://uphash.com",
    siteName: "UPHASH Inc.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UPHASH Inc.",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPHASH Inc. - イノベーションを通じて未来を創造",
    description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。",
    images: ["/og-image.png"],
    creator: "@uphash_inc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <LayoutTransition>
            {children}
          </LayoutTransition>
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
