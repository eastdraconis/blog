import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '../types/post';
import { calculateReadingTime } from '../utils/calculate-reading-time';
import { cache } from 'react';
import { filterPosts } from '../utils/filter-post';

const postsDirectory = join(process.cwd(), 'posts');

// mdx 파일을 포스트 객체로 변환
const mdxFileToPost = (filePath: string): Post | null => {
  if (!filePath.endsWith('mdx')) return null;

  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  const tags = data.tags ? data.tags.map((tag: string) => tag.toLocaleLowerCase()) : [];
  const readingTime = calculateReadingTime(content);

  return {
    ...data,
    readingTime,
    content,
    tags,
  } as Post;
};

// 전체 mdx 파일 목록 조회
export const getAllMdx = cache((dir: string = postsDirectory): Post[] => {
  const files = fs.readdirSync(dir);

  return files.flatMap((file) => {
    const fullPath = join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return getAllMdx(fullPath);
    }
    const post = mdxFileToPost(fullPath);
    return post ? [post] : [];
  });
});

// 특정 포스트 조회
export const getPostBySlug = (slug: string) => {
  const allPosts = getAllMdx();
  return allPosts.find((post) => post.slug === slug);
};

// 포스트 조회 태그 필터링
export const getAllPosts = cache((tags: string | string[]) => {
  const allPosts = getAllMdx();
  const filteredPosts = filterPosts(allPosts, tags);

  const posts = filteredPosts.sort((post1, post2) => {
    const date1 = new Date(post1.date);
    const date2 = new Date(post2.date);
    return date1 > date2 ? -1 : 1;
  });
  return posts;
});

// 전체 태그 조회
export const getAllTags = cache(() => {
  const allPosts = getAllMdx();

  const allTags = allPosts.flatMap((post) => post.tags);

  const uniqueSortedTags = [...new Set(allTags)].sort((a, b) => b.localeCompare(a));
  return uniqueSortedTags;
});
