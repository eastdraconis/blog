import { getAllPosts } from '@/domains/post/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.handongryong.com';

  const posts = getAllPosts([]);

  // RSS 피드 헤더 생성
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>한동룡 기술 블로그</title>
    <link>${baseUrl}</link>
    <description>한동룡의 기술 블로그입니다.</description>
    <language>ko</language>
    <copyright>${new Date().getFullYear()} handongryong All rights reserved</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map((post) => {
        // description이 없는 경우 대체 텍스트 사용
        const postDescription = post.description || post.title || '포스트 내용';

        // HTML 태그 제거 및 특수 문자 이스케이프
        const description = postDescription
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');

        // title이 없는 경우 대체 텍스트 사용
        const postTitle = post.title || '제목 없음';
        const safeTitle = postTitle
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        return `
    <item>
      <title>${safeTitle}</title>
      <link>${baseUrl}/posts/${post.slug}</link>
      <guid>${baseUrl}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${description}</description>
      ${
        post.tags && Array.isArray(post.tags)
          ? post.tags.map((tag) => `<category>${tag}</category>`).join('')
          : ''
      }
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
