import { MetadataRoute } from 'next'
import { getAllNewsPosts } from '@/lib/news'
import { getSortedPremiumPosts } from '@/lib/premium-markdown'
import { getAllPositions } from '@/lib/recruit'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uphash.vercel.app'
  
  // 静的ページ
  const staticPages = [
    '',
    '/about',
    '/mission',
    '/services',
    '/contact',
    '/news',
    '/premium-blog',
    '/recruit',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // ニュース記事
  const newsArticles = await getAllNewsPosts()
  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // プレミアムブログ記事
  const premiumArticles = await getSortedPremiumPosts()
  const premiumPages = premiumArticles.map((article) => ({
    url: `${baseUrl}/premium-blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 採用情報
  const recruitJobs = await getAllPositions()
  const recruitPages = recruitJobs.map((job) => ({
    url: `${baseUrl}/recruit/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...newsPages, ...premiumPages, ...recruitPages]
}