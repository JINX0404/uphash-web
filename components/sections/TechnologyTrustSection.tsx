'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/motion/ScrollReveal'

export default function TechnologyTrustSection() {
  const patents = [
    '空間構造認識',
    'AIによる画像処理最適化',
    '3Dデータ分類技術',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-4">
                TECHNOLOGY & INTELLECTUAL PROPERTY
              </h2>
              <h3 className="text-4xl font-thin tracking-wider mb-2">
                技術基盤と知財
              </h3>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-12 shadow-sm"
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  UPHASHは、空間理解・画像解析・AI処理における深い専門性を背景に、
                  <br className="hidden md:block" />
                  社会実装を前提とした技術提供を行っています。
                </p>
                
                <div className="border-l-2 border-gray-300 pl-6 py-2">
                  <p className="text-gray-600 leading-relaxed">
                    当社CTOは、人工知能および画像解析に関する<span className="font-medium text-gray-800">複数の特許</span>を個人で保有しており、
                    <br className="hidden md:block" />
                    その技術はUPHASHのコアアルゴリズムやサービス設計に応用されています。
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm text-gray-500 mb-4 tracking-wider">保有特許分野</p>
                <div className="flex flex-wrap gap-3">
                  {patents.map((patent, index) => (
                    <motion.span
                      key={patent}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      <span className="text-gray-400 mr-1">#</span>
                      {patent}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div>
                    <span className="tracking-wider">ESTABLISHED</span>
                    <span className="ml-2 font-medium text-gray-700">2022</span>
                  </div>
                  <div>
                    <span className="tracking-wider">PATENT PORTFOLIO</span>
                    <span className="ml-2 font-medium text-gray-700">MULTIPLE</span>
                  </div>
                  <div>
                    <span className="tracking-wider">FOCUS</span>
                    <span className="ml-2 font-medium text-gray-700">SOCIAL IMPLEMENTATION</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}