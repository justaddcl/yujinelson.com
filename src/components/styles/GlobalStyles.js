import { createGlobalStyle } from 'styled-components';
import 'reset-css';
import 'normalize.css';
import theme, { colors, fonts } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url("https://use.typekit.net/xoo3bkz.css");
  @import url("https://use.typekit.net/kum8wap.css");

  body {
    background-color: ${colors.purple[800]};
    color: ${colors.grey[300]};
    font-family: ${fonts.family.sourceCodePro};
  }
`;

export default GlobalStyles;
