import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

const pretendard = 'Pretendard Variable';

// Reset box-sizing
globalStyle('*, *::before, *::after', {
  fontFamily: `var(--font-pretendard, ${pretendard}), -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif`,
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'black',
  color: vars.color.text,
});

// Reset body
globalStyle('body', {
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: vars.color.background,
  lineHeight: 'inherit',
  WebkitFontSmoothing: 'antialiased',
});

// Reset images and videos
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('img', {
  borderStyle: 'none',
});

globalStyle(
  "button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button",
  {
    appearance: 'button',
  },
);

globalStyle('button, input, optgroup, select, textarea, ::file-selector-button', {
  font: 'inherit',
  fontFeatureSettings: 'inherit',
  fontVariationSettings: 'inherit',
  letterSpacing: 'inherit',
  color: 'inherit',
  background: 'transparent',
});
// Reset form elements
globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

// Reset typography
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

// Reset list styles
globalStyle('ul, ol, menu', {
  listStyle: 'none',
});

// Reset links
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
