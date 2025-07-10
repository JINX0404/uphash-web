"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/motion/AnimatedText";

/**
 * ヒーローセクション - NK LITE風フルスクリーンデザイン with Framer Motion
 */
export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* パララックス背景画像 */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Spatial Computing"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      {/* コンテンツオーバーレイ */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* メインコンテンツ */}
      <motion.div 
        className="relative h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SPATIAL
            </motion.span>
            <motion.span 
              className="block mt-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              COMPUTING
            </motion.span>
          </motion.h1>
          <AnimatedText 
            text="今のこの瞬間を保存する"
            className="text-lg md:text-xl lg:text-2xl font-thin tracking-widest"
            delay={0.8}
          />
        </div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-6 h-10 border border-white/50 rounded-full flex items-start justify-center p-1">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}