import { Metadata } from "next";
import Link from "next/link";
import { getSortedNewsData } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "ニュース | UPHASH Inc.",
  description: "UPHASH Inc.の最新ニュース、プレスリリース、お知らせをご覧いただけます。",
  openGraph: {
    title: "ニュース | UPHASH Inc.",
    description: "UPHASH Inc.の最新ニュース、プレスリリース、お知らせ",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/news`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * ニュース一覧ページ - NK LITE風デザイン
 */
export default function NewsPage() {
  const allNews = getSortedNewsData();

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-xs tracking-[0.3em] text-gray-600 mb-6">NEWS</h1>
            <h2 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900">
              ニュース
            </h2>
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allNews.map((news) => (
              <article key={news.slug} className="group">
                <Link href={`/news/${news.slug}`}>
                  <div className="overflow-hidden mb-6">
                    <div className="h-64 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500"></div>
                  </div>
                  
                  <time className="text-xs tracking-wider text-gray-500">
                    {new Date(news.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }).replace(/\//g, '.')}
                  </time>
                  
                  <h3 className="mt-3 text-xl font-normal tracking-wide text-gray-900 group-hover:opacity-60 transition-opacity">
                    {news.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-4 text-sm tracking-wider text-gray-900 group-hover:opacity-60 transition-opacity">
                    続きを読む →
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {allNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">現在、ニュースはありません。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}