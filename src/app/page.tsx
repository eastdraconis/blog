import { getAllPosts, getAllTags } from '@/domains/post/api';
import { Home } from '@/pages/home';

const Page = async ({ searchParams }: { searchParams: Promise<{ tags?: string }> }) => {
  const tags = (await searchParams).tags?.split(',') || [];
  const posts = getAllPosts(tags);
  const allTags = getAllTags();

  return <Home posts={posts} tags={allTags} />;
};

export default Page;
