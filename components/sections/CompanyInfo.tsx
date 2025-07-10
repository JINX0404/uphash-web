import Image from "next/image";
import Link from "next/link";

/**
 * 会社紹介セクション - NK LITE風パララックスデザイン
 */
export default function CompanyInfo() {
  return (
    <section className="relative py-32 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">ABOUT US</h2>
          <h3 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900">
            私たちについて
          </h3>
        </div>

        {/* メインコンテンツ */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* テキストエリア */}
          <div className="order-2 lg:order-1">
            <h4 className="text-2xl lg:text-3xl font-thin mb-8 tracking-wider leading-relaxed">
              現実を保存し、<br />
              新たな価値を創造する
            </h4>
            <div className="space-y-6 text-gray-600 leading-loose">
              <p>
                UPHASH Inc.は、空間コンピューティング技術を通じて、
                物理世界とデジタル世界の境界を再定義します。
              </p>
              <p>
                私たちのミッションは「今のこの瞬間を保存する」こと。
                時間、空間、体験のすべてをデジタルアーカイブとして
                次世代に継承する技術を開発しています。
              </p>
            </div>
            
            {/* データ */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div>
                <p className="text-3xl font-thin text-gray-900">2022</p>
                <p className="text-xs tracking-wider text-gray-600 mt-2">ESTABLISHED</p>
              </div>
              <div>
                <p className="text-3xl font-thin text-gray-900">3</p>
                <p className="text-xs tracking-wider text-gray-600 mt-2">LOCATIONS</p>
              </div>
              <div>
                <p className="text-3xl font-thin text-gray-900">∞</p>
                <p className="text-xs tracking-wider text-gray-600 mt-2">POSSIBILITIES</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center mt-12 text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
            >
              詳しく見る
            </Link>
          </div>

          {/* 画像エリア */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                alt="UPHASH Office"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}