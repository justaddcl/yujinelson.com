import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url("https://use.typekit.net/xoo3bkz.css");

  * {
    background-color: ${theme.colors.background};
    color: ${theme.colors.font};
    font-family: ${theme.font.family};
  }
`;

export default GlobalStyles;
