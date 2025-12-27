import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#faf9f5',
    text: '#141413',
    gray: '#6a6c6e',
    caution: '#f0d9cc',
    warn: '#f7ebc9',
    info: '#e5e4df',
    success: '#b6d0eb',
  },
});
