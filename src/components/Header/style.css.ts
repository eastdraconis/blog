import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '72px',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: vars.color.background,
});

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 48px',
  height: '100%',
});

export const logo = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: 1.55,
  position: 'relative',

  '::after': {
    position: 'absolute',
    content: '""',
    height: '2px',
    bottom: '-1px',
    left: '0',
    width: '100%',
    backgroundColor: 'black',
    transition: 'transform 0.2s ease-out',
    transformOrigin: 'bottom right',
    transform: 'scaleX(0)',
  },
  selectors: {
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
});

export const link = style({
  fontSize: '16px',
  display: 'flex',
  position: 'relative',
  '::after': {
    position: 'absolute',
    content: '""',
    height: '2px',
    bottom: '-1px',
    left: '0',
    width: '100%',
    backgroundColor: 'black',
    transition: 'transform 0.2s ease-out',
    transformOrigin: 'bottom right',
    transform: 'scaleX(0)',
  },
  selectors: {
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
});
