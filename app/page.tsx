import { Metadata } from "next";
import HeroSectionV2 from "@/components/sections/HeroSectionV2";
import CompanyInfo from "@/components/sections/CompanyInfo";
import CompanyMetricsSection from "@/components/sections/CompanyMetricsSection";
import TechnologyTrustSection from "@/components/sections/TechnologyTrustSection";
import NewsPreviewWrapper from "@/components/sections/NewsPreviewWrapper";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "UPHASH Inc. - 最先端を、現場の力に。",
  description: "研究室の技術を産業の現場へ。空間コンピューティングとAIの最先端技術を、実用的なソリューションとして提供します。",
  openGraph: {
    title: "UPHASH Inc. - 最先端を、現場の力に。",
    description: "研究室の技術を産業の現場へ。空間コンピューティングとAIの最先端技術を、実用的なソリューションとして提供します。",
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
      <HeroSectionV2 />

      {/* 実績・数値指標 */}
      <CompanyMetricsSection />

      {/* 会社紹介サマリー */}
      <CompanyInfo />

      {/* 技術基盤と知財 */}
      <TechnologyTrustSection />

      {/* 最新ニュース */}
      <NewsPreviewWrapper />

      {/* CTA セクション */}
      <CTASection />
    </>
  );
}