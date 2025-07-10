"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";

/**
 * CTAセクション with Animation
 */
export default function CTASection() {
  return (
    <section className="py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <motion.h2 
            className="text-xs tracking-[0.3em] text-gray-400 mb-6"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            JOIN US
          </motion.h2>
          <motion.h3 
            className="text-4xl lg:text-5xl font-thin tracking-wider mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            一緒に未来を創りましょう
          </motion.h3>
          <motion.p 
            className="text-lg font-thin text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            革新的な技術で社会に貢献したいエンジニアを募集しています
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="/recruit"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              採用情報を見る
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-white border border-white hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              お問い合わせ
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}