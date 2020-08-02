import styled from 'styled-components';
import { mq, spacing } from './theme';

const Container = styled.div`
  padding-left: ${spacing.s}rem;
  padding-right: ${spacing.s}rem;

  @supports (padding: max(0px)) {
    padding-left: max(${spacing.s}rem, env(safe-area-inset-left));
    padding-right: max(${spacing.s}rem, env(safe-area-inset-right));
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    max-width: ${mq.desktop.large};
    margin: 0 auto;
  }
`;

export default Container;
