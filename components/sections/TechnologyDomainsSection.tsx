'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '@/components/motion/ScrollReveal'
import PlaceholderImage from '@/components/PlaceholderImage'

const technologyDomains = [
  {
    iconText: 'GAME ENGINE AI',
    title: 'ゲームエンジン×AIによる空間ソリューション',
    description: [
      'Unreal Engine / Unityなどを用いた空間可視化・XRシミュレーション',
      'AIと連携したインタラクティブ空間設計支援'
    ],
    cta: '事例を見る',
    ctaLink: '/contact'
  },
  {
    iconText: 'R&D COLLABORATION',
    title: '研究機関との共同研究・技術開発',
    description: [
      '国内外の大手研究所との連携によるプロトコル設計・検証',
      '空間認識／3D再構築／視覚的推論に関する応用'
    ],
    cta: '研究実績',
    ctaLink: '/contact'
  },
  {
    iconText: 'PBR PHOTOGRAMMETRY',
    title: 'PBRベースのフォトグラメトリー',
    description: [
      '物理的に忠実な材質・光反応の再現',
      '高解像度空間のデジタル保存と再利用に対応'
    ],
    cta: '技術詳細',
    ctaLink: '/contact'
  },
  {
    iconText: '3D AI RECONSTRUCTION',
    title: '3D写真空間のAI再構築',
    description: [
      '写真やスキャンデータからAIによる空間生成・補完',
      '欠損領域の再合成・自動構造化による"触れる空間"の提供'
    ],
    cta: 'デモを見る',
    ctaLink: '/contact'
  },
  {
    iconText: 'GAUSSIAN SPLATTING',
    title: 'Gaussian Splattingなど次世代技術の先行展開',
    description: [
      '海外発の最新研究技術（3DGS等）を日本市場で最速導入・検証',
      'UI／UX／可視化形式含めたトータルな導入支援'
    ],
    cta: '相談する',
    ctaLink: '/contact'
  }
]

export default function TechnologyDomainsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-4">
                OUR TECHNOLOGY DOMAINS
              </h2>
              <h3 className="text-4xl font-thin tracking-wider mb-6">
                私たちの技術領域と挑戦
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                以下のような先端技術領域において、研究開発・導入支援・事業実装を行っています
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologyDomains.map((domain, index) => (
            <ScrollReveal key={domain.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <PlaceholderImage 
                      width={80} 
                      height={80} 
                      text={domain.iconText}
                      className="rounded-lg"
                      bgColor="#f3f4f6"
                      textColor="#374151"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-4 text-gray-800">
                      {domain.title}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {domain.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-primary mr-2 mt-1.5">•</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={domain.ctaLink}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors group"
                    >
                      {domain.cta}
                      <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">技術領域</p>
                <p className="text-2xl font-medium text-gray-800">5+</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">研究連携</p>
                <p className="text-2xl font-medium text-gray-800">国内外</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">導入実績</p>
                <p className="text-2xl font-medium text-gray-800">拡大中</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}