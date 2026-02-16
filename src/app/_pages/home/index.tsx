'use client';

import { Header } from '@/app/_components/header/header';
import { PostList } from '@/app/_domains/post/components/post-list';
import { ContentLayout } from '@/app/_components/layout/content-layout';
import { FilterTagGroup } from '@/app/_domains/post/components/filter-tag-group';
import { Post } from '@/app/_domains/post/types/post';
import { Footer } from '@/app/_components/footer';
import { useScrollRestore } from '@/app/_hooks/use-scroll-restore';
import { css } from '../../../../styled-system/css';

interface HomeProps {
  posts: Post[];
  tags: string[];
}

export const Home = ({ posts, tags }: HomeProps) => {
  useScrollRestore();

  return (
    <>
      <Header />
      <main className={css({bg: 'background',width: '100%'})}>
        <ContentLayout>
          <div className={css({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  paddingBottom: '80px',
})}>
            <section>
              <h2 className={css({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
})}>Tags</h2>
              <FilterTagGroup tags={tags} />
            </section>
            <section className={css({})}>
              <div>
                <h2 className={css({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
})}>Posts</h2>
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
