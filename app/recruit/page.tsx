import { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報 | UPHASH Inc.",
  description: "UPHASH Inc.では、革新的な技術で社会に貢献したいエンジニアを募集しています。",
  openGraph: {
    title: "採用情報 | UPHASH Inc.",
    description: "革新的な技術で社会に貢献したいエンジニアを募集中",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/recruit`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 採用情報ページ - NK LITE風デザイン
 */
export default function RecruitPage() {
  const positions = [
    {
      title: "フルスタックエンジニア",
      type: "正社員",
      location: "福岡本社 / リモート可",
      description: "空間コンピューティング技術の開発に携わるフルスタックエンジニアを募集しています。",
      requirements: [
        "JavaScript/TypeScript での開発経験3年以上",
        "React/Next.js の実務経験",
        "バックエンド開発の経験",
        "チーム開発の経験",
      ],
    },
    {
      title: "AIエンジニア",
      type: "正社員",
      location: "横浜研究所 / リモート可",
      description: "機械学習・深層学習を活用した新規プロダクト開発を担当していただきます。",
      requirements: [
        "Python での開発経験3年以上",
        "機械学習フレームワークの実務経験",
        "論文を読んで実装できる能力",
        "英語でのコミュニケーション能力",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-xs tracking-[0.3em] text-gray-600 mb-6">RECRUIT</h1>
            <h2 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-8">
              採用情報
            </h2>
            <p className="text-lg font-thin text-gray-600 max-w-2xl mx-auto">
              私たちと一緒に、テクノロジーで世界を変えていきませんか
            </p>
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-6">OPEN POSITIONS</h3>
            <h4 className="text-3xl font-thin tracking-wider text-gray-900">
              募集職種
            </h4>
          </div>

          <div className="space-y-16">
            {positions.map((position, index) => (
              <div key={index} className="border-t border-gray-200 pt-16 first:border-0 first:pt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-normal tracking-wide text-gray-900 mb-4">
                      {position.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>雇用形態: {position.type}</p>
                      <p>勤務地: {position.location}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-sm tracking-wider text-gray-900 mb-4">必要なスキル・経験</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={`mailto:recruit@uphash.co.jp?subject=${position.title}応募`}
                      className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
                    >
                      この職種に応募する
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 働く環境 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-6">WORK ENVIRONMENT</h3>
            <h4 className="text-3xl font-thin tracking-wider text-gray-900">
              働く環境
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-lg font-normal tracking-wide text-gray-900 mb-4">
                フレキシブルな働き方
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                リモートワークやフレックスタイム制度により、
                ライフスタイルに合わせた働き方が可能です。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-lg font-normal tracking-wide text-gray-900 mb-4">
                最新技術への挑戦
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                常に最新の技術トレンドを追求し、
                革新的なプロダクト開発に挑戦できます。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-lg font-normal tracking-wide text-gray-900 mb-4">
                成長できる環境
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                書籍購入支援、カンファレンス参加支援など、
                スキルアップをサポートする制度が充実しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-thin tracking-wider mb-8">
            一緒に未来を創りましょう
          </h3>
          <p className="text-lg font-thin text-gray-300 mb-12 max-w-2xl mx-auto">
            ご応募・お問い合わせは下記メールアドレスまでお送りください
          </p>
          <a
            href="mailto:recruit@uphash.co.jp"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            recruit@uphash.co.jp
          </a>
        </div>
      </section>
    </div>
  );
}