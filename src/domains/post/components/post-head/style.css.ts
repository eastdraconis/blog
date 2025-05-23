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
  padding: '2px 8px',
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
  gap: '8px',
});

export const date = style({
  fontSize: '1rem',
  color: vars.color.gray,
});

export const readingTime = style({
  fontSize: '1rem',
  color: vars.color.gray,
});

export const separatorCircle = style({
  color: vars.color.gray,
  borderRadius: '50%',
  backgroundColor: vars.color.gray,
  width: '4px',
  height: '4px',
  margin: 'auto 0',
});
