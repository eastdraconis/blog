import { style } from '@vanilla-extract/css';

export const container = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  padding: '8px 4px',
  borderRadius: '12px',
  border: '2px solid transparent',
  backgroundColor: 'white',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#5d5e58',
  },
});

export const text = style({
  marginRight: '24px',
  fontSize: '14px',
  fontWeight: '500',
});
