import { vars } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  padding: '4px',
  borderRadius: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.success,
  },
});
