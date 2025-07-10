import Image from "next/image";

/**
 * 会社紹介サマリーセクション
 * ホームページで会社の概要を簡潔に紹介
 */
export default function CompanyInfo() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "革新的な技術",
      description: "最先端のAI、機械学習、ブロックチェーン技術を活用し、ビジネスに革新をもたらします。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "グローバル展開",
      description: "世界中のクライアントと協力し、国境を越えたソリューションを提供しています。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "専門家チーム",
      description: "各分野のエキスパートが集結し、お客様のニーズに最適なソリューションを提供します。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左側：テキストコンテンツ */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              テクノロジーで未来を切り拓く
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              UPHASH Inc.は、2020年の設立以来、革新的な技術ソリューションを提供し続けています。
              私たちは、AIやブロックチェーンなどの最先端技術を活用し、
              企業のデジタルトランスフォーメーションを支援しています。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              150名を超える専門家チームが、お客様のビジネス課題に対して
              最適なソリューションを提供し、持続可能な成長を実現します。
            </p>
            
            {/* 特徴リスト */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：画像 */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* 装飾的な要素 */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-100 rounded-full opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-200 rounded-full opacity-20 -z-10" />
          </div>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">専門家チーム</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">クライアント企業</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">プロジェクト実績</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5年</div>
            <div className="text-gray-600">継続的な成長</div>
          </div>
        </div>
      </div>
    </section>
  );
}