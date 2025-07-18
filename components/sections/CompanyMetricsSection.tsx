'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ScrollReveal from '@/components/motion/ScrollReveal'

interface Metric {
  label: string
  value: string
  suffix?: string
  description: string
}

const metrics: Metric[] = [
  {
    label: '事業領域',
    value: '3',
    suffix: '分野',
    description: '3Dスキャン・AI・空間コンピューティング'
  },
  {
    label: '拠点数',
    value: '4',
    suffix: '拠点',
    description: '東京・福岡・有明・横浜'
  },
  {
    label: '設立年',
    value: '2022',
    suffix: '年',
    description: '空間技術に特化したスタートアップ'
  },
  {
    label: '資本金',
    value: '1.6',
    suffix: '億円',
    description: '資本準備金を含む'
  }
]

function CountUpAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isDecimal = !Number.isInteger(end)

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        if (isDecimal) {
          setCount(Number((end * progress).toFixed(1)))
        } else {
          setCount(Math.floor(end * progress))
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [end, duration, isInView, isDecimal])

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count}</span>
}

export default function CompanyMetricsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
                COMPANY METRICS
              </h2>
              <h3 className="text-3xl sm:text-4xl font-thin tracking-wider mb-4 sm:mb-6">
                数字で見るUPHASH
              </h3>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                グローバルな展開と充実したサポート体制で、お客様のビジネスを支援します
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light">
                    {metric.value.includes('.') ? (
                      <CountUpAnimation end={parseFloat(metric.value)} />
                    ) : (
                      <CountUpAnimation end={parseInt(metric.value)} />
                    )}
                  </span>
                  <span className="text-2xl sm:text-3xl font-light text-primary ml-1">
                    {metric.suffix}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm tracking-wider text-gray-300 mb-1 sm:mb-2">
                  {metric.label}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {metric.description}
                </p>
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
            className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-800"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <h4 className="text-xs sm:text-sm tracking-wider text-gray-400 mb-2 sm:mb-3">主要拠点</h4>
                <p className="text-sm sm:text-base text-gray-300">東京 / 福岡 / 有明 / 横浜</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm tracking-wider text-gray-400 mb-2 sm:mb-3">設立</h4>
                <p className="text-sm sm:text-base text-gray-300">2022年8月（前身「ファンコネ」）</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm tracking-wider text-gray-400 mb-2 sm:mb-3">代表者</h4>
                <p className="text-sm sm:text-base text-gray-300">今井翔太（CEO）</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}