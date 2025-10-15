import { vars } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    cursor: 'pointer',
    borderRadius: '8px',
    padding: '4px 8px',
    width: 'fit-content',
    display: 'flex',
    gap: '4px',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.success,
      },
      false: {
        backgroundColor: vars.color.info,
        ':hover': {
          backgroundColor: '#d7d6d2',
        },
      },
    },
  },
});

export const tag = style({
  fontSize: '12px',
  fontWeight: 500,
});

export const closeIcon = style({
  width: '12px',
});
