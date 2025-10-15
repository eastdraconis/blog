import { useState, useEffect, useRef, RefObject } from 'react';
import { SearchResultItem } from '@/app/_domains/post/utils/search';
import { useRouter } from 'next/navigation';

interface UseSearchNavigationProps {
  searchResults: SearchResultItem[];
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  searchResultsRef?: RefObject<HTMLDivElement | null>;
}

export function useSearchNavigation({
  searchResults,
  isOpen,
  onClose,
  searchQuery,
  searchResultsRef,
}: UseSearchNavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const router = useRouter();
  const isComposing = useRef(false);
  const itemRefs = useRef<Record<number, HTMLElement | null>>({});

  // 검색어 변경 시 선택된 인덱스 초기화
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // 선택된 항목이 변경될 때마다 스크롤 위치 조정
  useEffect(() => {
    if (selectedIndex >= 0 && searchResultsRef?.current && itemRefs.current[selectedIndex]) {
      const container = searchResultsRef.current;
      const selectedItem = itemRefs.current[selectedIndex];

      if (selectedItem) {
        // 선택된 항목이 컨테이너 영역을 벗어났는지 확인
        const containerRect = container.getBoundingClientRect();
        const itemRect = selectedItem.getBoundingClientRect();

        // 항목이 컨테이너 상단보다 위에 있는 경우
        if (itemRect.top < containerRect.top) {
          selectedItem.scrollIntoView({ block: 'nearest' });
        }
        // 항목이 컨테이너 하단보다 아래에 있는 경우
        else if (itemRect.bottom > containerRect.bottom) {
          selectedItem.scrollIntoView({ block: 'nearest' });
        }
      }
    }
  }, [selectedIndex, searchResultsRef]);

  // 키보드 이벤트 처리
  useEffect(() => {
    // 한글 입력 시작 이벤트
    const handleCompositionStart = () => {
      isComposing.current = true;
    };

    // 한글 입력 종료 이벤트
    const handleCompositionEnd = () => {
      isComposing.current = false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // 한글 입력 중일 때는 키보드 이벤트 무시
      if (isComposing.current) {
        return;
      }

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        // 아래 방향키: 다음 항목 선택
        e.preventDefault();
        if (searchResults.length > 0) {
          setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
        }
      } else if (e.key === 'ArrowUp') {
        // 위 방향키: 이전 항목 선택
        e.preventDefault();
        if (searchResults.length > 0) {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
        }
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        // 엔터키: 선택한 항목으로 이동
        e.preventDefault();
        const selectedPost = searchResults[selectedIndex];
        if (selectedPost) {
          router.push(`/posts/${selectedPost.slug}`);
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('compositionstart', handleCompositionStart);
      document.addEventListener('compositionend', handleCompositionEnd);
      // 모달이 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('compositionstart', handleCompositionStart);
      document.removeEventListener('compositionend', handleCompositionEnd);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, searchResults, selectedIndex, router]);

  // hover 시 해당 아이템 선택
  const handleItemHover = (index: number) => {
    setSelectedIndex(index);
  };

  // 아이템 ref 등록 함수
  const registerItemRef = (index: number, element: HTMLElement | null) => {
    itemRefs.current[index] = element;
  };

  return {
    selectedIndex,
    setSelectedIndex: handleItemHover,
    registerItemRef,
  };
}
