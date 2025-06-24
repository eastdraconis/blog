import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

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
