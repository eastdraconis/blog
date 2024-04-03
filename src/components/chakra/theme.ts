import { extendTheme } from '@chakra-ui/react';

const style = {
  styles: {
    global: {
      '.gatsby-resp-image-figcaption': {
        textAlign: 'center',
        marginTop: '10px',
        color: 'gray.500',
      },
    },
  },
  colors: {
    gray: {
      800: '#17171B',
    },
  },
  fonts: {
    body: `'Spoqa Han Sans', 'Spoqa Han Sans Neo', 'sans-serif'`,
    html: `'Spoqa Han Sans', 'Spoqa Han Sans Neo', 'sans-serif'`,
    heading: `'Spoqa Han Sans', 'Spoqa Han Sans Neo', 'sans-serif'`,
  },
  breakpoints: {
    sm: '320px', // 320px ~ 768px
    md: '768px', // 768px ~ 960px
    lg: '960px', // 960px ~
    xl: '1180px',
  },
};

const theme = extendTheme(style);
export default theme;
