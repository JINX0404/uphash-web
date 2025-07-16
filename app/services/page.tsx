import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TechnologyDomainsSection from "@/components/sections/TechnologyDomainsSection";

export const metadata: Metadata = {
  title: "製品・サービス | UPHASH Inc.",
  description: "UPHASH Inc.の空間コンピューティングソリューション。現実世界をデジタル化し、新たな価値を創造します。",
  openGraph: {
    title: "製品・サービス | UPHASH Inc.",
    description: "空間コンピューティングソリューションで現実世界をデジタル化",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 製品・サービスページ - NK LITE風デザイン
 */
export default function ServicesPage() {
  const services = [
    {
      title: "Spatial Archive",
      subtitle: "空間アーカイブソリューション",
      description: "建築物、文化財、自然環境などの3D空間データを高精度でデジタル化。時間の経過による変化も記録し、永続的なアーカイブを構築します。",
      features: [
        "高精度3Dスキャニング",
        "時系列データ管理",
        "クラウドストレージ",
        "メタデータ自動生成"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
    },
    {
      title: "Reality Capture",
      subtitle: "リアリティキャプチャプラットフォーム",
      description: "スマートフォンやドローンを使用して、誰でも簡単に空間データを取得。AIが自動的に処理し、高品質な3Dモデルを生成します。",
      features: [
        "モバイルアプリ対応",
        "AI自動処理",
        "リアルタイム変換",
        "マルチデバイス対応"
      ],
      image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2070"
    },
    {
      title: "Digital Twin",
      subtitle: "デジタルツインソリューション",
      description: "物理空間のデジタルレプリカを作成し、リアルタイムでの監視・分析・シミュレーションを実現。施設管理や都市計画に最適です。",
      features: [
        "リアルタイム同期",
        "予測分析",
        "シミュレーション機能",
        "API連携"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-xs tracking-[0.3em] text-gray-600 mb-6">PRODUCTS & SERVICES</h1>
            <h2 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-8">
              製品・サービス
            </h2>
            <p className="text-lg font-thin text-gray-600 max-w-2xl mx-auto">
              空間コンピューティング技術で、現実世界をデジタル化し、
              新たな価値を創造します
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl lg:text-4xl font-thin tracking-wider text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm tracking-wider text-gray-600 mb-8">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs tracking-[0.3em] text-gray-600 mb-4">主な機能</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
                  >
                    詳しく見る
                  </Link>
                </div>
                
                <div className={`relative h-[400px] lg:h-[500px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技術領域と挑戦 */}
      <TechnologyDomainsSection />

      {/* テクノロジーセクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-6">TECHNOLOGY</h3>
            <h4 className="text-3xl font-thin tracking-wider text-gray-900">
              コア技術
            </h4>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-sm tracking-wider text-gray-900 mb-3">
                3D Scanning
              </h5>
              <p className="text-sm text-gray-600">
                高精度3Dスキャニング技術
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-sm tracking-wider text-gray-900 mb-3">
                AI Processing
              </h5>
              <p className="text-sm text-gray-600">
                AI自動処理エンジン
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-sm tracking-wider text-gray-900 mb-3">
                Cloud Platform
              </h5>
              <p className="text-sm text-gray-600">
                スケーラブルなクラウド基盤
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h5 className="text-sm tracking-wider text-gray-900 mb-3">
                Data Analytics
              </h5>
              <p className="text-sm text-gray-600">
                高度なデータ分析機能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-thin tracking-wider mb-8">
            ソリューションについてのお問い合わせ
          </h3>
          <p className="text-lg font-thin text-gray-300 mb-12 max-w-2xl mx-auto">
            お客様のニーズに合わせた最適なソリューションをご提案します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}