import { vars } from '@/app/_styles/theme.css';
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
  maxWidth: '700px',
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

export const errorDetails = style({
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f7fafc',
  borderRadius: '0.5rem',
  border: '1px solid #e2e8f0',
  textAlign: 'left',
  overflow: 'auto',
  maxWidth: '100%',
});

export const errorName = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: vars.color.caution,
  marginBottom: '0.5rem',
});

export const errorMessage = style({
  fontSize: '1rem',
  color: vars.color.gray,
  marginBottom: '1rem',
});

export const errorStack = style({
  fontSize: '0.875rem',
  backgroundColor: '#2d3748',
  color: '#e2e8f0',
  padding: '1rem',
  borderRadius: '0.375rem',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
});

export const actions = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const resetButton = style({
  padding: '0.75rem 1.5rem',
  backgroundColor: vars.color.warn,
  color: 'white',
  border: 'none',
  borderRadius: '0.375rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  ':hover': {
    opacity: 0.8,
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
