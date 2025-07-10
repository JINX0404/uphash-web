"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/motion/AnimatedCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

// サーバーコンポーネントから渡されるデータの型
interface NewsItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  thumbnail?: string;
}

interface NewsPreviewProps {
  news: NewsItem[];
}

/**
 * ニュースプレビューセクション - NK LITE風グリッドデザイン with Animation
 */
export default function NewsPreview({ news }: NewsPreviewProps) {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* セクションヘッダー */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-xs tracking-[0.3em] text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ACTIVITY REPORT
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              活動報告
            </motion.h3>
          </div>
        </ScrollReveal>

        {/* ニュースグリッド */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {news.map((item, index) => (
            <AnimatedCard key={item.slug} index={index}>
              <article className="group">
                <Link href={`/news/${item.slug}`} className="block">
                  <motion.div 
                    className="overflow-hidden mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.thumbnail ? (
                      <div className="relative h-64">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="h-64 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500"></div>
                    )}
                  </motion.div>
                  
                  <time className="text-xs tracking-wider text-gray-500">
                    {new Date(item.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }).replace(/\//g, '.')}
                  </time>
                  
                  <h3 className="mt-3 text-lg font-normal tracking-wide text-gray-900 group-hover:opacity-60 transition-opacity">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </Link>
              </article>
            </AnimatedCard>
          ))}
        </div>

        {/* View All リンク */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
              >
                すべての活動報告を見る
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}