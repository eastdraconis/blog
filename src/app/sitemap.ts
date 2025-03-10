import { MetadataRoute } from 'next';
import { getAllPosts } from '@/domains/post/api';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://handongryong.com';

  // 모든 포스트 가져오기
  const posts = getAllPosts([]);

  // 포스트 URL 생성
  const postUrls = posts.map((post) => ({
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
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // 모든 URL 합치기
  return [...routes, ...postUrls];
}
