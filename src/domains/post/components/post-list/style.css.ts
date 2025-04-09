import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridColumnGap: '32px',
    rowGap: '24px',
    marginLeft: 'auto',
    marginRight: 'auto',
    gridAutoRows: '10px',
    alignItems: 'start',
    width: '100%',
    '@media': {
      '(max-width: 700px)': {
        gridAutoRows: '0',
        rowGap: '32px',
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
    },
  },
  variants: {
    mounted: {
      true: {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity .2s ease-in-out .3s, transform .5s ease-in-out .3s',
        '@media': {
          '(max-width: 700px)': {
            gridAutoRows: 'auto',
          },
        },
      },
      false: {
        gridAutoRows: 'auto',
        opacity: 0,
        transform: 'translateY(32px)',
      },
    },
  },
});
