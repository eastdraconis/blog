import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: ['.next/**', 'node_modules/**'],
  outdir: 'styled-system',
  theme: {
    extend: {
      tokens: {
        colors: {
          background: { value: '#faf9f5' },
          text: { value: '#141413' },
          gray: { value: '#6a6c6e' },
          caution: { value: '#f0d9cc' },
          warn: { value: '#f7ebc9' },
          info: { value: '#e5e4df' },
          success: { value: '#b6d0eb' },
        },
      },
      keyframes: {
        searchModalFadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        searchModalSlideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px) scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        postCardSlideFadeIn: {
          '0%': {
            opacity: '0',
            boxShadow: 'none',
            transform: 'scale(1) translateY(15vh)',
          },
        },
      },
    },
  },
});
