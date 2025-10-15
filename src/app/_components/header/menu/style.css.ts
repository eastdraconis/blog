import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
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
