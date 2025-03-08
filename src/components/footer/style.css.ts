import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '60px 0',
  backgroundColor: vars.color.info,
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
  color: '#666',
});

export const footerActions = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
});
