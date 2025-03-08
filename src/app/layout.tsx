import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 한동룡 기술 블로그',
    default: '한동룡 기술 블로그',
  },
  description: '주니어 프론트엔드 개발자 한동룡의 기술 블로그 입니다',
  openGraph: {
    title: '한동룡 기술 블로그',
    description: '주니어 프론트엔드 개발자 한동룡의 기술 블로그 입니다',
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
      <body>
        {children}
        <div id='modal' />
      </body>
    </html>
  );
}
