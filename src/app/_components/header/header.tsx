'use client';

import { Logo } from './logo';
import { useEffect, useState, useCallback } from 'react';
import { Menu } from './menu';
import { css } from '../../../../styled-system/css';

const container = (isScrolled: boolean) =>
  css({
    width: '100%',
    height: '72px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'var(--colors-background)',
    ...(isScrolled
      ? {
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
        }
      : {}),
  });

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
    <header className={container(isScrolled)}>
      <div className={css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 48px',
  height: '100%',
  backdropFilter: 'blur(10px)',
  '@media (max-width: 768px)': {
    padding: '0 32px',
  },
})}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
