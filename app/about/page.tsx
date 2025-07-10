import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "会社概要 | UPHASH Inc.",
  description: "UPHASH Inc.の会社概要、代表メッセージ、沿革をご紹介します。イノベーションを通じて未来を創造する私たちのビジョンとミッションをご覧ください。",
  openGraph: {
    title: "会社概要 | UPHASH Inc.",
    description: "UPHASH Inc.の会社概要、代表メッセージ、沿革をご紹介します。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 会社概要ページ
 * 代表メッセージ、会社情報、沿革を表示
 */
export default function AboutPage() {
  // 沿革データ
  const history = [
    { year: "2020年4月", event: "UPHASH Inc. 設立" },
    { year: "2020年10月", event: "AIソリューション事業開始" },
    { year: "2021年3月", event: "シリーズA資金調達完了" },
    { year: "2021年8月", event: "従業員数50名突破" },
    { year: "2022年1月", event: "東京オフィス拡張移転" },
    { year: "2022年6月", event: "ブロックチェーン事業部設立" },
    { year: "2023年4月", event: "海外展開開始（シンガポール）" },
    { year: "2023年12月", event: "イノベーション大賞受賞" },
    { year: "2024年1月", event: "従業員数150名突破" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">会社概要</h1>
          <p className="text-xl text-blue-100">About UPHASH Inc.</p>
        </div>
      </section>

      {/* 代表あいさつセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            代表あいさつ
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO写真 */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                  alt="代表取締役 山田太郎"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-100 rounded-2xl p-6 shadow-lg">
                <p className="text-lg font-bold text-gray-900">山田 太郎</p>
                <p className="text-gray-600">代表取締役 CEO</p>
              </div>
            </div>

            {/* メッセージ */}
            <div className="lg:pl-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  私たちUPHASH Inc.は、「イノベーションを通じて未来を創造する」という
                  ミッションのもと、2020年に設立されました。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  設立から5年、私たちは常に最先端の技術に挑戦し、
                  お客様のビジネスに真の価値を提供することを追求してきました。
                  AI、ブロックチェーン、クラウドコンピューティングなど、
                  革新的な技術を組み合わせることで、これまでにない
                  ソリューションを生み出しています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  これからも私たちは、技術の力で社会課題を解決し、
                  より良い未来を創造していきます。皆様とともに、
                  新しい価値を生み出していけることを楽しみにしています。
                </p>
                <p className="text-gray-700 font-semibold">
                  代表取締役 山田 太郎
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            会社情報
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">会社名</dt>
                <dd className="text-lg text-gray-900">UPHASH Inc.</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">設立年月日</dt>
                <dd className="text-lg text-gray-900">2020年4月1日</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">代表者</dt>
                <dd className="text-lg text-gray-900">代表取締役 山田 太郎</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">資本金</dt>
                <dd className="text-lg text-gray-900">1億円</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">従業員数</dt>
                <dd className="text-lg text-gray-900">150名（2024年1月現在）</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">所在地</dt>
                <dd className="text-lg text-gray-900">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1<br />
                  UPHASHビル 10F
                </dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 md:col-span-2">
                <dt className="text-sm font-semibold text-gray-600 mb-1">事業内容</dt>
                <dd className="text-lg text-gray-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>AIソリューション開発・コンサルティング</li>
                    <li>ブロックチェーン技術開発</li>
                    <li>システムインテグレーション</li>
                    <li>デジタルトランスフォーメーション支援</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            沿革
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* タイムライン */}
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* 沿革アイテム */}
              {history.map((item, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  {/* ドット */}
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 z-10"></div>
                  
                  {/* コンテンツ */}
                  <div className="ml-20 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-semibold text-blue-600 mb-1">
                      {item.year}
                    </p>
                    <p className="text-gray-900">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}