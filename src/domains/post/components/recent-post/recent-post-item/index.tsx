import { Post } from '@/domains/post/types/post';
import Image from 'next/image';
import Link from 'next/link';

export const RecentPostItem = ({ title, image, slug }: Post) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
    </Link>
  );
};
