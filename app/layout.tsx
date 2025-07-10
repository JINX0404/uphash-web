import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutTransition from "@/components/motion/LayoutTransition";

export const metadata: Metadata = {
  title: "UPHASH Inc. - イノベーションを通じて未来を創造",
  description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <LayoutTransition>
            {children}
          </LayoutTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
