import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSortedPremiumPosts } from "@/lib/premium-markdown";
import { SUBSCRIPTION_PLANS } from "@/lib/stripe";
import SubscriptionCTA from "./SubscriptionCTA";

export const metadata: Metadata = {
  title: "プレミアムブログ | UPHASH Inc.",
  description: "業界の最新トレンド、専門的な分析、実践的なインサイトを提供するプレミアムコンテンツ",
  openGraph: {
    title: "プレミアムブログ | UPHASH Inc.",
    description: "専門的な分析と実践的なインサイトを提供",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/premium-blog`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * プレミアムブログ一覧ページ
 * 有料記事の一覧と購読プランを表示
 */
export default function PremiumBlogPage() {
  const posts = getSortedPremiumPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">プレミアムブログ</h1>
          <p className="text-xl text-blue-100">Premium Insights</p>
        </div>
      </section>

      {/* イントロセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ビジネスを成功に導く専門知識
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              業界の最新トレンド、専門的な分析、実践的なインサイトを提供する
              プレミアムコンテンツをお楽しみください。
            </p>
          </div>
        </div>
      </section>

      {/* 記事一覧セクション */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            最新の記事
          </h2>
          
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">現在、プレミアム記事はありません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* カード画像 */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                        alt={post.title}
                        fill
                        className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {post.isPremium && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5z" />
                        </svg>
                        Premium
                      </div>
                    )}
                  </div>

                  {/* カードコンテンツ */}
                  <div className="p-6">
                    {/* メタ情報 */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <time>
                        {new Date(post.date).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>{post.author}</span>
                    </div>
                    
                    {/* タイトル */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* 要約 */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* タグ */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* 続きを読むリンク */}
                    <Link
                      href={`/premium-blog/${post.slug}`}
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

      {/* 価格セクション */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              シンプルな料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              すべてのプレミアムコンテンツにアクセス
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-blue-600 shadow-xl bg-blue-50'
                    : 'border border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                      おすすめ
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.frequency}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 購読CTA */}
          <SubscriptionCTA />
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            よくある質問
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                無料トライアル期間はありますか？
              </h3>
              <p className="text-gray-600">
                はい、すべてのプランで7日間の無料トライアルをご利用いただけます。
                期間中はすべてのプレミアム機能をお試しいただけます。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                プランの変更やキャンセルはできますか？
              </h3>
              <p className="text-gray-600">
                はい、いつでもプランの変更やキャンセルが可能です。
                月額プランの場合は次回請求日まで、年額プランの場合は期間終了までご利用いただけます。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                法人契約は可能ですか？
              </h3>
              <p className="text-gray-600">
                はい、法人向けの特別プランもご用意しております。
                詳細はお問い合わせフォームからご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}