import { getAllPosts, getAllTags } from '@/app/_domains/post/api';
import { Home } from '@/app/_pages/home';
import { Metadata } from 'next/types';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    alternates: {
      canonical: 'https://www.handongryong.com',
    },
  };
};

const Page = async ({ searchParams }: { searchParams: Promise<{ tags?: string }> }) => {
  const tags = (await searchParams).tags?.split(',') || [];
  const posts = getAllPosts(tags);
  const allTags = getAllTags();

  return <Home posts={posts} tags={allTags} />;
};

export default Page;
