import { vars } from '@/app/_styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

// 오버레이 페이드 인 애니메이션
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

// 모달 컨테이너 슬라이드 + 스케일 애니메이션
const slideUpAndScale = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-20px) scale(0.95)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

export const modalOverlay = style({
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
  animation: `${fadeIn} 0.2s ease-out`,
});

export const modalContainer = style({
  width: '100%',
  maxWidth: '600px',
  backgroundColor: vars.color.background,
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100dvh - 100px)',
  overflow: 'hidden',
  zIndex: 1000,
  animation: `${slideUpAndScale} 0.3s cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const searchInputWrapper = style({
  padding: '16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const searchInput = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  backgroundColor: 'transparent',
  padding: '8px 0',
});

export const searchResults = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  maxHeight: '640px',
  '@media': {
    '(max-width: 600px)': {
      maxHeight: '740px',
    },
  },
  padding: '12px',
});

export const searchResultsInner = style({
  paddingBottom: '10px',
  paddingRight: '16px',
  overflow: 'scroll',
});

export const noResults = style({
  padding: '32px 16px',
  textAlign: 'center',
});
