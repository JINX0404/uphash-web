import Link from "next/link";
import { getLatestNews } from "@/lib/markdown";

/**
 * ニュースプレビューセクション - NK LITE風ミニマルデザイン
 */
export default async function NewsPreview() {
  const news = await getLatestNews(3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
            最新情報
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-900"></div>
        </div>

        {/* ニュースカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.slug} className="group">
              <Link href={`/news/${item.slug}`} className="block">
                {/* 日付 */}
                <time className="text-sm text-gray-500 font-light">
                  {new Date(item.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).replace(/\//g, '.')}
                </time>
                
                {/* タイトル */}
                <h3 className="mt-2 text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* 概要 */}
                <p className="mt-3 text-gray-600 font-light line-clamp-3">
                  {item.description}
                </p>
                
                {/* リンク */}
                <div className="mt-4 flex items-center text-sm font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  <span className="mr-2">続きを読む</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* すべてのニュースへのリンク */}
        <div className="mt-16 text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-wider text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  );
}