'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import { SearchModal } from './search-modal/search-modal';
import { SearchButton } from './search-button';
import { SearchResultItem } from '@/app/_domains/post/utils/search';
import { searchAction } from '@/app/_domains/post/utils/search-action';

export function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchSearchResults = () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      startTransition(async () => {
        try {
          const results = await searchAction(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error('검색 중 오류 발생:', error);
          setSearchResults([]);
        }
      });
    };

    // 디바운스 처리
    const debounceTimer = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);

  // 모달 열기/닫기 핸들러
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  // Command+L (Mac) 또는 Ctrl+L (Windows/Linux) 단축키 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Command 키 (Mac) 또는 Ctrl 키 (Windows/Linux)
      const isModifierPressed = event.metaKey || event.ctrlKey;

      // L 키가 눌렸고, 수정자 키가 함께 눌렸을 때
      if (isModifierPressed && event.key === 'k') {
        // 입력 필드에 포커스가 있으면 기본 동작 방지하지 않음
        const target = event.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          return;
        }

        event.preventDefault();
        if (!isModalOpen) {
          handleOpenModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleOpenModal]);

  return (
    <div>
      <SearchButton onClick={handleOpenModal} />
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        searchResults={searchResults}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        isLoading={isPending}
      />
    </div>
  );
}
