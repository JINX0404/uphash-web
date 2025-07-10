"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
// import ParallaxSection from "@/components/motion/ParallaxSection";
import { useRef } from "react";

/**
 * 会社紹介セクション - NK LITE風パララックスデザイン with Animation
 */
export default function CompanyInfo() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const stats = [
    { value: "2022", label: "ESTABLISHED" },
    { value: "3", label: "LOCATIONS" },
    { value: "∞", label: "POSSIBILITIES" },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* セクションヘッダー */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-xs tracking-[0.3em] text-gray-600 mb-6"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              私たちについて
            </motion.h3>
          </div>
        </ScrollReveal>

        {/* メインコンテンツ */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* テキストエリア */}
          <ScrollReveal delay={0.2}>
            <div className="order-2 lg:order-1">
              <motion.h4 
                className="text-2xl lg:text-3xl font-thin mb-8 tracking-wider leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                現実を保存し、<br />
                新たな価値を創造する
              </motion.h4>
              <motion.div 
                className="space-y-6 text-gray-600 leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  UPHASH Inc.は、空間コンピューティング技術を通じて、
                  物理世界とデジタル世界の境界を再定義します。
                </p>
                <p>
                  私たちのミッションは「今のこの瞬間を保存する」こと。
                  時間、空間、体験のすべてをデジタルアーカイブとして
                  次世代に継承する技術を開発しています。
                </p>
              </motion.div>
              
              {/* データ */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.p 
                      className="text-3xl font-thin text-gray-900"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs tracking-wider text-gray-600 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center mt-12 text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
                  >
                    詳しく見る
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* 画像エリア */}
          <div className="order-1 lg:order-2">
            <motion.div 
              className="relative h-[500px] lg:h-[600px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="UPHASH Office"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}