'use client';

import { useEffect, useRef } from 'react';
import { SearchResultItem } from '@/app/_domains/post/utils/search';
import Link from 'next/link';
import { SearchItem } from './search-item';
import { SearchIcon } from '../search-icon';
import { useSearchNavigation } from '../hooks/useSearchNavigation';
import { css } from '../../../../../../styled-system/css';

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
      <div className={css({
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '80px 20px 20px',
  animation: 'searchModalFadeIn 0.2s ease-out',
})} onClick={onClose}>
      <div className={css({
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'var(--colors-background)',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100dvh - 100px)',
  overflow: 'hidden',
  zIndex: 1000,
  animation: 'searchModalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
})} onClick={(e) => e.stopPropagation()}>
        <div className={css({
  padding: '16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
})}>
          <SearchIcon />
          <input
            ref={inputRef}
            className={css({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  backgroundColor: 'transparent',
  padding: '8px 0',
})}
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder='검색어를 입력하세요...'
          />
        </div>
              {!searchQuery ? (
          <></>
        ) : (
          <div className={css({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  maxHeight: '640px',
  '@media (max-width: 600px)': {
    maxHeight: '740px',
  },
  padding: '12px',
})} ref={searchResultsRef}>
            <div className={css({
  paddingBottom: '10px',
  paddingRight: '16px',
  overflow: 'scroll',
})}>
              {isLoading ? (
                <div className={css({
  padding: '32px 16px',
  textAlign: 'center',
})}>검색 중...</div>
              ) : !isLoading && searchResults.length === 0 ? (
                <div className={css({
  padding: '32px 16px',
  textAlign: 'center',
})}>검색 결과가 없습니다.</div>
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
