import styled from 'styled-components';
import theme, { mq, spacing } from './theme';

const Container = styled.div`
  padding-left: ${spacing.s}rem;
  padding-right: ${spacing.s}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    max-width: ${theme.sizes.desktop.maxWidth};
    margin: 0 auto;
  }
`;

export default Container;
