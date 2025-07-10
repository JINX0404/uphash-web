import Image from "next/image";
import Link from "next/link";

/**
 * ヒーローセクション
 * トップページのメインビジュアルとキャッチコピーを表示
 * 背景画像にはアニメーションのグラデーションオーバーレイを使用
 */
export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="Modern office space"
          fill
          className="object-cover"
          priority
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-3xl">
          {/* アニメーション付きのタイトル */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            イノベーションを通じて
            <br />
            <span className="text-blue-400">未来を創造する</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200">
            UPHASH Inc.は最先端技術とイノベーションを通じて、
            より良い未来を創造します。
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              採用情報を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}