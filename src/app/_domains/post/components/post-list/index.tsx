'use client';

import { PostCard } from '../post-card';
import * as styles from './style.css';
import { EmptyPostList } from './empty-post-list';
import { Post } from '../../types/post';
import { useEffect } from 'react';
import { useState } from 'react';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (posts.length === 0) {
    return <EmptyPostList />;
  }

  return (
    <div className={styles.container({ mounted })}>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};
