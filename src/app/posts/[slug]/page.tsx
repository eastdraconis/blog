import { getAllMdx, getPostBySlug } from '@/app/_domains/post/api';
import { PostView } from '@/app/_pages/post-view';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post?.title ?? '한동룡 기술 블로그',
    description: post?.description ?? '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
    openGraph: {
      title: post?.title ?? '한동룡 기술 블로그',
      description: post?.description ?? '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
      images: post?.image ?? 'https://www.handongryong.com/opengraph-image.png',
      url: `https://www.handongryong.com/posts/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title ?? '한동룡 기술 블로그',
      description: post?.description ?? '프론트엔드 개발자 한동룡의 기술 블로그 입니다',
      images: post?.image ?? 'https://www.handongryong.com/twitter-image.png',
    },
    alternates: {
      canonical: `https://www.handongryong.com/posts/${slug}`,
    },
  };
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostView post={post} />;
}

export function generateStaticParams() {
  const mdxs = getAllMdx();
  return mdxs.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
