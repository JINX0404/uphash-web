import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, unknown>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// 組織の構造化データ
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "UPHASH Inc.",
  "alternateName": "株式会社UPHASH",
  "url": "https://uphash.com",
  "logo": "https://uphash.com/logo-uphash.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-3-XXXX-XXXX",
    "contactType": "customer service",
    "areaServed": "JP",
    "availableLanguage": "Japanese"
  },
  "sameAs": [
    "https://twitter.com/uphash_inc",
    "https://www.linkedin.com/company/uphash-inc"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "虎ノ門１丁目１７−１",
    "addressLocality": "港区",
    "addressRegion": "東京都",
    "postalCode": "105-6415",
    "addressCountry": "JP"
  }
}

// ウェブサイトの構造化データ
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "UPHASH Inc.",
  "url": "https://uphash.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://uphash.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

// パンくずリストの構造化データ生成
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// 記事の構造化データ生成
export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author,
      "worksFor": {
        "@type": "Organization",
        "name": "UPHASH Inc."
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "UPHASH Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uphash.com/logo-uphash.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  }
}

// 採用情報の構造化データ生成
export function generateJobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  url
}: {
  title: string
  description: string
  datePosted: string
  validThrough?: string
  employmentType: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "datePosted": datePosted,
    ...(validThrough && { "validThrough": validThrough }),
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "UPHASH Inc.",
      "sameAs": "https://uphash.com",
      "logo": "https://uphash.com/logo-uphash.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "虎ノ門１丁目１７−１",
        "addressLocality": "港区",
        "addressRegion": "東京都",
        "postalCode": "105-6415",
        "addressCountry": "JP"
      }
    },
    "url": url
  }
}