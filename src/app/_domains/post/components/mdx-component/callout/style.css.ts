import { vars } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: '8px',
  fontSize: '1rem',
  fontWeight: 600,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
});

export const primary = style({
  display: 'flex',
  backgroundColor: '#d4e4f0',
  wordBreak: 'keep-all',
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '1rem 0 2rem 0',
  gap: '10px',
  maxWidth: '640px',
  marginInline: 'auto',
});

export const caution = style({
  display: 'flex',
  backgroundColor: '#f0d9cc',
  wordBreak: 'keep-all',
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '1rem 0 2rem 0',
  gap: '10px',
  maxWidth: '640px',
  marginInline: 'auto',
});

export const warn = style({
  display: 'flex',
  backgroundColor: '#f7ebc9',
  wordBreak: 'keep-all',
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '1rem 0 2rem 0',
  gap: '10px',
  maxWidth: '640px',
  marginInline: 'auto',
});

export const note = style({
  display: 'flex',
  backgroundColor: vars.color.info,
  wordBreak: 'keep-all',
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '1rem 0 2rem 0',
  gap: '10px',
  maxWidth: '640px',
  marginInline: 'auto',
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const contentContainer = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
});

export const children = style({
  fontSize: '1rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
});
