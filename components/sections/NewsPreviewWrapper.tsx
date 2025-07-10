import { getLatestNews } from "@/lib/news";
import NewsPreview from "./NewsPreview";

/**
 * ニュースプレビューラッパー - サーバーコンポーネント
 */
export default async function NewsPreviewWrapper() {
  const news = await getLatestNews(3);
  
  return <NewsPreview news={news} />;
}