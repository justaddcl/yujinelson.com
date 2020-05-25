import colors from './colors';
import fonts from './fonts';
import mq from './mq';
import spacing from './spacing';
import './icons';

const theme = {
  colors,
  fonts,
  mq,
  sizes: {
    desktop: {
      maxWidth: '1540px',
    },
  },
  spacing,
};

export default theme;
export { colors, fonts, mq, spacing };
