import { vars } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: vars.color.gray,
  },
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '200px',
});

export const profileImageContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '140px',
  height: '140px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#90cdf4',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: `0 0 0 5px ${vars.color.success}`,
});
export const profileImageInner = style({
  width: '100px',
  height: '100%',
  transform: 'translate(5px,30px)',
  borderRadius: '50%',
  position: 'relative',
});

export const nameContainer = style({
  marginTop: '20px',
});
export const name = style({
  fontSize: '14px',
  fontWeight: 700,
});

export const iconContainer = style({
  display: 'flex',
  marginTop: '20px',
  gap: '10px',
});
