import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.handongryong.com'),
  verification: {
    other: {
      'naver-site-verification': '4fc69b1ccb5d3fe134d2663f45be860476f4d8ef',
    },
  },
  keywords: [
    '한동룡',
    '테크 블로그',
    '기술 블로그',
    '프론트엔드',
    '프론트엔드 개발자',
    '프론트엔드 개발자 한동룡',
    '한동룡 기술 블로그',
  ],
  applicationName: '한동룡 기술 블로그',
  authors: [{ name: '한동룡', url: 'https://github.com/eastdraconis' }],
  title: {
    template: '%s | 한동룡 기술 블로그',
    default: '한동룡 기술 블로그',
  },
  description: '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
  openGraph: {
    siteName: '한동룡 기술 블로그',
    title: '한동룡 기술 블로그',
    description: '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
    url: 'https://www.handongryong.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '한동룡 기술 블로그',
    description: '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
  },
  icons: {
    shortcut: '/favicon/favicon.ico?v=2',
    apple: { url: '/apple-icon.png', sizes: '180x180' },
    icon: [
      { rel: 'icon', url: '/favicon/favicon.ico?v=2', type: 'image/x-icon', sizes: '48x48' },
      { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml', sizes: 'any' },
      { rel: 'icon', url: '/favicon/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon/favicon-96x96.png?v=2', type: 'image/png', sizes: '96x96' },
    ],
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
        <Analytics />
        <SpeedInsights />
        <div id='modal' />
      </body>
      <GoogleAnalytics gaId='G-Q8DZS4C2DL' />
    </html>
  );
}
