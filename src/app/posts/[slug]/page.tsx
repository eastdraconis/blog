import { getAllMdx, getPostBySlug } from '@/domains/post/api';
import { PostView } from '@/pages/post-view';
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
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: post?.image,
      url: `https://handongryong.com/posts/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description,
      images: post?.image,
    },
    alternates: {
      canonical: `https://handongryong.com/posts/${slug}`,
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
