import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsPostBySlug, getAllNewsSlugs } from "@/lib/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  
  if (!post) {
    return {
      title: "記事が見つかりません | UPHASH Inc.",
    };
  }

  return {
    title: `${post.title} | UPHASH Inc.`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`,
      siteName: "UPHASH Inc.",
      locale: "ja_JP",
      type: "article",
      publishedTime: post.date,
      images: post.thumbnail ? [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
  };
}

/**
 * ニュース個別記事ページ - NK LITE風デザイン
 */
export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Link 
              href="/news" 
              className="inline-flex items-center text-sm tracking-wider text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              ← 活動報告一覧へ戻る
            </Link>
            
            <time className="block text-xs tracking-[0.3em] text-gray-600 mb-6">
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            
            <h1 className="text-3xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              {post.description}
            </p>

            {post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 text-xs tracking-wider text-gray-700 bg-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* サムネイル画像 */}
      {post.thumbnail && (
        <section className="py-12">
          <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
            <div className="relative h-96 lg:h-[600px] overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* 記事本文 */}
      <article className="py-20">
        <div className="max-w-screen-md mx-auto px-4 lg:px-8">
          <div 
            className="prose prose-gray prose-lg max-w-none
              prose-headings:font-thin prose-headings:tracking-wider
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:leading-relaxed prose-p:text-gray-700
              prose-a:text-gray-900 prose-a:border-b prose-a:border-gray-400 prose-a:no-underline hover:prose-a:border-gray-900
              prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-hr:border-gray-300 prose-hr:my-16"
            dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          />
        </div>
      </article>

      {/* フッターセクション */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-screen-md mx-auto px-4 lg:px-8 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
          >
            活動報告一覧へ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}