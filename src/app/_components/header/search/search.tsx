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
