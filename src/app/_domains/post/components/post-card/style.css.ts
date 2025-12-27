import { vars } from '@/app/_styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const slideFadeIn = keyframes({
  '0%': {
    opacity: 0,
    boxShadow: 'none',
    transform: 'scale(1) translateY(15vh)',
  },
});

export const container = style({
  position: 'relative',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  display: 'block',
  overflow: 'hidden',
  gridColumnEnd: 'span 4',
  selectors: {
    '&:hover': {
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
    },
  },
  '@media': {
    '(max-width: 1024px)': {
      gridColumnEnd: 'span 6',
    },
    '(prefers-reduced-motion: no-preference)': {
      '@supports': {
        '(animation-timeline: view())': {
          animation: `${slideFadeIn} both`,
          animationTimeline: 'view()',
          animationRange: 'contain -60% contain 50%',
        },
      },
    },
  },
});

export const postCardImage = style({
  aspectRatio: '4/3',
  position: 'relative',
  '@media': {
    '(max-width: 700px)': {
      aspectRatio: '16/9',
    },
  },
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
      transform: 'translateY(-2px)',
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
  color: vars.color.gray,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const title = style({
  fontWeight: 700,
  fontSize: '20px',
});

export const tagContainer = style({
  display: 'flex',
  flex: 1,
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
  gap: '16px',
  padding: '32px',
});

export const infoContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
