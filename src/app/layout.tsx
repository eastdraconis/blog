import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://handongryong.com'),
  verification: {
    other: {
      'naver-site-verification': '4fc69b1ccb5d3fe134d2663f45be860476f4d8ef',
    },
  },
  authors: [{ name: '한동룡', url: 'https://github.com/eastdraconis' }],
  title: {
    template: '%s | 한동룡 기술 블로그',
    default: '한동룡 기술 블로그',
  },
  description: '주니어 프론트엔드 개발자 한동룡의 기술 블로그 입니다',
  openGraph: {
    siteName: '한동룡 기술 블로그',
    title: '한동룡 기술 블로그',
    description: '주니어 프론트엔드 개발자 한동룡의 기술 블로그 입니다',
    url: 'https://handongryong.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: '한동룡 기술 블로그',
    description: '주니어 프론트엔드 개발자 한동룡의 기술 블로그 입니다',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          url: '/rss.xml',
          title: '한동룡 기술 블로그 RSS 피드',
        },
      ],
    },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={pretendard.variable}>
      <GoogleTagManager gtmId='GTM-PGSGTKHF' />
      <body>
        {children}
        <div id='modal' />
      </body>
      <GoogleAnalytics gaId='G-Q8DZS4C2DL' />
    </html>
  );
}
