import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const searchResultItem = style({
  marginBottom: '12px',
  padding: '12px 16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  backgroundColor: 'white',
  borderRadius: '8px',
  zIndex: 1000,
  selectors: {
    '&[aria-focused="true"]': {
      backgroundColor: vars.color.success,
    },
  },
});

export const resultTitle = style({
  fontSize: '16px',
  fontWeight: '600',
});

export const resultDescription = style({
  fontSize: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const resultMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '12px',
});

export const resultTags = style({
  display: 'flex',
  gap: '4px',
});

export const resultTag = style({
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: '#f2f4f8',
  fontSize: '12px',
});

export const selectedItem = style({
  backgroundColor: `${vars.color.success} !important`,
});
