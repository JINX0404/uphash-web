import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPositionBySlug, getAllPositionSlugs } from "@/lib/recruit";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPositionSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const position = await getPositionBySlug(slug);
  
  if (!position) {
    return {
      title: "募集職種が見つかりません | UPHASH Inc.",
    };
  }

  return {
    title: `${position.title} | 採用情報 | UPHASH Inc.`,
    description: position.description,
    openGraph: {
      title: `${position.title} | UPHASH Inc.`,
      description: position.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/recruit/${slug}`,
      siteName: "UPHASH Inc.",
      locale: "ja_JP",
      type: "website",
    },
  };
}

/**
 * 募集職種詳細ページ - NK LITE風デザイン
 */
export default async function PositionDetailPage({ params }: Props) {
  const { slug } = await params;
  const position = await getPositionBySlug(slug);

  if (!position) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Link 
              href="/recruit" 
              className="inline-flex items-center text-sm tracking-wider text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              ← 採用情報一覧へ戻る
            </Link>
            
            <h1 className="text-3xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-6">
              {position.title}
            </h1>
            
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto mb-8">
              {position.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{position.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{position.employment_type}</span>
              </div>
            </div>

            {position.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {position.tags.map((tag, index) => (
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

      {/* 職種詳細 */}
      <article className="py-20">
        <div className="max-w-screen-md mx-auto px-4 lg:px-8">
          <div 
            className="prose prose-gray prose-lg max-w-none
              prose-headings:font-thin prose-headings:tracking-wider
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-gray-900
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-900
              prose-p:leading-relaxed prose-p:text-gray-700
              prose-a:text-gray-900 prose-a:border-b prose-a:border-gray-400 prose-a:no-underline hover:prose-a:border-gray-900
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-700
              prose-ol:list-decimal prose-ol:pl-6
              prose-strong:font-normal prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: position.htmlContent || '' }}
          />
        </div>
      </article>

      {/* CTAセクション */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-thin tracking-wider mb-8">
            この職種に応募する
          </h3>
          <p className="text-lg font-thin text-gray-300 mb-12 max-w-2xl mx-auto">
            ご興味をお持ちいただけましたら、ぜひお気軽にご連絡ください
          </p>
          <a
            href={`mailto:recruit@uphash.co.jp?subject=${encodeURIComponent(`${position.title}への応募`)}`}
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            応募メールを送る
          </a>
          <p className="mt-6 text-sm text-gray-400">
            recruit@uphash.co.jp
          </p>
        </div>
      </section>

      {/* 他の募集職種 */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-screen-md mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl font-thin tracking-wider text-gray-900 mb-8">
            他の募集職種も見る
          </h3>
          <Link 
            href="/recruit" 
            className="inline-flex items-center text-sm tracking-wider text-gray-900 border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
          >
            採用情報一覧へ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}