'use client';

import * as styles from './style.css';
import { Logo } from './logo';
import { Menu } from './menu';
import { useEffect, useState, useCallback } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 이벤트 핸들러를 useCallback으로 메모이제이션
  const handleScroll = useCallback(() => {
    // requestAnimationFrame을 사용하여 브라우저 렌더링 주기에 맞춰 실행
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > 0;
      // 상태가 실제로 변경될 때만 업데이트
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    });
  }, [isScrolled]);

  useEffect(() => {
    // 초기 로드 시 스크롤 상태 확인
    handleScroll();

    // 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={styles.container({ isScrolled })}>
      <div className={styles.inner}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
