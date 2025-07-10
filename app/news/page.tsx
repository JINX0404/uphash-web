import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
 * ニュース一覧ページ
 * Markdownファイルから記事を読み込み、カードレイアウトで表示
 */
export default function NewsPage() {
  const allNewsData = getSortedNewsData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">ニュース</h1>
          <p className="text-xl text-blue-100">最新情報・プレスリリース</p>
        </div>
      </section>

      {/* ニュース一覧セクション */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {allNewsData.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">現在、ニュース記事はありません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNewsData.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* カード画像 */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
                      <Image
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
                        alt={post.title}
                        fill
                        className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-white opacity-80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* カードコンテンツ */}
                  <div className="p-6">
                    {/* 日付 */}
                    <time className="text-sm text-gray-500 font-medium">
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {/* タイトル */}
                    <h2 className="text-xl font-bold text-gray-900 mt-3 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* 要約 */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* 続きを読むリンク */}
                    <Link
                      href={`/news/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      続きを読む
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}