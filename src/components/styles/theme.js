import colors from './colors';
import fonts from './fonts';
import padding from './padding';
import './icons';

const theme = {
  colors,
  fonts,
  mq: {
    desktop: {
      small: '1024px',
    },
  },
  padding,
  sizes: {
    desktop: {
      maxWidth: '1540px',
    },
  },
};

export default theme;
