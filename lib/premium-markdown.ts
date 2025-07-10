import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/premium-blog');

export type PremiumPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  isPremium: boolean;
  author?: string;
  tags?: string[];
  content?: string;
};

export function getSortedPremiumPosts(): PremiumPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        isPremium: matterResult.data.isPremium !== false, // デフォルトはtrue
        author: matterResult.data.author || 'UPHASH編集部',
        tags: matterResult.data.tags || [],
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPremiumPostData(slug: string): Promise<PremiumPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      isPremium: matterResult.data.isPremium !== false,
      author: matterResult.data.author || 'UPHASH編集部',
      tags: matterResult.data.tags || [],
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

/**
 * コンテンツをブラー処理するための関数
 * プレミアムコンテンツの最初の部分のみを表示
 */
export function getPreviewContent(content: string, maxLength: number = 200): string {
  const textContent = content.replace(/<[^>]+>/g, ''); // HTMLタグを削除
  if (textContent.length <= maxLength) {
    return content;
  }
  return textContent.substring(0, maxLength) + '...';
}