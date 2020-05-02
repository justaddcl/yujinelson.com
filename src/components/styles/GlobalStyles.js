import { createGlobalStyle } from 'styled-components';
import 'reset-css';
import { colors, fonts } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.purple[800]};
    color: ${colors.grey[300]};
    font-family: ${fonts.family.sourceCodePro};
  }
`;

export default GlobalStyles;
