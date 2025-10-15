import Link from 'next/link';

export const EmptyPostList = () => {
  return (
    <div>
      <h1>게시글이 존재하지 않아요</h1>
      <Link href='/'>
        <button>모든 게시글 보기</button>
      </Link>
    </div>
  );
};
