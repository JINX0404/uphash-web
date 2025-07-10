import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報 | UPHASH Inc.",
  description: "UPHASHは空間を記録する未来の仲間を募集しています。完全リモート・成果主義で、技術と事業の接続点で働きませんか。",
  openGraph: {
    title: "採用情報 | UPHASH Inc.",
    description: "空間を記録する未来の仲間を募集中。完全リモート・成果主義の環境で働く。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/recruit`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 採用情報ページ - NK LITE風デザイン（刷新版）
 */
export default function RecruitPage() {
  const positions = [
    {
      id: "3d-scan-engineer",
      title: "3Dスキャンエンジニア",
      description: "マルチカメラ制御、スキャンワークフロー構築、画像処理の自動化",
      skills: ["Python", "C++", "GPU処理", "Gaussian Splatting"],
      workStyle: "完全リモート",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      id: "webgl-unreal-engineer",
      title: "WebGL / Unreal エンジニア",
      description: "スキャンデータを表示・操作するリアルタイム3Dビューアの開発",
      skills: ["Three.js", "PlayCanvas", "Unity/Unreal Engine", "Omniverse"],
      workStyle: "完全リモート",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      id: "technical-sales",
      title: "テクニカルセールス / プロダクトローカライザー",
      description: "海外製スキャンプロダクトの技術理解＋顧客提案",
      skills: ["英語読解", "ハード/ソフト理解力", "顧客対応", "技術提案"],
      workStyle: "基本リモート（対面商談も一部あり）",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  const workPolicies = [
    {
      title: "完全ジョブ型採用",
      description: "ポジションごとの明確な業務定義に基づいて採用します",
    },
    {
      title: "原則フルリモート",
      description: "全国どこからでも働けます",
    },
    {
      title: "成果主義",
      description: "評価は実績とインパクトで決まります",
    },
    {
      title: "試用期間",
      description: "最初の6ヶ月は「お互いの相性確認期間」として設けています",
    },
    {
      title: "AI活用開発",
      description: "ClaudeやLLMなどをフル活用した開発体制",
    },
    {
      title: "即戦力採用",
      description: "ジュニア採用なし、即戦力ポジションのみ募集します",
    },
    {
      title: "思考力重視",
      description: "学歴ではなく思考力重視。特に高専卒・美大卒のようなハイブリッド思考を評価",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="Recruit Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl lg:text-6xl font-thin tracking-wider mb-6">
            空間を記録する<br />
            未来の仲間を募集しています
          </h1>
          <p className="text-lg lg:text-xl font-thin tracking-wide opacity-90">
            時間と空間を切り取る、という新しい職能へようこそ
          </p>
        </div>
      </section>

      {/* 採用ポリシーセクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">OUR WORK POLICY</h2>
            <h3 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900">
              私たちの働き方
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workPolicies.map((policy, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h4 className="text-lg font-normal tracking-wide text-gray-900 mb-3">
                  {policy.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちは小さなチームで大きなインパクトを生み出すことを目指しています。<br />
              自律的に動き、技術の最前線で価値を創造する仲間を求めています。
            </p>
          </div>
        </div>
      </section>

      {/* 募集職種セクション */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">OPEN POSITIONS</h2>
            <h3 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900">
              募集職種
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {positions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-gray-400 mb-6">
                  {position.icon}
                </div>
                
                <h4 className="text-xl font-normal tracking-wide text-gray-900 mb-4">
                  {position.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs tracking-wider text-gray-700 mb-3">必要スキル</h5>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-600 tracking-wider">
                  {position.workStyle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 求める人物像セクション */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-6">WHO WE ARE LOOKING FOR</h2>
            <h3 className="text-3xl lg:text-4xl font-thin tracking-wider">
              UPHASHが求める人物像
            </h3>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-thin leading-relaxed mb-8">
              UPHASHは、大企業とは異なる「技術と事業の接続点」にある会社です。
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              自ら問いを立て、空間や時間の扱い方そのものを再発明する意志がある方と共に働きたいと考えています。
              正解が与えられるのを待つのではなく、生成AIや空間処理の進化を自分ごととして捉えられる、
              そんな感性を大事にします。
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              私たちは、技術の可能性を信じ、その実現に向けて共に挑戦できる仲間を探しています。
            </p>
          </div>
        </div>
      </section>

      {/* 応募方法セクション */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">HOW TO APPLY</h2>
            <h3 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900 mb-12">
              応募方法
            </h3>

            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-8 leading-relaxed">
                応募希望の方は、下記メールアドレスに履歴書・職務経歴書またはポートフォリオを添えてご連絡ください。
              </p>
              
              <a
                href="mailto:recruit@uphash.co.jp"
                className="inline-flex items-center justify-center px-8 py-4 text-lg tracking-wider text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                recruit@uphash.co.jp
              </a>

              <p className="mt-8 text-sm text-gray-500">
                ※書類選考の上、オンライン面談のご案内をさせていただきます
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}