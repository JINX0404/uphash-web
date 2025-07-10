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
    { year: "2022年8月", event: "法人設立" },
    { year: "2023年11月", event: "今井が事業承継　経営陣刷新" },
    { year: "2024年5月", event: "グループ会社の事業部を吸収合併" },
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
                  alt="代表取締役 今井翔太"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-100 rounded-2xl p-6 shadow-lg">
                <p className="text-lg font-bold text-gray-900">今井 翔太</p>
                <p className="text-gray-600">CEO/代表取締役</p>
              </div>
            </div>

            {/* メッセージ */}
            <div className="lg:pl-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  常識に挑戦し、可能性を再定義することこそが進歩の本質です。
                  私たちの最大の資産は、既存の枠を超える思考力と、
                  それを現実に変える実行力です。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  今日の大胆な発想が、明日の当たり前を作り出すのです。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  私たちUPHASH Inc.は、革新的な技術とビジョンを通じて、
                  社会に新たな価値を提供し続けます。
                </p>
                <p className="text-gray-700 font-semibold">
                  CEO/代表取締役 今井 翔太
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
                <dd className="text-lg text-gray-900">株式会社 ＵＰＨＡＳＨ</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">設立</dt>
                <dd className="text-lg text-gray-900">2022年</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">代表者</dt>
                <dd className="text-lg text-gray-900">今井 翔太</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">資本金</dt>
                <dd className="text-lg text-gray-900">1億6000万円（資本準備金を含む）</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">主要取引銀行</dt>
                <dd className="text-lg text-gray-900">三井住友銀行</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">本社所在地</dt>
                <dd className="text-lg text-gray-900">
                  福岡県福岡市中央区天神１-１１−１
                </dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">有明開発室</dt>
                <dd className="text-lg text-gray-900">福岡県大牟田市内</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <dt className="text-sm font-semibold text-gray-600 mb-1">横浜研究所</dt>
                <dd className="text-lg text-gray-900">神奈川県横浜市内</dd>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 md:col-span-2">
                <dt className="text-sm font-semibold text-gray-600 mb-1">事業内容</dt>
                <dd className="text-lg text-gray-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Spatial Computing Solution</li>
                    <li>今のこの瞬間を保存する</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* チーム紹介セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            チーム紹介
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 今井翔太 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                    alt="今井翔太"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">今井翔太</h3>
                  <p className="text-blue-600 font-medium mb-4">CEO/代表取締役</p>
                  <p className="text-gray-700 leading-relaxed">
                    常識に挑戦し、可能性を再定義することこそが進歩の本質です。私たちの最大の資産は、既存の枠を超える思考力と、それを現実に変える実行力です。今日の大胆な発想が、明日の当たり前を作り出すのです。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 大塩悠貴 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200"
                    alt="大塩悠貴"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">大塩悠貴</h3>
                  <p className="text-blue-600 font-medium mb-4">CTO/リードプログラマ</p>
                  <p className="text-gray-700 leading-relaxed">
                    技術は手段であり、目的ではありません。私たちの使命は、AIを通じて人々の生活に意味ある変化をもたらすことです。イノベーションは大切ですが、それが現実世界の問題を解決する時にこそ、真の価値が生まれるのです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-20 bg-gray-50">
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