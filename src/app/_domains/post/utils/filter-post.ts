import { Post } from '../types/post';

const normalizeTags = (tags: string | string[]): string[] =>
  tags ? (Array.isArray(tags) ? tags : [tags]).map((tag) => tag.toLowerCase()) : [];

const filterByTags =
  (filterTags: string[]) =>
  (post: Post): boolean =>
    post.tags.some((tag) => filterTags.includes(tag));

export const filterPosts = (posts: Post[], tags: string | string[]) => {
  if (!tags || (Array.isArray(tags) && tags.length === 0)) {
    return posts;
  }

  const normalizedTags = normalizeTags(tags);
  return posts.filter(filterByTags(normalizedTags));
};
