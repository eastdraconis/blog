'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useTagToggle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    const normalizedTag = tag.toLowerCase();

    const currentTags = params.get('tags')?.split(',').filter(Boolean) || [];

    const newTags = currentTags.includes(normalizedTag)
      ? currentTags.filter((t) => t.toLowerCase() !== normalizedTag)
      : [...currentTags, normalizedTag];

    newTags.length > 0 ? params.set('tags', newTags.join(',')) : params.delete('tags');

    const pathname = window.location.pathname;
    const queryString = params.toString();
    const newUrl = `${pathname}${queryString ? `?${queryString}` : ''}`;

    router.push(newUrl);
  };

  // 현재 선택된 태그 목록 반환
  const getSelectedTags = (): string[] => {
    const tagsParmas = searchParams?.get('tags');
    return tagsParmas ? tagsParmas.split(',').filter(Boolean) : [];
  };

  // 특정 태그가 선택되었는지 확인
  const isTagSelected = (tag: string): boolean => {
    const selectedTags = getSelectedTags();
    return selectedTags.some((t) => t.toLowerCase() === tag.toLowerCase());
  };

  return {
    toggleTag,
    getSelectedTags,
    isTagSelected,
  };
};
