'use client';

import { Header } from '@/components/header';
import { PostList } from '@/domains/post/components/post-list';
import { ContentLayout } from '@/components/layout/content-layout';
import { FilterTagGroup } from '@/domains/post/components/filter-tag-group';
import { Post } from '@/domains/post/types/post';
import { Footer } from '@/components/footer';
import { useScrollRestore } from '@/hooks/use-scroll-restore';
import * as styles from './style.css';

interface HomeProps {
  posts: Post[];
  tags: string[];
}

export const Home = ({ posts, tags }: HomeProps) => {
  useScrollRestore();

  return (
    <>
      <Header />
      <main>
        <ContentLayout>
          <div className={styles.container}>
            <section>
              <h2 className={styles.tagSectionTitle}>Tags</h2>
              <FilterTagGroup tags={tags} />
            </section>
            <section className={styles.postListContainer}>
              <div>
                <h2 className={styles.postSectionTitle}>Posts</h2>
              </div>
              <div>
                <PostList posts={posts} />
              </div>
            </section>
          </div>
        </ContentLayout>
      </main>
      <Footer />
    </>
  );
};
