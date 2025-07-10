import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CompanyInfo from "@/components/sections/CompanyInfo";
import NewsPreview from "@/components/sections/NewsPreview";

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
      <NewsPreview />

      {/* CTA セクション */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-6">JOIN US</h2>
          <h3 className="text-4xl lg:text-5xl font-thin tracking-wider mb-8">
            一緒に未来を創りましょう
          </h3>
          <p className="text-lg font-thin text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            革新的な技術で社会に貢献したいエンジニアを募集しています
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/recruit"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              採用情報を見る
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-white border border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}