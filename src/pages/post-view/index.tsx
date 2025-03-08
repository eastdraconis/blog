import { Giscus } from '@/components/giscuss';
import { ContentLayout } from '@/components/layout/content-layout';
import { MDXComponent } from '@/domains/post/components/mdx-component';
import { Profile } from '@/components/profile';
import { PostHead } from '@/domains/post/components/post-head';
import { notFound } from 'next/navigation';
import { Post } from '@/domains/post/types/post';
import { Footer } from '@/components/footer';

interface PostProps {
  post: Post;
}

export const PostView = ({ post }: PostProps) => {
  if (!post) {
    notFound();
  }

  return (
    <>
      <main>
        <ContentLayout>
          <article>
            <PostHead {...post} />
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
