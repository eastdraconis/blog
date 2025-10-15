import { Giscus } from '@/app/_components/giscuss';
import { ContentLayout } from '@/app/_components/layout/content-layout';
import { MDXComponent } from '@/app/_domains/post/components/mdx-component';
import { Profile } from '@/app/_components/profile';
import { PostHead } from '@/app/_domains/post/components/post-head';
import { notFound } from 'next/navigation';
import { Post } from '@/app/_domains/post/types/post';
import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header/header';
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
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={1000}
                height={500}
                quality={100}
                priority
                className={styles.thumbnail}
              />
            )}
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
