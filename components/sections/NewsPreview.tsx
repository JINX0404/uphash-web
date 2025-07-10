import Link from "next/link";
import { getLatestNews } from "@/lib/markdown";

/**
 * ニュースプレビューセクション - NK LITE風グリッドデザイン
 */
export default async function NewsPreview() {
  const news = await getLatestNews(3);

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-xs tracking-[0.3em] text-gray-600 mb-6">NEWS</h2>
          <h3 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900">
            最新情報
          </h3>
        </div>

        {/* ニュースグリッド */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {news.map((item) => (
            <article key={item.slug} className="group">
              <Link href={`/news/${item.slug}`} className="block">
                <div className="overflow-hidden mb-6">
                  <div className="h-64 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500"></div>
                </div>
                
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
          ))}
        </div>

        {/* View All リンク */}
        <div className="text-center mt-20">
          <Link
            href="/news"
            className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
          >
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  );
}