import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPositions } from "@/lib/recruit";

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
 * 採用情報ページ - NK LITE風デザイン（Markdown対応版）
 */
export default async function RecruitPage() {
  const positions = await getAllPositions();

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
              <Link
                key={position.slug}
                href={`/recruit/${position.slug}`}
                className="group block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h4 className="text-xl font-normal tracking-wide text-gray-900 mb-4 group-hover:text-gray-700">
                  {position.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-gray-500 flex-shrink-0">勤務地:</span>
                    <span className="text-xs text-gray-700">{position.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-gray-500 flex-shrink-0">雇用形態:</span>
                    <span className="text-xs text-gray-700">{position.employment_type}</span>
                  </div>
                </div>

                {position.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 text-sm tracking-wider text-gray-900 group-hover:text-gray-700">
                  詳細を見る →
                </div>
              </Link>
            ))}
          </div>

          {positions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">現在募集中の職種はありません。</p>
            </div>
          )}
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