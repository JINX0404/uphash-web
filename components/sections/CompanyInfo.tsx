import Image from "next/image";
import Link from "next/link";

/**
 * 会社紹介セクション - NK LITE風ミニマルデザイン
 */
export default function CompanyInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
            私たちについて
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-900"></div>
        </div>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左側：テキストコンテンツ */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Spatial Computing Solution
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              UPHASH Inc.は、空間コンピューティング技術を通じて、
              現実とデジタルの境界を超えた新しい体験を創造します。
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              私たちは「今のこの瞬間を保存する」というビジョンのもと、
              革新的なソリューションを提供し続けています。
            </p>
            
            {/* データポイント */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-3xl font-light text-gray-900">2022</p>
                <p className="text-sm text-gray-600 mt-1">設立</p>
              </div>
              <div>
                <p className="text-3xl font-light text-gray-900">3</p>
                <p className="text-sm text-gray-600 mt-1">拠点</p>
              </div>
              <div>
                <p className="text-3xl font-light text-gray-900">∞</p>
                <p className="text-sm text-gray-600 mt-1">可能性</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-sm font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              <span className="mr-2">詳しく見る</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 右側：画像 */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
              alt="UPHASH Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}