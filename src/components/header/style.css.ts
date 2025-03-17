import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    width: '100%',
    height: '72px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: vars.color.background,
  },
  variants: {
    isScrolled: {
      true: {
        borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
      },
    },
  },
});

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 48px',
  height: '100%',
  backdropFilter: 'blur(10px)',
  '@media': {
    '(max-width: 768px)': {
      padding: '0 32px',
    },
  },
});

export const logo = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: 1.55,
  position: 'relative',
  display: 'flex',
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
  // selectors: {
  //   '&:hover::after': {
  //     transform: 'scaleX(1)',
  //     transformOrigin: 'bottom left',
  //   },
  // },
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
