'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollRestore = () => {
  const pathname = usePathname();
  const scrollPositionsRef = useRef<{ [key: string]: number }>({});

  // 페이지 로드 시 스크롤 위치 복원
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined' || !pathname) return;

    try {
      // sessionStorage에서 저장된 스크롤 위치 가져오기
      const savedScrollPositions = sessionStorage.getItem('scrollPositions');
      if (savedScrollPositions) {
        scrollPositionsRef.current = JSON.parse(savedScrollPositions);
      }

      // 현재 경로에 대한 저장된 스크롤 위치가 있으면 복원
      if (scrollPositionsRef.current[pathname]) {
        setTimeout(() => {
          // window.scrollTo(0, scrollPositionsRef.current[pathname]);
          window.scrollTo({ top: scrollPositionsRef.current[pathname], behavior: 'instant' });
        }, 0);
      }
    } catch (error) {
      console.error('스크롤 위치 복원 중 오류 발생:', error);
    }

    // 스크롤 이벤트 리스너 등록
    const handleScroll = () => {
      try {
        // 현재 스크롤 위치 저장
        scrollPositionsRef.current[pathname] = window.scrollY;
        sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositionsRef.current));
      } catch (error) {
        console.error('스크롤 위치 저장 중 오류 발생:', error);
      }
    };

    // 스크롤 이벤트에 쓰로틀링 적용
    let timeoutId: NodeJS.Timeout | null = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 200); // 200ms 쓰로틀링
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  // 수동으로 스크롤 위치를 저장하는 함수 (필요한 경우 사용)
  const saveScrollPosition = () => {
    if (typeof window === 'undefined' || !pathname) return;

    try {
      scrollPositionsRef.current[pathname] = window.scrollY;
      sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositionsRef.current));
    } catch (error) {
      console.error('스크롤 위치 수동 저장 중 오류 발생:', error);
    }
  };

  // 수동으로 스크롤 위치를 복원하는 함수 (필요한 경우 사용)
  const restoreScrollPosition = () => {
    if (typeof window === 'undefined' || !pathname) return;

    try {
      if (scrollPositionsRef.current[pathname]) {
        window.scrollTo(0, scrollPositionsRef.current[pathname]);
      }
    } catch (error) {
      console.error('스크롤 위치 수동 복원 중 오류 발생:', error);
    }
  };

  return {
    saveScrollPosition,
    restoreScrollPosition,
  };
};
