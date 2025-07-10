import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPositions } from "@/lib/recruit";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AnimatedCard from "@/components/motion/AnimatedCard";

export const metadata: Metadata = {
  title: "採用情報 | UPHASH Inc.",
  description: "UPHASHは技術的な仲間を探しています。少人数で、フラットに、本気で空間技術に取り組む環境です。",
  openGraph: {
    title: "採用情報 | UPHASH Inc.",
    description: "技術的な仲間を探しています。少人数で、フラットに、本気で空間技術に取り組む環境。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/recruit`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 採用情報ページ - ジョブ型採用
 */
export default async function RecruitPage() {
  const positions = await getAllPositions();

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-100" />
        
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-6">
              技術的な仲間を探しています
            </h1>
            <p className="text-lg font-thin tracking-wide text-gray-700 max-w-2xl mx-auto">
              少人数で運営している会社だからこそ、<br className="hidden sm:inline" />
              一人ひとりの技術と想いが、直接プロダクトに反映されます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 私たちの考え方 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">OUR APPROACH</h2>
              <h3 className="text-3xl font-thin tracking-wider text-gray-900 mb-12">
                ポジションベースの採用
              </h3>
              
              <div className="space-y-8 text-left">
                <div className="bg-white p-8 border border-gray-200">
                  <h4 className="text-lg font-normal tracking-wide text-gray-900 mb-3">
                    明確な役割と責任
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    各ポジションには明確なミッションがあります。「なんでもやる」ではなく、
                    あなたの専門性を活かして、特定の領域で価値を生み出してください。
                  </p>
                </div>

                <div className="bg-white p-8 border border-gray-200">
                  <h4 className="text-lg font-normal tracking-wide text-gray-900 mb-3">
                    柔軟な契約形態
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    正社員、業務委託、副業、週1日〜フルタイムまで。
                    あなたのライフスタイルに合わせた関わり方を一緒に見つけます。
                  </p>
                </div>

                <div className="bg-white p-8 border border-gray-200">
                  <h4 className="text-lg font-normal tracking-wide text-gray-900 mb-3">
                    技術者ファースト
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AIツールの活用、リモートワーク、成果主義。
                    技術者が最大限パフォーマンスを発揮できる環境を追求しています。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 募集中のポジション */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">OPEN POSITIONS</h2>
              <h3 className="text-3xl font-thin tracking-wider text-gray-900">
                募集中のポジション
              </h3>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <AnimatedCard key={position.slug} index={index}>
                <div className="bg-white border border-gray-200 p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <h4 className="text-xl font-normal tracking-wide text-gray-900 mb-4">
                      {position.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{position.location}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-700">{position.employment_type}</span>
                      </div>
                    </div>

                    {position.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {position.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {position.tags.length > 4 && (
                          <span className="text-xs px-3 py-1 text-gray-500">
                            +{position.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/recruit/${position.slug}`}
                    className="inline-flex items-center text-sm tracking-wider text-gray-900 hover:opacity-60 transition-opacity group"
                  >
                    もっと見る
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {positions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">現在募集中のポジションはありません。</p>
            </div>
          )}
        </div>
      </section>

      {/* なぜUPHASHなのか */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-6">WHY UPHASH</h2>
              <h3 className="text-3xl font-thin tracking-wider mb-12">
                なぜUPHASHなのか
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  私たちは「技術商社×R&D」という独特なポジションで、
                  海外の最先端ツールを日本に展開しながら、独自の研究開発も進めています。
                </p>
                <p>
                  大企業のような組織の階層はありません。
                  CEOもCTOも、みんなコードを書き、顧客と話し、製品を作っています。
                </p>
                <p>
                  あなたのアイデアが、そのままプロダクトになる。
                  そんな環境で、一緒に挑戦してみませんか。
                </p>
              </div>

              <div className="mt-16 pt-16 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-8">
                  まずは気軽にお話ししましょう
                </p>
                <a
                  href="mailto:admin@uphash.net"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                >
                  admin@uphash.net
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}