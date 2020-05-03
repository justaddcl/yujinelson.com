import { createGlobalStyle } from 'styled-components';
import 'reset-css';
import { colors, fonts } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.purple[800]};
    color: ${colors.grey[300]};
    font-family: ${fonts.family.sourceCodePro};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
