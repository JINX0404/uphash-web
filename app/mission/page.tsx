import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ミッション・ビジョン | UPHASH Inc.",
  description: "現実を編集可能な知へ。空間がUIになる社会へ。UPHASHは技術と思想で空間の未来を切り開きます。",
  openGraph: {
    title: "ミッション・ビジョン | UPHASH Inc.",
    description: "現実を編集可能な知へ。空間がUIになる社会へ。UPHASHは技術と思想で空間の未来を切り開きます。",
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
              現実を、編集可能な知へ
            </h4>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-left">
              <p>
                私たちは、3Dスキャン・AI・画像処理・リアルタイムレンダリングの技術を用いて、<br />
                物理空間の一瞬をただ記録するのではなく、「再構築できる知」として保存します。
              </p>
              <p className="pt-4">
                世界中の空間技術をつなぎ、社会のインフラとして使える形に翻訳する。<br />
                それがUPHASHの使命です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-8">OUR VISION</h3>
            <h4 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900 mb-12">
              空間が、UIになる社会へ
            </h4>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-left">
              <p>
                建物も、事故現場も、文化財も、データセンターも、<br />
                あらゆる空間が「読めて」「使えて」「伝えられる」状態になることで、<br />
                人の判断、学び、創造が拡張される世界。
              </p>
              <p className="pt-4">
                私たちは、空間を"ただの背景"から"操作可能な情報源"へと変えていく<br />
                そんな未来を、構想だけでなく、技術と実装で切り開いていきます。
              </p>
            </div>
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

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 text-3xl font-thin text-gray-900">01</div>
              <div>
                <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-3">
                  技術を使って思想を形にする
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  単なるテック企業ではなく、「空間をこう捉えたい」という想いから技術を選びます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 text-3xl font-thin text-gray-900">02</div>
              <div>
                <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-3">
                  再現性と再編集性にこだわる
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  "かっこいいデモ"より、"あとから使えるデータ"を重視します。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 text-3xl font-thin text-gray-900">03</div>
              <div>
                <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-3">
                  小さくて強いチーム
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  人数は少なくても、国内外の技術と交渉力を武器に世界に挑みます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 text-3xl font-thin text-gray-900">04</div>
              <div>
                <h5 className="text-xl font-normal tracking-wide text-gray-900 mb-3">
                  人の役に立つ尖り方
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  親会社から受け継いだ「人に喜ばれる」という判断基準を、私たちは"空間"という切り口で実現しようとしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            一緒に、空間の未来を構想し、形にしていく仲間を募集しています。
          </h2>
          <Link
            href="/recruit"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            採用ページを見る
          </Link>
        </div>
      </section>
    </div>
  );
}