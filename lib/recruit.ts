import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const recruitDirectory = path.join(process.cwd(), 'content/recruit');

export interface RecruitPosition {
  slug: string;
  title: string;
  location: string;
  employment_type: string;
  description: string;
  tags: string[];
  priority: number;
  active: boolean;
  content: string;
  htmlContent?: string;
}

/**
 * すべての募集職種のスラッグを取得
 */
export function getAllPositionSlugs(): string[] {
  if (!fs.existsSync(recruitDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(recruitDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * スラッグから募集職種データを取得
 */
export async function getPositionBySlug(slug: string): Promise<RecruitPosition | null> {
  try {
    const fullPath = path.join(recruitDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // gray-matterでメタデータとコンテンツを分離
    const { data, content } = matter(fileContents);
    
    // MarkdownをHTMLに変換
    const processedContent = await remark()
      .use(html)
      .process(content);
    const htmlContent = processedContent.toString();
    
    return {
      slug: data.slug || slug,
      title: data.title || '',
      location: data.location || '',
      employment_type: data.employment_type || '',
      description: data.description || '',
      tags: data.tags || [],
      priority: data.priority || 999,
      active: data.active !== false, // デフォルトはtrue
      content,
      htmlContent,
    };
  } catch (error) {
    console.error(`Error reading position ${slug}:`, error);
    return null;
  }
}

/**
 * すべての募集職種を取得（優先度順にソート）
 */
export async function getAllPositions(): Promise<RecruitPosition[]> {
  const slugs = getAllPositionSlugs();
  const positions = await Promise.all(
    slugs.map(slug => getPositionBySlug(slug))
  );
  
  return positions
    .filter((position): position is RecruitPosition => position !== null && position.active)
    .sort((a, b) => a.priority - b.priority);
}