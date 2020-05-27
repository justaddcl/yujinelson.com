import { createGlobalStyle } from 'styled-components';
import 'reset-css';
import { colors, fonts, mq } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.purple[800]};
    color: ${colors.grey[300]};
    font-family: ${fonts.family.proximaNova};
    font-size: ${fonts.size.mobile}px;

    @media screen and (min-width: ${mq.desktop.small}) {
      font-size: ${fonts.size.desktop}px;
    }

    &.menu-is-open {
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
