import { getAllPosts, getAllTags } from '@/domains/post/api';
import { Home } from '@/pages/home';
import { unstable_cache } from 'next/cache';

const Page = async ({ searchParams }: { searchParams: Promise<{ tags?: string }> }) => {
  const tags = (await searchParams).tags?.split(',') || [];
  const posts = await unstable_cache(
    async () => Promise.resolve(getAllPosts(tags)),
    ['posts-by-tag'],
    {
      revalidate: false,
    },
  )();
  const allTags = getAllTags();

  return <Home posts={posts} tags={allTags} />;
};

export default Page;
