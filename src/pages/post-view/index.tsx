import { Giscus } from '@/components/giscuss';
import { ContentLayout } from '@/components/layout/content-layout';
import { MDXComponent } from '@/domains/post/components/mdx-component';
import { Profile } from '@/components/profile';
import { PostHead } from '@/domains/post/components/post-head';
import { notFound } from 'next/navigation';
import { Post } from '@/domains/post/types/post';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Image from 'next/image';
import * as styles from './style.css';

interface PostProps {
  post: Post;
}

export const PostView = ({ post }: PostProps) => {
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ContentLayout>
          <article>
            <PostHead {...post} />
            <Image
              src={post.image}
              alt={post.title}
              width={1000}
              height={500}
              quality={100}
              priority
              className={styles.thumbnail}
            />
            <MDXComponent source={post.content} />
          </article>
          <Profile />
          <Giscus />
        </ContentLayout>
      </main>
      <Footer />
    </>
  );
};
