import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  thumbnail: string;
  content: string;
  htmlContent?: string;
}

/**
 * すべてのニュース記事のスラッグを取得
 */
export function getAllNewsSlugs(): string[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * スラッグから記事データを取得
 */
export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // gray-matterでメタデータとコンテンツを分離
    const { data, content } = matter(fileContents);
    
    // MarkdownをHTMLに変換
    const processedContent = await remark()
      .use(html)
      .process(content);
    const htmlContent = processedContent.toString();
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
      thumbnail: data.thumbnail || '',
      content,
      htmlContent,
    };
  } catch (error) {
    console.error(`Error reading news post ${slug}:`, error);
    return null;
  }
}

/**
 * すべてのニュース記事を取得（日付順にソート）
 */
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  const slugs = getAllNewsSlugs();
  const posts = await Promise.all(
    slugs.map(slug => getNewsPostBySlug(slug))
  );
  
  return posts
    .filter((post): post is NewsPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * 最新のニュース記事を取得
 */
export async function getLatestNews(count: number = 3): Promise<NewsPost[]> {
  const allPosts = await getAllNewsPosts();
  return allPosts.slice(0, count);
}