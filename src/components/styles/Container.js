import styled from 'styled-components';
import { mq, spacing } from './theme';

const Container = styled.div`
  padding-left: ${spacing.s}rem;
  padding-right: ${spacing.s}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    max-width: ${mq.desktop.large};
    margin: 0 auto;
  }
`;

export default Container;
