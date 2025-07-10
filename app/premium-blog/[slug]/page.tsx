import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPremiumPostData, getSortedPremiumPosts, getPreviewContent } from "@/lib/premium-markdown";
import ContentLock from "./ContentLock";

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPremiumPostData(slug);
  
  if (!post) {
    return {
      title: "記事が見つかりません | UPHASH Inc.",
    };
  }

  return {
    title: `${post.title} | プレミアムブログ | UPHASH Inc.`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/premium-blog/${slug}`,
      siteName: "UPHASH Inc.",
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "UPHASH編集部"],
      locale: "ja_JP",
    },
  };
}

// 静的生成用のパラメータ
export async function generateStaticParams() {
  const posts = getSortedPremiumPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * プレミアムブログ記事詳細ページ
 * 非購読者には記事の一部とロック画面を表示
 */
export default async function PremiumBlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPremiumPostData(slug);

  if (!postData) {
    notFound();
  }

  // TODO: 実際の実装では、ユーザーの購読状態を確認
  const isSubscribed = false; // デモ用に常にfalse

  return (
    <article className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-blue-700">
        <div className="container mx-auto px-6">
          <Link
            href="/premium-blog"
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
            プレミアムブログ一覧に戻る
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {postData.title}
          </h1>
          
          <div className="flex items-center gap-6 text-white">
            <time className="text-lg">
              {new Date(postData.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-lg">{postData.author}</span>
          </div>

          {/* タグ */}
          {postData.tags && postData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {postData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* アイキャッチ画像 */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                alt={postData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 記事本文 */}
            {isSubscribed ? (
              // 購読者向け：全文表示
              <div
                className="prose prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.content || '' }}
              />
            ) : (
              // 非購読者向け：プレビュー + ロック
              <>
                <div className="relative">
                  {/* プレビューコンテンツ */}
                  <div className="prose prose-lg prose-blue max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {postData.excerpt}
                    </p>
                    <p className="text-gray-600 mt-4">
                      {getPreviewContent(postData.content || '', 300)}
                    </p>
                  </div>
                  
                  {/* グラデーションオーバーレイ */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* コンテンツロック */}
                <ContentLock />
              </>
            )}

            {/* シェアボタン */}
            {isSubscribed && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  この記事をシェア
                </p>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      postData.title
                    )}&url=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/premium-blog/${slug}`
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
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/premium-blog/${slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            その他のプレミアム記事
          </h2>
          <div className="text-center">
            <Link
              href="/premium-blog"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              すべての記事を見る
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