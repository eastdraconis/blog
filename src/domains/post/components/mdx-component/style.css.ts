import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';

export const title1 = style({
  fontSize: '2rem',
  marginTop: '4rem',
  textWrap: 'wrap',
  marginBottom: '2rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
});

export const title2 = style({
  fontSize: '1.75rem',
  marginTop: '4rem',
  textWrap: 'wrap',
  marginBottom: '2rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
});

export const title3 = style({
  fontSize: '1.5rem',
  marginTop: '4rem',
  marginBottom: '2rem',
  textWrap: 'wrap',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
});

export const title4 = style({
  fontSize: '1.25rem',
  marginTop: '4rem',
  textWrap: 'wrap',
  marginBottom: '2rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
});

export const paragraph = style({
  fontSize: '20px',
  textWrap: 'wrap',
  marginBottom: '1rem',
  wordBreak: 'keep-all',
  marginInline: 'auto',
  lineHeight: 1.15,
  maxWidth: '640px',
  selectors: {
    '& + &': {
      marginTop: '1rem',
    },
  },
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const link = style({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: 1.15,
  textDecoration: 'underline',
  position: 'relative',
  ':hover': {
    color: '#71a3c1',
  },
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const linkText = style({
  position: 'relative',
  fontWeight: 'bold',
  '::after': {
    position: 'absolute',
    content: '""',
    height: '1px',
    bottom: '-1px',
    left: '0',
    width: '100%',
    background: 'var(--blue-400)',
    transition: 'transform 0.2s ease-out',
    transformOrigin: 'bottom right',
    transform: 'scaleX(0)',
  },
  selectors: {
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
});

export const hrWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '40px 0',
});

export const hr = style({
  marginTop: '20px',
  marginBottom: '20px',
  borderTop: '1px solid ',
  borderColor: vars.color.text,
});

export const strong = style({
  fontWeight: 700,
});

export const ol = style({
  maxWidth: '640px',
  fontSize: '20px',
  marginTop: '15px',
  marginBottom: '15px',
  marginInline: 'auto',
  listStyleType: 'decimal',
  listStylePosition: 'inside',
  '::marker': {
    fontWeight: 'bold',
  },
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const ul = style({
  maxWidth: '640px',
  fontSize: '20px',
  marginTop: '15px',
  marginBottom: '15px',
  marginInline: 'auto',
  listStyleType: 'disc',
  listStylePosition: 'inside',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const li = style({
  lineHeight: '32px',
});

export const imageContainer = style({
  aspectRatio: '16/9',
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
  height: 'auto',
  width: '100%',
  objectFit: 'cover',
  maxWidth: '900px',
  marginInline: 'auto',
  // position: 'absolute',
  // top: 0,
  // left: 0,
  ':hover': {
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-out',
  },
});

export const code = style({
  padding: '1px 4px',
  borderRadius: '4px',
  backgroundColor: 'rgba(135, 131, 120, .15)',
  fontSize: '1rem',
  textWrap: 'nowrap',
  color: '#a95937',
  fontWeight: 500,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '0.75rem',
    },
  },
});

globalStyle('code[data-line-numbers]', {
  counterReset: 'line',
});

globalStyle('code[data-line-numbers] > [data-line]::before', {
  counterIncrement: 'line',
  content: 'counter(line)',
  display: 'inline-block',
  width: '0.75rem',
  marginRight: '16px',
  textAlign: 'right',
  color: 'gray',
});

globalStyle('pre + figcaption', {
  maxWidth: '640px',
  marginInline: 'auto',
  marginBottom: '2rem',
});

globalStyle('figure >pre', {
  borderRadius: '8px',
  maxWidth: '640px',
  marginInline: 'auto',
  paddingBlock: '16px !important',
  paddingInline: '8px !important',
  overflow: 'auto',
  fontSize: '16px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
    },
  },
});

globalStyle('pre:not(:has(+ figcaption))', {
  marginBottom: '2rem',
});

globalStyle(`${ul} ${ul}`, {
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  paddingLeft: '1.5rem',
  listStyle: 'circle',
});

globalStyle(`${ol} ${ol}`, {
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  listStyle: 'lower-alpha',
});
