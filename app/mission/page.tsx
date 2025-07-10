import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ミッション・ビジョン | UPHASH Inc.",
  description: "UPHASH Inc.のミッション・ビジョン。私たちは現実を保存し、新たな価値を創造します。",
  openGraph: {
    title: "ミッション・ビジョン | UPHASH Inc.",
    description: "私たちは現実を保存し、新たな価値を創造します。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/mission`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * ミッション・ビジョンページ - NK LITE風デザイン
 */
export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
            alt="Mission Vision"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-xs tracking-[0.3em] mb-6">MISSION & VISION</h1>
          <h2 className="text-4xl lg:text-6xl font-thin tracking-wider">
            ミッション・ビジョン
          </h2>
        </div>
      </section>

      {/* ミッションセクション */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-8">OUR MISSION</h3>
            <h4 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900 mb-12">
              私たちの使命
            </h4>
            <p className="text-2xl lg:text-3xl font-thin text-gray-900 leading-relaxed mb-8">
              今のこの瞬間を保存する
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              空間コンピューティング技術を通じて、<br />
              物理世界の情報をデジタル化し、<br />
              時間と空間を超えて価値を継承する
            </p>
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-8">OUR VISION</h3>
            <h4 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900 mb-12">
              私たちが目指す未来
            </h4>
            <p className="text-2xl lg:text-3xl font-thin text-gray-900 leading-relaxed mb-8">
              現実を保存し、新たな価値を創造する
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              すべての空間、すべての瞬間が<br />
              デジタルアーカイブとして保存され、<br />
              誰もがアクセスできる世界を実現する
            </p>
          </div>
        </div>
      </section>

      {/* バリューセクション */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-8">OUR VALUES</h3>
            <h4 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900">
              私たちの価値観
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-thin text-gray-900 mb-6">01</div>
              <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-4">
                共同体
              </h5>
              <p className="text-gray-600 leading-relaxed">
                強みを引き出し合い、<br />
                弱点を補い合いながら進む。<br />
                最適な配置を常に見直す柔軟な組織。
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-thin text-gray-900 mb-6">02</div>
              <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-4">
                革新
              </h5>
              <p className="text-gray-600 leading-relaxed">
                常識に挑戦し、可能性を再定義する。<br />
                技術を通じて人々の生活に<br />
                意味ある変化をもたらす。
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-thin text-gray-900 mb-6">03</div>
              <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-4">
                継承
              </h5>
              <p className="text-gray-600 leading-relaxed">
                今この瞬間を保存し、<br />
                未来へ価値を継承する。<br />
                時間と空間を超えた貢献を目指す。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}