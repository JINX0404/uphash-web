import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getNewsData, getSortedNewsData } from "@/lib/markdown";

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsData(slug);
  
  if (!post) {
    return {
      title: "記事が見つかりません | UPHASH Inc.",
    };
  }

  return {
    title: `${post.title} | UPHASH Inc.`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`,
      siteName: "UPHASH Inc.",
      type: "article",
      publishedTime: post.date,
      locale: "ja_JP",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/news/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// 静的生成用のパラメータ
export async function generateStaticParams() {
  const posts = getSortedNewsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * ニュース詳細ページ
 * 個別のニュース記事を表示
 */
export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getNewsData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <Link
            href="/news"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ニュース一覧に戻る
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {postData.title}
          </h1>
          
          <div className="flex items-center gap-4 text-blue-100">
            <time className="text-lg">
              {new Date(postData.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* アイキャッチ画像 */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
                alt={postData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 記事本文 */}
            <div
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.content || '' }}
            />

            {/* シェアボタン */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-4">
                この記事をシェア
              </p>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    postData.title
                  )}&url=${encodeURIComponent(
                    `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            その他のニュース
          </h2>
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              すべてのニュースを見る
              <svg
                className="w-5 h-5 ml-2"
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
        </div>
      </section>
    </article>
  );
}