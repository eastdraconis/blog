import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '42px',
});

export const tagContainer = style({
  display: 'flex',
  gap: '8px',
});

export const tag = style({
  fontSize: '0.75rem',
  padding: '0 8px 2px',
  border: '1px solid',
  borderColor: vars.color.text,
  borderRadius: '8px',
});

export const title = style({
  textAlign: 'center',
  textWrap: 'pretty',
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: 1.55,
  color: vars.color.text,
});

export const additionalInfo = style({
  display: 'flex',
  gap: '16px',
});

export const date = style({
  fontSize: '1rem',
  color: vars.color.gray,
});

export const readingTime = style({
  fontSize: '1rem',
  color: vars.color.gray,
});
