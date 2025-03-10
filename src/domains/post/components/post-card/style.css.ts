import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  display: 'block',
  overflow: 'hidden',
  '@media': {
    '(max-width: 700px)': {
      gridColumnEnd: 'auto',
    },
  },
  gridColumnEnd: 'span 6',
});

export const postCardImage = style({
  aspectRatio: '4/3',
  position: 'relative',
});
export const imageWrapper = style({
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  paddingBottom: 0,
  display: 'inline-block',
  overflow: 'hidden',
});

export const image = style({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'all 0.3s ease-in-out',
  selectors: {
    [`${container}:hover &`]: {
      transform: 'scale(1.2)',
    },
  },
});

export const dateWrapper = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'rgba(0, 0, 0, .5)',
  padding: '4px 8px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const date = style({
  fontSize: '12px',

  // color: '#ffffff',
});

export const title = style({
  fontWeight: 700,
  fontSize: '20px',
});

export const tagContainer = style({
  display: 'flex',
  gap: '8px',
});

export const tag = style({
  padding: '4px 8px',
  fontSize: '12px',
  borderRadius: '8px',
  background: '#f2f3f6',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '32px',
});
