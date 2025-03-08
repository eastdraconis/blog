import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '../types/post';

const postsDirectory = join(process.cwd(), 'posts');

export const getAllMdx = (dir: string = postsDirectory): Post[] => {
  let posts: Post[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // 디렉토리인 경우 재귀 호출하여 내부 mdx 파일들을 찾음
      posts = posts.concat(getAllMdx(fullPath));
    } else if (file.endsWith('.mdx')) {
      const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
      const tags = data.tags ? data.tags.map((tag: string) => tag.toLowerCase()) : [];
      const readingTime = calculateReadingTime(content);
      // 파일명이 .mdx로 끝나면 배열에 추가
      posts.push({ ...data, readingTime, content, tags } as Post);
    }
  });

  return posts;
};

export const getPostBySlug = (slug: string) => {
  const allPosts = getAllMdx();

  const foundPost = allPosts.find((file) => {
    return file.slug === slug;
  });

  return foundPost;
};

export const getRecentPosts = () => {
  const allPosts = getAllMdx();
  const recentPosts = allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return recentPosts.slice(0, 3);
};

const filterPosts = (posts: Post[], tags: string | string[]) => {
  if (!tags || tags.length === 0) {
    return posts;
  }

  const filterTags = (Array.isArray(tags) ? tags : [tags]).map((tag) => tag.toLowerCase());
  const filterdPosts = posts.filter((post) => {
    return post.tags.some((tag) => {
      return filterTags.includes(tag);
    });
  });

  return filterdPosts;
};

export const getAllPosts = (tags: string | string[]) => {
  const allPosts = getAllMdx();
  const filteredPosts = filterPosts(allPosts, tags);

  const posts = filteredPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export const getAllTags = () => {
  const tags = new Set<string>();
  const allPosts = getAllMdx();
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags.add(tag);
    });
  });

  return Array.from(tags);
};

const calculateReadingTime = (content: string): string => {
  // HTML 태그 제거
  const text = content.replace(/<\/?[^>]+(>|$)/g, '');

  // 단어 수 계산 (공백으로 분리)
  const words = text.trim().split(/\s+/).length;

  // 분당 읽는 단어 수 (WPM: Words Per Minute)
  const wpm = 225;

  // 읽는 시간 계산 (분 단위)
  const minutes = Math.ceil(words / wpm);

  if (minutes < 1) {
    return '1 min read';
  } else if (minutes === 1) {
    return '1 min read';
  } else {
    return `${minutes} min read`;
  }
};
