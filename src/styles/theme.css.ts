import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#faf9f5',
    text: '#141413',
    gray: '#6a6c6e',
    caution: '#EFBC9B',
    warn: '#e9dbbc',
    info: '#e5e4df',
    success: '#bcd1cb',
  },
});
