'use client';

import * as styles from './header.css';
import { Logo } from './logo';
import { useEffect, useState, useCallback } from 'react';
import { Menu } from './menu';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    });
  }, [isScrolled]);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

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
