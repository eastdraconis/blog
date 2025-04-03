import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '2rem',
  textAlign: 'center',
});

export const content = style({
  maxWidth: '600px',
  width: '100%',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '1rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
});

export const description = style({
  fontSize: '1.25rem',
  marginBottom: '2rem',
  color: vars.color.gray,
  lineHeight: '1.6',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1rem',
    },
  },
});

export const link = style({
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: vars.color.success,
  color: 'white',
  borderRadius: '0.375rem',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'background-color 0.2s ease',
  ':hover': {
    opacity: 0.8,
  },
});
