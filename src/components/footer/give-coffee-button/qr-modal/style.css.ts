import { style } from '@vanilla-extract/css';

export const dimmed = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  zIndex: 100,
});
export const modalContainer = style({
  width: '300px',

  padding: '36px',
  backgroundColor: 'white',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  zIndex: 200,
  borderRadius: '8px',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
export const title = style({
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
});

export const qrInnerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});
export const qrImageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const qrTitle = style({
  fontSize: '14px',
  fontWeight: 'bold',
});

export const ci = style({
  width: '48px',
  height: '48px',
});

export const qrContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
