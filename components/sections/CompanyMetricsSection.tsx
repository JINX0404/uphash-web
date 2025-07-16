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
    label: '年間売上高',
    value: '100',
    suffix: '億円+',
    description: '2024年度見込み'
  },
  {
    label: '導入企業数',
    value: '500',
    suffix: '社+',
    description: 'Fortune 500企業を含む'
  },
  {
    label: '特許保有数',
    value: '23',
    suffix: '件',
    description: '空間認識・AI分野'
  },
  {
    label: '技術者比率',
    value: '87',
    suffix: '%',
    description: '博士号取得者15名在籍'
  }
]

function CountUpAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(end * progress))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function CompanyMetricsSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">
                COMPANY METRICS
              </h2>
              <h3 className="text-4xl font-thin tracking-wider mb-6">
                数字で見るUPHASH
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                確かな実績と技術力で、お客様のビジネスを支援します
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <span className="text-5xl font-light">
                    <CountUpAnimation end={parseInt(metric.value)} />
                  </span>
                  <span className="text-3xl font-light text-primary ml-1">
                    {metric.suffix}
                  </span>
                </div>
                <h4 className="text-sm tracking-wider text-gray-300 mb-2">
                  {metric.label}
                </h4>
                <p className="text-xs text-gray-500">
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
            className="mt-20 pt-12 border-t border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-sm tracking-wider text-gray-400 mb-3">主要拠点</h4>
                <p className="text-gray-300">東京 / シンガポール / サンフランシスコ</p>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-gray-400 mb-3">設立</h4>
                <p className="text-gray-300">2022年（急成長中）</p>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-gray-400 mb-3">認証取得</h4>
                <p className="text-gray-300">ISO 27001 / SOC 2 Type II</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}