import Link from "next/link";
import { NewsPost } from "@/lib/markdown";

interface NewsPreviewProps {
  posts: NewsPost[];
}

/**
 * ニュースプレビューセクション
 * 最新のニュース記事3件を表示するコンポーネント
 * ホームページで使用
 */
export default function NewsPreview({ posts }: NewsPreviewProps) {
  // 最新3件のみ表示
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            最新ニュース
          </h2>
          <p className="text-xl text-gray-600">
            UPHASH Inc.の最新情報をお届けします
          </p>
        </div>

        {/* ニュースカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* カード画像（プレースホルダー） */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>

              {/* カードコンテンツ */}
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  続きを読む
                  <svg
                    className="w-4 h-4 ml-1"
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

        {/* もっと見るリンク */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  );
}