'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useTagToggle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleTag = (tag: string) => {
    // 현재 URL의 쿼리 파라미터 복사
    const params = new URLSearchParams(searchParams?.toString() || '');

    // 현재 태그 목록 가져오기
    const currentTags = params.get('tags')?.split(',').filter(Boolean) || [];

    // 태그가 이미 있는지 확인
    const tagIndex = currentTags.findIndex((t) => t.toLowerCase() === tag.toLowerCase());

    if (tagIndex >= 0) {
      // 태그가 이미 있으면 제거
      currentTags.splice(tagIndex, 1);
    } else {
      // 태그가 없으면 추가
      currentTags.push(tag);
    }

    // 태그 목록 업데이트
    if (currentTags.length > 0) {
      params.set('tags', currentTags.join(','));
    } else {
      // 태그가 없으면 쿼리 파라미터 제거
      params.delete('tags');
    }

    // 현재 경로 가져오기
    const pathname = window.location.pathname;

    // 새 URL로 이동
    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
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
