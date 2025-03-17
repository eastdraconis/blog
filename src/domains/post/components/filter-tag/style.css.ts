import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: '28px',
  fontWeight: 'bold',
});

export const tagContainer = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
});
