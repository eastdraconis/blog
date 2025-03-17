import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.color.background,
  margin: 'auto',
  position: 'relative',
  '@media': {
    '(max-width:768px)': {
      padding: '0 32px',
      paddingTop: '32px',
      maxWidth: `calc(900px + ${32 * 2}px)`,
    },
    '(min-width:768px)': {
      padding: '0 64px',
      paddingTop: '64px',
      maxWidth: `calc(900px + ${64 * 2}px)`,
    },
  },
});

export const noise = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/noise.png)',
  backgroundRepeat: 'repeat',
  opacity: 0.7,
});
