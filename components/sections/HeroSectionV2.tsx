'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function HeroSectionV2() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={containerRef} className="relative min-h-screen h-screen w-full overflow-hidden bg-black">
      {/* 高品質な背景ビデオ風のアニメーション */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* グリッドパターン */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px),
                  linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          {/* 動的な光の効果 */}
          <motion.div
            className="absolute top-1/4 -left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/20 rounded-full blur-2xl sm:blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-secondary/20 rounded-full blur-2xl sm:blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* メインコンテンツ */}
      <motion.div 
        className="relative h-full flex items-center justify-center z-10"
        style={{ opacity, y }}
      >
        <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
          <div className="text-center text-white">
            {/* 企業タグライン */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 mb-6 sm:mb-8"
            >
              BRIDGING CUTTING-EDGE TECH TO INDUSTRY
            </motion.p>
            
            {/* メインタイトル */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight leading-none mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">最先端を、</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                現場の力に。
              </span>
            </motion.h1>
            
            {/* サブタイトル */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
            >
              研究室の技術を、産業の現場へ。
              <br className="hidden md:block" />
              空間コンピューティングとAIで、実用的なソリューションを提供します
            </motion.p>
            
            {/* CTA ボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/services"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium tracking-wider overflow-hidden transition-all duration-300 hover:text-white text-sm sm:text-base"
              >
                <span className="relative z-10">ソリューションを見る</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                導入のご相談
              </Link>
            </motion.div>

            {/* 実績インジケーター */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>空間コンピューティング</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>AI技術</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>24/7 サポート</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* プレミアムなスクロールインジケーター */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-wider text-gray-400">SCROLL</p>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}