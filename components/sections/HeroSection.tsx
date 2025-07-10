import Image from "next/image";
import Link from "next/link";

/**
 * ヒーローセクション - NK LITE風ミニマルデザイン
 */
export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-white">
      {/* 背景画像 - 右側に配置 */}
      <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="Spatial Computing Vision"
          fill
          className="object-cover"
          priority
        />
        {/* 軽いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white lg:to-transparent" />
      </div>

      {/* コンテンツ - 左側に配置 */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            {/* メインタイトル */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              <span className="block text-gray-900">Spatial Computing</span>
              <span className="block text-gray-900 mt-2">Solution</span>
            </h1>
            
            {/* サブタイトル */}
            <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
              今のこの瞬間を保存する
            </p>

            {/* CTAボタン - シンプルなデザイン */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-wider text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              >
                私たちについて
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-wider text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}