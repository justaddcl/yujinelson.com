import colors from './colors';
import fonts from './fonts';
import mq from './mq';
import padding from './padding';
import './icons';

const theme = {
  colors,
  fonts,
  mq,
  padding,
  sizes: {
    desktop: {
      maxWidth: '1540px',
    },
  },
};

export default theme;
export { colors, fonts, mq, padding };
