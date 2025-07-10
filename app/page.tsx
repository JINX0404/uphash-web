import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CompanyInfo from "@/components/sections/CompanyInfo";
import NewsPreviewWrapper from "@/components/sections/NewsPreviewWrapper";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "UPHASH Inc. - イノベーションを通じて未来を創造",
  description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。AI、ブロックチェーン、デジタルトランスフォーメーションのソリューションを提供。",
  openGraph: {
    title: "UPHASH Inc. - イノベーションを通じて未来を創造",
    description: "UPHASH Inc.は最先端技術とイノベーションを通じて、より良い未来を創造します。",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "UPHASH Inc.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * ホームページ
 * ヒーローセクション、会社紹介、最新ニュースを表示
 */
export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />

      {/* 会社紹介サマリー */}
      <CompanyInfo />

      {/* 最新ニュース */}
      <NewsPreviewWrapper />

      {/* CTA セクション */}
      <CTASection />
    </>
  );
}