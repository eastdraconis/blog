import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#1C1C22',
  padding: '60px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const copyrightWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const copyrightText = style({
  fontSize: '14px',
  color: '#ffffff',
});

export const footerActions = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
});
