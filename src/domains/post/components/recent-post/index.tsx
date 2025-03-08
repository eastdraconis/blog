import { getRecentPosts } from '../../api';
import { PostCard } from '../post-card';

export const RecentPost = () => {
  const posts = getRecentPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};
