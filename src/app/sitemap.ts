import { MetadataRoute } from 'next';
import { getAllPosts } from '@/app/_domains/post/api';
import { Post } from '@/app/_domains/post/types/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.handongryong.com';

  // 모든 포스트 가져오기
  const posts = getAllPosts([]);

  // 포스트 URL 생성
  const postUrls = posts.map((post: Post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 기본 URL 설정
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // 모든 URL 합치기
  return [...routes, ...postUrls];
}
