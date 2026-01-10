import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '../types/post';
import { calculateReadingTime } from '../utils/calculate-reading-time';
import { filterPosts } from '../utils/filter-post';
import { cache } from 'react';

const postsDirectory = join(process.cwd(), 'posts');

// mdx 파일을 포스트 객체로 변환
const mdxFileToPost = cache(async (filePath: string): Promise<Post | null> => {
  if (!filePath.endsWith('mdx')) return null;

  const { data, content } = matter(await fs.promises.readFile(filePath, 'utf8'));
  const tags = data.tags ? data.tags.map((tag: string) => tag.toLocaleLowerCase()) : [];
  const readingTime = calculateReadingTime(content);

  return {
    ...data,
    readingTime,
    content,
    tags,
  } as Post;
});

// 전체 mdx 파일 목록 조회
export const getAllMdx = cache(async (dir: string = postsDirectory): Promise<Post[]> => {
  const files = await fs.promises.readdir(dir);

  return (
    await Promise.all(
      files.map(async (file): Promise<Post[]> => {
        const fullPath = join(dir, file);
        const stats = await fs.promises.stat(fullPath);
        if (stats.isDirectory()) {
          return await getAllMdx(fullPath);
        }
        const post = await mdxFileToPost(fullPath);
        return post ? [post] : [];
      }),
    )
  ).flat();
});

// 특정 포스트 조회
export const getPostBySlug = cache(async (slug: string) => {
  const allPosts = await getAllMdx();
  return allPosts.find((post) => post.slug === slug);
});

// 포스트 조회 태그 필터링
export const getAllPosts = cache(async (tags: string | string[]) => {
  const allPosts = await getAllMdx();
  const filteredPosts = filterPosts(allPosts, tags);

  const posts = filteredPosts.sort((post1, post2) => {
    const date1 = new Date(post1.date);
    const date2 = new Date(post2.date);
    return date1 > date2 ? -1 : 1;
  });
  return posts;
});

// 전체 태그 조회
export const getAllTags = cache(async () => {
  const allPosts = await getAllMdx();

  const allTags = allPosts.flatMap((post) => post.tags);

  const uniqueSortedTags = [...new Set(allTags)].sort((a, b) => b.localeCompare(a));
  return uniqueSortedTags;
});
