import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要 | UPHASH Inc.",
  description: "私たちは、現実を保存する会社です。空間と情報をつなぎ、次の社会基盤をデザインします。",
  openGraph: {
    title: "会社概要 | UPHASH Inc.",
    description: "私たちは、現実を保存する会社です。空間と情報をつなぎ、次の社会基盤をデザインします。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 会社概要ページ - NK LITE風ミニマルデザイン
 */
export default function AboutPage() {
  // 沿革データ
  const history = [
    { year: "2022年8月", event: "法人設立" },
    { year: "2023年11月", event: "今井が事業承継、経営陣刷新" },
    { year: "2024年5月", event: "グループ会社の事業部を吸収合併" },
  ];

  // チームメンバーデータ
  const teamMembers = [
    {
      name: "今井翔太",
      role: "CEO／代表取締役",
      image: "/images/team/imai.jpg",
      quote: [
        "常識に挑戦し、可能性を再定義することこそが進歩の本質です。",
        "私たちの最大の資産は、既存の枠を超える思考力と、それを現実に変える実行力です。",
        "今日の大胆な発想が、明日の当たり前を作り出すのです。"
      ]
    },
    {
      name: "大塩悠貴",
      role: "CTO／リードプログラマ",
      image: "/images/team/oshio.jpg",
      quote: [
        "技術は手段であり、目的ではありません。",
        "私たちの使命は、AIを通じて人々の生活に意味ある変化をもたらすことです。",
        "イノベーションは大切ですが、それが現実世界の問題を解決する時にこそ、真の価値が生まれるのです。"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            会社概要
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
            私たちは、現実を保存する会社です。空間と情報をつなぎ、次の社会基盤をデザインします。
          </p>
        </div>
      </section>

      {/* 会社の考え方セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              会社とは何か
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                私たちにとって会社とは、単なる法人格や組織構造ではありません。
              </p>
              <p>
                それは、個々の強みを引き出し合い、最適な配置を常に見直しながら、
                お互いの弱点を補い合って進んでいく「共同体」です。
              </p>
              <p>
                UPHASHは少人数だからこそ、一人ひとりの特性を深く理解し、
                その時々で最も力を発揮できる役割を柔軟に調整しています。
                今日のエンジニアが明日のセールスサポートをすることもあれば、
                CTOが顧客対応の最前線に立つこともあります。
              </p>
              <p>
                この流動性と相互補完性こそが、私たちの強さの源泉です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            会社概要
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-900 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">会社名</dt>
                <dd className="text-lg text-gray-900">株式会社UPHASH</dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">東京本社</dt>
                <dd className="text-lg text-gray-900">
                  〒105-6415<br />
                  東京都港区虎ノ門１丁目１７−１
                </dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">福岡支社</dt>
                <dd className="text-lg text-gray-900">
                  〒810-0001<br />
                  福岡県福岡市中央区天神１丁目１１−１
                </dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">有明開発室</dt>
                <dd className="text-lg text-gray-900">福岡県大牟田市（※詳細は非公開）</dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">横浜研究所</dt>
                <dd className="text-lg text-gray-900">神奈川県横浜市（※詳細は非公開）</dd>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">設立</dt>
                <dd className="text-lg text-gray-900">2022年</dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">資本金</dt>
                <dd className="text-lg text-gray-900">1億6000万円（資本準備金を含む）</dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">代表者</dt>
                <dd className="text-lg text-gray-900">今井 翔太</dd>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-light text-gray-600 mb-1">主要取引銀行</dt>
                <dd className="text-lg text-gray-900">三井住友銀行</dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            沿革
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-900 mb-12"></div>
          
          <div className="max-w-3xl">
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
              
              {/* 沿革アイテム */}
              {history.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {/* ドット */}
                  <div className="absolute left-0 top-2 w-2 h-2 bg-gray-900 rounded-full -translate-x-1/2"></div>
                  
                  {/* コンテンツ */}
                  <div>
                    <time className="text-sm text-gray-600 font-light">
                      {item.year}
                    </time>
                    <p className="mt-1 text-lg text-gray-900">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* チーム紹介セクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            共同体のメンバー
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-900 mb-8"></div>
          
          <p className="text-gray-700 mb-12 max-w-3xl">
            役職は便宜上のものです。私たちは状況に応じて役割を変え、
            お互いの強みを活かしながら、弱みを補い合っています。
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 lg:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* 写真プレースホルダー */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-200 overflow-hidden">
                      {/* 実際の画像が来たら以下のコメントを外す */}
                      {/* <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      /> */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* テキストコンテンツ */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-light mb-6">
                      {member.role}
                    </p>
                    <blockquote className="space-y-4">
                      {member.quote.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-700 font-light leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            私たちと一緒に未来を創りませんか？
          </h2>
          <p className="text-xl font-light text-gray-300 mb-12 max-w-2xl mx-auto">
            UPHASHは、革新的な技術で社会に貢献したいエンジニアを募集しています。
          </p>
          <Link
            href="/recruit"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300"
          >
            採用情報を見る
          </Link>
        </div>
      </section>
    </div>
  );
}