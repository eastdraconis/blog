'use client';

import { useEffect, useRef } from 'react';
import * as styles from './search-modal.css';
import { SearchResultItem } from '@/app/_domains/post/utils/search';
import Link from 'next/link';
import { SearchItem } from './search-item';
import { SearchIcon } from '../search-icon';
import { useSearchNavigation } from '../hooks/useSearchNavigation';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResultItem[];
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  isLoading?: boolean;
}

export function SearchModal({
  isOpen,
  onClose,
  searchResults,
  searchQuery,
  onSearchQueryChange,
  isLoading = false,
}: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const { selectedIndex, setSelectedIndex, registerItemRef } = useSearchNavigation({
    searchResults,
    isOpen,
    onClose,
    searchQuery,
    searchResultsRef,
  });

  // 모달이 열릴 때 input에 포커스
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // 모달이 열리지 않았다면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchInputWrapper}>
          <SearchIcon />
          <input
            ref={inputRef}
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder='검색어를 입력하세요...'
          />
        </div>
        {!searchQuery ? (
          <></>
        ) : (
          <div className={styles.searchResults} ref={searchResultsRef}>
            <div className={styles.searchResultsInner}>
              {isLoading ? (
                <div className={styles.noResults}>검색 중...</div>
              ) : !isLoading && searchResults.length === 0 ? (
                <div className={styles.noResults}>검색 결과가 없습니다.</div>
              ) : (
                searchResults.map((post, index) => (
                  <div
                    key={post.slug}
                    ref={(element) => registerItemRef(index, element)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <Link href={`/posts/${post.slug}`} onClick={() => onClose()}>
                      <SearchItem post={post} selected={index === selectedIndex} />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
