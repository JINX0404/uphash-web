import { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報 | UPHASH Inc.",
  description: "UPHASH Inc.では、テクノロジーで世界を変えたいという情熱を持った仲間を募集しています。募集職種、応募要件、福利厚生をご覧ください。",
  openGraph: {
    title: "採用情報 | UPHASH Inc.",
    description: "テクノロジーで世界を変える仲間を募集中",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/recruit`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 採用情報ページ
 * 募集職種、応募要件、福利厚生を表示
 */
export default function RecruitPage() {
  // 募集職種データ
  const jobOpenings = [
    {
      id: 1,
      title: "フルスタックエンジニア",
      department: "開発部",
      type: "正社員",
      location: "東京（リモート可）",
      description: "最新のWeb技術を使用して、革新的なプロダクトを開発します。フロントエンドからバックエンドまで幅広い技術スタックに携わることができます。",
      requirements: [
        "JavaScript/TypeScript、React、Node.jsの実務経験3年以上",
        "データベース設計・実装経験",
        "アジャイル開発の経験",
        "新しい技術への好奇心と学習意欲",
      ],
      salary: "年収 600万円 〜 1,200万円（経験・スキルに応じて決定）",
    },
    {
      id: 2,
      title: "AIエンジニア / データサイエンティスト",
      department: "AI研究開発部",
      type: "正社員",
      location: "東京（リモート可）",
      description: "機械学習モデルの開発と実装を担当し、AIソリューションを構築します。最先端のAI技術を活用して、ビジネス課題を解決します。",
      requirements: [
        "Python、TensorFlow/PyTorchの実務経験",
        "機械学習・深層学習の理論的知識",
        "大規模データの処理経験",
        "論文読解能力（英語）",
      ],
      salary: "年収 700万円 〜 1,500万円（経験・スキルに応じて決定）",
    },
    {
      id: 3,
      title: "プロダクトマネージャー",
      department: "プロダクト部",
      type: "正社員",
      location: "東京",
      description: "プロダクトの戦略立案から実行まで、製品開発全体をリードします。エンジニアやデザイナーと協力して、ユーザーに価値を提供します。",
      requirements: [
        "IT業界でのプロダクトマネジメント経験3年以上",
        "データ分析能力とビジネス感覚",
        "優れたコミュニケーション能力",
        "英語力（ビジネスレベル）",
      ],
      salary: "年収 800万円 〜 1,400万円（経験・スキルに応じて決定）",
    },
    {
      id: 4,
      title: "UIデザイナー",
      department: "デザイン部",
      type: "正社員・契約社員",
      location: "東京（リモート可）",
      description: "ユーザー体験を最適化し、美しく使いやすいインターフェースを設計します。デザインシステムの構築にも携わります。",
      requirements: [
        "Webアプリケーションのデザイン経験3年以上",
        "Figma、Adobe Creative Suiteの実務経験",
        "HTML/CSSの基礎知識",
        "ユーザビリティテストの経験",
      ],
      salary: "年収 500万円 〜 900万円（経験・スキルに応じて決定）",
    },
  ];

  // 福利厚生データ
  const benefits = [
    {
      title: "フレキシブルな働き方",
      items: [
        "リモートワーク制度（週2〜5日選択可）",
        "フレックスタイム制（コアタイム11:00-15:00）",
        "有給休暇取得率90%以上",
      ],
    },
    {
      title: "成長支援",
      items: [
        "書籍購入費補助（月1万円まで）",
        "カンファレンス参加費全額支援",
        "資格取得支援制度",
        "英語学習支援",
      ],
    },
    {
      title: "健康・生活支援",
      items: [
        "健康保険・厚生年金完備",
        "定期健康診断・人間ドック補助",
        "ジム利用補助",
        "社内カフェテリア完備",
      ],
    },
    {
      title: "その他の制度",
      items: [
        "ストックオプション制度",
        "退職金制度",
        "育児・介護休業制度",
        "副業OK（事前申請制）",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">採用情報</h1>
          <p className="text-xl text-blue-100">Join Our Team</p>
        </div>
      </section>

      {/* イントロセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              一緒に未来を創りませんか
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              UPHASH Inc.では、テクノロジーで世界を変えたいという情熱を持った仲間を募集しています。
              私たちと一緒に、革新的なソリューションを生み出し、社会に価値を提供しませんか。
            </p>
          </div>
        </div>
      </section>

      {/* 募集職種セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            募集中の職種
          </h2>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">応募要件</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">給与</h4>
                      <p className="text-gray-600">{job.salary}</p>
                    </div>
                    
                    <a
                      href={`mailto:recruit@uphash.com?subject=${encodeURIComponent(
                        `【応募】${job.title}`
                      )}&body=${encodeURIComponent(
                        `${job.title}への応募を希望します。\n\n氏名：\n連絡先：\n\n【自己PR】\n`
                      )}`}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
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

      {/* 福利厚生セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            福利厚生・働く環境
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 採用プロセスセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            採用プロセス
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* プロセスライン */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
              
              {/* プロセスステップ */}
              {[
                { step: "1", title: "書類選考", desc: "履歴書・職務経歴書による選考（1週間以内に結果連絡）" },
                { step: "2", title: "一次面接", desc: "チームメンバーとのカジュアル面談（オンライン可）" },
                { step: "3", title: "技術課題", desc: "職種に応じた技術課題またはポートフォリオ提出" },
                { step: "4", title: "最終面接", desc: "役員との面接（オフィスまたはオンライン）" },
                { step: "5", title: "内定", desc: "条件提示・入社日の相談" },
              ].map((process, index) => (
                <div key={index} className="relative flex items-center mb-12">
                  <div className="absolute left-1/2 w-12 h-12 bg-blue-600 rounded-full -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    {process.step}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 ml-auto'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            あなたのキャリアを次のレベルへ
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            UPHASHで、あなたのスキルを活かして世界に影響を与えるプロダクトを作りませんか？
          </p>
          <a
            href="mailto:recruit@uphash.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            採用に関するお問い合わせ
          </a>
        </div>
      </section>
    </div>
  );
}