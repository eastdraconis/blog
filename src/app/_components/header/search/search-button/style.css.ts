import { style } from '@vanilla-extract/css';

export const container = style({
  width: '180px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 8px',
  borderRadius: '12px',
  border: '2px solid transparent',
  backgroundColor: 'white',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#b6d0eb',
  },
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
});

export const text = style({
  fontSize: '14px',
  fontWeight: '500',
});

export const shortcut = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  marginLeft: '4px',
});

export const shortcutKey = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '18px',
  height: '18px',
  padding: '0 4px',
  fontSize: '11px',
  fontWeight: '500',
  lineHeight: 1,
  color: '#6a6c6e',
  backgroundColor: '#f5f5f5',
  border: '1px solid #d1d1d1',
  borderRadius: '4px',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
});
