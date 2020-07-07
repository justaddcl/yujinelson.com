import { createGlobalStyle } from 'styled-components';
import 'reset-css';
import { colors, fonts, mq, spacing } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.purple[800]};
    color: ${colors.grey[200]};
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

  p {
    color: ${colors.grey[100]};
    font-size: ${spacing.base}rem;
    line-height: 1.5;
  }

  .token {
    &--purple {
      color: ${colors.tokens.purple};
    }

    &--green {
      color: ${colors.tokens.green};
    }

    &--yellow {
      color: ${colors.tokens.yellow};
    }

    &--blue {
      color: ${colors.tokens.blue};
    }

    &--light-blue {
      color: ${colors.tokens.lightBlue};
    }

    &--teal {
      color: ${colors.tokens.teal};
    }
  }
`;

export default GlobalStyles;
